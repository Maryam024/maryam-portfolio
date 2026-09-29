const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "TensorFlow",
  "PyTorch",
  "YOLOv8",
  "Tailwind CSS",
  "Kotlin",
  "Firebase",
];

export function TechMarquee() {
  const items = [...TECH, ...TECH];
  return (
    <section className="overflow-hidden border-y border-line py-8">
      <div className="flex w-max animate-marquee gap-10 [animation-play-state:running] hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="font-mono text-sm tracking-wide text-ink-faint"
          >
            {t}
            <span className="ml-10 text-line-strong">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
