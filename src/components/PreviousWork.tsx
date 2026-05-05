import Link from "next/link";

type Project = {
  title: string;
  summary: string;
  tags?: string[];
  year?: string;
  href?: string;
  image?: string;
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
    title: "Batter Up Cake Shop",
    summary:
      "Custom celebration cake website with bold branding, featured products, and a polished bakery experience.",
    tags: ["Bakery", "Demo Site", "Custom Website"],
    year: "2025",
    image: "/project/recent-work-bakery-brown.jpg",
    href: "https://bakery-website-brown-demo.netlify.app/",
  },
  {
    title: "Coffee U Frisco",
    summary:
      "Neighborhood coffee shop website with a warm local feel, product highlights, and loyalty-driven messaging.",
    tags: ["Coffee Shop", "Demo Site", "Custom Website"],
    year: "2025",
    image: "/project/recent-work-coffee-brown.jpg",
    href: "https://coffee-website-brown-demo.netlify.app/",
  },
  {
    title: "Blush Oven Bakehouse",
    summary:
      "Elegant bakery website with soft visual styling, featured specials, and strong product storytelling.",
    tags: ["Bakery", "Demo Site", "Custom Website"],
    year: "2025",
    image: "/project/recent-work-bakery-pink.jpg",
    href: "https://bakery-website-pink-demo.netlify.app/",
  },
  {
    title: "Spice & Crumbs",
    summary:
      "Fusion restaurant website with vibrant branding, menu-focused sections, and an inviting local-business layout.",
    tags: ["Restaurant", "Demo Site", "Custom Website"],
    year: "2025",
    image: "/project/recent-work-restaurant-green.jpg",
    href: "https://restaurant-green-demo.netlify.app/",
  },
];

export default function PreviousWork({ projects = defaultProjects }: { projects?: Project[] }) {
  return (
    <section id="previous-work" className="relative py-20 bg-charcoal/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Recent <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-light font-body">
            A few recent demo sites showing the kind of custom work I can build for small businesses.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 gap-6">
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
                className="group bg-white/5 overflow-hidden rounded-none shadow-[0_24px_70px_rgba(0,0,0,0.35)] transition-all hover:shadow-[0_28px_85px_rgba(0,0,0,0.45)]"
              >
                <CardLink {...linkProps} className="block relative h-80 md:h-150">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
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
                          className="font-accent inline-flex items-center rounded-md bg-accent/90 text-charcoal px-2 py-1 text-xs font-semibold shadow-sm"
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
                </CardLink>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="font-body mt-2 text-sm text-white/80">{p.summary}</p>

                  {p.href && (
                    <div className="mt-4">

                      <CardLink
                        {...linkProps}
                        className="font-accent inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
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
