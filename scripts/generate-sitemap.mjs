import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const configuredSiteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || "https://kosisevasadan.org";
const siteUrl = configuredSiteUrl.replace(/\/$/, "");

const routes = [
  "/",
  "/who-we-are",
  "/team",
  "/values",
  "/policies",
  "/financials",
  "/annual-report",
  "/fcra",
  "/organization-docs",
  "/contact",
  "/careers",
  "/women-empowerment",
  "/health-nutrition",
  "/watsan",
  "/education-awareness",
  "/child-rights",
  "/drr-climate",
  "/skills-development",
  "/environment",
  "/sustainable-agriculture",
  "/livelihood-promotion",
  "/gallery",
  "/stories",
  "/paper-clips",
  "/updates",
  "/donation-features",
  "/privacy-policy",
  "/terms-conditions",
  "/copyright",
];

const today = new Date().toISOString().slice(0, 10);
const xmlEscape = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${xmlEscape(`${siteUrl}${route}`)}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const publicDirectory = resolve(rootDirectory, "public");
await mkdir(publicDirectory, { recursive: true });
await Promise.all([
  writeFile(resolve(publicDirectory, "sitemap.xml"), sitemap),
  writeFile(resolve(publicDirectory, "robots.txt"), robots),
]);

console.log(`Generated SEO crawl files for ${siteUrl}`);
