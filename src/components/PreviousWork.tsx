import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  summary: string;
  tags?: string[];
  year?: string;
  href?: string;
  image?: string; // If omitted and href is external, auto-generate screenshot thumbnail
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
      "Comprehensive digital agency website showcasing web/mobile development, cloud infrastructure, AI automation, and managed services.",
    tags: ["Digital Agency", "Services", "Web Development"],
    year: "2024",
    image: "/project/1.png",
    href: "https://www.bberrysky.com/",
  },
  {
    title: "Loud Spectrum",
    summary:
      "E-commerce Website with all the important features like product listing, cart, checkout, and user authentication.",
    tags: ["E-commerce", "Product Listing", "Cart", "Checkout"],
    year: "2023",
    image: "/project/2.png",
    href: "https://stag.loudspectrum.com/",
  },
  {
    title: "Fatima Amir Portfolio",
    summary:
      "Personal portfolio showcasing design and development projects.",
    tags: ["Portfolio", "Design", "Development"],
    year: "2023",
    image: "/project/3.png",
    href: "https://fatima-amir.vercel.app/",
  },
];

export default function PreviousWork({ projects = defaultProjects }: { projects?: Project[] }) {
  return (
    <section id="previous-work" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Previous <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="mt-4 text-light max-w-2xl mx-auto">
            Recent projects that reflect pragmatic, well-crafted results.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const external = isExternalUrl(p.href);
            const imageSrc = p.image;

            const CardLink = external ? "a" : Link;
            const linkProps = external
              ? { href: p.href as string, target: "_blank", rel: "noopener noreferrer" }
              : { href: (p.href as string) || "#" };

            return (
              <div
                key={p.title}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-accent/40 transition-colors"
              >
                <div className="relative h-55">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      priority={false}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/60 text-white/80">
                      <span className="text-sm">No thumbnail available</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-90"></div>
                  {p.tags && p.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-md bg-accent/90 text-charcoal px-2 py-1 text-xs font-semibold shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {p.year && (
                    <span className="absolute bottom-3 right-3 rounded-md bg-white/15 border border-white/20 text-white/90 px-2 py-1 text-xs">
                      {p.year}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{p.summary}</p>

                  {p.href && (
                    <div className="mt-4">

                      <CardLink
                        {...linkProps}
                        className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                      >
                        View Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent group-hover:translate-x-0.5 transition-transform"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </CardLink>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}