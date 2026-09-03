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
    <section className="shell hero-grid min-h-[calc(100svh-4rem)] py-20 sm:py-28">
      <div className="col-span-full flex items-start justify-between"><p className="eyebrow">Based in Japan · Available worldwide</p><p className="hidden font-mono text-xs text-muted sm:block">Portfolio / 2026</p></div>
      <div className="col-span-full self-center lg:col-span-10">
        <Reveal><p className="mb-5 flex items-center gap-2 text-sm text-muted"><span className="status-dot" />{siteConfig.availability}</p><h1 className="hero-title">Reliable systems.<br/><span className="text-muted">Thoughtful software.</span></h1></Reveal>
        <Reveal delay={0.12} className="mt-8 grid gap-8 sm:grid-cols-2"><p className="max-w-xl text-lg leading-8 text-muted">{siteConfig.intro}</p><div className="flex items-start gap-3 sm:justify-end"><a className="button button-primary" href={`mailto:${siteConfig.email}`}>Get in touch <ArrowUpRight className="size-4" /></a><a className="button" href="/josh-chen-resume.pdf" download>Résumé</a></div></Reveal>
      </div>
      <div className="col-span-full self-end border-t border-line pt-4"><p className="font-mono text-xs text-muted">Scroll to explore <span aria-hidden="true">↓</span></p></div>
    </section>

    <section id="work" className="section shell"><SectionHeading number="01" title="Selected work" intro="Projects that reflect how I think about delivery, resilience, and maintainable systems."/><div className="mt-14 border-b border-line">{projects.map((project, i) => <Reveal key={project.title} delay={i * 0.06}><a href={project.href} target="_blank" rel="noreferrer" className="project-row group"><span className="font-mono text-xs text-muted">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a></Reveal>)}</div></section>

    <section id="experience" className="section shell"><SectionHeading number="02" title="Experience" intro="A placeholder career timeline ready for your real roles, outcomes, and scale."/><div className="mt-14 border-b border-line">{experiences.map((item, i) => <Reveal key={`${item.role}-${i}`}><article className="experience-row"><p className="font-mono text-xs text-muted">{item.period}</p><div><p className="eyebrow mb-2">{item.company}</p><h3>{item.role}</h3><p className="mt-3 text-muted">{item.summary}</p><ul className="mt-4 space-y-2 text-sm text-muted">{item.highlights.map((highlight) => <li className="flex gap-3" key={highlight}><span className="text-accent">↳</span>{highlight}</li>)}</ul></div></article></Reveal>)}</div></section>

    <section className="section shell"><SectionHeading number="03" title="Toolbox" intro="Technologies are tools. The goal is always safer delivery and simpler operations."/><div className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group) => <div className="border-b border-r border-line p-6" key={group.label}><h3 className="font-mono text-xs uppercase tracking-widest text-accent">{group.label}</h3><ul className="mt-5 space-y-2 text-sm">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>

    <section className="section shell"><SectionHeading number="04" title="Notes from the field" intro="Writing about infrastructure, software delivery, and lessons hidden in production work."/><div className="mt-14 border-b border-line">{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div><Link className="link-arrow mt-7 inline-flex text-sm" href="/blog">All writing <ArrowUpRight className="size-4" /></Link></section>

    <section id="about" className="section shell"><SectionHeading number="05" title="A little about me"/><Reveal className="mt-14 grid gap-8 lg:grid-cols-[1fr_2fr]"><p className="eyebrow">Engineer · Operator · Learner</p><div className="space-y-5 text-xl leading-8 text-muted sm:text-2xl sm:leading-10"><p>I enjoy turning complex operational problems into calm, understandable systems.</p><p className="text-fg">My work sits where infrastructure, backend engineering, and developer experience meet. I care about clear ownership, useful automation, and software that behaves well when things go wrong.</p><p className="text-sm leading-6">TODO: Replace this introduction with your story, current focus, and what you are looking for next.</p></div></Reveal></section>
  </main>;
}
