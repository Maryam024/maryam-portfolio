import type { Metadata } from "next";
import { Briefcase, FlaskConical, Award, GraduationCap } from "lucide-react";
import { PageHeader, SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { experience, certifications } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Experience",
  description: "AI/ML internship, independent engineering work, and research experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        kicker="Experience"
        title="Built by shipping, not just studying"
        description="An AI/ML internship at NCAI, six independent projects, and two published research papers."
      />

      <section className="shell pb-16">
        <div className="space-y-6">
          {experience.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-line bg-fg/[0.03] p-7 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal-soft">
                      {e.type === "Research" ? (
                        <FlaskConical className="h-5 w-5" />
                      ) : e.type === "Teaching" ? (
                        <GraduationCap className="h-5 w-5" />
                      ) : (
                        <Briefcase className="h-5 w-5" />
                      )}
                    </span>
                    <div>
                      <h2 className="font-semibold text-ink">{e.title}</h2>
                      <p className="text-sm text-ink-dim">
                        {e.organization} · {e.location}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-faint">
                    {e.duration}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-24">
        <div className="shell">
          <SectionHeading kicker="Recognition" title="Achievements & credentials" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </>
  );
}
