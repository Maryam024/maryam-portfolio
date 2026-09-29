import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Lightbulb, ArrowRight } from "lucide-react";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { BlogCover } from "@/components/blog-cover";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug);

  return (
    <>
      <section className="shell pt-28 pb-10 sm:pt-32">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All posts
          </Link>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <Badge key={t} variant="signal">
                {t}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 max-w-3xl text-display-lg font-semibold text-ink">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-dim">{post.excerpt}</p>

          <div className="mt-6 flex items-center gap-4 text-xs text-ink-faint">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
          </div>
        </Reveal>
      </section>

      <Reveal className="shell">
        <BlogCover cover={post.cover} className="aspect-[21/9] w-full rounded-2xl border border-line-strong shadow-panel" />
      </Reveal>

      <section className="shell py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <Reveal key={i}>
                  <h2 className="pt-4 text-xl font-semibold text-ink">{block.text}</h2>
                </Reveal>
              );
            }

            if (block.type === "p") {
              return (
                <Reveal key={i}>
                  <p className="leading-relaxed text-ink-dim">{block.text}</p>
                </Reveal>
              );
            }

            if (block.type === "steps") {
              return (
                <Reveal key={i}>
                  <div className="grid gap-3 rounded-2xl border border-line bg-fg/[0.03] p-6 sm:grid-cols-2 lg:grid-cols-4">
                    {block.items.map((step, idx) => (
                      <div key={step} className="flex items-start gap-2.5">
                        <div className="flex flex-1 items-start gap-2.5 rounded-xl bg-fg/[0.03] p-3.5">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 font-mono text-[11px] font-semibold text-signal-soft">
                            {idx + 1}
                          </span>
                          <p className="text-sm leading-snug text-ink-dim">{step}</p>
                        </div>
                        {idx < block.items.length - 1 && (
                          <ArrowRight className="mt-3.5 hidden h-4 w-4 shrink-0 text-ink-faint lg:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              );
            }

            if (block.type === "table") {
              return (
                <Reveal key={i}>
                  <div className="overflow-x-auto rounded-2xl border border-line">
                    <table className="w-full border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-line bg-fg/[0.04]">
                          {block.headers.map((h) => (
                            <th key={h} className="px-4 py-3 font-medium text-ink">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, ri) => (
                          <tr key={ri} className="border-b border-line last:border-0 even:bg-fg/[0.015]">
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={cn(
                                  "px-4 py-3 align-top leading-relaxed",
                                  ci === 0 ? "font-medium text-ink" : "text-ink-dim"
                                )}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {block.caption && (
                    <p className="mt-2 text-xs text-ink-faint">{block.caption}</p>
                  )}
                </Reveal>
              );
            }

            if (block.type === "image") {
              const isRemote = block.src.startsWith("http://") || block.src.startsWith("https://");
              return (
                <Reveal key={i}>
                  <figure className="not-prose">
                    <div className="relative isolate overflow-hidden rounded-2xl border border-line-strong shadow-panel">
                      {isRemote ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={block.src}
                          alt={block.alt}
                          className="aspect-[16/10] w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="relative aspect-[16/10] w-full">
                          <Image
                            src={block.src}
                            alt={block.alt}
                            fill
                            sizes="(min-width: 1024px) 720px, 100vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                    {block.caption && (
                      <figcaption className="mt-2.5 text-xs leading-relaxed text-ink-faint">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              );
            }

            return (
              <Reveal key={i}>
                <div className="rounded-2xl border border-line bg-signal/[0.06] p-6">
                  <div className="mb-3 flex items-center gap-2 text-ink">
                    <Lightbulb className="h-4 w-4 text-signal-soft" />
                    <p className="text-sm font-semibold">{block.title}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ variant: "signal" }))}>
            Talk to me about this <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {otherPosts.length > 0 && (
          <div className="shell mt-14">
            <p className="kicker mb-6">Read next</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card-hover group block overflow-hidden rounded-2xl border border-line bg-fg/[0.02]"
                >
                  <BlogCover cover={p.cover} className="aspect-[16/9] w-full" />
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-ink transition-colors group-hover:text-signal-soft">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-ink-faint">{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
