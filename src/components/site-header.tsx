import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

type Section = "work" | "projects" | "writing";

export function SiteNav({ current }: { current?: Section }) {
  const links: { href: string; label: string; section: Section }[] = [{ href: "/work/", label: "Work", section: "work" }, { href: "/projects/", label: "Projects", section: "projects" }];
  if (getAllPosts(false).length > 0) links.push({ href: "/writing/", label: "Writing", section: "writing" });
  return <nav className="site-nav" aria-label="Site">{links.map((link) => <Link key={link.href} href={link.href} aria-current={current === link.section ? "page" : undefined}>{link.label}</Link>)}<a href={siteConfig.resume}>Résumé</a></nav>;
}

export function SiteHeader({ current }: { current?: Section }) { return <header className="site-header"><Link href="/" className="site-name">{siteConfig.name}</Link><div className="site-header-end"><SiteNav current={current} /><ThemeToggle /></div></header>; }
