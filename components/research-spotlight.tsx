import Link from "next/link";
import { ArrowUpRight, Github, BookOpen, FlaskConical } from "lucide-react";
import { researchPapers } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ResearchPipelineDiagram } from "@/components/research-pipeline-diagram";
import { cn } from "@/lib/utils";

export function ResearchSpotlight() {
  const paper = researchPapers.find((p) => p.featured) ?? researchPapers[0];
  if (!paper) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-gradient-to-b from-base-surface to-base-raised shadow-panel">
            <div className="absolute inset-0 bg-dot-grid bg-dots opacity-10" />
            <div className="relative grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <Badge variant="mint">
                    <FlaskConical className="mr-1.5 h-3 w-3" /> Research
                  </Badge>
                  <span className="font-mono text-xs text-ink-faint">{paper.year}</span>
                </div>
                <h2 className="text-display-md font-semibold text-ink">{paper.title}</h2>
                <p className="mt-4 text-ink-dim">{paper.tagline}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {paper.tech.slice(0, 6).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/research" className={cn(buttonVariants({ variant: "signal" }))}>
                    Read the case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  {paper.paperUrl && (
                    <a
                      href={paper.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "outline" }))}
                    >
                      <BookOpen className="h-4 w-4" /> Paper
                    </a>
                  )}
                  {paper.githubUrl && (
                    <a
                      href={paper.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "outline" }))}
                    >
                      <Github className="h-4 w-4" /> Source
                    </a>
                  )}
                </div>
              </div>

              <div className="relative flex min-h-[320px] items-center justify-center border-t border-line p-8 lg:border-l lg:border-t-0">
                <ResearchPipelineDiagram />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
