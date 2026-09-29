import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const shown = featuredProjects.slice(0, 4);
  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Selected work"
            title="Projects built to be used, not just graded"
            description="Full-stack platforms, a computer-vision desktop app, and a database engine built from first principles."
          />
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
          >
            All projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {shown.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
