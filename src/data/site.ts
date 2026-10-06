export const siteConfig = {
  name: "Jiahui Chen",
  title: "Software Engineer in Tokyo",
  email: "josh@joshchen.dev",
  url: "https://joshchen.dev",
  intro: "Software engineer in Tokyo working across React frontends, backend services, and the CI, monitoring, and deployment setup around them.",
  availability: "DevOps, SRE, and backend roles",
  socials: {
    github: "https://github.com/joshchen-dev",
    // TODO: Replace with your public LinkedIn profile before launch.
    linkedin: "https://www.linkedin.com/in/replace-me",
  },
};

export const experiences = [
  {
    period: "Mar 2024 — Present",
    role: "Software Engineer",
    company: "ORCA Co., Ltd.",
    location: "Tokyo",
    summary: "Full-stack and infrastructure work on the company’s internal SaaS tools, cloud services, and the mail service it provides to business clients.",
    groups: [
      { label: "Product", highlights: [
        "Built an internal React SaaS app (TanStack Query, Zustand) that the sales team uses to serve business clients and the technical team uses to search logs and monitor client equipment health.",
        "Wrote its unit and end-to-end test suites.",
        "Built the TOTP verification service for the company’s cloud service.",
      ] },
      { label: "Backend", highlights: [
        "Made a critical backend polling service 500% faster by adding exponential backoff and parallelism.",
        "Migrated the mail service’s admin page from PHP 5 to PHP 8.",
      ] },
      { label: "Infrastructure", highlights: [
        "Built the CI/CD pipeline (lint, build, test).",
        "Set up monitoring and alerting for the cloud servers with Docker Compose, Prometheus, Loki, and Grafana.",
        "Migrated the mail server provided to business clients to AWS.",
        "Automated TLS certificate renewal across all running servers with Ansible.",
        "Containerized a phishing-test service with Docker to simplify deployment.",
      ] },
    ],
  },
];

export const skillGroups = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python"] },
  { label: "Frontend", items: ["React", "Next.js", "TanStack Query", "Zustand", "Playwright"] },
  { label: "Backend", items: ["Express", "REST APIs", "PostgreSQL", "MariaDB"] },
  { label: "Infrastructure", items: ["Docker", "Kubernetes", "GitHub Actions", "Ansible", "AWS", "GCP"] },
  { label: "Observability", items: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry"] },
];

export const projects = [
  { title: "DevOps with Kubernetes", description: "My work through the University of Helsinki’s DevOps with Kubernetes course (2026): deploying a todo app and several small services to a cluster, connecting them with Services and Ingress, and persisting data with volumes.", tags: ["Kubernetes", "Docker"], href: "https://github.com/joshchen-dev/devops-with-kubernetes" },
  { title: "Bloglist", description: "A blog app on Next.js 16 with NextAuth sign-in, PostgreSQL on Neon through Drizzle ORM, MDX content, and Playwright end-to-end tests. Deployed on Vercel.", tags: ["Next.js", "PostgreSQL", "Drizzle", "Playwright"], href: "https://github.com/joshchen-dev/bloglist-nextjs", live: "https://bloglist-nextjs-ivory.vercel.app/" },
  { title: "Docker delivery pipeline", description: "An Express app packaged as a Docker image, with a pipeline that builds and delivers it automatically.", tags: ["Docker", "Express", "CI/CD"], href: "https://github.com/joshchen-dev/devops-with-docker-pipeline" },
];

export const education = [
  { period: "2019 — 2023", degree: "M.S. in Computer Science", school: "National Tsing Hua University", location: "Hsinchu, Taiwan", note: "Studies paused 2020–2021 during COVID-19 border closures." },
  { period: "2015 — 2019", degree: "B.S. in Applied Physics", school: "Tunghai University", location: "Taichung, Taiwan", note: "Summa cum laude." },
];

export const languages = "Chinese (native), English (fluent), Japanese (learning)";
