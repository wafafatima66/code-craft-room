import Link from "next/link"
import type { Metadata } from "next"
import BlogShareBar from "@/components/BlogShareBar"

interface PageProps {
  params: Promise<{ slug: string }>
}

type BlogPostData = {
  title: string
  description: string
  author: string
  date: string
  readTime: string
  category: string
}

function getPost(slug: string): BlogPostData {
  const bySlug: Record<string, BlogPostData> = {
    "why-website-matters": {
      title: "Why your website matters more than your Instagram",
      description: "Social is rented. Your website is an asset you own.",
      author: "Fatima Amir",
      date: "2026-03-18",
      readTime: "5 min",
      category: "Website Strategy",
    },
    "what-is-maintenance": {
      title: "What is website maintenance? (Plain English)",
      description: "What it includes, why it matters, and what to expect.",
      author: "Fatima Amir",
      date: "2026-03-18",
      readTime: "6 min",
      category: "Website Care",
    },
    "website-mistakes": {
      title: "5 signs your website is hurting your brand",
      description: "Common issues that silently push customers away.",
      author: "Fatima Amir",
      date: "2026-03-18",
      readTime: "7 min",
      category: "Brand & Trust",
    },
    "website-cost": {
      title: "How much does a website really cost?",
      description: "The real costs: time, tools, fixes, and opportunity.",
      author: "Fatima Amir",
      date: "2026-03-18",
      readTime: "8 min",
      category: "Pricing",
    },
  }

  return (
    bySlug[slug] || {
      title: "Blog post",
      description: "Practical insights on improving your website.",
      author: "Fatima Amir",
      date: "2026-03-18",
      readTime: "5 min",
      category: "Website Care",
    }
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  const baseUrl = "https://www.codecraftspace.com"

  return {
    title: `${post.title} - Code Craft Space`,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "Code Craft Space",
      images: [
        {
          url: `${baseUrl}/next.svg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${baseUrl}/next.svg`],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export async function generateStaticParams() {
  return []
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)
  const baseUrl = "https://www.codecraftspace.com"
  const shareUrl = `${baseUrl}/blog/${slug}`

  return (
    <article className="min-h-screen bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-accent hover:text-accent/80 mb-6 inline-block font-semibold">
          ← Back to blog
        </Link>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-white/70">
            <span className="font-semibold text-white/80">{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} read</span>
            <span className="ml-0 sm:ml-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              {post.category}
            </span>
          </div>
        </header>

        <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="h-[400px] bg-white/10 flex items-center justify-center">
            <span className="text-white/60 font-semibold">Featured Image</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,720px)_minmax(0,320px)] gap-10 items-start">
          <div className="min-w-0">
            <div className="prose prose-invert max-w-none text-base leading-[1.8] prose-p:leading-[1.8] prose-h2:border-l-4 prose-h2:border-accent/70 prose-h2:pl-4 prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-a:text-accent hover:prose-a:text-accent/80 prose-blockquote:border-l-4 prose-blockquote:border-white/20 prose-blockquote:bg-white/5 prose-blockquote:px-4 prose-blockquote:py-2 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
              <p>
                This is a sample layout. Replace the content with your real article text. The styling supports headings, lists, blockquotes, and inline code.
              </p>

              <h2>What you’ll learn</h2>
              <ul>
                <li>How a well-maintained website builds trust</li>
                <li>What changes move the needle for customers</li>
                <li>Where most small business sites lose conversions</li>
              </ul>

              <h2>Plain-English example</h2>
              <p>
                Think of your website like your storefront. If the lights are flickering, the sign is outdated, and the door sticks, people leave.
                Small fixes compound into big results.
              </p>

              <blockquote>
                Most websites don’t need a redesign — they need consistent care.
              </blockquote>

              <h3>A simple checklist</h3>
              <ol>
                <li>Fix the broken things first</li>
                <li>Make the site faster and clearer</li>
                <li>Update content so customers trust it’s current</li>
              </ol>

              <p>
                If you want us to handle it, we can take over the ongoing improvements and maintenance starting at <code>$89/month</code>.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-extrabold mb-3">Want us to handle your website?</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                We fix, maintain, and improve websites for small businesses. Starting at $89/month.
              </p>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-charcoal px-6 py-3 font-semibold hover:bg-accent/90 transition"
              >
                See our plans →
              </Link>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10 pt-8">
              <BlogShareBar url={shareUrl} title={post.title} />
              <Link href="/blog" className="text-white/70 hover:text-accent transition-colors font-semibold">
                Back to blog →
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="space-y-6 sticky top-24">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-extrabold mb-4">About the author</h3>
                <p className="text-white font-semibold">Fatima Amir</p>
                <p className="text-white/70 text-sm">Software Engineer & Founder</p>
                <p className="mt-3 text-white/80 text-sm leading-relaxed">
                  I help small business owners keep their websites fast, reliable, and up-to-date — without the stress.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-extrabold mb-4">Related posts</h3>
                <div className="space-y-3">
                  {[
                    "What is website maintenance? (Plain English)",
                    "5 signs your website is hurting your brand",
                    "Why your website matters more than your Instagram",
                  ].map((t) => (
                    <div key={t} className="text-white/80 text-sm hover:text-accent transition-colors cursor-default">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
