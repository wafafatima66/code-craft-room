import { ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, SparklesIcon } from "@heroicons/react/24/outline";

const HOW_IT_WORKS_STEPS = [
  {
    number: "1",
    title: "Tell me about your business",
    description:
      "Fill out a short form. No jargon needed. I'll understand what you need and what you don't.",
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    number: "2",
    title: "I design and build it",
    description:
      "You get a live preview link within days. We refine until it's right.",
    Icon: WrenchScrewdriverIcon,
  },
  {
    number: "3",
    title: "You go live — and stay supported",
    description:
      "I handle launch, domain setup, and stick around for 30 days if anything needs fixing.",
    Icon: SparklesIcon,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 bg-charcoal overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="how-it-works-grid" width="20" height="20" patternUnits="userspaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#how-it-works-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 grain opacity-25"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            How{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-xl text-lightgray max-w-3xl mx-auto leading-relaxed">
            A simple process that keeps your website improving every month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.number}
              className="group rounded-none bg-white/5 backdrop-blur-sm p-8 shadow-[0_22px_70px_rgba(0,0,0,0.34)] transition-all hover:bg-white/10 hover:shadow-[0_28px_80px_rgba(0,0,0,0.42)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-white/10 flex items-center justify-center">
                    <span className="text-white font-extrabold">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <step.Icon className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-extrabold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-blue-200/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
