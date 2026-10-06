import { SiteNav } from "@/components/site-header";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/data/site";
import { PageTransition } from "@/components/page-transition";

export default function Home() {
  return <PageTransition><div className="page quiet">
    <main id="main" className="home">
      <div className="home-top"><h1 className="home-name">{siteConfig.name}</h1><ThemeToggle /></div>
      <p className="lede">I’m a software engineer in Tokyo. I build product frontends, the backend services behind them, and the infrastructure they run on. Currently at ORCA.</p>
      <p className="home-aside">Before that I did a master’s in computer science at National Tsing Hua University, and physics before that. I’m looking for DevOps, SRE, and backend roles.</p>
      <SiteNav />
      <p className="home-contact"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.socials.github} target="_blank" rel="noreferrer">GitHub</a><a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
    </main>
  </div></PageTransition>;
}
