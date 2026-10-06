import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";

export const dynamicParams = false;
// `output: "export"` needs at least one route; with nothing published, emit a draft slug, which renders as not found.
export function generateStaticParams() { const published = getAllPosts(false); return (published.length ? published : getAllPosts(true).slice(0, 1)).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps<"/writing/[slug]">): Promise<Metadata> { const { slug } = await params; const post = getPost(slug); if (!post || post.meta.draft) return {}; return { title: post.meta.title, description: post.meta.description, alternates: { canonical: `/writing/${slug}/` } }; }

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || post.meta.draft) notFound();
  return <div className="page quiet">
    <SiteHeader current="writing" />
    <main id="main" className="reading">
      <article>
        <header className="post-head"><h1>{post.meta.title}</h1><p className="small"><time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time></p></header>
        <div className="prose"><MDXRemote source={post.content} /></div>
      </article>
    </main>
    <SiteFooter />
  </div>;
}
