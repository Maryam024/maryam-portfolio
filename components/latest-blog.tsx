import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LatestBlog() {
  const posts = blogPosts.slice(0, 2);
  if (posts.length === 0) return null;

  return (
    <section className="py-20 sm:py-24">
      <div className="shell max-w-3xl">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="kicker">Latest from the blog</p>
            <Link
              href="/blog"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-ink-dim")}
            >
              All posts <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-6 divide-y divide-line border-t border-line">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1.5 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <span className="text-lg font-medium text-ink transition-colors group-hover:text-signal-soft">
                  {post.title}
                </span>
                <span className="shrink-0 font-mono text-xs text-ink-faint">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
