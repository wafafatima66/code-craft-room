import { CheckIcon } from "@heroicons/react/24/outline";

const idealClients = [
  // {
  //   title: "Etsy Sellers Ready to Scale",
  //   description:
  //     "Your products already sell — now it’s time to build your own branded store, keep more profit, and grow beyond Etsy with a custom website built for you.",
  //   gradient: "from-blue-500 to-blue-600"
  // },
  // {
  //   title: "Print-on-Demand Creators",
  //   description:
  //     "You design. We build the website that brings your art to life. Launch your custom t-shirt, mug, or poster business with a professional e-commerce setup that runs smoothly.",
  //   gradient: "from-purple-500 to-purple-600"
  // },
  // {
  //   title: "Busy E-Commerce Owners",
  //   description:
  //     "Managing products, inventory, and plugins shouldn’t take all your time. We streamline your store so you can focus on running your business — not fixing your website.",
  //   gradient: "from-orange-500 to-red-500"
  // },
  // {
  //   title: "Local Business Owners",
  //   description:
  //     "Whether you’re a boutique, bakery, or home service provider, we help small businesses build modern websites that attract customers beyond the neighborhood.",
  //   gradient: "from-blue-600 to-blue-700"
  // },
  // {
  //   title: "First-Time Entrepreneurs",
  //   description:
  //     "You have a great product or idea but feel lost in the tech. We handle everything — from design to setup — so you can launch confidently and focus on growth.",
  //   gradient: "from-sky-500 to-sky-600"
  // },
  // {
  //   title: "Frustrated DIY Builders",
  //   description:
  //     "You’ve tried Wix, Squarespace, or WordPress and hit a wall. We replace the frustration with a clean, custom-coded site that finally works the way you want.",
  //   gradient: "from-indigo-500 to-indigo-600"
  // },
  // {
  //   title: "Owners with Outdated or Underperforming Sites",
  //   description:
  //     "If your website is slow, messy, or not bringing in sales, it’s time for a rebuild. We’ll transform it into a high-performing asset that drives real results.",
  //   gradient: "from-fuchsia-500 to-pink-600"
  // }
  {
    title: "Photographers",
    description:
      "Showcase your best shots with a stunning, fast-loading portfolio. We build galleries that highlight your creativity and help you book more clients.",
    gradient: "from-accent to-primary"
  },
  {
    title: "Real Estate Agents",
    description:
      "Stand out in a crowded market with a professional site. Feature your listings, capture leads, and build trust with homebuyers and sellers.",
    gradient: "from-pink-500 to-primary"
  },
  {
    title: "Local Services (Plumbers/Electricians)",
    description:
      "Get found by locals who need your help. We create simple, effective sites that turn visitors into phone calls and scheduled appointments.",
    gradient: "from-primary to-accent"
  },
  {
    title: "Coaches & Consultants",
    description:
      "Establish authority and grow your practice. We build platforms that share your expertise, collect leads, and help you sell your services or courses.",
    gradient: "from-accent to-pink-500"
  }
];


export default function WhoWeHelp() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Background elements - consistent with hero/problems sections */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="who-we-help-grid" width="20" height="20" patternUnits="userspaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-charcoal/10" />
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
          <h2 className="text-5xl md:text-6xl font-extrabold text-charcoal mb-6 tracking-tight leading-tight">
            Who We <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Help</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Our Ideal Clients
          </p>
        </div>

        {/* Client profiles list */}
        <div className="max-w-4xl mx-auto space-y-8">
          {idealClients.map((client, index) => (
            <div
              key={index}
              className="group flex items-start gap-6 p-6 hover:bg-pink-50 rounded-xl transition-all duration-300 border border-transparent hover:border-pink-200"
            >
              {/* Check icon */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${client.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <CheckIcon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold text-charcoal transition-colors duration-300 leading-tight tracking-tight mb-3">
                  {client.title}
                </h3>
                <p className="text-secondary leading-relaxed transition-colors duration-300 text-lg">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-pink-50/60 backdrop-blur-sm rounded-2xl border border-pink-200">
            <p className="text-lg text-secondary mb-4">
              Do you see yourself in one of these profiles?
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
