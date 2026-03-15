import { CheckIcon } from "@heroicons/react/24/outline";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-charcoal overflow-hidden">
      {/* Background elements matching WhyChoose theme */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Geometric pattern - subtle */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="pricing-grid" width="20" height="20" patternUnits="userspaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#pricing-grid)" className="text-white/10" />
          </svg>
        </div>

        {/* Grain texture */}
        <div className="absolute inset-0 grain opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold text-white">Done-for-you Website Care</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Website Care Plan
          </h2>
          <p className="text-2xl text-blue-200 font-semibold tracking-wide mb-6">
            We improve what you already have
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-accent mx-auto"></div>
        </div>

        <div className="mb-10">
          <div className="relative overflow-hidden bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-10 md:p-12 max-w-5xl mx-auto shadow-2xl shadow-black/20">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-r from-accent/20 to-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-r from-blue-500/15 to-accent/10 rounded-full blur-3xl" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="relative text-center md:text-left">
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-bold text-white mb-4">
                  Everything included
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
                  Website Care, Improvements & Fixes
                </h3>
                <p className="text-blue-200 text-lg">
                  Performance, content, and structure upgrades on your existing website.
                </p>
              </div>
              <div className="relative text-center">
                <div className="text-6xl md:text-7xl font-extrabold text-accent mb-2">
                  $89<span className="text-xl md:text-2xl text-blue-300 font-normal">/month</span>
                </div>
                <div className="text-base text-blue-200/90 font-semibold">
                  One plan. No surprises.
                </div>
              </div>
            </div>

            {/* <div className="relative mt-10 pt-10 border-t border-slate-600/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Fix issues fast",
                    desc: "Broken sections, bugs, layout issues, forms, errors.",
                  },
                  {
                    title: "Improve performance",
                    desc: "Speed, UX polish, structure improvements to convert better.",
                  },
                  {
                    title: "Keep content updated",
                    desc: "Add pages, update content, upload products/data, optimize.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-white/10 flex items-center justify-center">
                        <CheckIcon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-extrabold text-white">{item.title}</h4>
                        <p className="mt-1 text-blue-200/80 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-blue-200/80 text-sm">
                You focus on business — we handle the website.
              </p>
            </div> */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="btn bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:border-accent hover:bg-accent/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <p className="text-xl text-blue-200 mb-6 font-semibold">
              Interested in acquiring CodeCraftSpace?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#acquisition"
                className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Make an Offer
                <CheckIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#acquisition"
                className="btn bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:border-accent hover:bg-accent/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                View Source Code Specs
              </a>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
