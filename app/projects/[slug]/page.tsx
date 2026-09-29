import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  Lightbulb,
  Layers,
  Wrench,
  BookOpen,
} from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { BrowserFrame } from "@/components/browser-frame";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const gallery = project.images.filter((img) => img.src !== project.cover);

  return (
    <>
      <section className="shell pt-28 pb-14 sm:pt-32">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge variant={project.status === "Flagship" ? "signal" : "default"}>
              {project.status}
            </Badge>
            <span className="font-mono text-xs text-ink-faint">{project.year}</span>
            <span className="font-mono text-xs text-ink-faint">· {project.role}</span>
          </div>

          <h1 className="mt-5 max-w-3xl text-display-lg font-semibold text-ink">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-dim">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "signal" }))}
              >
                <Github className="h-4 w-4" /> View source
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <ExternalLink className="h-4 w-4" /> Live demo
              </a>
            )}
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <BookOpen className="h-4 w-4" /> Read the paper
              </a>
            )}
            {project.apkUrl && (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <ArrowUpRight className="h-4 w-4" /> Get the APK
              </a>
            )}
          </div>
        </Reveal>
      </section>

      {project.cover && (
        <Reveal className="shell">
          <BrowserFrame
            label={`${project.title.toLowerCase().replace(/\s+/g, "")}.app`}
            className="shadow-panel"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 1180px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </BrowserFrame>
        </Reveal>
      )}

      <section className="shell py-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-16">
            <Reveal>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <Layers className="h-5 w-5 text-signal-soft" /> Overview
              </h2>
              <p className="mt-4 leading-relaxed text-ink-dim">{project.overview}</p>
            </Reveal>

            <Reveal>
              <h2 className="text-xl font-semibold text-ink">Key features</h2>
              <ul className="mt-5 space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-ink-dim">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <Wrench className="h-5 w-5 text-ember" /> Architecture &amp; engineering decisions
              </h2>
              <div className="mt-5 space-y-4">
                {project.architecture.map((a, i) => (
                  <div key={i} className="flex gap-4 rounded-xl border border-line bg-fg/[0.02] p-4">
                    <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm leading-relaxed text-ink-dim">{a}</p>
                  </div>
                ))}
              </div>
              {project.architectureNote && (
                <p className="mt-4 text-xs italic text-ink-faint">{project.architectureNote}</p>
              )}
            </Reveal>

            {gallery.length > 0 && (
              <Reveal>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-ink">Product gallery</h2>
                  <Link
                    href="/gallery"
                    className="shrink-0 text-sm text-ink-dim transition-colors hover:text-ink"
                  >
                    View full gallery →
                  </Link>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {gallery.map((img) => (
                    <BrowserFrame
                      key={img.src}
                      label={`${project.title.toLowerCase().replace(/\s+/g, "")}.app`}
                      className="group"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover transition-transform duration-500 ease-signature group-hover:scale-105"
                        />
                      </div>
                    </BrowserFrame>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <Lightbulb className="h-5 w-5 text-mint" /> Challenges &amp; how I solved them
              </h2>
              <div className="mt-5 space-y-5">
                {project.challenges.map((c, i) => (
                  <div key={i} className="rounded-xl border border-line p-5">
                    <p className="text-sm font-medium text-ink">{c.problem}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-dim">{c.solution}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-xl font-semibold text-ink">Lessons learned</h2>
              <ul className="mt-5 space-y-3">
                {project.lessons.map((l) => (
                  <li key={l} className="flex gap-3 text-sm text-ink-dim">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <span className="leading-relaxed">{l}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="rounded-2xl border border-line bg-fg/[0.03] p-6">
                <p className="kicker mb-4">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                {project.metrics && (
                  <div className="mt-6 space-y-3 border-t border-line pt-6">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex items-center justify-between text-sm">
                        <span className="text-ink-faint">{m.label}</span>
                        <span className="font-mono text-ink">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 space-y-2 border-t border-line pt-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-faint">Role</span>
                    <span className="text-ink">{project.role}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-faint">Year</span>
                    <span className="text-ink">{project.year}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="shell flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all projects
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "signal" }))}
          >
            Discuss this project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
