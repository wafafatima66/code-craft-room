import { CheckIcon } from "@heroicons/react/24/outline";

const idealClients = [
  {
    title: "Etsy Sellers Ready to Scale",
    description: "You've proven your products sell on Etsy. Now you're ready for your own branded website to increase profits and build a real business asset.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Print-on-Demand Entrepreneurs",
    description: "You want to start a print-on-demand business with custom t-shirts, mugs, or artwork but need a professional website to showcase designs and handle orders seamlessly.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Overwhelmed E-Commerce Owners",
    description: "You already have an e-commerce site but maintaining it has become a nightmare. Uploading products, managing inventory, and keeping everything updated is eating up all your time.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Small Business Owners in Texas",
    description: "Local entrepreneurs who need a professional online presence to compete with larger businesses and reach customers beyond their neighborhood.",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    title: "First-Time Business Owners",
    description: "You have a great product or service but feel overwhelmed by the technical side of building a website. We handle everything so you can focus on your business.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Frustrated DIY Platform Users",
    description: "You've tried Wix, Squarespace, or WordPress and spent weeks getting nowhere. You need a professional solution that actually works.",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    title: "Business Owners with Underperforming Websites",
    description: "Your current website is slow, looks outdated, doesn't work on mobile, or simply isn't generating sales. You need a complete transformation.",
    gradient: "from-blue-500 to-blue-600"
  }
];

export default function WhoWeHelp() {
  return (
    <section id="about" className="relative py-24 bg-charcoal overflow-hidden">
      {/* Background elements - consistent with hero/problems sections */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="who-we-help-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#who-we-help-grid)" />
          </svg>
        </div>
        
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
             }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Who We <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Help</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
            Our Ideal Clients
          </p>
        </div>

        {/* Client profiles list */}
        <div className="max-w-4xl mx-auto space-y-8">
          {idealClients.map((client, index) => (
            <div 
              key={index}
              className="group flex items-start gap-6 p-6 hover:bg-white/5 rounded-xl transition-all duration-300"
            >
              {/* Check icon */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${client.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold text-blue-200 group-hover:text-blue-100 transition-colors duration-300 leading-tight tracking-tight mb-3">
                  {client.title}
                </h3>
                <p className="text-light leading-relaxed group-hover:text-white/90 transition-colors duration-300 text-lg">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-lg text-light mb-4">
              Do you see yourself in one of these profiles?
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}