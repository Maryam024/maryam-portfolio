import type { Metadata } from "next";
import {
  BookOpen,
  Github,
  FlaskConical,
  Database,
  ListChecks,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import { PageHeader, SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ResearchPipelineDiagram } from "@/components/research-pipeline-diagram";
import { MelanomaPipelineDiagram } from "@/components/melanoma-pipeline-diagram";
import { researchPapers } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Current research on semi-supervised melanoma detection at NCAI, plus two DOI-archived papers: MedInsight, a controlled study of retrieval-augmented vision-language models on medical VQA, and an LSTM-based depression-detection study.",
};

export default function ResearchPage() {
  const [medinsight, ...rest] = researchPapers;
  const isOngoing = medinsight.status === "In Progress";
  const FeaturedDiagram = medinsight.slug === "melanoma-ssl" ? MelanomaPipelineDiagram : ResearchPipelineDiagram;

  return (
    <>
      <PageHeader
        kicker="Research"
        title={isOngoing ? "Current research, plus two DOI-archived papers" : "Two DOI-archived papers, with a real control group"}
        description={
          isOngoing
            ? "The featured project is active right now — methodology and scope are locked in, results are not, and that's stated plainly below."
            : "The featured study tests a real question with a proper baseline and significance testing, not one flattering number."
        }
      />

      {/* Featured research */}
      <section className="shell pb-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-gradient-to-b from-base-surface to-base-raised shadow-panel">
            <div className="absolute inset-0 bg-dot-grid bg-dots opacity-10" />
            <div className="relative p-8 sm:p-12 lg:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="mint">
                  <FlaskConical className="mr-1.5 h-3 w-3" /> {isOngoing ? "Current research" : "Featured research"}
                </Badge>
                <span className="font-mono text-xs text-ink-faint">{medinsight.year}</span>
                <span className="font-mono text-xs text-ink-faint">· {medinsight.venue}</span>
              </div>

              <h2 className="mt-6 max-w-4xl text-display-md font-semibold text-ink">
                {medinsight.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-ink-dim">{medinsight.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {medinsight.paperUrl && (
                  <a
                    href={medinsight.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "signal" }))}
                  >
                    <BookOpen className="h-4 w-4" /> Read the paper
                  </a>
                )}
                {medinsight.githubUrl && (
                  <a
                    href={medinsight.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    <Github className="h-4 w-4" /> View source
                  </a>
                )}
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink-faint">
                      Abstract
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-dim">{medinsight.abstract}</p>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-ink-faint">
                      <Sparkles className="h-3.5 w-3.5" /> Contributions
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {medinsight.contributions.map((c) => (
                        <li key={c} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-ink-faint">
                      <ListChecks className="h-3.5 w-3.5" /> Methodology
                    </h3>
                    <div className="mt-4 space-y-3">
                      {medinsight.methodology.map((m, i) => (
                        <div
                          key={m}
                          className="flex gap-4 rounded-xl border border-line bg-fg/[0.02] p-4"
                        >
                          <span className="font-mono text-xs text-ink-faint">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm leading-relaxed text-ink-dim">{m}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-2xl border border-line bg-fg/[0.03] p-6">
                    <FeaturedDiagram />
                  </div>

                  <div className="rounded-2xl border border-line bg-fg/[0.03] p-6">
                    <p className="kicker mb-4">{isOngoing ? "Status" : "Key results"}</p>
                    <div className="space-y-4">
                      {medinsight.keyResults.map((r) => (
                        <div key={r.label} className="border-b border-line pb-3 last:border-0 last:pb-0">
                          <p className="text-xs text-ink-faint">{r.label}</p>
                          <div className="mt-1 flex items-baseline gap-2">
                            {r.baseline && (
                              <span className="font-mono text-sm text-ink-faint line-through decoration-ink-faint/40">
                                {r.baseline}
                              </span>
                            )}
                            <span className="font-mono text-sm font-medium text-signal-soft">
                              {r.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {medinsight.datasets && (
                    <div className="rounded-2xl border border-line bg-fg/[0.03] p-6">
                      <p className="kicker mb-4 flex items-center gap-2">
                        <Database className="h-3.5 w-3.5" /> Datasets
                      </p>
                      <ul className="space-y-2 text-sm text-ink-dim">
                        {medinsight.datasets.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="rounded-2xl border border-line bg-fg/[0.03] p-6">
                    <p className="kicker mb-4">Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {medinsight.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-6 border-t border-line pt-10 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink-faint">
                    {isOngoing ? "Current focus" : "Findings"}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {medinsight.findings.map((f) => (
                      <li key={f} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {medinsight.limitations && (
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-ink-faint">
                      <ShieldAlert className="h-3.5 w-3.5" /> {isOngoing ? "Stated plainly" : "Limitations, stated plainly"}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {medinsight.limitations.map((l) => (
                        <li key={l} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Secondary papers */}
      {rest.length > 0 && (
        <section className="border-t border-line py-24">
          <div className="shell">
            <SectionHeading kicker="Earlier work" title="Other published research" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {rest.map((paper, i) => (
                <Reveal key={paper.slug} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-fg/[0.03] p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{paper.year}</Badge>
                      <span className="font-mono text-xs text-ink-faint">{paper.venue}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">
                      {paper.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-dim">{paper.abstract}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {paper.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                    <div className="mt-auto pt-6">
                      {paper.paperUrl && (
                        <a
                          href={paper.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                        >
                          <BookOpen className="h-3.5 w-3.5" /> Read the paper
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
