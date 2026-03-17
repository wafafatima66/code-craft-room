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
  seoTitle?: string
  metaDescription?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  keywords?: string[]
}

function getPost(slug: string): BlogPostData {
  const bySlug: Record<string, BlogPostData> = {
    "why-website-matters": {
      title: "Why Your Business Needs a Website (Not Just Instagram)",
      description:
        "Think Instagram is enough for your business? Here's why every small business owner needs their own website — explained simply, no tech jargon.",
      author: "Fatima Amir",
      date: "March 2026",
      readTime: "4 min",
      category: "Beginner Guides",
      seoTitle:
        "Why Your Business Needs a Website (Not Just Instagram) | Code Craft Space",
      metaDescription:
        "Think Instagram is enough for your business? Here's why every small business owner needs their own website — explained simply, no tech jargon.",
      canonical: "https://www.codecraftspace.com/blog/why-website-matters",
      ogTitle: "Why Your Business Needs a Website (Not Just Instagram)",
      ogDescription:
        "Social media can disappear overnight. Your website stays forever. Here's why it matters.",
    },
    "what-is-maintenance": {
      title: "What Does Website Maintenance Actually Include? (Plain English)",
      description:
        "Most business owners don't know what website maintenance means. Here's a plain-English breakdown of everything that happens when someone manages your site every month.",
      author: "Fatima Amir",
      date: "March 2026",
      readTime: "5 min",
      category: "Maintenance",
      seoTitle: "What Does Website Maintenance Actually Include? | Code Craft Space",
      metaDescription:
        "Most business owners don't know what website maintenance means. Here's a plain-English breakdown of everything that happens when someone manages your site every month.",
      canonical: "https://www.codecraftspace.com/blog/what-is-maintenance",
    },
    "website-mistakes": {
      title: "5 Signs Your Website Is Losing You Customers Right Now",
      description:
        "Most business owners don't know their website is quietly driving visitors away. Check these 5 red flags and see how your site scores.",
      author: "Fatima Amir",
      date: "March 2026",
      readTime: "4 min",
      category: "Website Tips",
      seoTitle: "5 Signs Your Website Is Losing You Customers Right Now | Code Craft Space",
      metaDescription:
        "Most business owners don't know their website is quietly driving visitors away. Check these 5 red flags and see how your site scores.",
      canonical: "https://www.codecraftspace.com/blog/website-mistakes",
      keywords: ["signs your website is losing customers"],
    },
    "website-cost": {
      title: "How much does a website really cost?",
      description: "The real costs: time, tools, fixes, and opportunity.",
      author: "Fatima Amir",
      date: "March 2026",
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
  const canonical = post.canonical || `https://www.codecraftspace.com/blog/${slug}`
  const ogTitle = post.ogTitle || post.title
  const ogDescription = post.ogDescription || post.metaDescription || post.description

  return {
    title: post.seoTitle || `${post.title} | Code Craft Space`,
    description: post.metaDescription || post.description,
    keywords: post.keywords,
    openGraph: {
      type: "article",
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: "Code Craft Space",
      images: [
        {
          url: "https://www.codecraftspace.com/next.svg",
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ["https://www.codecraftspace.com/next.svg"],
    },
    alternates: {
      canonical,
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
              {slug === "why-website-matters" ? (
                <>
                  <p>
                    You&apos;ve spent months building your Instagram. You&apos;ve got followers, posts, maybe even some DMs from potential customers. So the question is: do you really need a website too? The honest answer is yes — and it&apos;s not even close. Here&apos;s why.
                  </p>

                  <h2>You Don&apos;t Actually Own Your Instagram Account</h2>
                  <p>
                    Social media platforms own your account, your followers, and your content. If Instagram decides to ban you, change its algorithm, or shut down tomorrow, everything you&apos;ve built disappears with it. It&apos;s happened to thousands of business owners. A website is different. Your domain, your content, your visitors — all yours. Nobody can take that away.
                  </p>

                  <h2>Google Can Find Your Website. It Can&apos;t Find Your Instagram Posts.</h2>
                  <p>
                    When someone types &quot;bakery near me&quot; or &quot;affordable web designer in Texas&quot; into Google, websites show up — not Instagram profiles. Search engine traffic is free, consistent, and full of people who are actively looking for what you offer. Without a website, you&apos;re invisible to all of them.
                  </p>

                  <h2>Your Website Works for You 24/7</h2>
                  <p>
                    Your website is like a sales assistant that never sleeps, never takes a holiday, and never asks for a raise. It answers questions, showcases your work, collects enquiries, and builds trust — even at 3am when you&apos;re asleep. Instagram requires you to be constantly active to stay visible. Your website just works.
                  </p>

                  <h2>A Website Makes You Look Professional</h2>
                  <p>
                    Here&apos;s the truth: 75% of people judge a business&apos;s credibility based on its website design. When a potential client or customer hears about you, the first thing they do is Google you. If they find nothing — or worse, just an Instagram page — it raises doubts. A clean, clear website says: &quot;I&apos;m serious about my business.&quot;
                  </p>

                  <h2>Social Media and Websites Work Together</h2>
                  <p>
                    This isn&apos;t an either/or situation. Instagram and Twitter are brilliant for reaching new people and building a community. Your website is where you convert that audience into paying customers. Think of social media as the conversation, and your website as the place where the deal gets done.
                  </p>

                  <p>
                    You don&apos;t need a complicated website. You don&apos;t need to know how to code. You just need a home on the internet that belongs to you. Start there.
                  </p>
                </>
              ) : slug === "what-is-maintenance" ? (
                <>
                  <p>
                    If you&apos;ve heard the phrase &quot;website maintenance&quot; and nodded along without really knowing what it means — you&apos;re not alone. Most business owners have no idea what&apos;s actually involved. This post breaks it down simply, so you can understand exactly what you&apos;re paying for (or missing out on).
                  </p>

                  <h2>Backups — Your Safety Net</h2>
                  <p>
                    Imagine spending two years building your website and losing it all overnight to a hack or a server crash. Backups prevent that. Regular backups save a full copy of your website — content, products, settings, everything — so that if anything goes wrong, it can be restored in minutes. Good maintenance includes daily or weekly backups stored securely off-site.
                  </p>

                  <h2>Security Monitoring</h2>
                  <p>
                    Hackers don&apos;t just target big companies. In fact, small business websites are attacked more often because they&apos;re easier targets. Security monitoring means someone is watching your site for unusual activity, malware, and vulnerabilities — and fixing them before they cause damage.
                  </p>

                  <h2>Software Updates</h2>
                  <p>
                    Your website runs on software — WordPress, plugins, themes, frameworks. These need regular updates, just like your phone apps. Skipping updates leaves security holes wide open. Maintenance includes applying these updates carefully and making sure nothing breaks in the process.
                  </p>

                  <h2>Performance Checks and Speed Fixes</h2>
                  <p>
                    A slow website loses customers. Studies show that if your site takes more than 3 seconds to load, over half your visitors leave. Performance maintenance means regularly checking your site&apos;s speed and fixing whatever is slowing it down — image sizes, code bloat, caching, server response time.
                  </p>

                  <h2>Content and Page Updates</h2>
                  <p>
                    Business changes. Prices change. Staff change. Services change. Website maintenance means someone keeps your site up to date — adding new pages, updating existing content, uploading new photos, and making sure everything reflects your current business accurately.
                  </p>

                  <h2>Error Fixing</h2>
                  <p>
                    Forms stop working. Pages return errors. Buttons break. These are small things individually, but each one costs you potential customers. Maintenance means catching and fixing these issues fast — usually within 24 hours.
                  </p>

                  <h2>Growth Suggestions</h2>
                  <p>
                    Good website maintenance isn&apos;t just about keeping things from breaking. It&apos;s about making things better. A great maintenance partner will also flag opportunities — &quot;this page gets a lot of traffic but has no call to action&quot; or &quot;your contact form has a 60% drop-off rate.&quot; These insights are what turn a working website into a growing one.
                  </p>

                  <p>
                    Website maintenance isn&apos;t glamorous — but it&apos;s what separates a website that quietly loses you customers from one that quietly earns them.
                  </p>
                </>
              ) : slug === "website-mistakes" ? (
                <>
                  <h2>1. It takes more than 3 seconds to load</h2>
                  <p>
                    This is the silent killer. Studies from Google show that 53% of mobile users abandon a website that takes longer than 3 seconds to load. You may have a beautiful website — but if it&apos;s slow, most visitors never see it. Test your site right now at{" "}
                    <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
                      PageSpeed Insights
                    </a>{" "}
                    (free from Google). If your score is below 70, this is costing you customers.
                  </p>

                  <h2>2. It doesn&apos;t look right on a phone</h2>
                  <p>
                    Over 60% of web traffic comes from mobile devices. If your website looks broken, cramped, or hard to navigate on a phone, the majority of your visitors are having a terrible experience. Pull out your phone right now and scroll through your own website. Would you trust a business whose site looked like this?
                  </p>

                  <h2>3. There&apos;s no clear &quot;what do you do&quot; within 5 seconds</h2>
                  <p>
                    When someone lands on your homepage, they make a snap judgment in about 5 seconds: does this solve my problem? If your headline is vague (&quot;Welcome to our website&quot; or &quot;We are a passionate team...&quot;) — they&apos;re gone. Your homepage headline needs to say who you help, what problem you solve, and why they should care. Nothing else.
                  </p>

                  <h2>4. There&apos;s no easy way to contact you</h2>
                  <p>
                    This one sounds obvious but it&apos;s shockingly common. Hidden contact pages, forms that don&apos;t work, no phone number, no email visible — each of these is a closed door in the face of a potential customer. Your contact details should be one click away from any page on your site.
                  </p>

                  <h2>5. Your content is outdated</h2>
                  <p>
                    A blog post from 2019 as your latest content. A team page featuring someone who left three years ago. Service prices that changed six months back. Outdated content signals one thing to visitors: this business is not paying attention. And if you&apos;re not paying attention to your website, why would they trust you to pay attention to their needs?
                  </p>
                </>
              ) : (
                <>
                  <p>
                    This post is coming soon. In the meantime, explore the other beginner guides and website tips on the blog.
                  </p>
                </>
              )}
            </div>

            {slug === "website-mistakes" && (
              <p className="mt-10 text-white/80 leading-relaxed">
                How many did you spot? If it&apos;s more than one, your website is likely costing you customers every day. We fix all of these as part of our $89/month care plan.
              </p>
            )}

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-extrabold mb-3">Want us to handle your website?</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                We maintain and improve websites for small businesses. Starting at $89/month.
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
