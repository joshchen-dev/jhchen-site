import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";
export function PostCard({ post }: { post: PostMeta }) { return <article className="post-item"><time className="meta" dateTime={post.date}>{formatDate(post.date)}</time><div className="measure"><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><p className="post-tags meta">{post.tags.join(", ")}</p></div></article>; }
