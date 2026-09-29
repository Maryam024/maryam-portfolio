"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="shell flex min-h-screen flex-col items-center justify-center py-32 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-8xl font-semibold text-ink sm:text-9xl"
      >
        404
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 max-w-md text-ink-dim"
      >
        This route doesn&apos;t exist — but every route on this site that does was actually
        shipped. Let&apos;s get you back on one.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8"
      >
        <Link href="/" className={cn(buttonVariants({ variant: "signal" }))}>
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </motion.div>
    </section>
  );
}
