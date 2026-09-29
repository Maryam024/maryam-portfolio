import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BrowserFrame } from "@/components/browser-frame";
import { Badge } from "@/components/ui/badge";
import { projects, site } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Every project screenshot in one place — dashboards, flows, and product surfaces.",
};

export default function GalleryPage() {
  const groups = projects.filter((p) => p.images.length > 0);

  return (
    <>
      <PageHeader
        kicker="Gallery"
        title="Every screen, from every project"
        description="Grouped by project — open one for the full write-up."
      />

      <section className="shell pb-28 space-y-20">
        {groups.map((project, gi) => (
          <div key={project.slug}>
            <Reveal delay={gi * 0.03}>
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-xl font-semibold text-ink">{project.title}</h2>
                    <Badge variant={project.status === "Flagship" ? "signal" : "default"}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="mt-1.5 text-sm text-ink-dim">{project.tagline}</p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "shrink-0")}
                >
                  Case study <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.images.map((img, i) => (
                <Reveal key={img.src} delay={i * 0.04}>
                  <BrowserFrame
                    label={`${project.title.toLowerCase().replace(/\s+/g, "")}.app`}
                    className="group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-signature group-hover:scale-105"
                      />
                    </div>
                  </BrowserFrame>
                  {img.caption && (
                    <p className="mt-2 px-1 text-xs text-ink-faint">{img.caption}</p>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-line py-16">
        <div className="shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm text-ink-dim">
            Want the story behind any of these — architecture, trade-offs, and what I&apos;d do
            differently?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className={cn(buttonVariants({ variant: "outline" }))}>
              All projects
            </Link>
            <a
              href={`mailto:${site.email}`}
              className={cn(buttonVariants({ variant: "signal" }))}
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
