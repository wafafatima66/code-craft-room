import type { MetadataRoute } from "next"
import { getSupabase } from "@/lib/supabase"

const baseUrl = "https://www.codecraftspace.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ]

  const supabase = getSupabase()
  let postRoutes: MetadataRoute.Sitemap = []
  if (supabase) {
    const { data } = await supabase
      .from("blog_posts")
      .select("slug,date")
      .order("date", { ascending: false })
    postRoutes = (data || []).map((row: { slug: string; date: string }) => ({
      url: `${baseUrl}/blog/${row.slug}`,
      lastModified: row.date ? new Date(row.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  }

  return [...staticRoutes, ...postRoutes]
}