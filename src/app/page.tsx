import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experiences, projects, siteConfig, skillGroups } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts(false).slice(0, 2);

  return <main>
    <section className="shell hero">
      <div className="hero-copy">
        <p className="section-kicker">Hello, I&apos;m Josh.</p>
        <Reveal><h1>I build systems<br/>teams can trust.</h1></Reveal>
        <p className="hero-intro">{siteConfig.intro}</p>
        <div className="hero-actions"><a className="button button-primary" href={`mailto:${siteConfig.email}`}>Start a conversation <ArrowUpRight className="size-4" /></a><a className="text-link" href="/josh-chen-resume.pdf" download>Download résumé</a></div>
      </div>
      <aside className="brief" aria-label="Current profile">
        <div className="brief-status"><span className="status-dot" /><span>{siteConfig.availability}</span></div>
        <dl>
          <div><dt>Focus</dt><dd>Infrastructure, reliability, backend</dd></div>
          <div><dt>Based</dt><dd>Japan · open to worldwide teams</dd></div>
          <div><dt>Approach</dt><dd>Automate the repeatable. Document the surprising.</dd></div>
        </dl>
      </aside>
    </section>

    <section id="work" className="section shell">
      <SectionHeading number="Work" title="Selected projects" intro="A few places where infrastructure decisions meet product outcomes." />
      <div className="project-list">{projects.map((project, index) => <Reveal key={project.title} delay={index * .08}><a href={project.href} target="_blank" rel="noreferrer" className="project-card group"><div className="project-index">0{index + 1}</div><div className="project-body"><h3>{project.title}</h3><p>{project.description}</p><ul aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div><span className="project-cta">View repository <ArrowUpRight className="size-4" /></span></a></Reveal>)}</div>
    </section>

    <section id="experience" className="section section-tint">
      <div className="shell"><SectionHeading number="Experience" title="Where I’ve contributed" intro="The clearest résumé is a record of ownership, decisions, and results." />
        <div className="experience-list">{experiences.map((item, index) => <article className="experience-item" key={`${item.role}-${index}`}><p className="experience-date">{item.period}</p><div><p className="experience-company">{item.company}</p><h3>{item.role}</h3><p className="experience-summary">{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div>
      </div>
    </section>

    <section className="section shell skills-section">
      <SectionHeading number="Capabilities" title="How I can help" intro="Tools change. These are the engineering capabilities I bring to a team." />
      <div className="skill-list">{skillGroups.map((group, index) => <article key={group.label}><span>0{index + 1}</span><h3>{group.label}</h3><p>{group.items.join(" · ")}</p></article>)}</div>
    </section>

    <section className="section shell writing-section">
      <SectionHeading number="Writing" title="Working notes" intro="Short observations from building, operating, and learning." />
      <div className="post-list">{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
      <Link className="text-link mt-6 inline-flex" href="/blog">Browse all notes <ArrowUpRight className="size-4" /></Link>
    </section>

    <section id="about" className="section shell about-section">
      <p className="section-kicker">About</p>
      <div><h2>Engineering should make<br className="hidden sm:block"/> difficult things feel manageable.</h2><div className="about-copy"><p>My work sits where infrastructure, backend engineering, and developer experience meet. I care about clear ownership, useful automation, and software that behaves well when things go wrong.</p><p>Outside the ticket queue, I&apos;m usually learning a new system from first principles or writing down something I wish I had known sooner.</p><p className="placeholder-note">Before launch: replace this section with your own story and interests.</p></div></div>
    </section>
  </main>;
}
