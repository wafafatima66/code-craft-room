import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function WhyChoose() {
  const tableData = [
    {
      feature: "Upfront Cost",
      localAgencies: "$2,000-$10,000",
      diyPlatforms: "$15-$50/month",
      wordpress: "$500-$3,000",
      shopify: "Monthly + Transaction Fees",
      aiBuilders: "Low cost, generic results and hidden limits",
      us: "$0 Down"
    },
    {
      feature: "Support Level",
      localAgencies: "Minimal support",
      diyPlatforms: "Limited support",
      wordpress: "Community forums",
      shopify: "Basic support",
      aiBuilders: "No real human help; automated responses only",
      us: "Unlimited support"
    },
    {
      feature: "Who Does The Work",
      localAgencies: "You after launch",
      diyPlatforms: "You do everything",
      wordpress: "You do everything",
      shopify: "You do everything",
      aiBuilders: "You manage prompts and manual fixes",
      us: "We do everything"
    },
    {
      feature: "Customization",
      localAgencies: "Limited post-launch",
      diyPlatforms: "Template-based",
      wordpress: "Plugin dependent",
      shopify: "Template limitations",
      aiBuilders: "Limited control; template-like output",
      us: "100% custom code"
    },
    {
      feature: "Transaction Fees",
      localAgencies: "Depends on platform",
      diyPlatforms: "Platform dependent",
      wordpress: "Plugin dependent",
      shopify: "2.4% - 2.9%",
      aiBuilders: "Varies by platform; upsells for features",
      us: "No transaction fees"
    },
    {
      feature: "Security",
      localAgencies: "Basic security",
      diyPlatforms: "Platform managed",
      wordpress: "Plugin vulnerabilities",
      shopify: "Platform managed",
      aiBuilders: "Unverified code; potential vulnerabilities",
      us: "Enterprise security"
    }
  ];

  return (
    <section className="relative py-24 bg-charcoal overflow-hidden">
      {/* Background elements matching hero/problem theme */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Geometric pattern - subtle */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="why-choose-grid" width="20" height="20" patternUnits="userspaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#why-choose-grid)" className="text-white/10" />
          </svg>
        </div>

        {/* Grain texture */}
        <div className="absolute inset-0 grain opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-accent bg-clip-text text-transparent">
              Code Craft Space?
            </span>
          </h2>
          <p className="text-2xl text-blue-200 font-semibold tracking-wide">
            We&apos;re Different From Everyone Else
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-accent mx-auto mt-6"></div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="bg-charcoal/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500/10 to-accent/10">
                    <th className="px-6 py-4 text-left text-base font-bold text-blue-200 border-b border-blue-500/20">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-base font-bold text-red-300 border-b border-blue-500/20">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center">
                          <XMarkIcon className="w-4 h-4 mr-2" />
                          Local Agencies
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-base font-bold text-red-300 border-b border-blue-500/20">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center">
                          <XMarkIcon className="w-4 h-4 mr-2" />
                          DIY Platforms
                        </div>
                        <div className="text-xs text-red-200/70 mt-1 font-normal">
                          (Wix, Squarespace, Weebly, GoDaddy)
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-base font-bold text-red-300 border-b border-blue-500/20">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center">
                          <XMarkIcon className="w-4 h-4 mr-2" />
                          WordPress
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-base font-bold text-red-300 border-b border-blue-500/20">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center">
                          <XMarkIcon className="w-4 h-4 mr-2" />
                          Shopify
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-base font-bold text-red-300 border-b border-blue-500/20">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center">
                          <XMarkIcon className="w-4 h-4 mr-2" />
                          AI Builders
                        </div>
                        <div className="text-xs text-red-200/70 mt-1 font-normal">
                          (AI site generators)
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-base font-bold text-blue-200 border-b border-blue-500/20 bg-gradient-to-r from-blue-500/20 to-accent/20">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center">
                          <CheckIcon className="w-4 h-4 mr-2" />
                          Code Craft Space
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className="hover:bg-blue-500/5 transition-colors duration-300">
                      <td className="px-6 py-4 text-blue-200 font-semibold border-b border-blue-500/10">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-red-200 text-center border-b border-blue-500/10">
                        {row.localAgencies}
                      </td>
                      <td className="px-6 py-4 text-red-200 text-center border-b border-blue-500/10">
                        {row.diyPlatforms}
                      </td>
                      <td className="px-6 py-4 text-red-200 text-center border-b border-blue-500/10">
                        {row.wordpress}
                      </td>
                      <td className="px-6 py-4 text-red-200 text-center border-b border-blue-500/10">
                        {row.shopify}
                      </td>
                      <td className="px-6 py-4 text-red-200 text-center border-b border-blue-500/10">
                        {row.aiBuilders}
                      </td>
                      <td className="px-6 py-4 text-blue-200 font-semibold text-center border-b border-blue-500/10 bg-gradient-to-r from-blue-500/10 to-accent/10">
                        {row.us}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <p className="text-xl text-blue-200 mb-6 font-semibold">
              Ready to experience the Code Craft Space difference?
            </p>
            <a
              href="/contact"
              className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Get Your Free Consultation
              <CheckIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}