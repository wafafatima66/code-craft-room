import Hero from "@/components/Hero";
// import ProblemSolution from "@/components/ProblemSolution";
// import WhyChoose from "@/components/WhyChoose";
// import WhoWeHelp from "@/components/WhoWeHelp";
import Link from "next/link";
import Image from "next/image";
import { ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
// import Testimonials from "@/components/Testimonials";
// Navbar and Footer are provided globally via layout
// import PreviousWork from "@/components/PreviousWork";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        {/* <ProblemSolution /> */}
        {/* <WhyChoose /> */}
        {/* Uncomment to include comparison
        <CustomCodeComparison />
        */}
        {/* <WhoWeHelp /> */}
        {/* <PreviousWork /> */}

        <Services />
        <section id="how-it-works" className="relative py-24 bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute inset-0 opacity-3">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="how-it-works-grid" width="20" height="20" patternUnits="userspaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#how-it-works-grid)" />
              </svg>
            </div>
            <div className="absolute inset-0 grain opacity-25"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                How{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  It Works
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
              <p className="text-xl text-lightgray max-w-3xl mx-auto leading-relaxed">
                A simple process that keeps your website improving every month.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  number: "1",
                  title: "Tell us what you need",
                  description:
                    "Fill out a quick form or send us an email. No tech jargon required — just tell us what's bothering you.",
                  Icon: ChatBubbleLeftRightIcon,
                },
                {
                  number: "2",
                  title: "We handle everything",
                  description:
                    "We fix, improve, and maintain your website. You get updates without lifting a finger.",
                  Icon: WrenchScrewdriverIcon,
                },
                {
                  number: "3",
                  title: "Your website works for your business",
                  description:
                    "Faster, cleaner, and always up-to-date — so you can focus on what you do best.",
                  Icon: SparklesIcon,
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-white/10 flex items-center justify-center">
                        <span className="text-white font-extrabold">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <step.Icon className="w-6 h-6 text-accent" />
                        <h3 className="text-xl font-extrabold text-white">{step.title}</h3>
                      </div>
                      <p className="mt-3 text-blue-200/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Pricing />
        <section className="relative py-20 bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute inset-0 opacity-3">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="founder-grid" width="20" height="20" patternUnits="userspaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#founder-grid)" />
              </svg>
            </div>
            <div className="grain absolute inset-0 opacity-20"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                <Image
                  src="/project/3.png"
                  alt="Fatima"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                  priority={false}
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Hi, I&apos;m Fatima 👋
                </h2>
                <p className="mt-4 text-lightgray text-lg leading-relaxed">
                  I&apos;m a software engineer with 4+ years of experience. I started Code Craft Space because I kept seeing small business owners struggle with websites that were broken, slow, or abandoned after launch. I&apos;m here to make that easier — no jargon, no agencies, just straightforward help.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
                >
                  Read my full story →
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-10 w-72 h-72 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-16 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute inset-0 opacity-3">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="basics-grid" width="20" height="20" patternUnits="userspaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#basics-grid)" />
              </svg>
            </div>
            <div className="grain absolute inset-0 opacity-20"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                New here?{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Start with the basics.
                </span>
              </h2>
              <p className="mt-4 text-lightgray max-w-2xl mx-auto">
                Quick reads to help you understand what matters most for your website.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📌",
                  title: "Why your website matters more than your Instagram",
                  description: "Social is rented. Your website is an asset you own.",
                  href: "/blog/why-website-matters",
                },
                {
                  icon: "🛠️",
                  title: "What is website maintenance? (Plain English)",
                  description: "What it includes, why it matters, and what to expect.",
                  href: "/blog/what-is-maintenance",
                },
                {
                  icon: "🚫",
                  title: "5 signs your website is hurting your brand",
                  description: "Common issues that silently push customers away.",
                  href: "/blog/website-mistakes",
                },
                {
                  icon: "💸",
                  title: "How much does a website really cost?",
                  description: "The real costs: time, tools, fixes, and opportunity.",
                  href: "/blog/website-cost",
                },
              ].map((card) => (
                <div
                  key={card.href}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-white/10 flex items-center justify-center text-xl">
                      <span aria-hidden>{card.icon}</span>
                    </div>
                    <div className="flex-1">
                      <Link
                        href={card.href}
                        className="text-lg font-extrabold text-white leading-snug hover:text-accent transition-colors"
                      >
                        {card.title}
                      </Link>
                      <p className="mt-2 text-blue-200/80 leading-relaxed text-sm">
                        {card.description}
                      </p>
                      <Link
                        href={card.href}
                        className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                      >
                        Read article →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FAQ />
        {/* <Testimonials /> */}
      </main>
    </div>
  );
}
