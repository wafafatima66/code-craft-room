import type { MetadataRoute } from "next"
import { blogPosts } from "./blog/posts"

const baseUrl = "https://www.codecraftspace.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changefreq: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changefreq: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changefreq: "yearly", priority: 0.3 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changefreq: "weekly", priority: 0.9 },
  ]

  const postRoutes: MetadataRoute.Sitemap = Object.entries(blogPosts).map(([slug, post]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(post.date),
    changefreq: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes]
}