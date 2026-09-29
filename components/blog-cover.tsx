import Image from "next/image";
import { cn } from "@/lib/utils";

export function BlogCover({
  cover,
  className,
}: {
  cover: string;
  className?: string;
}) {
  const isRemote = cover.startsWith("http://") || cover.startsWith("https://");

  return (
    <div className={cn("relative isolate overflow-hidden bg-base-surface", className)}>
      {isRemote ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      ) : (
        <Image
          src={cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/10 to-transparent" />
      <div className="absolute inset-0 bg-noise opacity-10" />
    </div>
  );
}
