# CHEN JIAHUI — Portfolio

A static Next.js portfolio and MDX blog focused on DevOps, SRE, and backend engineering roles.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Quality checks:

```bash
npm run lint
npm test
npm run test:e2e
npm run build
```

The production build is exported to `out/`.

## Update the content

- Edit profile, experience, skills, projects, and links in `src/data/site.ts`.
- Add posts in `content/posts/*.mdx`; copy `draft-template.mdx` and set `draft: false` when ready.
- Replace `public/josh-chen-resume.pdf` with the final résumé, keeping the filename unchanged.
- Replace the placeholder LinkedIn URL and every visible `TODO`, `20XX`, `XX%`, and `Company name` value before publishing.

## Cloudflare Pages

Connect the GitHub repository in Cloudflare Pages and use:

- Framework preset: **Next.js (Static HTML Export)**
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `out`

No runtime environment variables or server functions are required.
