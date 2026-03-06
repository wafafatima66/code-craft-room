import {
  ShoppingCartIcon,
  ClockIcon,
  BuildingOfficeIcon,
  CogIcon,
  ExclamationTriangleIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";

const problems = [
  {
    number: "01",
    title: "Platform Fees Eating Profits",
    description: "Losing 15-20% of every sale to processing costs, ads, and hidden platform taxes.",
    Icon: ShoppingCartIcon,
    gradient: "from-orange-500/20",
    iconColor: "text-orange-400"
  },
  {
    number: "02",
    title: "DIY Builders Waste Time",
    description: "Spending hours on tutorials instead of building your business and making sales.",
    Icon: ClockIcon,
    gradient: "from-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    number: "03",
    title: "Agencies Are Too Expensive",
    description: "$5k+ upfront costs with slow turnaround and minimal support after launch.",
    Icon: BuildingOfficeIcon,
    gradient: "from-purple-500/20",
    iconColor: "text-purple-400"
  },
  {
    number: "04",
    title: "Technical Overwhelm",
    description: "DNS, SSL, hosting... you shouldn't need a CS degree just to sell online.",
    Icon: CogIcon,
    gradient: "from-pink-500/20",
    iconColor: "text-pink-400"
  },
  {
    number: "05",
    title: "Opportunity Cost",
    description: "Every day without a professional site is a day your competitors win.",
    Icon: ExclamationTriangleIcon,
    gradient: "from-red-500/20",
    iconColor: "text-red-400"
  },
  {
    number: "06",
    title: "Hidden Limitations",
    description: "Templates look good until you need custom features, speed, or real SEO power.",
    Icon: XCircleIcon,
    gradient: "from-cyan-500/20",
    iconColor: "text-cyan-400"
  }
];

export default function ProblemSolution() {
  return (
    <section className="relative bg-charcoal py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="grain absolute inset-0 opacity-30"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Problems We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-500">Eliminate</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light">
            Stop struggling with tools that weren&apos;t built for your growth.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-accent to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden"
            >
              {/* Glowing Corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.gradient} to-transparent rounded-bl-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <p.Icon className={`w-6 h-6 ${p.iconColor}`} />
                  </div>
                  <span className="text-white/20 font-mono text-sm font-bold">
                    {p.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>

                <p className="text-blue-200/80 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clean CTA (No 200+ businesses) */}
        <div className="text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <a
              href="/contact"
              className="relative btn btn-primary px-10 py-5 text-xl font-bold shadow-2xl flex items-center gap-3"
            >
              Start Building Correctly
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-blue-300/60 text-sm uppercase tracking-widest font-semibold">
            Zero bloat. Pure performance.
          </p>
        </div>
      </div>
    </section>
  );
}
