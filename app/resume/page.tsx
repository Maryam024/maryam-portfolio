import type { Metadata } from "next";
import { Download, Printer } from "lucide-react";
import { PageHeader } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Download or preview Maryam Zaheer's résumé.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        kicker="Résumé"
        title="Everything that matters, on one page"
        description="Preview below, or download the PDF."
      />

      <section className="shell pb-28">
        <Reveal>
          <div className="mb-8 flex flex-wrap gap-3">
            <a href={site.resumeUrl} download className={cn(buttonVariants({ variant: "signal" }))}>
              <Download className="h-4 w-4" /> Download PDF
            </a>
            <PrintButton />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="overflow-hidden rounded-2xl border border-line-strong bg-base-surface shadow-panel">
            <object
              data={`${site.resumeUrl}#toolbar=0`}
              type="application/pdf"
              className="h-[85vh] w-full"
              aria-label="Résumé preview"
            >
              <div className="flex h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center">
                <p className="text-ink-dim">
                  Your browser can&apos;t preview PDFs inline.
                </p>
                <a
                  href={site.resumeUrl}
                  download
                  className={cn(buttonVariants({ variant: "signal" }))}
                >
                  <Download className="h-4 w-4" /> Download instead
                </a>
              </div>
            </object>
          </div>
        </Reveal>
      </section>
    </>
  );
}
