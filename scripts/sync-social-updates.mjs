import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const envPath = resolve(rootDir, ".env");
const outputPath = resolve(rootDir, "public", "data", "latest-updates.json");

// Lightweight .env loader to avoid adding a runtime dependency.
if (existsSync(envPath)) {
  const envText = readFileSync(envPath, "utf8");
  for (const line of envText.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [key, ...valueParts] = trimmed.split("=");
    if (!process.env[key]) {
      process.env[key] = valueParts.join("=").trim().replace(/^["']|["']$/g, "");
    }
  }
}

const GRAPH_VERSION = process.env.SOCIAL_GRAPH_API_VERSION || "v20.0";
const MAX_POSTS = Number(process.env.SOCIAL_UPDATES_LIMIT || 6);
const INCLUDE_REPOSTS = process.env.SOCIAL_INCLUDE_REPOSTS === "true";
const FALLBACK_IMAGE = process.env.SOCIAL_FALLBACK_IMAGE || "/images/img1.jpeg";

const stripHtml = (value = "") =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const excerpt = (text = "", maxLength = 170) => {
  const clean = stripHtml(text);
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength).replace(/\s+\S*$/, "")}…`;
};

const titleFromText = (text = "", fallback = "Latest update") => {
  const clean = stripHtml(text);
  if (!clean) return fallback;
  return clean.length > 74 ? `${clean.slice(0, 74).replace(/\s+\S*$/, "")}…` : clean;
};

const readExistingFeed = () => {
  try {
    if (!existsSync(outputPath)) return [];
    const parsed = JSON.parse(readFileSync(outputPath, "utf8"));
    return Array.isArray(parsed.items) ? parsed.items : [];
  } catch {
    return [];
  }
};

const fetchJson = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`${response.status} ${response.statusText}: ${body.slice(0, 180)}`);
  }
  return response.json();
};

const normalizeUrl = (url) => url || "#";

const fetchFacebookPosts = async () => {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const token = process.env.FACEBOOK_ACCESS_TOKEN;
  if (!pageId || !token) return [];

  const fields = [
    "id",
    "message",
    "created_time",
    "permalink_url",
    "full_picture",
    "attachments{media,type,title,url,description}",
  ].join(",");
  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${pageId}/posts?limit=${MAX_POSTS}&fields=${encodeURIComponent(fields)}&access_token=${encodeURIComponent(token)}`;
  const data = await fetchJson(url);

  return (data.data || []).map((post) => ({
    id: post.id,
    platform: "facebook",
    title: titleFromText(post.attachments?.data?.[0]?.title || post.message, "Facebook update"),
    excerpt: excerpt(post.message || post.attachments?.data?.[0]?.description || ""),
    publishedAt: post.created_time,
    imageUrl: post.full_picture || post.attachments?.data?.[0]?.media?.image?.src || FALLBACK_IMAGE,
    imageAlt: titleFromText(post.message, "Kosi Seva Sadan Facebook update"),
    postUrl: normalizeUrl(post.permalink_url),
  }));
};

const fetchInstagramPosts = async () => {
  const userId = process.env.INSTAGRAM_USER_ID;
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!userId || !token) return [];

  const fields = "id,caption,media_url,thumbnail_url,permalink,timestamp,media_type";
  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${userId}/media?limit=${MAX_POSTS}&fields=${encodeURIComponent(fields)}&access_token=${encodeURIComponent(token)}`;
  const data = await fetchJson(url);

  return (data.data || []).map((post) => ({
    id: post.id,
    platform: "instagram",
    title: titleFromText(post.caption, "Instagram update"),
    excerpt: excerpt(post.caption || ""),
    publishedAt: post.timestamp,
    imageUrl: post.thumbnail_url || post.media_url || FALLBACK_IMAGE,
    imageAlt: titleFromText(post.caption, "Kosi Seva Sadan Instagram update"),
    postUrl: normalizeUrl(post.permalink),
  }));
};

const fetchLinkedInPosts = async () => {
  const organizationId = process.env.LINKEDIN_ORGANIZATION_ID;
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  if (!organizationId || !token) return [];

  const author = encodeURIComponent(`urn:li:organization:${organizationId}`);
  const url = `https://api.linkedin.com/rest/posts?q=author&author=${author}&count=${MAX_POSTS}&sortBy=LAST_MODIFIED`;
  const data = await fetchJson(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "LinkedIn-Version": process.env.LINKEDIN_API_VERSION || "202405",
      "X-Restli-Protocol-Version": "2.0.0",
    },
  });

  return (data.elements || []).map((post) => {
    const commentary = post.commentary || "";
    const createdAt = post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString();
    const postId = String(post.id || "").split(":").pop();

    return {
      id: post.id || postId,
      platform: "linkedin",
      title: titleFromText(commentary, "LinkedIn update"),
      excerpt: excerpt(commentary),
      publishedAt: createdAt,
      imageUrl: FALLBACK_IMAGE,
      imageAlt: titleFromText(commentary, "Kosi Seva Sadan LinkedIn update"),
      postUrl: postId ? `https://www.linkedin.com/feed/update/${post.id}` : "https://www.linkedin.com/company/",
    };
  });
};

