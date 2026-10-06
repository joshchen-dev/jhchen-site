import { siteConfig } from "@/data/site";
export function SiteFooter() { return <footer className="site-footer"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.socials.github} target="_blank" rel="noreferrer">GitHub</a><a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></footer>; }
