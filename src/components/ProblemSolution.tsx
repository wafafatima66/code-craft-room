import {
  ShoppingCartIcon,
  RectangleStackIcon,
  ClockIcon,
  BuildingOfficeIcon,
  CogIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

const problems = [
  {
    number: "01",
    title: "Etsy Business Are Costing You Sales",
    description: "Standing out among millions of sellers while paying 6.5% fees on every sale.",
    Icon: ShoppingCartIcon,
    color: "from-orange-400 to-orange-500",
    accentColor: "text-orange-400"
  },
  // {
  //   number: "02",
  //   title: "You're Losing Money on Platform Fees",
  //   description: "Platform fees, processing costs, and ads eat 15-20% of every sale.",
  //   Icon: CurrencyDollarIcon,
  //   color: "from-orange-500 to-orange-600",
  //   accentColor: "text-orange-400"
  // },
  // {
  //   number: "03",
  //   title: "Your Products Deserve Better Organization",
  //   description: "Basic categorization doesn't showcase your diverse catalog properly.",
  //   Icon: RectangleStackIcon,
  //   color: "from-orange-400 to-orange-500",
  //   accentColor: "text-orange-400"
  // },
  {
    number: "04",
    title: "DIY Website Builders Not Worth your Energy and Time",
    description: "Hours spent on tutorials could be spent creating products and making sales.",
    Icon: ClockIcon,
    color: "from-orange-500 to-orange-600",
    accentColor: "text-orange-400"
  },
  {
    number: "05",
    title: "Traditional Website Agencies Are Costly",
    description: "$2,000-$10,000 upfront costs with minimal ongoing support afterward.",
    Icon: BuildingOfficeIcon,
    color: "from-orange-400 to-orange-500",
    accentColor: "text-orange-400"
  },
  {
    number: "06",
    title: "Lack of Technical Knowledge about Website Management",
    description: "SSL, DNS, hosting configurations—you shouldn&apos;t need a CS degree to sell online.",
    Icon: CogIcon,
    color: "from-orange-500 to-orange-600",
    accentColor: "text-orange-400"
  },
  {
    number: "07",
    title: "You Need to Start NOW, But Cannot Afford Big Upfront Costs",
    description: "Every day without a professional website means lost sales and missed opportunities.",
    Icon: ExclamationTriangleIcon,
    color: "from-orange-400 to-orange-500",
    accentColor: "text-orange-400"
  },
  {
    number: "08",
    title: "AI Builders and Templates Have Hidden Limits",
    description: "They may promise quick results, but they restrict customization, slow performance, and can’t deliver the flexibility or SEO power your business needs to grow.",
    Icon: ExclamationTriangleIcon,
    color: "from-purple-500 to-purple-600",
    accentColor: "text-purple-500"
  }
];

export default function ProblemSolution() {
  return (
    <section className="relative bg-charcoal/95 overflow-hidden">
      {/* Background decorative elements - matching hero style */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs like hero */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="grain absolute inset-0 opacity-20"></div>
      </div>

      {/* Geometric pattern overlay - smaller and less visible */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="problems-grid" width="20" height="20" patternUnits="userspaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#problems-grid)" className="text-white/10" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-accent/30">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white tracking-wide">Pain Points We Solve</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Problems We{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-pulse">
                Eliminate
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" className="text-accent/60" />
              </svg>
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-xl text-lightgray max-w-3xl mx-auto leading-relaxed font-light">
            For <span className="text-white font-semibold">Etsy Sellers</span> & <span className="text-white font-semibold">Small Business Owners</span>
          </p>
        </div>

        {/* Problems grid - hero-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-accent/25 transition-all duration-500 border border-white/10 hover:border-accent/40 hover:-translate-y-2 hover:scale-105"
            >
              {/* Problem number - hero style */}
              {/* <div className="absolute -top-4 -left-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl border-2 border-white/20 group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-white font-bold text-lg">{problem.number}</span>
                </div>
              </div> */}

              {/* Icon - hero style */}
              <div className="inline-flex p-4 rounded-2xl  backdrop-blur-sm mb-6  group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <problem.Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Content - properly highlighted heading */}
              <h3 className="text-2xl font-extrabold text-blue-200 mb-4 leading-tight tracking-tight group-hover:text-blue-100 transition-colors duration-300">
                {problem.title}
              </h3>

              <p className="text-sm text-light leading-relaxed">
                {problem.description}
              </p>

              {/* Enhanced hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to action - hero style */}
        <div className="text-center mt-20">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto overflow-hidden">
            {/* Background decoration like hero */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/15 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-pulse">
                  Sound Familiar?
                </span>{" "}
                You&apos;re Not Alone.
              </h3>

              <p className="text-xl text-lightgray mb-8 leading-relaxed font-light max-w-3xl mx-auto">
                These problems are exactly why we created{" "}
                <span className="text-white font-semibold">Code Craft Space</span>.
                We&#39;ve helped{" "}
                <span className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">200+</span>{" "}
                businesses break free from these limitations.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Get Your Solution Today
                </a>
                <a
                  href="#services"
                  className="btn bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:border-accent hover:bg-accent/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  See How We Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}