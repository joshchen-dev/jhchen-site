"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, Box, Button, Container, Group } from "@mantine/core";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/data/site";

export function SiteHeader({ showWriting }: { showWriting: boolean }) {
  const pathname = usePathname();
  const links = [{ href: "/", label: "Home" }, { href: "/work/", label: "Work" }, { href: "/projects/", label: "Projects" }];
  if (showWriting) links.push({ href: "/writing/", label: "Writing" });
  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));
  return <Box component="header" className="site-header" h={64}>
    <Container size="md" h="100%"><Group h="100%" justify="space-between" wrap="nowrap">
      <Anchor component={Link} href="/" fw={700} c="var(--mantine-color-text)" underline="never">{siteConfig.name}</Anchor>
      <Group gap="sm" wrap="nowrap">
        {/* Real links styled like a segmented control, so each page keeps its own URL. */}
        <Group component="nav" aria-label="Site" gap={2} p={3} className="segmented-nav" wrap="nowrap">
          {links.map((link) => { const current = isCurrent(link.href); return <Button key={link.href} component={Link} href={link.href} size="compact-sm" variant={current ? "default" : "subtle"} color="gray" aria-current={current ? "page" : undefined} className="segmented-link">{link.label}</Button>; })}
        </Group>
        <ThemeToggle />
      </Group>
    </Group></Container>
  </Box>;
}
