import * as React from "react";
import { cn } from "@/lib/utils";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("text-xs font-mono uppercase tracking-[0.15em] text-ink-dim", className)}
    {...props}
  />
));
Label.displayName = "Label";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full rounded-xl border border-line bg-fg/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-signal/50 focus:bg-fg/[0.05]",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full rounded-xl border border-line bg-fg/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-signal/50 focus:bg-fg/[0.05] resize-none",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
