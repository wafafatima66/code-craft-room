import Link from "next/link";
import { ChartBarIcon, ShoppingCartIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal/95">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="grain absolute inset-0 opacity-20"></div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userspaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="text-white/20" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="relative z-10">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-accent/30">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Trusted by 200+ businesses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Fully custom, {" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-pulse">
                  Hassle-Free Websites
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" className="text-accent/60" />
                </svg>
              </span>{" "}
              for Small Businesses
            </h1>

            {/* Enhanced subheading */}
            <div className="mt-8 space-y-4">
              <p className="text-xl sm:text-2xl text-lightgray leading-relaxed font-light">
                No templates. No page builders.
                <span className="text-white font-semibold"> 100% coded, optimized </span> {" "}
                <span className="text-white font-semibold">by developers</span> {" "}
                {/* <span className="text-white font-semibold">domain and hosting managment</span> {" "} */}
                <span className="text-white ">that load faster, rank higher, and convert better</span>.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                <p className="text-lg text-accent font-bold tracking-wide">
                  Start at $0 down
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Get Your Free Consultation
                <CursorArrowRaysIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#previous-work"
                className="btn bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:border-accent hover:bg-accent/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Enhanced social proof stats */}
            <div className="mt-16 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results That Matter</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto"></div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">200+</div>
                  <div className="text-sm text-lightgray font-medium">Websites Built</div>
                  <div className="w-8 h-0.5 bg-accent/50 mx-auto mt-2 group-hover:bg-accent transition-colors"></div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-lightgray font-medium">Client Satisfaction</div>
                  <div className="w-8 h-0.5 bg-primary/50 mx-auto mt-2 group-hover:bg-primary transition-colors"></div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">$2M+</div>
                  <div className="text-sm text-lightgray font-medium">Sales Generated</div>
                  <div className="w-8 h-0.5 bg-accent/50 mx-auto mt-2 group-hover:bg-accent transition-colors"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual elements */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  {/* Mock website preview */}
                  <div className="bg-gradient-to-r from-accent to-primary h-4 rounded-full shadow-lg"></div>
                  <div className="space-y-3">
                    <div className="bg-white/30 h-3 rounded w-3/4"></div>
                    <div className="bg-white/20 h-3 rounded w-1/2"></div>
                    <div className="bg-white/25 h-3 rounded w-5/6"></div>
                  </div>

                  {/* Performance indicators */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <ChartBarIcon className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-white">+150% Sales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShoppingCartIcon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-white">Mobile Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white rounded-full p-3 shadow-2xl animate-bounce">
                <ShoppingCartIcon className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-full p-3 shadow-2xl animate-pulse">
                <ChartBarIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}