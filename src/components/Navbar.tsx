"use client";
import Link from "next/link";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isMinimal = pathname === "/contact" || pathname === "/privacy" || pathname === "/terms";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 text-charcoal border-b border-pink-200/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <WrenchScrewdriverIcon className="size-6 text-accent" aria-hidden />
          <span className="text-lg font-bold tracking-tight">Code Craft Space</span>
        </Link>

        {isMinimal ? (
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/#services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/#pricing" className="hover:text-accent transition-colors">Pricing</Link>
            <Link href="/#testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="btn btn-primary px-4 py-2">Get a Quote</Link>
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/#pricing" className="hover:text-accent transition-colors">Pricing</Link>
            <Link href="/#testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="btn btn-primary px-4 py-2">Get a Quote</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
