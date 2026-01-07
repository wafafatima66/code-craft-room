export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">What clients say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <blockquote className="card p-6">
            <p className="text-charcoal">
              “My photography portfolio looks incredible. The gallery loads instantly, and I’ve already booked three new weddings this month.”
            </p>
            <footer className="mt-4 text-secondary text-sm">— Elena K., Photographer</footer>
          </blockquote>
          <blockquote className="card p-6">
            <p className="text-charcoal">
              “Finally, a website that actually generates leads. I love how easy it is for clients to find my listings and contact me.”
            </p>
            <footer className="mt-4 text-secondary text-sm">— James T., Real Estate Agent</footer>
          </blockquote>
          <blockquote className="card p-6">
            <p className="text-charcoal">
              “Simple, professional, and effective. My plumbing business is getting more calls from locals finding me online.”
            </p>
            <footer className="mt-4 text-secondary text-sm">— Mike D., Local Plumber</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}