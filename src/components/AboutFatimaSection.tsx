export default function AboutFatimaSection() {
  return (
    <section className="relative py-20 bg-charcoal/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-none bg-white/5 backdrop-blur-sm p-8 md:p-12 shadow-[0_28px_90px_rgba(0,0,0,0.4)]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <img
              src="https://image.thum.io/get/width/1200/noanimate/https://fatima-amir.vercel.app/"
              alt="Fatima Amir portfolio thumbnail"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Hi, I&apos;m Fatima 👋
            </h2>
            <p className="font-body mt-4 text-lightgray text-lg leading-relaxed">
              I&apos;m Fatima — a web developer with 4+ years of experience building real production websites. I started Code Craft Space because I kept seeing small business owners struggle with websites that were broken, slow, or abandoned after launch. I&apos;m here to make that easier — no jargon, no agencies, just straightforward help.
            </p>
            <p className="font-body mt-4 text-lightgray text-lg leading-relaxed">
              I also build my own tools — like BistroMail, an email tool for restaurants and food businesses.
            </p>
            <a
              href="https://fatima-amir.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent mt-6 inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
