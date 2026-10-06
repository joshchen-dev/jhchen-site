export function SectionHeading({ title, intro }: { title: string; intro?: string }) { return <div className="measure"><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>; }
