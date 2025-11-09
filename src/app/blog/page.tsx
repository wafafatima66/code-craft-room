import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { getSupabase, type SupabaseBlogPost } from "@/lib/supabase"

export const metadata: Metadata = {
  title: "Blog - Code Craft Space | Web Design & E-Commerce Tips",
  description:
    "Learn about custom websites, e-commerce strategies, and digital marketing for small businesses. Expert insights from Code Craft Space.",
  keywords:
    "small business website, e-commerce tips, web design blog, SEO for small business, Etsy alternatives",
  openGraph: {
    type: "website",
    title: "Blog - Code Craft Space",
    description:
      "Expert tips on websites, e-commerce, and growth for small businesses.",
    url: "https://www.codecraftspace.com/blog",
    siteName: "Code Craft Space",
    images: [
      {
        url: "https://www.codecraftspace.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Code Craft Space",
    description:
      "Expert tips on websites, e-commerce, and growth for small businesses.",
  },
}

export default async function BlogIndexPage() {
  const supabase = getSupabase()
  let posts: ReadonlyArray<readonly [string, SupabaseBlogPost]> = []

  if (supabase) {
    const { data } = await supabase
      .from("blog_posts")
      .select("slug,title,description,author,date,readTime,ogImage")
      .order("date", { ascending: false })
    const rows = (data || []) as SupabaseBlogPost[]
    posts = rows.map((row) => [row.slug, row] as const)
  }

  return (
    <section className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-white/80 mb-10">
        Practical tips and opinions on building sites that are fast, flexible, and effective.
      </p>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-white/80">No posts available.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
        {posts.map(([slug, post]) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-accent transition-colors"
          >
            <div className="rounded-md overflow-hidden mb-4 bg-white/10">
              <Image
                src={post.ogImage || "/next.svg"}
                alt={post.title}
                width={800}
                height={420}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-accent">
              {post.title}
            </h2>
            <p className="text-white/70 text-sm mb-3">{post.description}</p>
            <div className="text-white/60 text-xs">
              {post.author} • {post.date} • {post.readTime}
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  )
}