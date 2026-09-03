import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/posts";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const now = new Date(); return [{ url: siteConfig.url, lastModified: now }, { url: `${siteConfig.url}/blog`, lastModified: now }, ...getAllPosts(false).map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}`, lastModified: new Date(post.date) }))]; }
