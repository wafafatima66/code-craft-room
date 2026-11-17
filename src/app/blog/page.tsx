import Link from "next/link"
import type { Metadata } from "next"
import blogData from "@/data/blog-posts.json"

export const metadata: Metadata = {
  title: "Blog — Code Craft Space",
  description:
    "Restaurant automation insights: chatbots, review management, reservations, and AI tools for independent restaurant owners.",
  openGraph: {
    type: "website",
    title: "Blog — Code Craft Space",
    description:
      "Restaurant automation insights: chatbots, review management, reservations, and AI tools for independent restaurant owners.",
    url: "https://www.codecraftspace.com/blog",
    siteName: "Code Craft Space",
  },
  twitter: {
    card: "summary",
    title: "Blog — Code Craft Space",
    description:
      "Restaurant automation insights: chatbots, review management, reservations, and AI tools for independent restaurant owners.",
  },
  alternates: { canonical: "https://www.codecraftspace.com/blog" },
}

const badgeColor = (category: string): string => {
  if (category === "Automation") return "bg-rb/10 text-rb border-rb/20"
  if (category === "Marketing") return "bg-rp/10 text-rp border-rp/20"
  if (category === "Online Ordering") return "bg-rg/10 text-rg border-rg/20"
  return "bg-ink/5 text-ink/60 border-ink/15"
}

export default function BlogIndexPage() {
  const posts = blogData.posts

  return (
    <div className="min-h-screen bg-rcream">

      {/* ─── HERO ─── */}
      <section className="bg-ink py-20 relative overflow-hidden">
        <div className="absolute top-8 right-16 w-12 h-12 bg-ry opacity-70 hidden md:block" />
        <div className="absolute bottom-8 right-40 w-8 h-8 bg-rg opacity-70 hidden md:block" />
        <div className="absolute top-16 left-8 w-6 h-6 bg-rb opacity-60 hidden md:block" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-rcream/40 mb-4 uppercase">Restaurant Automation</div>
          <h1 className="text-5xl md:text-7xl font-black text-rcream tracking-tighter leading-[0.9] mb-6">
            The Blog.
          </h1>
          <p className="text-rcream/60 text-xl max-w-xl leading-relaxed">
            Practical guides on AI, automation, and tools that help independent restaurants run smarter.
          </p>
        </div>
      </section>

      {/* ─── POSTS GRID ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl border border-ink/10 p-8 hover:border-rb/30 hover:shadow-lg transition-all"
              >
                <div className="mb-5">
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${badgeColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-ink leading-snug tracking-tight group-hover:text-rb transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-ink/60 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="text-xs text-ink/40 font-semibold uppercase tracking-widest">{post.meta}</div>
                  <span className="text-sm font-black text-rb group-hover:text-ink transition-colors">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
