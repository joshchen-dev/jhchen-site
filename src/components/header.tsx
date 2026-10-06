import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/posts";
export function Header() { const hasPosts = getAllPosts(false).length > 0; return <header className="site-header"><div className="shell flex h-16 items-center justify-between"><Link href="/" className="nameplate" aria-label={`${siteConfig.name}, home`}>{siteConfig.name}</Link><nav className="site-nav flex items-center gap-5 text-[.9375rem]" aria-label="Primary navigation"><Link className="hidden sm:block" href="/#experience">Experience</Link><Link className="hidden sm:block" href="/#projects">Projects</Link><Link href="/#about">About</Link>{hasPosts && <Link href="/blog">Notes</Link>}<ThemeToggle /></nav></div></header>; }
