"use client";
import Link from "next/link";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/80 text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <WrenchScrewdriverIcon className="size-6 text-accent" aria-hidden />
          <span className="text-lg font-bold tracking-tight">Code Craft Space</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/#services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          {/* <Link href="/about" className="hover:text-accent transition-colors">About</Link> */}
          <div className="relative group">
            <button
              type="button"
              className="hover:text-accent transition-colors"
            >
              Tools
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="min-w-64 rounded-xl border border-white/10 bg-charcoal/95 p-2 shadow-2xl backdrop-blur">
                {/* <Link
                  href="/bistromail"
                  className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors"
                >
                  Restaurant Newsletter Generator
                </Link> */}
                <Link
                  href="/restaurant-chatbot"
                  className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors"
                >
                  Restaurant AI Chatbot
                </Link>
              </div>
            </div>
          </div>
          <Link href="/contact" className="btn btn-primary px-4 py-2">Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
