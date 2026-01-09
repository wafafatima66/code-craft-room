export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Geometric pattern */}
          <div className="absolute inset-0 opacity-3">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="about-grid" width="20" height="20" patternUnits="userspaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-charcoal/10" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-grid)" />
            </svg>
          </div>

          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-charcoal mb-6 tracking-tight leading-tight">
              Who <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">We Are</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              We help small businesses grow with pragmatic, well-crafted software.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pink-50/60 backdrop-blur-sm rounded-2xl border border-pink-200 p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-extrabold text-charcoal mb-6">About Code Craft Space</h2>
              <div className="space-y-6 text-secondary leading-relaxed">
                <p>I&#39;m a software engineer with 4+ years of professional experience building production systems that scale. Code Craft Space exists because I&#39;ve seen how broken most website solutions are for small business owners—overpriced, overcomplicated, and abandoned after launch.</p>
                <p>I bring three disciplines to every project: the technical rigor of a software engineer, the systematic thinking of a researcher, and the accountability of a project manager. That means you get custom-built solutions that are maintainable, performant, and actually solve your problems.</p>
                <p>My mission is straightforward: help ambitious small business owners escape the constraints of templates and platforms, and build online presences that work as hard as they do. I focus on three things—clarity about what you need, reliability in execution, and measurable outcomes that matter to your bottom line.</p>
                <p>I work end-to-end with each client. From discovery and planning through design, development, deployment, and ongoing support, I&#39;m invested in your success. Whether you&#39;re an Etsy seller ready to build your own store, an e-commerce owner drowning in plugin management, or a service business needing a modern web presence, I partner with you to build something that actually works.</p>
                <p>No agencies. No handoffs. No disappearing after launch. Just straightforward, honest work.</p>
              </div>

              <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto my-10"></div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-xl border border-pink-200 bg-white p-5">
                  <h4 className="text-charcoal font-semibold mb-2">Clarity</h4>
                  <p className="text-sm text-secondary">Clear scope and strategy before design or code begins.</p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-white p-5">
                  <h4 className="text-charcoal font-semibold mb-2">Reliability</h4>
                  <p className="text-sm text-secondary">Solid engineering and predictable delivery you can trust.</p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-white p-5">
                  <h4 className="text-charcoal font-semibold mb-2">Outcomes</h4>
                  <p className="text-sm text-secondary">Focus on measurable results that move your business.</p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-pink-200 bg-white p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">Ready to connect?</h3>
                    <p className="text-secondary text-sm">Reach out on LinkedIn or send an email.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/fatimaamir99/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-charcoal font-semibold hover:bg-accent/90 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="mailto:hello@codecraftspace.com"
                      className="inline-flex items-center rounded-md border border-pink-200 px-4 py-2 text-charcoal hover:bg-pink-50 transition-colors"
                    >
                      hello@codecraftspace.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
