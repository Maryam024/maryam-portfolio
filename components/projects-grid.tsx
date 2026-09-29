"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Flagship", "Web", "Mobile", "AI / ML"] as const;

function matchesFilter(project: (typeof projects)[number], filter: string) {
  if (filter === "All") return true;
  if (filter === "Flagship") return project.status === "Flagship";
  if (filter === "Mobile") return project.slug === "gamehub";
  if (filter === "AI / ML")
    return ["visiontrack", "workpulse"].includes(project.slug);
  if (filter === "Web")
    return ["devflow", "workpulse", "graph-db-management-system", "mini-excel-dsa"].includes(
      project.slug
    );
  return true;
}

export function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              filter === f
                ? "border-signal/40 bg-signal/10 text-signal-soft"
                : "border-line text-ink-dim hover:border-fg/20 hover:text-ink"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
