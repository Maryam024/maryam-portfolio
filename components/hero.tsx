"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, FileDown, ChevronRight } from "lucide-react";
import { site, researchPapers } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;
const recent = researchPapers.find((p) => p.featured) ?? researchPapers[0];

function Fade({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-2xl">
          <Fade>
            <div className="mb-6 flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-line-strong">
                <Image
                  src="/images/profile/maryam.jpg"
                  alt={site.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-ink-dim">
                {site.name} — {site.role}, {site.subRole}
              </p>
            </div>
          </Fade>

          {recent && (
            <Fade delay={0.04}>
              <Link
                href="/research"
                className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-ink-dim transition-colors hover:text-ink"
              >
                Recent project: <span className="font-medium text-ink">{recent.title}</span>
                <ChevronRight className="h-3 w-3" />
              </Link>
            </Fade>
          )}

          <Fade delay={0.08}>
            <h1 className="text-[clamp(2.2rem,4.4vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
              Building systems
              <br />
              that solve real problems.
            </h1>
          </Fade>

          <Fade delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-dim">
              I&apos;m {site.name.split(" ")[0]}, a Computer Science student passionate about
              building AI-powered and full-stack software that solves real-world problems—from
              intelligent web applications to trustworthy machine learning systems.
            </p>
          </Fade>

          <Fade delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/projects" className={cn(buttonVariants({ variant: "signal", size: "lg" }))}>
                View my work <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={site.resumeUrl}
                download
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                <FileDown className="h-4 w-4" /> Résumé
              </a>
            </div>
          </Fade>

          <Fade delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-fg/30 hover:text-ink"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-fg/30 hover:text-ink"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <span className="text-sm text-ink-faint">
                {site.location} · {site.email}
              </span>
            </div>
          </Fade>
        </div>

        <Fade delay={0.2} className="relative hidden lg:block">
          <div className="glass-strong relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-[2rem] border border-line-strong shadow-panel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero/ai-network.svg"
              alt="Abstract visualization of interconnected AI nodes and data pathways"
              className="h-full w-full object-cover"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}
