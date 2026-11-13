"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-rcream/95 backdrop-blur border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-tight text-ink">
          Code Craft <span className="text-rb">Space</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-ink">
          <a href="#solutions" className="hover:text-rb transition-colors">Solutions</a>
          <a href="#how-it-works" className="hover:text-rb transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-rb transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-rb transition-colors">FAQ</a>
          <Link
            href="/contact"
            className="bg-ink text-rcream px-5 py-2.5 font-semibold text-sm rounded-full hover:bg-rb transition-colors"
          >
            Book Free Demo →
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-ink mb-1 rounded" />
          <div className="w-5 h-0.5 bg-ink mb-1 rounded" />
          <div className="w-5 h-0.5 bg-ink rounded" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-rcream border-t border-ink/10 px-6 py-5 flex flex-col gap-5">
          <a href="#solutions" onClick={() => setMenuOpen(false)} className="text-sm font-semibold">Solutions</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-sm font-semibold">How It Works</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-sm font-semibold">Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="text-sm font-semibold">FAQ</a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-ink text-rcream px-5 py-3 font-semibold text-sm rounded-full text-center"
          >
            Book Free Demo →
          </Link>
        </div>
      )}
    </header>
  );
}
