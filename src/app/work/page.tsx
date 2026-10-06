import type { Metadata } from "next";
import { RichText } from "@/components/rich-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { education, jobs, service, skills } from "@/data/site";

export const metadata: Metadata = { title: "Work", description: "Experience, education, and skills.", alternates: { canonical: "/work/" } };

function Span({ start, end }: { start: string; end: string }) { return <span className="when">{start} {end === "now" ? "→ now" : `– ${end}`}</span>; }

export default function WorkPage() {
  return <div className="page tech">
    <SiteHeader current="work" />
    <main id="main" className="tech-main">
      <h1>Work</h1>

      {jobs.map((job) => <article key={job.company} className="panel">
        <header className="panel-head"><h2><b>{job.company}</b> · {job.role} · {job.location}</h2><Span start={job.start} end={job.end} /></header>
        <p className="panel-row muted">{job.summary}</p>
        {job.groups.map((group) => <div key={group.area} className="panel-row split"><h3 className="label">{group.area}</h3><ul>{group.items.map((item) => <li key={item}><RichText text={item} /></li>)}</ul></div>)}
      </article>)}

      <section aria-labelledby="education"><h2 id="education" className="section-title">Education</h2>
        <div className="panel">{education.map((item) => <div key={item.school} className="panel-row stacked"><div className="row-head"><span><b>{item.degree}</b> · {item.school} · {item.location}</span><Span start={item.start} end={item.end} /></div><p className="muted">{item.note}</p></div>)}</div>
      </section>

      <section aria-labelledby="service"><h2 id="service" className="section-title">Service</h2>
        <div className="panel">{service.map((item) => <div key={item.title} className="panel-row row-head"><span>{item.title}</span><span className="when">{item.when}</span></div>)}</div>
      </section>

      <section aria-labelledby="skills"><h2 id="skills" className="section-title">Skills</h2>
        <dl className="panel">{skills.map((group) => <div key={group.label} className="panel-row split"><dt className="label">{group.label}</dt><dd className="words">{group.items.map((item) => <span key={item}>{item}</span>)}</dd></div>)}</dl>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
