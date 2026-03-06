import {
  ShoppingCartIcon,
  ClockIcon,
  BuildingOfficeIcon,
  CogIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  GlobeAltIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  FaceFrownIcon
} from "@heroicons/react/24/outline";

const problems = [
  {
    text: "Losing 15–20% of every sale to platform fees",
    sub: "Marketplaces and website builders quietly take a cut of every order.",
    Icon: ShoppingCartIcon,
    gradient: "from-orange-500/20",
    iconColor: "text-orange-400"
  },
  {
    text: "Spending hours trying to fix your website",
    sub: "Instead of running your business, you're stuck searching Google and watching tutorials.",
    Icon: ClockIcon,
    gradient: "from-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    text: "Agencies charging thousands for simple work",
    sub: "Huge upfront costs, slow timelines, and expensive changes later.",
    Icon: BuildingOfficeIcon,
    gradient: "from-purple-500/20",
    iconColor: "text-purple-400"
  },
  {
    text: "Your website looking outdated or unprofessional",
    sub: "Customers judge your business in seconds based on how your site looks.",
    Icon: FaceFrownIcon,
    gradient: "from-pink-500/20",
    iconColor: "text-pink-400"
  },
  {
    text: "Customers leaving because the site is slow",
    sub: "If your website takes too long to load, people simply leave.",
    Icon: ExclamationTriangleIcon,
    gradient: "from-red-500/20",
    iconColor: "text-red-400"
  },
  {
    text: "Your competitors looking more professional online",
    sub: "A better website often means they win the customer before you even get a chance.",
    Icon: GlobeAltIcon,
    gradient: "from-cyan-500/20",
    iconColor: "text-cyan-400"
  },
  {
    text: "Your website not showing up on Google",
    sub: "Without proper SEO, customers simply cannot find your business online.",
    Icon: ChartBarIcon,
    gradient: "from-green-500/20",
    iconColor: "text-green-400"
  },
  {
    text: "A website that breaks on mobile phones",
    sub: "Most visitors come from mobile. If the site feels broken, they leave instantly.",
    Icon: DevicePhoneMobileIcon,
    gradient: "from-indigo-500/20",
    iconColor: "text-indigo-400"
  },
  {
    text: "Constant technical problems and maintenance",
    sub: "Updates, plugins, errors, and hosting issues keep showing up.",
    Icon: WrenchScrewdriverIcon,
    gradient: "from-yellow-500/20",
    iconColor: "text-yellow-400"
  },
  {
    text: "Paying monthly for tools you barely understand",
    sub: "Subscriptions stack up while the website still doesn’t perform well.",
    Icon: CurrencyDollarIcon,
    gradient: "from-emerald-500/20",
    iconColor: "text-emerald-400"
  },
  {
    text: "Not knowing if your website is actually working",
    sub: "You have a website, but you don’t know if it brings customers or not.",
    Icon: CogIcon,
    gradient: "from-sky-500/20",
    iconColor: "text-sky-400"
  },
  {
    text: "Feeling stuck because fixing it feels too complicated",
    sub: "Most business owners avoid touching their website because it feels overwhelming.",
    Icon: XCircleIcon,
    gradient: "from-rose-500/20",
    iconColor: "text-rose-400"
  }
];

export default function ProblemSection() {
  return (
    <section className="relative bg-charcoal py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="grain absolute inset-0 opacity-30"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 space-y-20">

        {problems.map((p, i) => (
          <div
            key={i}
            className="group relative border border-white/10 rounded-3xl p-10 md:p-14 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* glow */}
            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${p.gradient} to-transparent rounded-bl-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity`}></div>

            <div className="relative z-10">

              {/* icon */}
              <div className="mb-8">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <p.Icon className={`w-7 h-7 ${p.iconColor}`} />
                </div>
              </div>

              {/* BIG PAIN TEXT */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight group-hover:text-accent transition-colors">
                {p.text}
              </h3>

              <p className="mt-6 text-lg text-blue-200/80 max-w-2xl leading-relaxed">
                {p.sub}
              </p>

            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center pt-16">

          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-80 transition duration-1000"></div>

            <a
              href="/contact"
              className="relative btn btn-primary px-12 py-6 text-xl font-bold shadow-2xl flex items-center gap-3"
            >
              Build Your Website The Right Way

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-blue-300/60 text-sm uppercase tracking-widest font-semibold">
            Stop fighting your website. Start growing your business.
          </p>

        </div>

      </div>
    </section>
  );
}