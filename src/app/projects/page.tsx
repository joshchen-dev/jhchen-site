import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Projects", description: "Personal and course projects outside work.", alternates: { canonical: "/projects/" } };

export default function ProjectsPage() {
  return <div className="page tech">
    <SiteHeader current="projects" />
    <main id="main" className="tech-main">
      <h1>Projects</h1>
      <p className="intro muted">Things I’ve built outside work, mostly to learn a tool properly.</p>
      {projects.map((project) => <article key={project.title} className="panel">
        <header className="panel-head"><h2><a href={project.links[0].href} target="_blank" rel="noreferrer"><b>{project.title}</b></a></h2>{"year" in project && <span className="when">{project.year}</span>}</header>
        <p className="panel-row">{project.description}</p>
        <div className="panel-row row-head"><span className="words">{project.stack.map((item) => <span key={item}>{item}</span>)}</span><span className="links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</span></div>
      </article>)}
    </main>
    <SiteFooter />
  </div>;
}
