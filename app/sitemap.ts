import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace this with your actual custom domain once mapped (e.g., https://sainikhil.me)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-t65m5dm5sa-uc.a.run.app";

  const projects = ["saara-ai", "vitt", "aerialeye", "super-orchestrator"];
  
  const projectUrls = projects.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...projectUrls,
  ];
}
