import { Badge, Button, Container, Group, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { PageTransition } from "@/components/page-transition";
import { siteConfig } from "@/data/site";

const facts = [["Now", "Software Engineer, ORCA"], ["Based", "Tokyo, Japan"], ["Languages", "中文 · English · 日本語"]];

export default function Home() {
  return <PageTransition><Container component="main" id="main" size="sm" py={64}>
    <Stack gap="lg" className="enter">
      <Badge variant="default" size="xl" tt="none" fz="sm" fw={500} w="fit-content">Open to DevOps, SRE, and backend roles</Badge>
      <Title order={1} fz={{ base: 34, sm: 44 }} lh={1.15}>I’m Jiahui, a software engineer in Tokyo.</Title>
      <Text size="lg" c="dimmed">I build product frontends, the backend services behind them, and the infrastructure they run on. Currently at ORCA. Before that, a master’s in computer science at National Tsing Hua University.</Text>
      <Group>
        <Button component="a" href={`mailto:${siteConfig.email}`}>Email me</Button>
        <Button component="a" href={siteConfig.resume} variant="default">Résumé</Button>
        <Button component="a" href={siteConfig.socials.github} target="_blank" rel="noreferrer" variant="subtle">GitHub</Button>
      </Group>
      <Paper withBorder p="md" mt="md">
        <SimpleGrid cols={{ base: 1, xs: 3 }} spacing="md">
          {facts.map(([label, value]) => <div key={label}><Text size="xs" tt="uppercase" fw={700} c="dimmed">{label}</Text><Text fw={500}>{value}</Text></div>)}
        </SimpleGrid>
      </Paper>
    </Stack>
  </Container></PageTransition>;
}
