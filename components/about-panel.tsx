"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AboutPanel({
  sections,
  sidebar,
  panels,
}: {
  sections: { id: string; label: string }[];
  sidebar: ReactNode;
  panels: Record<string, ReactNode>;
}) {
  const [active, setActive] = useState(sections[0]?.id);

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        {sidebar}

        <nav className="mt-8 hidden lg:block">
          <ul className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => setActive(s.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg py-2 text-left text-sm transition-colors",
                    active === s.id
                      ? "text-ink"
                      : "text-ink-faint hover:text-ink-dim"
                  )}
                >
                  <span
                    className={cn(
                      "h-px shrink-0 transition-all duration-300",
                      active === s.id ? "w-6 bg-signal-soft" : "w-3 bg-ink-faint"
                    )}
                  />
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile tab bar — the sticky column above collapses on small screens */}
        <nav className="-mx-6 mt-8 overflow-x-auto px-6 pb-1 lg:hidden">
          <ul className="flex gap-2 whitespace-nowrap">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => setActive(s.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                    active === s.id
                      ? "border-fg/20 bg-fg/[0.06] text-ink"
                      : "border-line text-ink-faint hover:text-ink-dim"
                  )}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div key={active} className="min-w-0">
        {panels[active]}
      </div>
    </div>
  );
}
