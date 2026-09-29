import type { MetadataRoute } from "next";
import { site, projects, blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/gallery",
    "/research",
    "/blog",
    "/experience",
    "/skills",
    "/resume",
    "/contact",
  ].map((path) => ({
      url: `${site.domain}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${site.domain}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.domain}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}
