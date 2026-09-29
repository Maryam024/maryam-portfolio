import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps a screenshot in a minimal browser/app-window chrome so raw
 * screenshots read as curated product shots rather than pasted images.
 */
export function BrowserFrame({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line-strong bg-base-raised shadow-panel",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-fg/[0.02] px-4 py-3">
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        </div>
        {label && (
          <div className="flex-1 truncate rounded-md border border-line bg-fg/[0.03] px-3 py-1 text-center font-mono text-[11px] text-ink-faint">
            {label}
          </div>
        )}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
