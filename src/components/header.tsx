import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
export function Header() { return <header className="site-header"><div className="shell flex h-16 items-center justify-between"><Link href="/" className="nameplate" aria-label="CHEN JIAHUI, home">CHEN JIAHUI</Link><nav className="site-nav flex items-center gap-5 text-[.9375rem]" aria-label="Primary navigation"><Link className="hidden sm:block" href="/#work">Work</Link><Link className="hidden sm:block" href="/#experience">Experience</Link><Link href="/blog">Notes</Link><ThemeToggle /></nav></div></header>; }
