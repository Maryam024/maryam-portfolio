"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-base-surface">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-signature group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/10 to-transparent opacity-80" />
            <div className="absolute left-4 top-4 flex gap-2">
              <Badge variant={project.status === "Flagship" ? "signal" : "default"}>
                {project.status}
              </Badge>
            </div>
            <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white text-base opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-signal-soft">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-ink-dim">{project.tagline}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-ink-faint">{project.year}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
              {project.tech.length > 4 && <Badge>+{project.tech.length - 4}</Badge>}
            </div>
          </div>
        </div>
      </Link>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-base-raised text-ink-dim opacity-0 transition-all duration-300 group-hover:opacity-100 hover:text-ink"
          aria-label={`${project.title} on GitHub`}
        >
          <Github className="h-4 w-4" />
        </a>
      )}
    </motion.div>
  );
}
