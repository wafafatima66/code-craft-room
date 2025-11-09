import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { getSupabase, type SupabaseBlogPost } from "@/lib/supabase"
// No local fallbacks; rely solely on Supabase data

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const supabase = getSupabase()
  let post: SupabaseBlogPost | null = null
  if (supabase) {
    const { data } = await supabase
      .from("blog_posts")
      .select("slug,title,description,keywords,author,ogImage,date,readTime,content")
      .eq("slug", slug)
      .limit(1)
      .maybeSingle()
    post = (data as SupabaseBlogPost | null) ?? null
  }

  if (!post) {
    return {
      title: "Blog Not Found",
    }
  }

  const baseUrl = "https://www.codecraftspace.com"

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords || undefined,
    authors: [{ name: post.author }],
    creator: post.author,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "Code Craft Space",
      images: [
        {
          url: `${baseUrl}${post.ogImage || "/next.svg"}`,
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
      images: [`${baseUrl}${post.ogImage || "/next.svg"}`],
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
  const supabase = getSupabase()
  if (supabase) {
    const { data } = await supabase.from("blog_posts").select("slug")
    return (data || []).map((row: { slug: string }) => ({ slug: row.slug }))
  }
  return []
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const supabase = getSupabase()
  let post: SupabaseBlogPost | null = null
  if (supabase) {
    const { data } = await supabase
      .from("blog_posts")
      .select("slug,title,description,keywords,author,ogImage,date,readTime,content")
      .eq("slug", slug)
      .limit(1)
      .maybeSingle()
    post = (data as SupabaseBlogPost | null) ?? null
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
      </div>
    )
  }

  const baseUrl = "https://www.codecraftspace.com"
  const articleUrl = `${baseUrl}/blog/${slug}`
  // Build related posts list
  let relatedPosts: Array<{ slug: string; title: string; description: string }> = []
  if (supabase) {
    const { data } = await supabase
      .from("blog_posts")
      .select("slug,title,description")
      .order("date", { ascending: false })
      .limit(4)
    relatedPosts = (data || [])
      .filter((p) => p.slug !== slug)
      .slice(0, 2) as Array<{ slug: string; title: string; description: string }>
  }

  return (
    <>
      {/* JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: `${baseUrl}${post.ogImage}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: post.author,
              url: baseUrl,
            },
            publisher: {
              "@type": "Organization",
              name: "Code Craft Space",
              url: baseUrl,
            },
            mainEntityOfPage: articleUrl,
          }),
        }}
      />

      <article className="container mx-auto max-w-3xl px-4 py-12">
        {/* Hero Section */}
        <div className="mb-8">
          <Link href="/blog" className="text-accent hover:text-accent/80 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-white/70 mb-6">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-lg overflow-hidden bg-white/10">
          <Image
            src={post.ogImage || "/next.svg"}
            alt={post.title}
            width={800}
            height={420}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Blog Content */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-12 prose-h1:mb-6 prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-p:leading-relaxed prose-strong:text-accent prose-li:marker:text-accent prose-ul:my-4 prose-a:text-accent hover:prose-a:text-accent/80 prose-blockquote:border-l-4 prose-blockquote:border-accent/60 prose-blockquote:bg-white/5 prose-blockquote:px-4 prose-blockquote:py-2 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Section */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
          <p className="text-white/80 mb-6">
            Get a free consultation and see how a custom website can boost your revenue and cut your costs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-charcoal px-6 py-3 rounded-lg hover:bg-accent/90 transition"
          >
            Start Your Free Consultation
          </Link>
        </div>

        {/* Related Posts */}
        <div className="border-t border-white/10 pt-12">
          <h3 className="text-2xl font-bold mb-6">More from the Blog</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic related posts: last 2 posts excluding current */}
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="block p-4 border border-white/10 rounded-lg hover:border-accent transition"
              >
                <h4 className="font-bold text-lg mb-2 text-white hover:text-accent">
                  {related.title}
                </h4>
                <p className="text-white/70 text-sm mb-3">{related.description}</p>
                <span className="text-accent text-sm font-medium">Read more →</span>
              </Link>
              ))}
          </div>
        </div>
      </article>
    </>
  )
}