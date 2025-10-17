export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">What clients say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <blockquote className="card p-6">
            <p className="text-charcoal">
              “Our Austin soap shop finally has a site that looks as good as our products. The checkout is smooth and our sales went up.”
            </p>
            <footer className="mt-4 text-secondary text-sm">— Sarah M., Austin, TX</footer>
          </blockquote>
          <blockquote className="card p-6">
            <p className="text-charcoal">
              “They integrated our Etsy listings and simplified inventory updates. Friendly, professional, and fast.”
            </p>
            <footer className="mt-4 text-secondary text-sm">— Marco R., Dallas, TX</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}