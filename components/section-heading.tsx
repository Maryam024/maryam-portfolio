import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      <p className="kicker mb-3">{kicker}</p>
      <h2
        className={cn(
          "text-display-md font-semibold text-ink",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-ink-dim",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="shell pt-24 pb-10 sm:pt-28 sm:pb-12">
      <Reveal>
        <p className="kicker mb-3">{kicker}</p>
        <h1 className="max-w-2xl text-display-sm font-semibold text-ink">{title}</h1>
        {description && (
          <p className="mt-3 max-w-xl text-sm text-ink-dim sm:text-base">{description}</p>
        )}
      </Reveal>
    </div>
  );
}
