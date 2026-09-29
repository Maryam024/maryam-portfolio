import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-gradient-to-br from-signal/15 via-base-surface to-ember/10 px-8 py-16 text-center shadow-panel sm:px-16 sm:py-24">
          <div className="absolute inset-0 bg-dot-grid bg-dots opacity-10" />
          <div className="relative">
            <p className="kicker mb-4 justify-center">Currently available</p>
            <h2 className="mx-auto max-w-2xl text-display-md font-semibold text-ink">
              Let&apos;s build something that ships.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ink-dim">
              I&apos;m looking for full-stack or AI/ML engineering roles and internships where I
              can keep shipping real, end-to-end products.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className={cn(buttonVariants({ variant: "signal", size: "lg" }))}>
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
