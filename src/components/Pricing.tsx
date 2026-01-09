import { CheckIcon } from "@heroicons/react/24/outline";

const packages = [
  {
    name: "Landing Page",
    subtitle: "High-conversion single page site",
    price: "$200",
    period: "one-time",
    features: [
      "Single page website",
      "Contact form",
      "Mobile responsive",
      "Fast loading",
      "2 months of free edits and maintenance"
    ],
    perfectFor: [
      "Consultants",
      "Freelancers",
      "Local services (plumbers, lawyers, coaches)",
      "Event planners",
      "Real estate agents"
    ],
    isPopular: false
  },
  {
    name: "Portfolio Website",
    subtitle: "Showcase your work professionally",
    price: "$500",
    period: "one-time",
    features: [
      "5 pages (Home, About, Portfolio, Services, Contact)",
      "Gallery/portfolio section",
      "Contact form",
      "Mobile responsive",
      "2 months of free edits and maintenance"
    ],
    perfectFor: [
      "Photographers",
      "Designers",
      "Artists",
      "Architects",
      "Creative professionals"
    ],
    isPopular: true
  },
  {
    name: "Small Business Website",
    subtitle: "Complete digital presence",
    price: "$800",
    period: "one-time",
    features: [
      "7+ pages",
      "Blog section (5 blogs written included with SEO basics)",
      "SEO basics",
      "Google Analytics",
      "2 months of free edits and maintenance"
    ],
    perfectFor: [
      "Local businesses",
      "Professional services",
      "Agencies",
      "B2B companies"
    ],
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-white overflow-hidden">
      {/* Background elements matching WhyChoose theme */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-accent/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Geometric pattern - subtle */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="pricing-grid" width="20" height="20" patternUnits="userspaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#pricing-grid)" className="text-charcoal/10" />
          </svg>
        </div>

        {/* Grain texture */}
        <div className="absolute inset-0 grain opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-charcoal mb-6 leading-tight tracking-tight">
            Pricing
          </h2>
          <p className="text-2xl text-secondary font-semibold tracking-wide mb-6">
            Simple One-Time Investment
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white/80 backdrop-blur-sm border rounded-2xl p-8 flex flex-col shadow-xl ${pkg.isPopular
                ? 'border-accent/40 bg-gradient-to-br from-pink-500/10 to-accent/10'
                : 'border-pink-200/80'
                }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent to-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-charcoal mb-2">
                  {pkg.name}
                </h3>
                {/* <p className="text-blue-200 text-lg mb-4">{pkg.subtitle}</p> */}
                <div className="text-4xl font-bold text-accent mb-2">{pkg.price}</div>
                <p className="text-secondary uppercase tracking-wider text-sm font-semibold">{pkg.period}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <h4 className="text-lg font-bold text-charcoal mb-4 border-b border-pink-200 pb-2">
                  Includes:
                </h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-charcoal mb-4 border-b border-pink-200 pb-2">
                    Perfect for:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.perfectFor.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="text-secondary text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center mt-auto">
                <a
                  href="/contact"
                  className={`btn px-8 py-4 text-lg font-bold w-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${pkg.isPopular
                    ? 'btn-primary shadow-2xl hover:shadow-accent/25'
                    : 'bg-white text-charcoal border-2 border-pink-200 hover:border-accent hover:bg-pink-50'
                    }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-On Services (Monthly Maintenance) */}
        <div className="mt-16 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-charcoal mb-4">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Add-On Services
              </span>
            </h3>
          </div>

          <div className="bg-pink-50/60 backdrop-blur-sm border border-pink-200 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-charcoal mb-2">Monthly Maintenance</h4>
                <p className="text-secondary">Keep your site secure and up-to-date.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-1">$50<span className="text-lg text-secondary font-normal">/month</span></div>
                <div className="text-sm text-secondary">(Optional)</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-pink-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Updates/Edits",
                  "Security Monitoring",
                  "Content Changes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center md:justify-start gap-2 bg-white/70 rounded-lg p-3 border border-pink-200/80">
                    <CheckIcon className="w-5 h-5 text-accent" />
                    <span className="text-charcoal font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-pink-500/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-200">
            <p className="text-xl text-charcoal mb-6 font-semibold">
              Ready to start your website?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Get Started
                <CheckIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="btn bg-white text-charcoal border-2 border-pink-200 hover:border-accent hover:bg-pink-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
