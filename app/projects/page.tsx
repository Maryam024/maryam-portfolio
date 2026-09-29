import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";
import { PageHeader } from "@/components/section-heading";
import { ProjectsGrid } from "@/components/projects-grid";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack platforms, computer vision apps, and systems built from scratch.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Projects"
        title="Built to be shipped, not just demoed"
        description="Six projects, each with real auth, data models, and the unglamorous parts most course work skips."
      />
      <section className="shell -mt-8 mb-4 flex justify-start pb-4">
        <Link href="/gallery" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
          <Images className="h-3.5 w-3.5" /> View full gallery <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </section>
      <section className="shell pb-28">
        <ProjectsGrid />
      </section>
    </>
  );
}
