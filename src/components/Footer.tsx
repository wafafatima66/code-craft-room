'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-rcream border-t border-ink/10 overflow-hidden">
      {/* Big wordmark — units.gr inspired */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-6">
        <div className="text-[13vw] font-black tracking-tighter text-ink leading-none select-none opacity-6">
          CodeCraftSpace.
        </div>
      </div>

      {/* Links + info */}
      <div className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-black text-xl text-ink mb-2">
              Code Craft <span className="text-rb">Space</span>
            </div>
            <p className="text-ink/50 text-sm max-w-xs leading-relaxed">
              Restaurant automation agency — chatbots, review management, and reservation tools built for the hospitality industry.
            </p>
            <a
              href="mailto:fatima.amir.dev@gmail.com"
              className="mt-3 inline-block text-sm text-rb hover:underline"
            >
              Get in touch →
            </a>
          </div>

          <div className="text-sm flex flex-col gap-3">
            <div className="font-bold text-ink/40 uppercase tracking-widest text-xs mb-1">Navigate</div>
            <a href="#solutions" className="text-ink/70 hover:text-rb transition-colors">Solutions</a>
            <a href="#how-it-works" className="text-ink/70 hover:text-rb transition-colors">How It Works</a>
            <a href="#pricing" className="text-ink/70 hover:text-rb transition-colors">Pricing</a>
            <a href="#faq" className="text-ink/70 hover:text-rb transition-colors">FAQ</a>
            <Link href="/restaurant-chatbot" className="text-ink/70 hover:text-rb transition-colors">Live Demo</Link>
          </div>

          <div className="text-sm flex flex-col gap-3">
            <div className="font-bold text-ink/40 uppercase tracking-widest text-xs mb-1">Company</div>
            <Link href="/blog" className="text-ink/70 hover:text-rb transition-colors">Blog</Link>
            <Link href="/contact" className="text-ink/70 hover:text-rb transition-colors">Contact</Link>
            <Link href="/privacy" className="text-ink/70 hover:text-rb transition-colors">Privacy</Link>
            <Link href="/terms" className="text-ink/70 hover:text-rb transition-colors">Terms</Link>
            <div className="mt-2 flex items-center gap-4">
              <a href="https://www.instagram.com/fatima_amir_dev/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink/50 hover:text-rb transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://x.com/FatimaCraftSpac" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-ink/50 hover:text-rb transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21l-6.52 7.455L22.146 22H16.15l-4.697-6.134L6.08 22H3.322l6.974-7.97L2 2h6.152l4.246 5.588L18.244 2Zm-.967 18h1.527L7.323 3.894H5.685L17.277 20Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/fatimaamir99/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink/50 hover:text-rb transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V21h-4v-5.64c0-1.34-.02-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97V21h-4V9Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-8 flex items-center justify-between flex-wrap gap-3">
          <p className="text-ink/35 text-xs">© {new Date().getFullYear()} Code Craft Space. Built by{" "}
            <a href="https://fatima-amir.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-rb transition-colors">Fatima Amir</a>.
          </p>
          <Link href="/contact" className="bg-ink text-rcream text-xs font-bold px-5 py-2.5 rounded-full hover:bg-rb transition-colors">
            Book Free Demo →
          </Link>
        </div>
      </div>
    </footer>
  );
}
