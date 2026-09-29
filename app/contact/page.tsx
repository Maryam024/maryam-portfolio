import type { Metadata } from "next";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { PageHeader } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Maryam Zaheer.",
};

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Github, label: "GitHub", value: "@Maryam024", href: site.github },
  { icon: Linkedin, label: "LinkedIn", value: "maryam-zaheer", href: site.linkedin },
  { icon: MapPin, label: "Location", value: site.location, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Have a role, project, or question in mind?"
        description="The form opens a pre-filled email, or reach me directly below."
      />

      <section className="shell pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              {channels.map((c) => {
                const Content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-fg/[0.03] p-5 transition-colors hover:border-fg/20">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal-soft">
                      <c.icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-xs text-ink-faint">{c.label}</p>
                      <p className="text-sm text-ink">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={c.label}>{Content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-line-strong bg-fg/[0.03] p-7 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
