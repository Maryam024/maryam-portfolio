import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { site, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-signal to-signal-dim font-mono text-sm font-semibold text-white">
                {site.initials}
              </span>
              <span className="text-sm font-medium text-ink">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-dim">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="kicker mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-dim transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker mb-4">Elsewhere</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
                >
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Framer Motion.</p>
          <a
            href={site.resumeUrl}
            download
            className="inline-flex items-center gap-1 text-ink-faint transition-colors hover:text-ink"
          >
            Download résumé <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
