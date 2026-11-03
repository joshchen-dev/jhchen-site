import type { Metadata } from "next";
import { Badge, Card, Container, Divider, Group, List, ListItem, SimpleGrid, Stack, Text, Timeline, TimelineItem, Title } from "@mantine/core";
import { PageTransition } from "@/components/page-transition";
import { RichText } from "@/components/rich-text";
import { education, jobs, service, skills } from "@/data/site";

export const metadata: Metadata = { title: "Work", description: "Experience, education, and skills.", alternates: { canonical: "/work/" } };

const span = (start: string, end: string) => `${start} – ${end}`;
function EntryTitle({ title, when }: { title: string; when: string }) { return <Group justify="space-between" gap="xs" wrap="wrap"><Title order={2} fz="md" fw={700}>{title}</Title><Text size="sm" c="dimmed" className="tabular">{when}</Text></Group>; }

export default function WorkPage() {
  return <PageTransition><Container component="main" id="main" size="md" py={48}>
    <Stack gap={0} className="enter">
      <Title order={1} mb="xl">Work</Title>
      <Timeline active={0} bulletSize={20} lineWidth={2}>
        {jobs.map((job) => <TimelineItem key={job.company} title={<EntryTitle title={`${job.role} · ${job.company}`} when={span(job.start, job.end)} />}>
          <Text c="dimmed" size="sm" mt={4}>{job.location} · {job.summary}</Text>
          <Stack gap="sm" mt="md">
            {job.groups.map((group) => <Card key={group.area} withBorder padding="sm"><Text size="sm" fw={600} mb={6} tt="capitalize">{group.area}</Text><List size="sm" spacing={4}>{group.items.map((item) => <ListItem key={item}><RichText text={item} /></ListItem>)}</List></Card>)}
          </Stack>
        </TimelineItem>)}
        {education.map((item) => <TimelineItem key={item.school} title={<EntryTitle title={`${item.degree} · ${item.school}`} when={span(item.start, item.end)} />}><Text c="dimmed" size="sm" mt={4}>{item.location} · {item.note}</Text></TimelineItem>)}
      </Timeline>
      <Divider my={40} />
      <Title order={2} mb="md">Service</Title>
      <Stack gap="xs">{service.map((item) => <Group key={item.title} justify="space-between"><Text>{item.title}</Text><Text size="sm" c="dimmed" className="tabular">{item.when}</Text></Group>)}</Stack>
      <Divider my={40} />
      <Title order={2} mb="md">Skills</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {skills.map((group) => <Card key={group.label} withBorder padding="md"><Text fw={600} mb="xs" tt="capitalize">{group.label}</Text><Group gap={6}>{group.items.map((item) => <Badge key={item} variant="light" color="gray" tt="none" size="lg" fz="sm" fw={500}>{item}</Badge>)}</Group></Card>)}
      </SimpleGrid>
    </Stack>
  </Container></PageTransition>;
}
