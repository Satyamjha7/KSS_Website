export type SocialPlatform = "facebook" | "instagram" | "linkedin" | "x" | "youtube";

export type SocialUpdate = {
  id: string;
  platform: SocialPlatform;
  title: string;
  excerpt: string;
  publishedAt: string;
  imageUrl: string;
  imageAlt: string;
  postUrl: string;
};

export type SocialUpdatesFeed = {
  generatedAt: string;
  items: SocialUpdate[];
};
