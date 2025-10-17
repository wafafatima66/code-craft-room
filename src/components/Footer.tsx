import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">Code Craft Room</h3>
          <p className="mt-2 text-sm text-white/80">
            Hand-Crafted Websites, Built for Your Success.
          </p>
          <p className="mt-4 text-sm text-white/70">Texas, USA</p>
          <a href="mailto:hello@codecraftroom.com" className="mt-1 inline-block text-sm text-accent">hello@codecraftroom.com</a>
        </div>
        <div className="text-sm flex flex-col gap-2">
          <Link href="#services" className="hover:text-accent">Services</Link>
          <Link href="#pricing" className="hover:text-accent">Pricing</Link>
          <Link href="#testimonials" className="hover:text-accent">Testimonials</Link>
          <Link href="#about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </div>
        <div className="text-sm text-white/70">
          <p>© {new Date().getFullYear()} Code Craft Room</p>
          <div className="mt-2 flex gap-4">
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}