import type { Metadata } from "next";
import Link from "next/link";

const painPoints = [
    "Copying data between spreadsheets by hand every week or month",
    "Jumping between 5+ tools to get one answer from your business data",
    "Spending Sunday nights on reports that should take minutes, not hours",
    "Making decisions without real-time data and relying on guesswork",
    "Repeating the same manual tasks every single week when a system could handle them",
];

const solutions = [
    {
        title: "Custom Business Dashboards",
        description:
            "A single screen that shows you exactly what's happening in your business - revenue, leads, tasks, and performance - in real time.",
    },
    {
        title: "n8n Automation Systems",
        description:
            "I map your repetitive workflows and automate them, from lead follow-ups and report generation to data syncing, notifications, and client onboarding.",
    },
];

const processSteps = [
    {
        step: "1",
        title: "We map your workflows",
        description:
            "A 30-minute call where we find exactly where your time is being wasted and what decisions you're making blind.",
    },
    {
        step: "2",
        title: "I build your system",
        description:
            "Custom dashboard and automation flows, built specifically around your business instead of a generic template.",
    },
    {
        step: "3",
        title: "You run smarter",
        description:
            "You get a live system handed over with a walkthrough, plus 30 days of support after delivery.",
    },
];

const includedFeatures = [
    {
        title: "Custom Dashboard",
        description:
            "Built around your actual metrics, not a template filled with numbers that don't apply to you.",
    },
    {
        title: "n8n Automation Flows",
        description:
            "Repetitive tasks are automated and continue running while you work, sleep, or take a weekend off.",
    },
    {
        title: "Tool Integrations",
        description:
            "Connects to the tools you already use, including Gmail, Notion, Stripe, Google Sheets, Airtable, and Slack.",
    },
    {
        title: "Real-Time Data",
        description:
            "Your dashboard updates automatically with no manual refreshes and no stale numbers.",
    },
    {
        title: "Workflow Mapping",
        description:
            "Every process is documented before automation starts so nothing gets lost in translation.",
    },
    {
        title: "30-Day Support",
        description:
            "Full support after handover for adjustments, fixes, and questions as you start using the system.",
    },
];

const audienceFit = [
    "Are wearing too many hats and don't have time to fix their systems",
    "Have data scattered across 4+ different tools",
    "Know they are leaving time and money on the table but don't know how to fix it",
    "Want to make data-driven decisions but don't have a clear view of their numbers",
    "Are ready to stop doing manually what a system should do",
];

const faqs = [
    {
        question: "Do I need to be technical to use this?",
        answer:
            "No. I build it, explain it, and make sure you can use it comfortably before I hand it over.",
    },
    {
        question: "What tools does this connect with?",
        answer:
            "Any tool with an API or webhook, including Gmail, Google Sheets, Notion, Airtable, Stripe, Slack, WhatsApp, Calendly, and more. We'll confirm everything in our first call.",
    },
    {
        question: "How long does it take?",
        answer: "Most projects are delivered in 1-2 weeks depending on complexity.",
    },
    {
        question: "What if I don't know what I need?",
        answer:
            "That's exactly what the first call is for. Most clients don't know what to automate until we map it together, and that's fine.",
    },
    {
        question: "Is this a monthly subscription?",
        answer:
            "No. It's a one-time project fee. You own the system. There are no recurring charges unless you want ongoing support.",
    },
    {
        question: "What's the price?",
        answer:
            "Every system is scoped individually. Book a free call and I'll give you a clear quote within 24 hours.",
    },
];

export const metadata: Metadata = {
    title: "Business Automation & Custom Dashboards | Code Craft Space",
    description:
        "Custom n8n automation systems and business dashboards for small business owners. Stop doing manually what a system should do. Built by Fatima at Code Craft Space.",
    alternates: {
        canonical: "https://www.codecraftspace.com/automation-dashboard",
    },
};

export default function AutomationDashboardPage() {
    return (
        <main className="min-h-screen bg-charcoal text-white">
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0">
                    <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl animate-pulse" />
                    <div className="absolute bottom-16 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 blur-3xl animate-pulse delay-1000" />
                    <div className="absolute inset-0 opacity-5">
                        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="automation-grid" width="20" height="20" patternUnits="userspaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#automation-grid)" />
                        </svg>
                    </div>
                </div>

                <div className="relative mx-auto max-w-6xl px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                            n8n automation + custom dashboards
                        </span>
                        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                            Your business runs on data.
                            <br />
                            Yours shouldn&apos;t still be in a spreadsheet.
                        </h1>
                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
                            I build custom dashboards and automation systems for small business owners who are tired
                            of doing manually what a system should do for them.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href="/contact" className="btn btn-primary px-6 py-3 text-base">
                                Book your free call
                            </Link>
                            <Link
                                href="#included"
                                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                See what&apos;s included
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">The problem</p>
                        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Why this matters</h2>
                        <p className="mt-4 text-lg leading-8 text-white/75">
                            If you&apos;re running a business in 2025 and your workflows still depend on manual admin,
                            you&apos;re losing time, clarity, and momentum.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {painPoints.map((item) => (
                            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                <p className="text-base leading-7 text-white/85">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/10 p-6 text-center">
                        <p className="text-lg font-medium text-white">
                            You&apos;re not disorganised. You just haven&apos;t had the right system built for you yet.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">The solution</p>
                        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">What I actually build</h2>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {solutions.map((item, index) => (
                            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary text-lg font-bold text-white">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                <p className="mt-4 text-base leading-7 text-white/80">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">How it works</p>
                        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">A simple 3-step process</h2>
                    </div>

                    <div className="mt-12 space-y-4">
                        {processSteps.map((item) => (
                            <article key={item.step} className="rounded-2xl bg-white/5 p-8">
                                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent md:min-w-24">
                                        Step {item.step}
                                    </span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                        <p className="mt-4 text-base leading-7 text-white/80">{item.description}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="included" className="py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What&apos;s included</p>
                        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Everything needed to run smarter</h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {includedFeatures.map((item) => (
                            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-base leading-7 text-white/80">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Who this is for</p>
                            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                                Built for small business owners who need better systems
                            </h2>
                            <div className="mt-8 space-y-4">
                                {audienceFit.map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <span className="mt-1 text-accent">+</span>
                                        <p className="text-base leading-7 text-white/80">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 md:p-10">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Not for</p>
                            <h2 className="mt-4 text-2xl font-extrabold text-white">Generic software subscriptions</h2>
                            <p className="mt-4 text-base leading-7 text-white/80">
                                This is not for businesses that want an off-the-shelf tool and a login. This is for
                                owners who want something built around how their specific business actually works.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
                        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Pre-answering the common questions</h2>
                    </div>

                    <div className="mt-12 space-y-4">
                        {faqs.map((item) => (
                            <article
                                key={item.question}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                            >
                                <h3 className="text-lg font-semibold text-white">
                                    {item.question}
                                </h3>
                                <p className="mt-4 text-base leading-7 text-white/80">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-24 pt-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/15 to-primary/15 p-8 text-center md:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Book a free workflow audit</p>
                        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">30 minutes. A clearer view of what to automate.</h2>
                        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
                            We map where your time is going so you leave with a clear picture of what could be
                            automated, with no obligation.
                        </p>
                        <Link href="/contact" className="btn btn-primary mt-8 inline-flex px-6 py-3 text-base">
                            Book your free call -&gt;
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
