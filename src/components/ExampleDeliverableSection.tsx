import Image from "next/image";

const automationIdeas = [
  {
    highlight: "Online orders",
    rest: " automatically sent to kitchen + WhatsApp/email confirmation to customer",
  },
  {
    highlight: "Table reservation system",
    rest: " with automatic reminders",
  },
  {
    highlight: "Google review request",
    rest: " after dining",
  },
  {
    highlight: "Daily sales + delivery reports",
    rest: " auto-generated",
  },
  {
    highlight: "Inventory alerts",
    rest: " when ingredients run low",
  },
];

const dashboardItems = [
  {
    highlight: "Orders overview",
    rest: " (Uber Eats, DoorDash, website)",
  },
  {
    highlight: "Reservation calendar",
    rest: "",
  },
  {
    highlight: "Revenue + best-selling menu items",
    rest: "",
  },
  {
    highlight: "Customer feedback & reviews",
    rest: "",
  },
  {
    highlight: "Staff performance tracking",
    rest: "",
  },
];

export default function ExampleDeliverableSection() {
  return (
    <section className="relative bg-charcoal ">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-8xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Example system preview
              </p>

              <div className="mt-6 rounded-2xl bg-[#0d1626] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">Dashboard</p>
                    <h3 className="text-xl font-bold text-white">Restaurant Operations</h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Live
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-white/60">Today&apos;s Orders</p>
                    <p className="mt-2 text-3xl font-bold text-white">128</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-white/60">Revenue</p>
                    <p className="mt-2 text-3xl font-bold text-white">$4.8k</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white/5 p-4">
                  <div className="flex items-end gap-3">
                    <div className="h-16 w-8 rounded-t bg-accent/70" />
                    <div className="h-24 w-8 rounded-t bg-primary/70" />
                    <div className="h-20 w-8 rounded-t bg-accent/60" />
                    <div className="h-28 w-8 rounded-t bg-primary/80" />
                    <div className="h-14 w-8 rounded-t bg-accent/50" />
                    <div className="h-24 w-8 rounded-t bg-primary/60" />
                  </div>
                  <p className="mt-3 text-sm text-white/60">Sales trend</p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-white/60">Reservations</p>
                    <p className="mt-2 text-lg font-semibold text-white">14 booked today</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-white/60">Top Item</p>
                    <p className="mt-2 text-lg font-semibold text-white">Chicken Shawarma</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-[#101828] p-5">
                <p className="text-sm font-semibold text-white">Automation Flow</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
                  <span className="rounded-full bg-white/10 px-3 py-2">New online order</span>
                  <span className="text-accent">-&gt;</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Send to kitchen</span>
                  <span className="text-accent">-&gt;</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Notify customer</span>
                  <span className="text-accent">-&gt;</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Update dashboard</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Example of what you&apos;ll get
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                Automation Ideas:
              </h2>
              <div className="mt-5 space-y-4">
                {automationIdeas.map((item) => (
                  <div key={item.highlight} className="flex gap-3">
                    <span className="mt-1 text-accent">+</span>
                    <p className="text-base leading-7 text-white/80">
                      <span className="font-semibold text-sky-300">{item.highlight}</span>
                      {item.rest}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                Custom Dashboard:
              </h2>
              <div className="mt-5 space-y-4">
                {dashboardItems.map((item) => (
                  <div key={item.highlight} className="flex gap-3">
                    <span className="mt-1 text-accent">+</span>
                    <p className="text-base leading-7 text-white/80">
                      <span className="font-semibold text-sky-300">{item.highlight}</span>
                      {item.rest}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-12">
          <h3 className="mb-5 text-2xl font-extrabold text-white md:text-3xl">
            Example of restaurant dashboard
          </h3>
          <div className="overflow-hidden rounded-3xl bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <Image
              src="/dashboard.png"
              alt="Custom business dashboard example"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
