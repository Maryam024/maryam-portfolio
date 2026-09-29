# Maryam Zaheer — Portfolio v2

A production-ready, multi-page portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & deploy

```bash
npm run build
```

Deploy directly to Vercel: `vercel` (or connect the GitHub repo in the Vercel dashboard). No environment variables are required.

## Structure

- `app/` — Next.js App Router pages: Home, About, Projects (+ dynamic `[slug]` case-study pages), Experience, Skills, Resume, Contact, 404
- `components/` — UI primitives (`components/ui`) and page sections
- `lib/data.ts` — all content (bio, projects, skills, education, experience) in one place — edit this file to update copy
- `lib/types.ts` — shared TypeScript types
- `public/images/projects/` — real project screenshots, grouped by project
- `public/resume/` — résumé PDF (swap the file to update)

## Things worth double-checking before you publish

- **DevFlow case study**: I wrote its architecture/challenges/features from your GitHub repo description and screenshots (I didn't have DevFlow's source in front of me). Skim `lib/data.ts` → the `devflow` project entry and correct anything about the actual tech stack or implementation details.
- **Contact form**: it opens the visitor's email client with a pre-filled message (no backend/email service is wired up, since none was provided). If you want it to submit silently, connect a form service like Formspree/Resend and I can wire it in.
- **Experience page**: since no internship/experience letter was provided, this page frames your independent projects and research as your professional experience, which is honest and common for a strong student portfolio — adjust the copy if you'd like a different framing.
- **Domain**: `lib/data.ts` → `site.domain` is a placeholder (`https://maryamzaheer.dev`) used for SEO metadata — update it to your real Vercel URL after deploying.
