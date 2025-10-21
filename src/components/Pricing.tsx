import { CheckIcon } from "@heroicons/react/24/outline";

const packages = [
  {
    name: "Quick Launch",
    subtitle: "Perfect for testing the waters",
    setupPrice: "$0",
    monthlyPrice: "",
    highlight: "",
    features: [
      "5-static page website (Home, About, Services, Testimonial, Contact)",
      "Custom domain included",
      "Mobile responsive design",
      "SSL certificate"
    ],
    afterSetup: "",
    isPopular: false
  },
  {
    name: "Professional Growth",
    subtitle: "Everything you need to run a successful online business",
    setupPrice: "$15/month",
    monthlyPrice: "",
    highlight: "",
    features: [
      "Unlimited pages & products",
      "Complete Payment integration",
      "Manage Business Hosting, Domain and Emails",
      "Mobile-responsive design",
      "Unlimited Features edits & updates (24-48hr turnaround)",
      "Manage Product, Blogs & Discount codes",
      "Provide Monthly performance reports",
      "Develop custom features for your business model",
      "Backups & version control"
    ],
    commitment: "Cancel anytime after 3 months",
    isPopular: true
  },
  // {
  //   name: "Advanced E-Commerce",
  //   subtitle: "Enterprise-level features for scaling businesses",
  //   setupPrice: "$200/month",
  //   monthlyPrice: "",
  //   highlight: "",
  //   features: [
  //     "Everything from Professional Growth package",
  //     "Subscription products & recurring billing",
  //     "Digital downloads with secure delivery",
  //     "Gift cards & store credits",
  //     "Multi-currency support",
  //     "Advanced shipping rules",
  //     "Wholesale pricing tiers",
  //     "Customer portals"
  //   ],
  //   commitment: "Cancel anytime after 3 months",
  //   isPopular: false
  // }
  {
    name: "SEO Growth",
    subtitle: "Professional Growth + Monthly SEO & Marketing Support",
    setupPrice: "$30/month",
    monthlyPrice: "",
    highlight: "Boost your visibility and traffic",
    features: [
      "Everything from Professional Growth package",
      "Monthly SEO optimization for all pages and products",
      "Keyword research and strategy",
      "On-page and technical SEO improvements",
      "Backlink and content strategy guidance",
      "Monthly SEO performance report and recommendations",
      "Integration with Google Analytics & Search Console",
      "Ongoing marketing consultation and support"
    ],
    commitment: "Cancel anytime after 3 months",
    isPopular: false
  }

];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-charcoal overflow-hidden">
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
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Pricing
          </h2>
          <p className="text-2xl text-blue-200 font-semibold tracking-wide mb-6">
            Simple, Transparent, No Surprises
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-accent mx-auto"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-charcoal/80 backdrop-blur-sm border rounded-2xl p-8 ${pkg.isPopular
                ? 'border-blue-400/40 bg-gradient-to-br from-blue-500/10 to-accent/10'
                : 'border-blue-500/20'
                }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-400 to-accent text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-blue-200 text-lg mb-4">{pkg.subtitle}</p>
                <div className="text-4xl font-bold text-accent mb-2">{pkg.setupPrice}</div>
                <p className="text-blue-300">{pkg.monthlyPrice}</p>
                <p className="text-accent font-semibold mt-2">{pkg.highlight}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-bold text-blue-200 mb-4">
                  Included:
                </h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pkg.afterSetup && (
                <div className="mb-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-blue-200 font-semibold">After Setup:</p>
                  <p className="text-blue-300">{pkg.afterSetup}</p>
                </div>
              )}

              {pkg.commitment && (
                <div className="mb-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  {/* <p className="text-blue-200 font-semibold">Commitment:</p> */}
                  <p className="text-blue-300">{pkg.commitment}</p>
                </div>
              )}

              <div className="text-center">
                <a
                  href="/contact"
                  className={`btn px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${pkg.isPopular
                    ? 'btn-primary shadow-2xl hover:shadow-accent/25'
                    : 'bg-blue-500/20 text-blue-200 border-2 border-blue-500/40 hover:bg-blue-500/30 hover:border-blue-400/60'
                    }`}
                >
                  Get Started Today
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-On Services */}
        <div className="mt-16 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Add-On Services
              </span>
            </h3>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-white mb-2">Third-Party Integrations</h4>
              <p className="text-2xl font-bold text-blue-400">$50 each</p>
            </div>

            {/* Description */}
            <p className="text-blue-200 text-center mb-8 leading-relaxed">
              Enhance your website with professional integrations that streamline your business operations.
            </p>

            {/* Simple Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Email Marketing", example: "Mailchimp, Constant Contact" },
                { name: "Social Media Feeds", example: "Instagram, Facebook" },
                { name: "Shipping Calculators", example: "UPS, FedEx" },
                { name: "Inventory Management", example: "Stock tracking systems" },
                { name: "Analytics Tools", example: "Google Analytics, Facebook Pixel" },
                { name: "CRM Systems", example: "Salesforce, HubSpot" }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/20 hover:border-blue-400/40 transition-colors duration-300"
                >
                  <div className="text-center">
                    <h5 className="text-blue-200 font-medium mb-1">{service.name}</h5>
                    <p className="text-blue-200/70 text-sm">{service.example}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-blue-200/80 text-sm">
                Professional setup and testing included with each integration
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <p className="text-xl text-blue-200 mb-6 font-semibold">
              Ready to transform your business with a professional website?
            </p>
            <a
              href="/contact"
              className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Start Your Project Today
              <CheckIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}