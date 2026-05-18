const packages = [
  {
    label: "Price",
    customWebsite: "$200",
    businessDashboard: "$300",
    smartAutomation: "$300",
  },
  {
    label: "Purpose",
    customWebsite: "A professional website to establish your online presence and attract customers",
    businessDashboard: "A custom dashboard to manage your business, leads, bookings, or operations in one place",
    smartAutomation: "Automation systems that save time, reduce manual tasks, and help your business scale",
  },
  {
    label: "Features",
    customWebsite: "Custom design, mobile-ready, contact forms, brand-focused layout",
    businessDashboard: "Lead tracking, analytics, bookings, reports, customer management",
    smartAutomation: "Auto follow-ups, booking workflows, lead capture, email/SMS automation",
  },
  {
    label: "Delivery",
    customWebsite: "3-7 days",
    businessDashboard: "1-2 weeks",
    smartAutomation: "1-2 weeks",
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
            Clear pricing for websites, dashboards, and automation systems built for growing businesses.
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
                      Custom Website
                    </th>
                    <th className="px-6 py-5 text-left text-xl font-extrabold text-white">
                      Business Dashboard
                    </th>
                    <th className="px-6 py-5 text-left text-xl font-extrabold text-white">
                      Smart Automation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((item) => (
                    <tr key={item.label} className="border-b border-white/10 last:border-b-0">
                      <td className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        {item.label}
                      </td>
                      <td className="px-6 py-5 text-base text-white">{item.customWebsite}</td>
                      <td className="px-6 py-5 text-base text-white">{item.businessDashboard}</td>
                      <td className="px-6 py-5 text-base text-white">{item.smartAutomation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-center text-base text-lightgray">
            Every package is custom-built around your business goals and workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
