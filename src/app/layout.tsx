import type { Metadata } from "next";
import { Cabin, Instrument_Serif, Inter, Manrope } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Code Craft Space — Hand-Crafted Websites, Built for Your Success",
  description:
    "Code Craft Space builds custom e-commerce websites for Texas small businesses and Etsy sellers — professional, approachable, and results-focused.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Code Craft Space",
              url: "https://www.codecraftspace.com",
              logo: "https://www.codecraftspace.com/favicon.ico",
            }),
          }}
        />
        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Code Craft Space",
              url: "https://www.codecraftspace.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.codecraftspace.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${cabin.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground font-body`}
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q7TVEL5XEE" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-Q7TVEL5XEE');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
