"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  title: string;
  summary: string;
  tags?: string[];
  year?: string;
  href?: string;
  image?: string;
  techStack?: string[];
  role?: string;
  caseStudyHref?: string;
};

function isExternalUrl(url?: string): boolean {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

const defaultProjects: Project[] = [
  {
    title: "Blueberry IT Sky - Digital Agency",
    summary:
      "Designed and built a high-conversion digital agency site that clearly explains complex services, captures qualified leads, and supports ongoing marketing campaigns.",
    tags: ["Digital Agency", "Services", "Web Development"],
    year: "2024",
    image: "/project/1.png",
    href: "https://www.bberrysky.com/",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    role: "Lead Full-Stack Developer",
    caseStudyHref: "/blog"
  },
  {
    title: "Loud Spectrum E-Commerce",
    summary:
      "Scalable e-commerce platform handling complex product variants, secure checkout flows, and real-time inventory management for a growing retail brand.",
    tags: ["E-commerce", "Product Listing", "Cart", "Checkout"],
    year: "2023",
    image: "/project/2.png",
    href: "https://stag.loudspectrum.com/",
    techStack: ["Next.js", "TypeScript", "Stripe API", "Supabase"],
    role: "Full-Stack Engineer",
    caseStudyHref: "/blog"
  },
  {
    title: "Fatima Amir Portfolio",
    summary:
      "A minimal, performance-focused personal portfolio showcasing design work and development projects with smooth transitions and perfect SEO scores.",
    tags: ["Portfolio", "Design", "Development"],
    year: "2023",
    image: "/project/3.png",
    href: "https://fatima-amir.vercel.app/",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    role: "Frontend Developer",
    caseStudyHref: "/blog"
  },
];

export default function PreviousWork({ projects = defaultProjects }: { projects?: Project[] }) {
  return (
    <section id="previous-work" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-charcoal mb-6 tracking-tight leading-tight">
            Featured Projects &{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Real client work focused on performance, clarity, and business outcomes.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((p, index) => {
            const external = isExternalUrl(p.href);
            const imageSrc = p.image;
            const CardLink = external ? "a" : Link;
            const linkProps = external
              ? { href: p.href as string, target: "_blank", rel: "noopener noreferrer" }
              : { href: (p.href as string) || "#" };

            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative grid lg:grid-cols-12 gap-12 items-center"
              >
                {/* Image Side (Left) */}
                <div className="lg:col-span-7 relative">
                  <div className="relative rounded-xl bg-charcoal/5 p-2 shadow-2xl border border-charcoal/10 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-accent/10">
                    {/* Browser Chrome */}
                    <div className="h-8 bg-white rounded-t-lg border-b border-charcoal/5 flex items-center px-4 gap-2 mb-1">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="mx-auto w-1/2 h-4 bg-charcoal/5 rounded-full text-[10px] flex items-center justify-center text-charcoal/40 font-mono">
                          {p.href ? new URL(p.href).hostname : "localhost:3000"}
                        </div>
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-[16/10] bg-white rounded-b-lg overflow-hidden border-t border-charcoal/5">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={p.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 1024px) 60vw, (min-width: 640px) 100vw, 100vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-pink-50 text-charcoal/40">
                          No Preview Available
                        </div>
                      )}

                      {/* Overlay gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Decorative Elements behind image */}
                  <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-pink-100/50 rounded-3xl blur-3xl opacity-60"></div>
                </div>

                {/* Content Side (Right) */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    {p.year && (
                      <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-charcoal bg-white border border-pink-200 rounded-full shadow-sm">
                        {p.year}
                      </span>
                    )}
                    {p.role && (
                      <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-pink-50 border border-pink-100 rounded-full">
                        {p.role}
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                    {p.title}
                  </h3>

                  <p className="text-lg text-secondary mb-8 leading-relaxed border-l-4 border-pink-200 pl-6">
                    {p.summary}
                  </p>

                  {/* Tech Stack */}
                  {p.techStack && (
                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {p.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-sm font-medium text-charcoal bg-gray-50 border border-gray-200 rounded-md hover:border-accent/30 hover:bg-white transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-auto pt-4">
                    {p.caseStudyHref && (
                      <Link
                        href={p.caseStudyHref}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-primary text-white font-bold rounded-full shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        View Case Study
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    )}

                    {p.href && (
                      <CardLink
                        {...linkProps}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal font-bold border-2 border-pink-200 rounded-full hover:border-accent hover:text-accent hover:bg-pink-50 transition-all duration-300"
                      >
                        Live Demo
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </CardLink>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-lg font-bold text-secondary hover:text-accent transition-colors group"
          >
            See more projects on GitHub
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
