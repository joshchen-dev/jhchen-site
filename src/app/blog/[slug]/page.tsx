import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";

export const dynamicParams = false;
export function generateStaticParams() { return getAllPosts(false).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> { const { slug } = await params; const post = getPost(slug); if (!post) return {}; return { title: post.meta.title, description: post.meta.description, alternates: { canonical: `/blog/${slug}` } }; }
export default async function PostPage({ params }: PageProps<"/blog/[slug]">) { const { slug } = await params; const post = getPost(slug); if (!post || post.meta.draft) notFound(); return <main className="shell py-20 sm:py-28"><article className="mx-auto max-w-3xl"><Link href="/blog" className="nav-link font-mono text-xs text-muted">← All writing</Link><header className="mt-10 border-b border-line pb-10"><div className="flex flex-wrap gap-3 text-xs text-muted"><time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time><span>·</span><span>{post.meta.tags.join(" · ")}</span></div><h1 className="page-title mt-5">{post.meta.title}</h1><p className="mt-5 text-lg leading-8 text-muted">{post.meta.description}</p></header><div className="prose"><MDXRemote source={post.content} /></div></article></main>; }
