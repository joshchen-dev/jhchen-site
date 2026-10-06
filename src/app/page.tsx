import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { SectionHeading } from "@/components/section-heading";
import { experiences, projects, siteConfig, skillGroups } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts(false).slice(0, 2);

  return <main>
    <section className="shell hero">
      <div className="hero-copy">
        <h1>I build systems teams can trust.</h1>
        <p className="hero-intro measure">Hello, I&apos;m Josh. {siteConfig.intro}</p>
        <p className="hero-links"><a href={`mailto:${siteConfig.email}`}>Start a conversation</a><a href="/josh-chen-resume.pdf" download>Download résumé</a></p>
      </div>
      <aside className="brief" aria-label="Current profile">
        <p className="brief-status">{siteConfig.availability}.</p>
        <dl>
          <div><dt>Focus</dt><dd>Infrastructure, reliability, backend</dd></div>
          <div><dt>Based</dt><dd>Japan, open to worldwide teams</dd></div>
          <div><dt>Approach</dt><dd>Automate the repeatable. Document the surprising.</dd></div>
        </dl>
      </aside>
    </section>

    <section id="work" className="section shell">
      <SectionHeading title="Selected projects" intro="A few places where infrastructure decisions meet product outcomes." />
      <ul className="project-list measure">{projects.map((project) => <li key={project.title}><h3><a href={project.href} target="_blank" rel="noreferrer">{project.title}</a></h3><p>{project.description}</p><p className="meta">{project.tags.join(", ")}</p></li>)}</ul>
    </section>

    <section id="experience" className="section shell">
      <SectionHeading title="Where I’ve contributed" intro="The clearest résumé is a record of ownership, decisions, and results." />
      <div className="experience-list">{experiences.map((item, index) => <article key={`${item.role}-${index}`} className="experience-item"><p className="experience-date">{item.period}</p><div className="measure"><h3>{item.role}, <span className="experience-company">{item.company}</span></h3><p className="experience-summary">{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div>
    </section>

    <section className="section shell skills-section">
      <SectionHeading title="How I can help" intro="Tools change. These are the engineering capabilities I bring to a team." />
      <dl className="skill-list">{skillGroups.map((group) => <div key={group.label}><dt>{group.label}</dt><dd>{group.items.join(", ")}</dd></div>)}</dl>
    </section>

    <section className="section shell writing-section">
      <SectionHeading title="Working notes" intro="Short observations from building, operating, and learning." />
      <div className="post-list">{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
      <p className="mt-8"><Link href="/blog">Browse all notes</Link></p>
    </section>

    <section id="about" className="section shell about-section">
      <div className="measure"><h2>Engineering should make difficult things feel manageable.</h2><div className="about-copy"><p>My work sits where infrastructure, backend engineering, and developer experience meet. I care about clear ownership, useful automation, and software that behaves well when things go wrong.</p><p>Outside the ticket queue, I&apos;m usually learning a new system from first principles or writing down something I wish I had known sooner.</p><p className="placeholder-note">Before launch: replace this section with your own story and interests.</p></div></div>
    </section>
  </main>;
}
