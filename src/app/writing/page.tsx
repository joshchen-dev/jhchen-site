import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Writing", description: "Notes on infrastructure, reliability, and backend engineering.", alternates: { canonical: "/writing/" } };

export default function WritingPage() {
  const posts = getAllPosts(false);
  return <div className="page quiet">
    <SiteHeader current="writing" />
    <main id="main" className="reading">
      <h1>Writing</h1>
      {posts.length > 0 ? <ul className="post-list">{posts.map((post) => <li key={post.slug}><Link href={`/writing/${post.slug}/`}>{post.title}</Link><p>{post.description}</p><time className="small" dateTime={post.date}>{formatDate(post.date)}</time></li>)}</ul> : <p className="small">Nothing published yet.</p>}
    </main>
    <SiteFooter />
  </div>;
}
