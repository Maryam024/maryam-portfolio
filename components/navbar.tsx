"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  LayoutGrid,
  FlaskConical,
  Briefcase,
  Layers,
  Mail,
  NotebookPen,
} from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/about": User,
  "/projects": LayoutGrid,
  "/research": FlaskConical,
  "/blog": NotebookPen,
  "/experience": Briefcase,
  "/skills": Layers,
  "/contact": Mail,
};

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "py-2.5" : "py-3.5"
      )}
    >
      <div className="shell">
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-full px-3 py-1.5 transition-all duration-300",
            scrolled ? "glass shadow-panel" : "border border-transparent"
          )}
        >
          <Link href="/" className="group flex shrink-0 items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-signal via-ember to-bloom font-mono text-[11px] font-semibold text-white shadow-glow transition-transform group-hover:-rotate-6">
              {site.initials}
            </span>
            <span className="hidden text-sm font-medium text-ink md:block">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              const Icon = iconMap[link.href];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[13px] transition-colors",
                    active ? "text-ink" : "text-ink-dim hover:text-ink"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-fg/[0.06] border border-line"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  {Icon && <Icon className="relative h-3.5 w-3.5" />}
                  <span className="relative hidden xl:inline">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 overflow-hidden rounded-2xl glass shadow-panel lg:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {navLinks.map((link) => {
                  const Icon = iconMap[link.href];
                  const active =
                    pathname === link.href || pathname.startsWith(link.href + "/");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm transition-colors",
                        active
                          ? "bg-fg/[0.06] text-ink"
                          : "text-ink-dim hover:bg-fg/[0.04] hover:text-ink"
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {link.label}
                    </Link>
                  );
                })}
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 rounded-xl bg-signal px-4 py-3 text-center text-sm font-medium text-white"
                >
                  Let&apos;s talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
