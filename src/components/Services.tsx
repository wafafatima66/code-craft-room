import {
  CircleStackIcon,
  PencilSquareIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

const serviceFeatures = [
  {
    title: "Your website, always safe",
    description:
      "We back up your entire site regularly — content, pages, products, and customer data — so if anything ever goes wrong, we can restore everything fast.",
    icon: CircleStackIcon,
    highlight: "Never lose a thing"
  },
  {
    title: "Always up to date",
    description:
      "We handle all software, plugin, and platform updates before they cause problems. Your site stays stable and secure without you lifting a finger.",
    icon: ArrowPathIcon,
    highlight: "No outdated software"
  },
  {
    title: "Broken things, fixed fast",
    description:
      "Forms not sending? Pages returning errors? Buttons not working? We find and fix issues quickly — most within 24 hours of them appearing.",
    icon: WrenchScrewdriverIcon,
    highlight: "We catch it before you do"
  },
  {
    title: "A faster website, every month",
    description:
      "We check your load speed regularly, fix what's slowing things down, and make sure your site meets Google's performance standards.",
    icon: BoltIcon,
    highlight: "Speed that keeps customers"
  },
  {
    title: "Know who's visiting",
    description:
      "We track how people find and use your website, and flag anything worth your attention — explained in plain English, not confusing dashboards.",
    icon: ChartBarIcon,
    highlight: "Clear reports, no data overwhelm"
  },
  {
    title: "Your content, always current",
    description:
      "Need a new page? Prices updated? New photos or products added? Just tell us — we handle it so your site always reflects your actual business.",
    icon: PencilSquareIcon,
    highlight: "Fresh pages, zero effort from you"
  },
  {
    title: "Watching out for threats",
    description:
      "We monitor your website for malware, suspicious activity, and security vulnerabilities — and act before any damage is done to your site or your visitors.",
    icon: ShieldCheckIcon,
    highlight: "Your site, protected 24/7"
  },
  {
    title: "Ideas to help you grow",
    description:
      "Every month we review your site and share one or two specific, actionable suggestions to attract more visitors or turn more of them into customers.",
    icon: EyeIcon,
    highlight: "Monthly improvements, not just maintenance"
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
            Everything your website needs.{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Done for you.
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-xl text-lightgray max-w-3xl mx-auto leading-relaxed">
            One plan covers all of this — so you never have to worry about your website again.
          </p>
        </div>

        {/* Services List - Clean Layout with Check Icons */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceFeatures.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-accent/40 transition-all duration-500 ease-out"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ease-out">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-extrabold text-white leading-tight tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {service.highlight}
                    </p>
                    <p className="mt-3 text-blue-200/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="inline-block p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to keep your site running perfectly?
            </h3>
            <p className="text-lightgray mb-6 text-lg">
              For $89/month, we handle fixes, content, performance, and improvements.
            </p>
            <a
              href="/contact"
              className="btn btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              Start Website Care
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
