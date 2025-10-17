import { 
  CheckIcon, 
  ShoppingCartIcon, 
  CircleStackIcon, 
  DocumentTextIcon, 
  DevicePhoneMobileIcon,
  TagIcon,
  CogIcon,
  ReceiptPercentIcon,
  ShieldCheckIcon,
  PencilSquareIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

const serviceFeatures = [
  {
    title: "100% Custom-Coded Websites",
    icon: CogIcon,
    highlight: "Custom-Built"
  },
  {
    title: "Real Stripe Integration",
    icon: ShoppingCartIcon,
    highlight: "Full E-commerce"
  },
  {
    title: "Custom Database Management",
    icon: CircleStackIcon,
    highlight: "Smart Organization"
  },
  {
    title: "Professional Blog System",
    icon: DocumentTextIcon,
    highlight: "SEO-Ready"
  },
  {
    title: "Mobile-First Design",
    icon: DevicePhoneMobileIcon,
    highlight: "Mobile-Optimized"
  },
  {
    title: "Unlimited Product Categories",
    icon: TagIcon,
    highlight: "Flexible Structure"
  },
  {
    title: "Personalized Features for Your Business",
    icon: CogIcon,
    highlight: "Business-Specific"
  },
  {
    title: "Custom Discount Codes & Promotions",
    icon: ReceiptPercentIcon,
    highlight: "Marketing Tools"
  },
  {
    title: "Hands-Free Technical Management",
    icon: ShieldCheckIcon,
    highlight: "Fully Managed"
  },
  {
    title: "Unlimited Edits & Updates",
    icon: PencilSquareIcon,
    highlight: "No Limits"
  },
  {
    title: "Lightning-Fast Performance",
    icon: BoltIcon,
    highlight: "Ultra-Fast"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-charcoal overflow-hidden">
      {/* Background elements - consistent with WhoWeHelp section */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10"/>
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
            Services We <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Provide</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
            Professional e-commerce features that work together seamlessly
          </p>
        </div>

        {/* Services List - Clean Layout with Check Icons */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceFeatures.map((service, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 hover:bg-white/5 rounded-xl transition-all duration-500 ease-out"
              >
                {/* Check icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ease-out">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text group-hover:from-accent group-hover:via-primary group-hover:to-accent transition-all duration-500 ease-out leading-tight tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get All These Features?
            </h3>
            <p className="text-light mb-6 text-lg">
              Stop settling for basic templates. Get a professional e-commerce website that actually works.
            </p>
            <a 
              href="/contact" 
              className="btn btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}