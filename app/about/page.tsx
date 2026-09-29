import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Target,
  Award,
  Calendar,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  FlaskConical,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { AboutPanel } from "@/components/about-panel";
import { education, site, skills, certifications, experience, languages } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind the path into full-stack and AI/ML engineering.",
};

const sidebarSections = [
  { id: "introduction", label: "Introduction" },
  { id: "experience", label: "Work Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Technical skills" },
  { id: "certifications", label: "Certifications" },
];

const skillCategoryOrder = ["AI & Machine Learning", "Full Stack", "Mobile", "Databases", "Tools"] as const;

function typeIcon(type: string) {
  if (type === "Research") return <FlaskConical className="h-5 w-5" />;
  if (type === "Teaching") return <GraduationCap className="h-5 w-5" />;
  return <Briefcase className="h-5 w-5" />;
}

export default function AboutPage() {
  const sidebar = (
    <div>
      <div className="relative h-40 w-40 overflow-hidden rounded-full border border-line-strong bg-base-surface p-1.5 shadow-panel">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src="/images/profile/maryam.jpg"
            alt={site.name}
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-fg/[0.03] px-3 py-1.5 font-mono text-[11px] text-ink-faint">
          <MapPin className="h-3 w-3" /> {site.location}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {languages.map((l) => (
          <Badge key={l}>{l}</Badge>
        ))}
      </div>
    </div>
  );

  const panels: Record<string, React.ReactNode> = {
    introduction: (
      <div className="space-y-7">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-display-sm font-semibold text-ink">{site.name}</h1>
              <p className="mt-1.5 text-ink-dim">
                {site.role} · {site.subRole}
              </p>
            </div>
            <a
              href={`mailto:${site.email}?subject=Let's talk`}
              className="glass group inline-flex shrink-0 items-center gap-3 rounded-full px-5 py-3 text-sm font-medium text-ink shadow-panel transition-colors hover:border-fg/20"
            >
              <Calendar className="h-4 w-4 text-signal-soft" />
              Schedule a call
              <ChevronRight className="h-4 w-4 text-ink-faint transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex items-center gap-2.5">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-fg/30 hover:text-ink"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-fg/30 hover:text-ink"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-fg/30 hover:text-ink"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-dim">
            I&apos;m a Computer Science undergraduate at the University of Engineering and
            Technology (UET), Lahore, with a strong interest in AI, machine learning, and
            full-stack engineering. My work combines AI research with software development,
            spanning computer vision, natural language processing, retrieval-augmented generation
            (RAG), and modern web technologies. I enjoy designing reliable systems, exploring
            emerging AI techniques, and building software that bridges research with practical
            applications.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="max-w-2xl rounded-2xl border border-line bg-fg/[0.03] p-6">
            <div className="mb-3 flex items-center gap-2 text-ink">
              <Target className="h-4 w-4 text-signal-soft" />
              <p className="text-sm font-medium">Current Focus</p>
            </div>
            <p className="text-sm leading-relaxed text-ink-dim">
              Expanding my expertise in AI engineering, agentic AI, and scalable full-stack
              development while contributing to applied AI research and building thoughtful,
              reliable software with real-world value.
            </p>
          </div>
        </Reveal>
      </div>
    ),

    experience: (
      <div>
        <SectionHeading
          kicker="Experience"
          title="Where the time went"
          className="mb-10"
        />
        <div className="space-y-5">
          {experience.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-line bg-fg/[0.03] p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal-soft">
                      {typeIcon(e.type)}
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{e.title}</h3>
                      <p className="text-sm text-ink-dim">{e.organization}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-faint">
                    {e.duration}
                  </span>
                </div>
                <p className="mt-4 pl-[3.15rem] text-sm leading-relaxed text-ink-dim">
                  {e.points[0]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-faint">
          <Link href="/experience" className="text-signal-soft underline-offset-4 hover:underline">
            See full experience & research →
          </Link>
        </p>
      </div>
    ),

    education: (
      <div>
        <SectionHeading kicker="Education" title="Academic background" className="mb-10" />
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.institution} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-fg/[0.03] p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-ink">{e.institution}</h3>
                    <p className="mt-1 text-sm text-ink-dim">{e.degree}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-ink-faint">{e.duration}</span>
                </div>
                <p className="mt-3 text-sm text-signal-soft">{e.status}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {e.coursework.map((c) => (
                    <Badge key={c}>{c}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    ),

    skills: (
      <div>
        <SectionHeading kicker="Technical skills" title="Five toolkits, one full stack" className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2">
          {skillCategoryOrder.map((cat, i) => {
            const items = skills.filter((s) => s.category === cat);
            return (
              <Reveal key={cat} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-fg/[0.03] p-6">
                  <p className="text-sm font-semibold text-ink">{cat}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {items.slice(0, 8).map((s) => (
                      <Badge key={s.name}>{s.name}</Badge>
                    ))}
                    {items.length > 8 && (
                      <span className="self-center text-xs text-ink-faint">
                        +{items.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-ink-faint">
          <a href="/skills" className="text-signal-soft underline-offset-4 hover:underline">
            See the full breakdown →
          </a>
        </p>
      </div>
    ),

    certifications: (
      <div>
        <SectionHeading kicker="Certifications" title="Achievements & credentials" className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <a
                href={c.credentialUrl ?? undefined}
                target={c.credentialUrl ? "_blank" : undefined}
                rel={c.credentialUrl ? "noopener noreferrer" : undefined}
                className={cn(
                  "block h-full rounded-2xl border p-6 transition-colors",
                  c.hasCertificate === false
                    ? "border-dashed border-line bg-fg/[0.015]"
                    : "border-line bg-fg/[0.03] hover:border-fg/20"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <Award
                    className={cn(
                      "h-5 w-5",
                      c.hasCertificate === false ? "text-ink-faint" : "text-ember"
                    )}
                  />
                  {c.rating && (
                    <span className="font-mono text-xs tracking-tight text-ember">
                      {"★".repeat(c.rating)}
                      <span className="text-line-strong">{"★".repeat(5 - c.rating)}</span>
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm font-medium leading-snug text-ink">{c.title}</p>
                <p className="mt-2 text-xs text-ink-faint">
                  {c.issuer} · {c.date}
                  {c.hasCertificate === false && " · no certificate issued"}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <section className="shell pb-28 pt-28 sm:pt-32">
      <AboutPanel sections={sidebarSections} sidebar={sidebar} panels={panels} />
    </section>
  );
}
