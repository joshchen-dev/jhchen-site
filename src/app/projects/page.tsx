import type { Metadata } from "next";
import { Badge, Button, Card, Container, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { PageTransition } from "@/components/page-transition";
import { RichText } from "@/components/rich-text";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Projects", description: "Riffle and Raidy, projects built outside work.", alternates: { canonical: "/projects/" } };

export default function ProjectsPage() {
  return <PageTransition><Container component="main" id="main" size="md" py={48}>
    <Stack gap="xl" className="enter">
      <div><Title order={1}>Projects</Title><Text c="dimmed" mt="xs">Things I’ve built outside work.</Text></div>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {projects.map((project) => <Card key={project.title} component="article" withBorder shadow="sm" padding="lg">
          <Title order={2} fz="md" fw={700}>{project.title}</Title>
          <Text size="sm" fw={500} mb="xs">{project.tagline}</Text>
          <Text size="sm" c="dimmed" style={{ flex: 1 }}><RichText text={project.description} /></Text>
          <Group gap={6} mt="md">{project.stack.map((item) => <Badge key={item} variant="dot" color="gray" tt="none" size="lg" fz="sm" fw={500}>{item}</Badge>)}</Group>
          <Group mt="md">{project.links.map((link) => <Button key={link.href} component="a" href={link.href} target="_blank" rel="noreferrer" size="xs" variant="light" tt="capitalize" aria-label={`${project.title} ${link.label}`}>{link.label}</Button>)}</Group>
        </Card>)}
      </SimpleGrid>
    </Stack>
  </Container></PageTransition>;
}
