import type { Metadata } from "next";
import { Container, Stack, Text, Title } from "@mantine/core";
import { NextAnchor } from "@/components/next-anchor";
import { PageTransition } from "@/components/page-transition";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Writing", description: "Notes on infrastructure, reliability, and backend engineering.", alternates: { canonical: "/writing/" } };

export default function WritingPage() {
  const posts = getAllPosts(false);
  return <PageTransition><Container component="main" id="main" size="sm" py={48}>
    <Stack gap="xl" className="enter">
      <Title order={1}>Writing</Title>
      {posts.length > 0 ? posts.map((post) => <div key={post.slug}><NextAnchor href={`/writing/${post.slug}/`} fw={600} size="lg">{post.title}</NextAnchor><Text c="dimmed" mt={4}>{post.description}</Text><Text size="sm" c="dimmed" mt={4}>{formatDate(post.date)}</Text></div>) : <Text c="dimmed">Nothing published yet.</Text>}
    </Stack>
  </Container></PageTransition>;
}
