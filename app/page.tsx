import { Hero } from "@/components/hero";
import { ResearchSpotlight } from "@/components/research-spotlight";
import { LatestBlog } from "@/components/latest-blog";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResearchSpotlight />
      <LatestBlog />
    </>
  );
}
