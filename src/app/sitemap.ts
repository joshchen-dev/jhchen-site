import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/posts";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const now = new Date(); const posts = getAllPosts(false); return [{ url: `${siteConfig.url}/`, lastModified: now }, { url: `${siteConfig.url}/work/`, lastModified: now }, { url: `${siteConfig.url}/projects/`, lastModified: now }, ...(posts.length ? [{ url: `${siteConfig.url}/writing/`, lastModified: now }] : []), ...posts.map((post) => ({ url: `${siteConfig.url}/writing/${post.slug}/`, lastModified: new Date(post.date) }))]; }
