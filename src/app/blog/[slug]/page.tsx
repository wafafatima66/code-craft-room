import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogShareBar from "@/components/BlogShareBar"
import blogData from "@/data/blog-posts.json"

const DEFAULT_FEATURED_IMAGE = "/blog/seo-guide.jpg"

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

        <div className="mb-12 rounded-2xl border border-white/10 overflow-hidden">
          <div className="relative h-[400px] w-full">
            <Image
              src={("image" in post && post.image) ? String(post.image) : DEFAULT_FEATURED_IMAGE}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,720px)_minmax(0,320px)] gap-10 items-start">
          <div className="min-w-0">
            <div
              className="prose prose-invert prose-lg max-w-none text-lg leading-[1.85] prose-p:text-lg prose-p:leading-[1.85] prose-li:text-lg prose-li:leading-[1.75] prose-h2:text-3xl prose-h2:font-extrabold prose-h2:border-l-4 prose-h2:border-accent/70 prose-h2:pl-4 prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-3 prose-a:text-accent hover:prose-a:text-accent/80 prose-blockquote:text-xl prose-blockquote:border-l-4 prose-blockquote:border-white/20 prose-blockquote:bg-white/5 prose-blockquote:px-4 prose-blockquote:py-2 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-extrabold mb-3">Want us to handle your website?</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                We build websites, dashboards, and automation systems for small businesses. One-time cost, built for you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-charcoal px-6 py-3 font-semibold hover:bg-accent/90 transition"
              >
                Get a free quote →
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
                  {relatedPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="block text-white/80 text-sm hover:text-accent transition-colors"
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
    </article>
  )
}
