export default function WhyNeedThisSection() {
  return (
    <section className="relative bg-charcoal py-20">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Why need this?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
              Every missed lead, wasted hour, and manual task costs you money.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/80 md:text-xl">
              A custom website, dashboard, and automation system works like your digital
              employee, bringing in customers, organizing operations, and handling repetitive
              work automatically, so your business runs smarter, faster, and grows without
              chaos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
