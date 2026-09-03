import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
export type PostMeta = { slug: string; title: string; description: string; date: string; tags: string[]; draft: boolean };
const postsDirectory = path.join(process.cwd(), "content/posts");
export function getAllPosts(includeDrafts = process.env.NODE_ENV !== "production"): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx")).map((file) => { const slug = file.replace(/\.mdx$/, ""); const { data } = matter(fs.readFileSync(path.join(postsDirectory, file), "utf8")); if (!data.title || !data.description || !data.date) throw new Error(`Missing required frontmatter in ${file}`); return { slug, title: String(data.title), description: String(data.description), date: String(data.date), tags: Array.isArray(data.tags) ? data.tags.map(String) : [], draft: Boolean(data.draft) }; }).filter((post) => includeDrafts || !post.draft).sort((a, b) => b.date.localeCompare(a.date));
}
export function getPost(slug: string) { const filename = path.join(postsDirectory, `${slug}.mdx`); if (!fs.existsSync(filename)) return null; const { content, data } = matter(fs.readFileSync(filename, "utf8")); return { meta: { slug, title: String(data.title), description: String(data.description), date: String(data.date), tags: Array.isArray(data.tags) ? data.tags.map(String) : [], draft: Boolean(data.draft) } satisfies PostMeta, content }; }
export function formatDate(date: string) { return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(date)); }
