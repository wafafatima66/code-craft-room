import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Code Craft Space",
  description:
    "Simple explanations of websites, branding, and the web — for non-technical business owners.",
  keywords:
    "website maintenance, website tips, branding, SEO, small business website",
  openGraph: {
    type: "website",
    title: "Blog - Code Craft Space",
    description:
      "Simple explanations of websites, branding, and the web — for non-technical business owners.",
    url: "https://www.codecraftspace.com/blog",
    siteName: "Code Craft Space",
    images: [
      {
        url: "https://www.codecraftspace.com/next.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Code Craft Space",
    description:
      "Simple explanations of websites, branding, and the web — for non-technical business owners.",
  },
}

export default async function BlogIndexPage() {
  const categories = [
    "All",
    "Beginner Guides",
    "Website Tips",
    "Branding",
    "SEO",
    "Maintenance",
  ] as const

  const posts = [
    {
      title: "Why your business needs a website even if you already have Instagram",
      category: "Beginner Guides",
      excerpt:
        "Social media accounts can disappear overnight. Here's why owning your own website is non-negotiable.",
      meta: "March 2026 | 4 min read",
      href: "/blog/why-website-matters",
    },
    {
      title: "What does website maintenance actually include?",
      category: "Maintenance",
      excerpt:
        "A plain-English breakdown of what happens when someone manages your website every month.",
      meta: "March 2026 | 5 min read",
      href: "/blog/what-is-maintenance",
    },
    {
      title: "5 signs your website is losing you customers right now",
      category: "Website Tips",
      excerpt:
        "Most business owners don't know their website is quietly driving visitors away. Check these 5 red flags.",
      meta: "March 2026 | 4 min read",
      href: "/blog/website-mistakes",
    },
  ] as const

  const badgeClass = (category: (typeof posts)[number]["category"]) => {
    if (category === "Beginner Guides") return "bg-accent/10 text-accent border-accent/20"
    if (category === "Maintenance") return "bg-primary/10 text-primary border-primary/20"
    return "bg-white/5 text-white/80 border-white/10"
  }

  return (
    <div className="min-h-screen bg-charcoal text-white">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="grain absolute inset-0 opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Blog
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
            <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
              Simple explanations of websites, branding, and the web — for non-technical business owners.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`rounded-full px-5 py-2 text-sm font-semibold border transition-colors ${c === "All"
                    ? "bg-gradient-to-r from-accent/20 to-primary/20 border-white/20 text-white"
                    : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-accent/30"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${badgeClass(
                      post.category
                    )}`}
                  >
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-white leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="text-sm text-white/60">{post.meta}</div>
                  <span className="text-sm font-semibold text-accent group-hover:text-accent/80 transition-colors">
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
