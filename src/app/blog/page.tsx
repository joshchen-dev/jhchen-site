import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";
export const metadata: Metadata = { title: "Writing", description: "Notes on infrastructure, reliability, backend engineering, and software delivery." };
export default function BlogPage() { const posts = getAllPosts(false); return <main className="shell min-h-[70svh] py-16 sm:py-24"><div className="measure"><h1 className="page-title">Ideas from building and operating software.</h1><p className="mt-5 text-lg text-muted">Practical notes on infrastructure, reliability, backend systems, and learning in public.</p></div><div className="post-list mt-14 border-t border-line pt-10">{posts.length > 0 ? posts.map((post) => <PostCard key={post.slug} post={post} />) : <p className="text-muted">Nothing published yet.</p>}</div></main>; }
