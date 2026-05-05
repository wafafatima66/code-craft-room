const packages = [
  {
    label: "Price",
    landingPage: "$200",
    smallBusiness: "$500-$800",
    customBuild: "Let's talk",
  },
  {
    label: "Pages",
    landingPage: "1",
    smallBusiness: "Up to 5",
    customBuild: "Unlimited",
  },
  {
    label: "Mobile Ready",
    landingPage: "Yes",
    smallBusiness: "Yes",
    customBuild: "Yes",
  },
  {
    label: "Contact Form",
    landingPage: "Yes",
    smallBusiness: "Yes",
    customBuild: "Yes",
  },
  {
    label: "Custom Design",
    landingPage: "Yes",
    smallBusiness: "Yes",
    customBuild: "Yes",
  },
  {
    label: "Delivery",
    landingPage: "3-5 days",
    smallBusiness: "1-2 weeks",
    customBuild: "Scoped together",
  },
];


export default function Services() {
  return (
    <section id="services" className="relative py-12 bg-charcoal overflow-hidden">
      {/* Background elements - consistent with WhoWeHelp section */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" width="20" height="20" patternUnits="userspaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
          }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            What I <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Build</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-xl text-lightgray max-w-3xl mx-auto leading-relaxed">
            Clear website packages for small businesses that want something custom, fast, and built to last.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-none bg-white/5 backdrop-blur-sm shadow-[0_28px_90px_rgba(0,0,0,0.4)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.2em] text-lightgray">
                      Package
                    </th>
                    <th className="px-6 py-5 text-left text-xl font-extrabold text-white">
                      Landing Page
                    </th>
                    <th className="px-6 py-5 text-left text-xl font-extrabold text-white">
                      Small Business Site
                    </th>
                    <th className="px-6 py-5 text-left text-xl font-extrabold text-white">
                      Custom Build
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((item) => (
                    <tr key={item.label} className="border-b border-white/10 last:border-b-0">
                      <td className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        {item.label}
                      </td>
                      <td className="px-6 py-5 text-base text-white">{item.landingPage}</td>
                      <td className="px-6 py-5 text-base text-white">{item.smallBusiness}</td>
                      <td className="px-6 py-5 text-base text-white">{item.customBuild}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-center text-base text-lightgray">
            All sites include 2 rounds of revisions and 30 days of free support after launch.
          </p>
        </div>
      </div>
    </section>
  );
}
