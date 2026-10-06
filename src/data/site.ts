export const siteConfig = {
  name: "Jiahui Chen",
  title: "Software Engineer in Tokyo",
  description: "Jiahui Chen is a software engineer in Tokyo working across product frontends, backend services, and the infrastructure they run on.",
  email: "josh@joshchen.dev",
  url: "https://joshchen.dev",
  resume: "/josh-chen-resume.pdf",
  socials: {
    github: "https://github.com/joshchen-dev",
    // TODO: Replace with your public LinkedIn profile before launch.
    linkedin: "https://www.linkedin.com/in/replace-me",
  },
};

export const jobs = [
  {
    company: "ORCA Co., Ltd.",
    role: "Software Engineer",
    location: "Tokyo",
    start: "2024-03",
    end: "now",
    summary: "Internal SaaS tools, cloud services, and the mail service ORCA provides to business clients.",
    groups: [
      { area: "product", items: [
        "Internal React SaaS app (TanStack Query, Zustand) used by sales to serve business clients and by the technical team to search logs and monitor client equipment health",
        "Unit and end-to-end test suites for the app",
        "TOTP verification service for the company’s cloud service",
      ] },
      { area: "backend", items: [
        "Made a critical polling service **500% faster** with exponential backoff and parallelism",
        "Migrated the mail service’s admin page from PHP 5 to PHP 8",
      ] },
      { area: "infra", items: [
        "CI/CD pipeline: lint, build, test",
        "Monitoring and alerting for the cloud servers with Docker Compose, Prometheus, Loki, and Grafana",
        "Migrated the mail server provided to business clients to AWS",
        "Automated TLS certificate renewal across all running servers with Ansible",
        "Containerized a phishing-test service with Docker",
      ] },
    ],
  },
];

export const education = [
  { degree: "M.S. Computer Science", school: "National Tsing Hua University", location: "Hsinchu", start: "2019", end: "2023", note: "Paused 2020–2021 during COVID-19 border closures" },
  { degree: "B.S. Applied Physics", school: "Tunghai University", location: "Taichung", start: "2015", end: "2019", note: "Summa cum laude" },
];

export const service = [
  { title: "Paper reviewer, NeurIPS 2022", when: "2022" },
  { title: "Teaching assistant, Calculus, Tunghai University", when: "2017 – 2018" },
];

export const skills = [
  { label: "languages", items: ["TypeScript", "JavaScript", "Go", "Python"] },
  { label: "frontend", items: ["React", "Next.js", "TanStack Query", "Zustand", "Playwright"] },
  { label: "backend", items: ["Express", "REST APIs", "PostgreSQL", "MariaDB"] },
  { label: "infra", items: ["Docker", "Kubernetes", "GitHub Actions", "Ansible", "AWS", "GCP"] },
  { label: "observability", items: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry"] },
  { label: "spoken", items: ["Chinese (native)", "English (fluent)", "Japanese (learning)"] },
];

export const projects = [
  {
    title: "DevOps with Kubernetes",
    year: "2026",
    description: "My work through the University of Helsinki’s DevOps with Kubernetes course: deploying a todo app and several small services to a cluster, connecting them with Services and Ingress, and persisting data with volumes.",
    stack: ["Kubernetes", "Docker"],
    links: [{ label: "repo", href: "https://github.com/joshchen-dev/devops-with-kubernetes" }],
  },
  {
    title: "Bloglist",
    description: "A blog app on Next.js 16 with NextAuth sign-in, PostgreSQL on Neon through Drizzle ORM, MDX content, and Playwright end-to-end tests. Deployed on Vercel.",
    stack: ["Next.js", "PostgreSQL", "Drizzle", "Playwright"],
    links: [{ label: "repo", href: "https://github.com/joshchen-dev/bloglist-nextjs" }, { label: "live", href: "https://bloglist-nextjs-ivory.vercel.app/" }],
  },
  {
    title: "Docker delivery pipeline",
    description: "An Express app packaged as a Docker image, with a pipeline that builds and delivers it automatically.",
    stack: ["Docker", "Express", "CI/CD"],
    links: [{ label: "repo", href: "https://github.com/joshchen-dev/devops-with-docker-pipeline" }],
  },
];
