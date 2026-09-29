import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function DevFlowSpotlight() {
  const devflow = projects.find((p) => p.slug === "devflow")!;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-gradient-to-b from-base-surface to-base-raised shadow-panel">
            <div className="absolute inset-0 bg-dot-grid bg-dots opacity-10" />
            <div className="relative grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="mb-6 flex items-center gap-3">
                  <Badge variant="signal">Flagship Project</Badge>
                  <span className="font-mono text-xs text-ink-faint">{devflow.year}</span>
                </div>
                <h2 className="text-display-md font-semibold text-ink">
                  {devflow.title}
                </h2>
                <p className="mt-4 text-ink-dim">{devflow.description}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {devflow.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/projects/devflow"
                    className={cn(buttonVariants({ variant: "signal" }))}
                  >
                    Read the case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={devflow.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    <Github className="h-4 w-4" /> Source
                  </a>
                </div>
              </div>

              <div className="relative min-h-[320px] border-t border-line lg:border-l lg:border-t-0">
                <Image
                  src="/images/projects/devflow/kanban-board.png"
                  alt="DevFlow Kanban board"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-raised via-transparent to-transparent lg:bg-gradient-to-l" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
