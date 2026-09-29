import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-mono tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-line bg-fg/[0.04] text-ink-dim",
        signal: "border-signal/30 bg-signal/10 text-signal-soft",
        ember: "border-ember/30 bg-ember/10 text-ember-soft",
        bloom: "border-bloom/30 bg-bloom/10 text-bloom-soft",
        mint: "border-mint/30 bg-mint/10 text-mint-soft",
        outline: "border-line-strong text-ink",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
