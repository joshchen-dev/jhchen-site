import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";
export const metadata: Metadata = { title: "Writing", description: "Notes on infrastructure, reliability, backend engineering, and software delivery." };
export default function BlogPage() { const posts = getAllPosts(false); return <main className="shell min-h-[70svh] py-20 sm:py-28"><p className="section-kicker">Field notes</p><h1 className="page-title mt-5">Ideas from building<br/><span className="text-muted">and operating software.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-muted">Practical notes on infrastructure, reliability, backend systems, and learning in public.</p><div className="mt-16 border-b border-line">{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div></main>; }
