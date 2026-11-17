import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogShareBar from "@/components/BlogShareBar"
import blogData from "@/data/blog-posts.json"

interface PageProps {
  params: Promise<{ slug: string }>
}

function getPost(slug: string) {
  return blogData.posts.find((p) => p.slug === slug) ?? null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
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
      images: [{ url: `${baseUrl}/next.svg`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${baseUrl}/next.svg`],
    },
    alternates: { canonical: `${baseUrl}/blog/${slug}` },
    robots: { index: true, follow: true },
  }
}

export async function generateStaticParams() {
  return blogData.posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const baseUrl = "https://www.codecraftspace.com"
  const shareUrl = `${baseUrl}/blog/${slug}`

  const relatedPosts = blogData.posts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  // Build JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Person", name: "Fatima Amir" },
        publisher: { "@type": "Organization", name: "Code Craft Space", url: "https://codecraftspace.com" },
        mainEntityOfPage: `${baseUrl}/blog/${slug}`,
        url: `${baseUrl}/blog/${slug}`,
        ...((post as Record<string, unknown>).keywords ? { keywords: (post as Record<string, unknown>).keywords } : {}),
        inLanguage: "en-US",
      },
      ...((post as Record<string, unknown>).faq
        ? [{
            "@type": "FAQPage",
            mainEntity: ((post as Record<string, unknown>).faq as Array<{ q: string; a: string }>).map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${baseUrl}/blog/${slug}` },
        ],
      },
    ],
  }

  return (
    <article className="min-h-screen bg-rcream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── HERO ─── */}
      <section className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute top-6 right-16 w-10 h-10 bg-ry opacity-60 hidden md:block" />
        <div className="absolute bottom-6 right-36 w-6 h-6 bg-rg opacity-60 hidden md:block" />
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/blog" className="text-rcream/50 hover:text-rcream text-sm font-semibold transition-colors mb-6 inline-block">
            ← All posts
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-widest text-rcream/40 uppercase">{post.category}</span>
            <span className="text-rcream/20">·</span>
            <span className="text-xs text-rcream/40">{post.date}</span>
            <span className="text-rcream/20">·</span>
            <span className="text-xs text-rcream/40">{post.readTime} read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-rcream tracking-tighter leading-[0.95] max-w-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-rcream/55 text-lg max-w-2xl leading-relaxed">{post.description}</p>
          <p className="mt-4 text-rcream/40 text-sm font-semibold">By {post.author}</p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,740px)_minmax(0,300px)] gap-12 items-start">

            <div className="min-w-0">
              <div
                className="prose prose-lg max-w-none text-ink prose-p:text-ink/80 prose-p:leading-[1.9] prose-li:text-ink/80 prose-li:leading-[1.8] prose-h2:text-3xl prose-h2:font-black prose-h2:text-ink prose-h2:tracking-tight prose-h2:border-l-4 prose-h2:border-rb prose-h2:pl-4 prose-h2:mt-14 prose-h2:mb-5 prose-h3:text-xl prose-h3:font-black prose-h3:text-ink prose-h3:mt-8 prose-h3:mb-3 prose-strong:text-ink prose-a:text-rb hover:prose-a:text-ink prose-a:no-underline hover:prose-a:underline prose-ul:space-y-2 prose-ol:space-y-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA card */}
              <div className="mt-14 bg-ink rounded-3xl p-10">
                <div className="text-xs font-bold tracking-widest text-rcream/40 uppercase mb-3">Free Demo</div>
                <h3 className="text-3xl font-black text-rcream tracking-tight mb-3">
                  Ready to automate your restaurant?
                </h3>
                <p className="text-rcream/60 leading-relaxed mb-7 max-w-lg">
                  We build AI chatbots, review automation, and reservation tools for independent restaurants. Book a free 30-min call.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-rcream text-ink px-8 py-3.5 font-black hover:bg-ry transition-colors text-sm"
                >
                  Book Free Demo →
                </Link>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-ink/10 pt-8">
                <BlogShareBar url={shareUrl} title={post.title} />
                <Link href="/blog" className="text-ink/50 hover:text-rb transition-colors font-semibold text-sm">
                  ← Back to blog
                </Link>
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="space-y-6 sticky top-24">
                <div className="rounded-3xl border border-ink/10 bg-white p-6">
                  <h3 className="text-base font-black text-ink mb-4 tracking-tight">About the author</h3>
                  <p className="font-black text-ink">Fatima Amir</p>
                  <p className="text-ink/50 text-sm">Founder, Code Craft Space</p>
                  <p className="mt-3 text-ink/60 text-sm leading-relaxed">
                    Building AI automation and websites for independent restaurant owners.
                  </p>
                </div>

                <div className="rounded-3xl border border-ink/10 bg-white p-6">
                  <h3 className="text-base font-black text-ink mb-4 tracking-tight">More posts</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="block text-ink/70 text-sm hover:text-rb transition-colors leading-snug"
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </article>
  )
}
