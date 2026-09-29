import type { Metadata } from "next";
import { PageHeader } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { skills } from "@/lib/data";
import type { SkillCategory } from "@/lib/types";
import { BrainCircuit, Layers, Smartphone, Database, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description: "Grouped technology cards across AI/ML, full-stack, mobile, databases, and tooling.",
};

const categoryOrder: SkillCategory[] = [
  "AI & Machine Learning",
  "Full Stack",
  "Mobile",
  "Databases",
  "Tools",
];

const categoryBlurb: Record<SkillCategory, string> = {
  "AI & Machine Learning": "Deep learning, NLP, retrieval-augmented VLMs, and computer vision.",
  "Full Stack": "Languages, frontend, and backend — building the whole surface of a product.",
  Mobile: "Native Android development, from custom Views to Firebase-backed profiles.",
  Databases: "Relational, document, and graph data layers.",
  Tools: "Cloud, automation, version control, and QA.",
};

const categoryIcons: Record<SkillCategory, React.ComponentType<{ className?: string }>> = {
  "AI & Machine Learning": BrainCircuit,
  "Full Stack": Layers,
  Mobile: Smartphone,
  Databases: Database,
  Tools: Wrench,
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        kicker="Skills"
        title="Tools I actually use, grouped by how I use them"
        description="Five categories, not a tag cloud."
      />

      <section className="shell pb-28">
        <div className="grid gap-6 lg:grid-cols-2">
          {categoryOrder.map((cat, ci) => {
            const items = skills.filter((s) => s.category === cat);
            if (items.length === 0) return null;
            const Icon = categoryIcons[cat];
            const wide = cat === "AI & Machine Learning" || cat === "Full Stack";
            return (
              <Reveal
                key={cat}
                delay={ci * 0.05}
                className={wide ? "lg:col-span-2" : undefined}
              >
                <div className="group h-full rounded-2xl border border-line bg-fg/[0.03] p-7 transition-colors duration-500 hover:border-fg/15 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal-soft transition-transform duration-500 group-hover:-rotate-6">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-semibold text-ink">{cat}</h2>
                      <p className="mt-0.5 text-xs text-ink-faint">{categoryBlurb[cat]}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s.name}
                        className="rounded-lg border border-line-strong bg-fg/[0.02] px-3 py-1.5 text-sm text-ink-dim transition-colors hover:border-signal/30 hover:bg-signal/5 hover:text-ink"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
