import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container, Text, Title, Typography } from "@mantine/core";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import { PageTransition } from "@/components/page-transition";

export const dynamicParams = false;
// `output: "export"` needs at least one route; with nothing published, emit a draft slug, which renders as not found.
export function generateStaticParams() { const published = getAllPosts(false); return (published.length ? published : getAllPosts(true).slice(0, 1)).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps<"/writing/[slug]">): Promise<Metadata> { const { slug } = await params; const post = getPost(slug); if (!post || post.meta.draft) return {}; return { title: post.meta.title, description: post.meta.description, alternates: { canonical: `/writing/${slug}/` } }; }

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || post.meta.draft) notFound();
  return <PageTransition><Container component="main" id="main" size="sm" py={48}>
    <article className="enter">
      <Title order={1}>{post.meta.title}</Title>
      <Text size="sm" c="dimmed" mt="xs" mb="xl"><time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time></Text>
      <Typography><MDXRemote source={post.content} /></Typography>
    </article>
  </Container></PageTransition>;
}
