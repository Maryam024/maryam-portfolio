import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AmbientBackground } from "@/components/ambient-background";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — Full-Stack Developer & AI/ML Engineer`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Maryam Zaheer",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Software Engineer Portfolio",
    "React Developer",
    "Next.js Developer",
    "Computer Vision",
    "Retrieval-Augmented Generation",
    "Vision-Language Models",
    "Medical AI Research",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Full-Stack Developer & AI/ML Engineer`,
    description: site.tagline,
    url: site.domain,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full-Stack Developer & AI/ML Engineer`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <AmbientBackground />
          <Navbar />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
