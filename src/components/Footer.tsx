'use client';
import Link from "next/link";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-charcoal/95 border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">Code Craft Space</h3>
          <p className="mt-2 text-sm text-white/80">
            Hand-Crafted Websites, Built for Your Success.
          </p>
         

          <a href="mailto:fatima.amir.dev@gmail.com" className="mt-1 inline-block text-sm text-accent">fatima.amir.dev@gmail.com</a>
        </div>
        <div className="text-sm flex flex-col gap-2">
          <Link href="/#services" className="hover:text-accent">Services</Link>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </div>
        <div className="text-sm text-white/70">
          <p>© {new Date().getFullYear()} Code Craft Space</p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://www.instagram.com/fatima_amir_dev/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <CameraIcon className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/FatimaCraftSpac"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="X"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21l-6.52 7.455L22.146 22H16.15l-4.697-6.134L6.08 22H3.322l6.974-7.97L2 2h6.152l4.246 5.588L18.244 2Zm-.967 18h1.527L7.323 3.894H5.685L17.277 20Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/fatimaamir99/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V21h-4v-5.64c0-1.34-.02-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97V21h-4V9Z" />
              </svg>
            </a>
          </div>
           <p className="mt-4">
            {/* Built by Fatima Amir ·{" "} */}
            <a
              href="https://fatima-amir.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors mt-4"
            >
              {/* fatima-amir.vercel.app */}  Built by Fatima Amir
            </a>
          </p>
          <div className="mt-2 flex gap-4">
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
            {/* <Link href="https://fatima-amir.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-accent block text-white">Meet the Developer</Link> */}
          </div>
          
        </div>
      </div>
    </footer>
  );
}