const fetchXPosts = async () => {
  const bearer = process.env.X_BEARER_TOKEN;
  const username = process.env.X_USERNAME;
  if (!bearer || !username) return [];

  const user = await fetchJson(`https://api.twitter.com/2/users/by/username/${encodeURIComponent(username)}`, {
    headers: { Authorization: `Bearer ${bearer}` },
  });
  const userId = user.data?.id;
  if (!userId) return [];

  const exclude = INCLUDE_REPOSTS ? "replies" : "retweets,replies";
  const url =
    `https://api.twitter.com/2/users/${userId}/tweets?max_results=${Math.max(5, MAX_POSTS)}` +
    `&exclude=${exclude}&tweet.fields=created_at,attachments&expansions=attachments.media_keys&media.fields=url,preview_image_url,alt_text`;
  const data = await fetchJson(url, {
    headers: { Authorization: `Bearer ${bearer}` },
  });

  const mediaByKey = new Map((data.includes?.media || []).map((media) => [media.media_key, media]));

  return (data.data || []).slice(0, MAX_POSTS).map((tweet) => {
    const mediaKey = tweet.attachments?.media_keys?.[0];
    const media = mediaKey ? mediaByKey.get(mediaKey) : null;

    return {
      id: tweet.id,
      platform: "x",
      title: titleFromText(tweet.text, "X update"),
      excerpt: excerpt(tweet.text),
      publishedAt: tweet.created_at,
      imageUrl: media?.url || media?.preview_image_url || FALLBACK_IMAGE,
      imageAlt: media?.alt_text || titleFromText(tweet.text, "Kosi Seva Sadan X update"),
      postUrl: `https://x.com/${username}/status/${tweet.id}`,
    };
  });
};

const fetchYouTubePosts = async () => {
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!channelId) return [];

  const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`);
  if (!response.ok) throw new Error(`YouTube RSS failed: ${response.status}`);
  const xml = await response.text();
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, MAX_POSTS);

  return entries.map(([, entry]) => {
    const get = (pattern) => stripHtml(entry.match(pattern)?.[1] || "");
    const id = get(/<yt:videoId>(.*?)<\/yt:videoId>/);
    const title = get(/<title>([\s\S]*?)<\/title>/);
    const publishedAt = get(/<published>(.*?)<\/published>/);
    const description = get(/<media:description>([\s\S]*?)<\/media:description>/);
    const thumbnail = entry.match(/<media:thumbnail[^>]+url="([^"]+)"/)?.[1];

    return {
      id,
      platform: "youtube",
      title: title || "YouTube update",
      excerpt: excerpt(description || title),
      publishedAt,
      imageUrl: thumbnail || FALLBACK_IMAGE,
      imageAlt: title || "Kosi Seva Sadan YouTube update",
      postUrl: id ? `https://www.youtube.com/watch?v=${id}` : "https://www.youtube.com/",
    };
  });
};

const providers = [
  ["facebook", fetchFacebookPosts],
  ["instagram", fetchInstagramPosts],
  ["linkedin", fetchLinkedInPosts],
  ["x", fetchXPosts],
  ["youtube", fetchYouTubePosts],
];

const run = async () => {
  const existingItems = readExistingFeed();
  const allItems = [];

  for (const [name, provider] of providers) {
    try {
      const items = await provider();
      allItems.push(...items);
      if (items.length) console.log(`Fetched ${items.length} ${name} update(s).`);
    } catch (error) {
      console.warn(`Skipping ${name}: ${error.message}`);
    }
  }

  const merged = allItems.length ? allItems : existingItems;
  const unique = Array.from(new Map(merged.map((item) => [`${item.platform}-${item.id}`, item])).values());
  const latest = unique
    .filter((item) => item.title && item.publishedAt)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, MAX_POSTS);

  const feed = {
    generatedAt: new Date().toISOString(),
    items: latest,
  };

  writeFileSync(outputPath, `${JSON.stringify(feed, null, 2)}\n`, "utf8");
  console.log(`Wrote ${latest.length} update(s) to ${outputPath}`);
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
