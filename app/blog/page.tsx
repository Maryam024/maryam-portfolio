import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHeader } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { BlogCover } from "@/components/blog-cover";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on AI agents, explainable AI, and the engineering ideas behind Maryam Zaheer's projects and research.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        kicker="Blog"
        title="Notes on AI, agents, and building things that hold up"
        description="Short write-ups where the theory meets a real pipeline."
      />

      <section className="shell pb-28">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-hover group grid overflow-hidden rounded-2xl border border-line bg-fg/[0.02] shadow-panel sm:grid-cols-2"
              >
                <BlogCover cover={post.cover} className="aspect-[16/9] w-full sm:aspect-auto sm:h-full" />
                <div className="flex flex-col justify-center p-6">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <h2 className="mt-4 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-signal-soft">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink-faint">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-line px-6 py-8 text-center text-sm text-ink-faint">
            More posts coming soon
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
