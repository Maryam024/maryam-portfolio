import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";

export function StatsStrip() {
  return (
    <section className="border-y border-line">
      <div className="shell grid grid-cols-2 divide-x divide-line md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="px-4 py-10 text-center sm:px-8">
            <p className="font-mono text-3xl font-semibold text-ink sm:text-4xl">
              <AnimatedCounter value={s.value} />
            </p>
            <p className="mt-2 text-xs text-ink-faint sm:text-sm">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
