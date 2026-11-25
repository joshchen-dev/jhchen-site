export const siteConfig = {
  name: "CHEN JIAHUI",
  title: "Software Engineer in Tokyo",
  description: "CHEN JIAHUI is a software engineer in Tokyo building backend services in Go and the Kubernetes, Terraform, and observability infrastructure they run on.",
  email: "josh@jhchen.dev",
  url: "https://jhchen.dev",
  socials: {
    github: "https://github.com/joshchen-dev",
  },
};

export const jobs = [
  {
    company: "ORCA Co., Ltd.",
    role: "Software Engineer",
    location: "Tokyo",
    start: "Mar 2024",
    end: "now",
    summary: "Backend, infrastructure, and reliability work on ORCA’s customer cloud services and the mail service it runs for client companies.",
    groups: [
      { area: "backend", items: [
        "Built a Go CLI that downloads and reissues TLS certificates through the provider’s REST API (no ACME support), with automated tests for each request type run on every commit, and rolled certificates out to all servers with Ansible",
        "Added app-based TOTP two-factor authentication (Google Authenticator) to the customer cloud login alongside existing hardware tokens; wrote the spec and flowchart, and built a Go QR-code generator because the legacy PHP 5 runtime had no supported library",
        "Cut a ship-connection polling job from **~530 s to ~60 s** per cycle across ~1,500 ports using concurrency and exponential backoff, validated with a read-only shadow version against production data before a monitored rollout",
        "Developed mail admin features (per-user quotas and alerts, forwarding, mailbox relocation with mutex locking and asynchronous cleanup) and upgraded the stack from PHP 5.6 to 8.2",
      ] },
      { area: "infrastructure & reliability", items: [
        "Migrated the mail service (100+ client companies, ~800 ships, **~7 TB**) to AWS with a written runbook and rehearsals; the final cutover took **~30 minutes**",
        "Built the monitoring and alerting platform as code: AWS resources with Terraform, servers configured with Ansible, and Prometheus, OpenTelemetry Collector, Loki, Tempo, and Grafana deployed to Kubernetes with Argo CD, including tracing a single email across servers",
        "Led root-cause analysis and wrote incident reports for outages, then shipped the follow-up fixes",
        "Containerized a customer phishing-simulation service with Docker so several customers can run tests in parallel, and set up staging environments for three internal applications",
        "Built a virus and spam gateway that blocks **100–470** malicious emails per week",
      ] },
      { area: "mentoring", items: [
        "Guided a junior engineer (Jan–Apr 2026) on the system design and operation of a RAG-based LLM application",
      ] },
    ],
  },
];

export const education = [
  { degree: "M.S. Computer Science", school: "National Tsing Hua University", location: "Hsinchu", start: "2019", end: "2023", note: "Entrance scholarship · Paused 2020–2021 during COVID-19 border closures" },
  { degree: "B.S. Applied Physics", school: "Tunghai University", location: "Taichung", start: "2015", end: "2019", note: "Summa cum laude · Presidential Award · Honorary Graduate" },
];

export const certifications = [
  { title: "Certified Kubernetes Administrator (CKA)", when: "Sep 2026" },
  { title: "AWS Certified Solutions Architect – Associate", when: "Nov 2026" },
];

export const service = [
  { title: "Paper reviewer, NeurIPS 2022", when: "2022" },
  { title: "Teaching assistant, Calculus, Tunghai University", when: "2017 – 2018" },
  { title: "Honorary member, Phi Tau Phi Scholastic Honor Society", when: "" },
];

export const skills = [
  { label: "languages", items: ["Go", "TypeScript", "PHP", "Python", "Bash"] },
  { label: "frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "TanStack Query", "Zustand"] },
  { label: "backend & data", items: ["REST APIs", "Express", "PostgreSQL", "MariaDB / MySQL"] },
  { label: "infrastructure", items: ["Kubernetes", "kubebuilder", "Argo CD", "Kustomize", "Terraform", "Ansible", "Docker", "Linux"] },
  { label: "observability", items: ["Prometheus", "Loki", "Tempo", "Grafana", "OpenTelemetry"] },
  { label: "testing & CI/CD", items: ["Go testing", "envtest", "Playwright", "GitHub Actions", "AWS CodeBuild"] },
  { label: "cloud", items: ["AWS", "GCP", "Cloudflare"] },
  { label: "agentic engineering", items: ["Claude", "Codex"] },
  { label: "spoken", items: ["Chinese (native)", "English (TOEIC 850)", "Japanese (BJT 409)"] },
];

export const projects = [
  {
    title: "Riffle",
    tagline: "Kubernetes log-alerting operator and CLI",
    description: "Teams declare log rules as a LogAlert custom resource. A node agent reads pod logs, and the operator turns matches into Prometheus metrics, Kubernetes Events, and Slack-compatible webhooks (p50 log-to-webhook latency 0.5 s), archiving redacted matches to S3. One filter engine is shared by the operator, agent, and CLI, and the interactive `riffle tail -i` view turns an ad-hoc filter into LogAlert YAML for review. Deployed with Terraform, Ansible, and an Argo CD app-of-apps.",
    stack: ["Go", "kubebuilder", "Kubernetes", "Prometheus", "Terraform", "Argo CD"],
    links: [{ label: "site", href: "https://riffle.jhchen.dev" }],
  },
  {
    title: "Raidy",
    tagline: "Scheduling web app with a Discord bot",
    description: "A single Go service runs the Discord bot, REST API, scheduler, and web console on PostgreSQL with embedded, versioned migrations and Discord OAuth2 login. The React front end handles timezone-aware scheduling and live-updating Discord posts, with Playwright end-to-end tests. Tagged releases publish multi-arch images to GHCR, and it deploys to Kubernetes with Kustomize.",
    stack: ["Go", "React", "TypeScript", "PostgreSQL", "Discord", "Kubernetes"],
    links: [{ label: "site", href: "https://raidy.jhchen.dev" }],
  },
];
