import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { SectionHeading } from "@/components/section-heading";
import { education, experiences, languages, projects, siteConfig, skillGroups } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts(false).slice(0, 2);

  return <main>
    <section className="shell hero">
      <div className="hero-copy">
        <h1>I’m Jiahui, a software engineer in Tokyo.</h1>
        <p className="hero-intro measure">At ORCA I build an internal React app, the backend services behind it, and the CI, monitoring, and deployment setup that keeps it running. I’m looking for my next role in DevOps, SRE, or backend engineering.</p>
        <p className="hero-links"><a href={`mailto:${siteConfig.email}`}>Email me</a><a href="/josh-chen-resume.pdf" download>Download résumé</a><a href={siteConfig.socials.github} target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
      <aside className="brief" aria-label="Current profile">
        <dl>
          <div><dt>Now</dt><dd>Software Engineer at ORCA</dd></div>
          <div><dt>Based</dt><dd>Tokyo, Japan</dd></div>
          <div><dt>Looking for</dt><dd>{siteConfig.availability}</dd></div>
          <div><dt>Languages</dt><dd>{languages}</dd></div>
        </dl>
      </aside>
    </section>

    <section id="experience" className="section shell">
      <SectionHeading title="Experience" />
      <div className="experience-list">{experiences.map((item) => <article key={`${item.company}-${item.period}`} className="experience-item"><p className="experience-date">{item.period}</p><div className="measure"><h3>{item.role}, <span className="experience-company">{item.company}</span></h3><p className="meta">{item.location}</p><p className="experience-summary">{item.summary}</p>{item.groups.map((group) => <div key={group.label} className="experience-group"><h4>{group.label}</h4><ul>{group.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>)}</div></article>)}</div>
    </section>

    <section id="projects" className="section shell">
      <SectionHeading title="Projects" intro="Things I’ve built outside work, mostly to learn a tool properly." />
      <ul className="project-list measure">{projects.map((project) => <li key={project.title}><h3><a href={project.href} target="_blank" rel="noreferrer">{project.title}</a></h3><p>{project.description}</p><p className="meta">{project.tags.join(", ")}{project.live && <> · <a href={project.live} target="_blank" rel="noreferrer">Live site</a></>}</p></li>)}</ul>
    </section>

    <section id="skills" className="section shell">
      <SectionHeading title="Skills" />
      <dl className="skill-list">{skillGroups.map((group) => <div key={group.label}><dt>{group.label}</dt><dd>{group.items.join(", ")}</dd></div>)}</dl>
    </section>

    {posts.length > 0 && <section id="notes" className="section shell writing-section">
      <SectionHeading title="Notes" />
      <div className="post-list">{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
      <p className="mt-8"><Link href="/blog">All notes</Link></p>
    </section>}

    <section id="about" className="section shell">
      <SectionHeading title="About" />
      <div className="about-copy measure"><p>I started out in physics, with a B.S. in Applied Physics from Tunghai University, and moved into computer science for my master’s at National Tsing Hua University. While there I served as a paper reviewer for NeurIPS 2022, and earlier I was a teaching assistant for calculus.</p><p>Since 2024 I’ve been in Tokyo at ORCA, where the work has ranged from the product UI down to the servers it runs on. I’m also working on my Japanese.</p></div>
      <div className="experience-list">{education.map((item) => <article key={item.school} className="experience-item"><p className="experience-date">{item.period}</p><div className="measure"><h3>{item.degree}, <span className="experience-company">{item.school}</span></h3><p className="meta">{item.location}</p><p className="experience-summary">{item.note}</p></div></article>)}</div>
    </section>
  </main>;
}
