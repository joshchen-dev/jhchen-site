export const siteConfig = {
  name: "Josh Chen",
  title: "DevOps, SRE & Backend Engineer",
  email: "josh@joshchen.dev",
  url: "https://joshchen.dev",
  intro: "I build dependable platforms and backend systems that make software easier to ship, observe, and operate.",
  availability: "Open to DevOps, SRE, and backend opportunities",
  socials: {
    github: "https://github.com/joshchen-dev",
    // TODO: Replace with your public LinkedIn profile before launch.
    linkedin: "https://www.linkedin.com/in/replace-me",
  },
};

export const experiences = [
  { period: "20XX — Present", role: "Your current role", company: "Company name", summary: "Replace this with a one-line description of your scope and ownership.", highlights: ["Improved a meaningful reliability or delivery metric by XX%.", "Automated a recurring operational process, saving XX hours per month."] },
  { period: "20XX — 20XX", role: "Previous engineering role", company: "Company name", summary: "Describe the systems, users, and scale you supported.", highlights: ["Delivered a backend or infrastructure project with measurable impact.", "Collaborated across engineering teams to improve production readiness."] },
];

export const skillGroups = [
  { label: "Infrastructure", items: ["Kubernetes", "Docker", "Terraform", "Ansible"] },
  { label: "Reliability", items: ["Observability", "Incident response", "SLOs", "CI/CD"] },
  { label: "Backend", items: ["Go", "TypeScript", "Python", "REST APIs", "PostgreSQL"] },
  { label: "Cloud & Web", items: ["Cloudflare", "Linux", "GitHub Actions", "React", "Next.js"] },
];

export const projects = [
  { number: "01", title: "Kubernetes delivery platform", description: "A production-minded deployment workflow focused on repeatability, observability, and safe releases.", tags: ["Kubernetes", "Docker", "CI/CD"], href: "https://github.com/joshchen-dev/devops-with-kubernetes" },
  { number: "02", title: "Containerized delivery pipeline", description: "An automated pipeline that packages, validates, and delivers an application as a container.", tags: ["Docker", "GitHub Actions", "Automation"], href: "https://github.com/joshchen-dev/devops-with-docker-pipeline" },
  { number: "03", title: "Full-stack service", description: "A TypeScript application spanning typed APIs, data persistence, testing, and a responsive interface.", tags: ["TypeScript", "React", "Backend"], href: "https://github.com/joshchen-dev/bloglist-nextjs" },
];
