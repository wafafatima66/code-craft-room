"use client";
import Link from "next/link";
import { useState } from "react";

const FAQS = [
  {
    q: "How long does the full setup take?",
    a: "Most restaurants are live in 72 hours. Day 1 we learn your restaurant, Day 2 we build and connect everything, Day 3 you review and approve. We handle everything technical — you just answer our questions and test the final product.",
  },
  {
    q: "Does the chatbot actually know my specific menu and policies?",
    a: "Yes. Before we launch, we train the bot on your exact menu (with prices), your hours, booking policies, parking, dress code — everything. When your menu changes, send us the update and we update the bot within 24 hours.",
  },
  {
    q: "What happens when the bot can't answer a question?",
    a: "The bot immediately escalates to you via WhatsApp or email, with the full conversation context. The customer is told a team member will follow up shortly. No one ever gets left without a resolution.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None at all. We build it, train it, monitor it, and maintain it. Your only job is to review weekly reports and approve any changes. You never touch the code or the platform.",
  },
  {
    q: "What review platforms do you work with?",
    a: "We primarily work with Google Business Profile and Yelp — those have the highest impact on restaurant rankings. We can also add TripAdvisor and Facebook Reviews. All requests and responses are managed in one place.",
  },
  {
    q: "Can I cancel if it's not working for me?",
    a: "Yes. Month-to-month, no contracts. Give us 30 days notice and we wind everything down cleanly. We export all your conversation and review data so you keep everything.",
  },
  {
    q: "How do you get customer phone numbers for review requests?",
    a: "The reservation bot collects phone numbers during the booking flow. For existing customers, we help you run a one-time opt-in campaign. All messaging complies with SMS marketing regulations.",
  },
  {
    q: "Will it work with my existing POS or reservation system?",
    a: "In most cases, yes. We integrate with OpenTable, Resy, Square, Toast, and others. If you use something else, we evaluate it during onboarding. Some integrations may require the Full Stack plan.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-rcream text-ink">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="bg-rcream min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        {/* Decorative colored blocks — units.gr inspired */}
        <div className="absolute top-20 right-10 w-16 h-16 bg-ry opacity-70 hidden md:block" />
        <div className="absolute top-44 right-36 w-8 h-8 bg-rb opacity-70 hidden md:block" />
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-rg opacity-70 hidden md:block" />
        <div className="absolute bottom-20 right-24 w-10 h-10 bg-rp opacity-70 hidden md:block" />
        <div className="absolute top-60 left-8 w-6 h-6 bg-ro opacity-60 hidden md:block" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="inline-flex items-center gap-2 bg-ink/8 rounded-full px-4 py-1.5 text-sm font-semibold mb-10">
            <span className="w-2 h-2 rounded-full bg-rg animate-pulse inline-block" />
            Restaurant Automation Agency
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-ink max-w-5xl">
            Put Your Restaurant<br />
            <span className="text-rb">On Autopilot.</span>
          </h1>

          <p className="mt-8 text-xl text-ink/60 max-w-2xl leading-relaxed">
            AI chatbot, review management, and reservation automation —
            all running 24/7 so your team can focus on what matters:{" "}
            <strong className="text-ink">the food</strong>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#solutions"
              className="bg-ink text-rcream px-8 py-4 font-bold text-base rounded-full hover:bg-rb transition-colors"
            >
              See What We Build →
            </a>
            <Link
              href="/contact"
              className="border-2 border-ink text-ink px-8 py-4 font-bold text-base rounded-full hover:bg-ink hover:text-rcream transition-colors"
            >
              Book a Free Demo
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap gap-5">
            {[
              { num: "60%", label: "of calls go unanswered after hours", color: "text-rb" },
              { num: "3×", label: "more reviews with automation", color: "text-rg" },
              { num: "72hrs", label: "from zero to fully automated", color: "text-rp" },
            ].map(({ num, label, color }) => (
              <div key={num} className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-ink/8">
                <div className={`text-2xl font-black ${color}`}>{num}</div>
                <div className="text-xs text-ink/50 mt-0.5 max-w-[140px]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ──────────────────────────────────── */}
      <section className="bg-ink text-rcream py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-white/15">
          {[
            { num: "60%", color: "text-ry", copy: "of restaurant calls go unanswered after hours. That table is going to a competitor." },
            { num: "42%", color: "text-rg", copy: "more reservations when customers can book via chat anytime — not just during business hours." },
            { num: "3hrs", color: "text-rb", copy: "saved per week when review responses are automated. Owners focus on operations instead." },
          ].map(({ num, color, copy }) => (
            <div key={num} className="text-center md:px-8">
              <div className={`text-5xl font-black ${color}`}>{num}</div>
              <div className="mt-3 text-sm text-rcream/60 max-w-xs mx-auto leading-relaxed">{copy}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PAIN POINTS ──────────────────────────────────── */}
      <section className="bg-rcream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-ink/40 mb-4 uppercase">The Problem</div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-ink mb-16">Sound familiar?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01", bg: "bg-rb", textColor: "text-rcream", mutedColor: "text-rcream/70", labelColor: "text-rcream/50",
                label: "MISSED CALLS",
                title: "Your phone rings at 10pm and no one picks up.",
                desc: "Every unanswered message after hours is a reservation you'll never fill. Customers don't wait — they just call the next restaurant on the list.",
              },
              {
                num: "02", bg: "bg-ry", textColor: "text-ink", mutedColor: "text-ink/70", labelColor: "text-ink/50",
                label: "BAD REVIEWS",
                title: "A 1-star review sits online with no response for weeks.",
                desc: "Ignoring negative reviews signals you don't care. But you're too busy running a restaurant to respond to every Google review every day.",
              },
              {
                num: "03", bg: "bg-ro", textColor: "text-rcream", mutedColor: "text-rcream/70", labelColor: "text-rcream/50",
                label: "LOST BOOKINGS",
                title: "Reservations live in DMs, voicemails, and sticky notes.",
                desc: "Double bookings. Walk-ins showing up for a party that wasn't confirmed. No single source of truth — just chaos at the host stand every Friday night.",
              },
              {
                num: "04", bg: "bg-rg", textColor: "text-rcream", mutedColor: "text-rcream/70", labelColor: "text-rcream/50",
                label: "NO LOYALTY SYSTEM",
                title: "Regulars just disappear and you have no way to reach them.",
                desc: "That couple who came every Friday? Gone. You have no idea why, and no system to reach out before it's too late. No follow-up, no retention, no second chance.",
              },
            ].map(({ num, bg, textColor, mutedColor, labelColor, label, title, desc }) => (
              <div key={num} className={`${bg} ${textColor} rounded-3xl p-10 relative overflow-hidden`}>
                <div className="text-[8rem] font-black leading-none opacity-10 absolute -top-4 -right-2 select-none pointer-events-none">
                  {num}
                </div>
                <div className="relative z-10">
                  <div className={`text-sm font-bold ${labelColor} mb-3 tracking-widest uppercase`}>{label}</div>
                  <h3 className="text-2xl font-black leading-tight mb-4">{title}</h3>
                  <p className={`${mutedColor} leading-relaxed`}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS ────────────────────────────────────── */}
      <section id="solutions" className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-rcream/40 mb-4 uppercase">What We Build</div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-rcream mb-4">
            Everything we automate<br />for your restaurant.
          </h2>
          <p className="text-rcream/50 text-lg mb-16 max-w-2xl">
            Four systems. Zero manual work. All built, trained, and maintained by us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                bg: "bg-rp", textColor: "text-rcream", tagBg: "bg-rcream/15", tagText: "text-rcream",
                icon: "🤖", title: "AI Chatbot",
                desc: "Your 24/7 front desk — on WhatsApp, Instagram, and your website. It answers questions, books tables, and captures leads while you sleep.",
                tags: ["24/7 responses", "Menu knowledge", "Reservation booking", "Lead capture", "Multi-channel"],
              },
              {
                bg: "bg-ry", textColor: "text-ink", tagBg: "bg-ink/12", tagText: "text-ink",
                icon: "⭐", title: "Review Automation",
                desc: "Automatically request reviews after every visit, then use AI to draft thoughtful responses to every review — in minutes, not weeks.",
                tags: ["Auto review requests", "AI responses", "Google + Yelp", "Sentiment tracking", "1-click approve"],
              },
              {
                bg: "bg-rb", textColor: "text-rcream", tagBg: "bg-rcream/15", tagText: "text-rcream",
                icon: "📅", title: "Reservation Bot",
                desc: "Customers book directly in WhatsApp or Instagram DMs. Instant confirmation, automated reminders, and waitlist management — no phone tag.",
                tags: ["Real-time availability", "Auto-confirmation", "Reminder texts", "Waitlist mgmt", "Cancellation handling"],
              },
              {
                bg: "bg-ro", textColor: "text-rcream", tagBg: "bg-rcream/15", tagText: "text-rcream",
                icon: "💬", title: "Guest Loyalty",
                desc: "Win back customers who've gone quiet. Send birthday messages, re-engagement campaigns, and new menu alerts automatically.",
                tags: ["Birthday campaigns", "Win-back texts", "New menu alerts", "Special promos", "VIP segments"],
              },
            ].map(({ bg, textColor, tagBg, tagText, icon, title, desc, tags }) => (
              <div key={title} className={`${bg} ${textColor} rounded-3xl p-10 hover:scale-[1.01] transition-transform`}>
                <div className="text-4xl mb-5">{icon}</div>
                <h3 className="text-2xl font-black mb-3">{title}</h3>
                <p className="opacity-75 mb-7 leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className={`text-xs ${tagBg} ${tagText} px-3 py-1 rounded-full font-medium`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHATBOT DEEP DIVE ────────────────────────────── */}
      <section className="bg-rp py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-bold tracking-widest text-rcream/40 mb-4 uppercase">AI Chatbot</div>
            <h2 className="text-4xl md:text-5xl font-black text-rcream tracking-tighter mb-6">
              A chatbot that actually knows your restaurant.
            </h2>
            <p className="text-rcream/70 text-lg mb-8 leading-relaxed">
              We train it on your menu, hours, policies, and specials.
              It answers like a knowledgeable staff member — not a generic bot.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Answers hours, location, parking, dress code",
                "Explains the full menu with prices",
                "Takes table reservations (checks real availability)",
                "Handles catering and event inquiries",
                "Captures customer info for follow-up",
                "Escalates complex questions to you instantly",
                "Works on WhatsApp, Instagram, and your website",
                "Available in multiple languages",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-rcream/80">
                  <span className="mt-0.5 text-ry font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/restaurant-chatbot" className="bg-rcream text-ink px-6 py-3 font-bold rounded-full hover:bg-ry transition-colors">
                See Live Demo →
              </Link>
              <Link href="/contact" className="border-2 border-rcream/40 text-rcream px-6 py-3 font-bold rounded-full hover:border-rcream transition-colors">
                Get This For My Restaurant
              </Link>
            </div>
          </div>

          {/* Chat preview */}
          <div className="bg-rcream/10 rounded-3xl p-5">
            <div className="bg-rcream rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-rp px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 bg-ry rounded-full flex items-center justify-center text-sm font-black text-ink flex-shrink-0">B</div>
                <div>
                  <div className="text-rcream font-semibold text-sm">Bella Roma 🍝</div>
                  <div className="text-rcream/60 text-xs">Typically replies instantly</div>
                </div>
              </div>
              <div className="p-4 space-y-3 bg-gray-50">
                <div className="bg-rp/15 rounded-2xl rounded-tl-sm p-3 max-w-[78%] text-sm text-ink">
                  Hi! I'd like to book a table for 4 on Saturday at 7pm 🍽️
                </div>
                <div className="bg-rp text-rcream rounded-2xl rounded-tr-sm p-3 max-w-[78%] ml-auto text-sm">
                  Great choice! We have a table available at 7pm this Saturday for 4. Can I get your name and phone number to confirm?
                </div>
                <div className="bg-rp/15 rounded-2xl rounded-tl-sm p-3 max-w-[78%] text-sm text-ink">
                  John Smith, 555-0192. Also, do you have vegetarian options?
                </div>
                <div className="bg-rp text-rcream rounded-2xl rounded-tr-sm p-3 max-w-[78%] ml-auto text-sm">
                  Perfect, John! Your table is confirmed ✅ And yes — we have 8 vegetarian dishes including our mushroom risotto and truffle pasta. See you Saturday! 🎉
                </div>
              </div>
            </div>
            <p className="text-center text-rcream/50 text-xs mt-3">Real example from a restaurant using our system</p>
          </div>
        </div>
      </section>

      {/* ─── REVIEW AUTOMATION ────────────────────────────── */}
      <section className="bg-ry py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-ink/40 mb-4 uppercase">Review Automation</div>
          <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tighter mb-4">
            More reviews. Better score.<br />Zero manual work.
          </h2>
          <p className="text-ink/60 text-lg mb-16 max-w-2xl">
            Most restaurants get 10% of their customers to leave a review.
            With automation, that becomes 30–40%. Here's how it works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            {[
              { step: "01", title: "Customer dines", desc: "They finish their meal and pay the bill." },
              { step: "02", title: "Auto text sent", desc: "2 hours later, a friendly 'How was your experience?' message goes out automatically." },
              { step: "03", title: "They leave a review", desc: "One tap takes them to Google or Yelp. No friction. More reviews." },
              { step: "04", title: "AI responds", desc: "Within 24 hours, an AI-drafted response is ready for you to approve with one click." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-ink/8 rounded-3xl p-6">
                <div className="text-5xl font-black text-ink/15 mb-4">{step}</div>
                <h3 className="font-black text-ink text-lg mb-2">{title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "3×", color: "text-ry", bg: "bg-ink", label: "More reviews in the first 30 days" },
              { num: "2hrs", color: "text-rg", bg: "bg-ink", label: "Average response time (vs. weeks manually)" },
              { num: "94%", color: "text-rb", bg: "bg-ink", label: "Of AI-drafted responses approved with no edits" },
            ].map(({ num, color, bg, label }) => (
              <div key={num} className={`${bg} text-rcream rounded-3xl p-8 text-center`}>
                <div className={`text-5xl font-black ${color}`}>{num}</div>
                <div className="text-rcream/70 mt-2 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESERVATION BOT ──────────────────────────────── */}
      <section className="bg-rb py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs font-bold tracking-widest text-rcream/40 mb-4 uppercase">Reservation Bot</div>
            <h2 className="text-4xl md:text-5xl font-black text-rcream tracking-tighter mb-6">
              Never lose a booking again.
            </h2>
            <p className="text-rcream/70 text-lg mb-8 leading-relaxed">
              Your reservation bot works across every channel your customers use — and
              syncs everything to one place so your team always knows the real count.
            </p>

            <h3 className="font-bold text-rcream mb-4 text-xs uppercase tracking-widest">Works on these channels</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "💬", name: "WhatsApp", desc: "Most popular for bookings" },
                { icon: "📸", name: "Instagram DMs", desc: "Direct from your profile" },
                { icon: "🌐", name: "Website widget", desc: "Embedded chat on your site" },
                { icon: "📱", name: "SMS", desc: "For customers who prefer text" },
                { icon: "📘", name: "Facebook", desc: "Messenger integration" },
                { icon: "🔗", name: "Any platform", desc: "We build what you need" },
              ].map(({ icon, name, desc }) => (
                <div key={name} className="bg-rcream/10 rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <div>
                    <div className="text-rcream font-semibold text-sm">{name}</div>
                    <div className="text-rcream/50 text-xs">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-rcream mb-6 text-xs uppercase tracking-widest">What the bot handles</h3>
            <div className="space-y-3">
              {[
                { title: "Real-time availability check", desc: "Checks your actual calendar before confirming any slot." },
                { title: "Instant confirmations", desc: "Customer gets a confirmation message in under 60 seconds." },
                { title: "24hr and 2hr reminders", desc: "Automated reminder texts — no-shows drop dramatically." },
                { title: "Waitlist management", desc: "Customers join the waitlist. If a slot opens, they're notified first." },
                { title: "Cancellation handling", desc: "Customer cancels via chat. Slot freed instantly. No phone call needed." },
                { title: "Special occasion notes", desc: "Birthday? Anniversary? The bot flags it so your team can prepare." },
                { title: "Party size adjustments", desc: "Handles groups from 2 to 50+, with appropriate table configurations." },
                { title: "Deposit collection", desc: "For large parties, the bot can collect a deposit via link before confirming." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3 bg-rcream/10 rounded-2xl p-4">
                  <span className="text-ry mt-0.5 font-bold flex-shrink-0">→</span>
                  <div>
                    <div className="text-rcream font-semibold text-sm">{title}</div>
                    <div className="text-rcream/55 text-xs mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOYALTY ──────────────────────────────────────── */}
      <section className="bg-ro py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-rcream/40 mb-4 uppercase">Guest Loyalty</div>
          <h2 className="text-4xl md:text-5xl font-black text-rcream tracking-tighter mb-4">
            Turn one-time diners into<br />loyal regulars.
          </h2>
          <p className="text-rcream/70 text-lg mb-16 max-w-2xl">
            Most restaurants have no way to reach their customers after they leave.
            We change that with three automated campaigns that run on their own.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💔",
                title: "Win-Back Campaign",
                sub: "60-day re-engagement",
                desc: "A customer hasn't been back in 60 days. They automatically get a personal-sounding message: 'Hey, we miss you! Here's something special to bring you back...'",
                result: "23% return rate",
              },
              {
                icon: "🎂",
                title: "Birthday Campaign",
                sub: "Automated annually",
                desc: "Every customer's birthday gets them a personalized message with a birthday offer. Set it once — it runs every year forever without you lifting a finger.",
                result: "41% conversion",
              },
              {
                icon: "🍽️",
                title: "New Menu Alerts",
                sub: "Instant announcements",
                desc: "New seasonal menu? New specials? New chef? One message from you triggers an automated campaign to your entire customer list in minutes.",
                result: "Avg 35% open rate",
              },
            ].map(({ icon, title, sub, desc, result }) => (
              <div key={title} className="bg-rcream/15 rounded-3xl p-8">
                <div className="text-4xl mb-4">{icon}</div>
                <div className="text-rcream/55 text-xs font-bold uppercase tracking-wider mb-2">{sub}</div>
                <h3 className="text-xl font-black text-rcream mb-3">{title}</h3>
                <p className="text-rcream/70 text-sm leading-relaxed mb-6">{desc}</p>
                <span className="bg-rcream text-ro font-black text-sm px-4 py-2 rounded-full">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section id="how-it-works" className="bg-rcream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-ink/40 mb-4 uppercase">Setup Process</div>
          <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tighter mb-4">
            From zero to automated<br />in 72 hours.
          </h2>
          <p className="text-ink/50 text-lg mb-16 max-w-xl">
            We handle the full setup. You review and approve. Everything goes live in 3 days.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { day: "Day 1", step: "01", bg: "bg-rb", text: "text-rcream", title: "We learn your restaurant", desc: "We gather your menu, hours, policies, pricing, and special instructions. The more detail, the smarter the bot." },
              { day: "Day 2", step: "02", bg: "bg-rp", text: "text-rcream", title: "We build & connect", desc: "WhatsApp, Instagram, website widget — we handle all technical setup. Zero work from you." },
              { day: "Day 3", step: "03", bg: "bg-rg", text: "text-rcream", title: "You review and approve", desc: "We show you everything live. You test it, we tweak it. Launch only when you're 100% happy." },
              { day: "Ongoing", step: "→", bg: "bg-ry", text: "text-ink", title: "Weekly reports in your inbox", desc: "Every Monday: conversations, reservations booked, reviews generated, and leads captured." },
            ].map(({ day, step, bg, text, title, desc }) => (
              <div key={step} className={`${bg} ${text} rounded-3xl p-8`}>
                <div className="text-sm font-bold opacity-55 mb-3 uppercase tracking-wider">{day}</div>
                <div className="text-6xl font-black opacity-15 mb-3 leading-none select-none">{step}</div>
                <h3 className="text-xl font-black mb-3 leading-tight">{title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ────────────────────────────────── */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-rcream/40 mb-4 uppercase">Everything Included</div>
          <h2 className="text-4xl md:text-5xl font-black text-rcream tracking-tighter mb-16">
            No integrations to figure out.<br />No features to unlock.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "🕐", text: "24/7 responses" },
              { icon: "🍽️", text: "Full menu knowledge" },
              { icon: "🌍", text: "Multi-language" },
              { icon: "🎭", text: "Custom personality" },
              { icon: "📅", text: "Reservation booking" },
              { icon: "📋", text: "Waitlist management" },
              { icon: "✅", text: "Auto-confirmations" },
              { icon: "⏰", text: "Reminder messages" },
              { icon: "⭐", text: "Review requests" },
              { icon: "🤖", text: "AI review responses" },
              { icon: "📊", text: "Google + Yelp sync" },
              { icon: "📈", text: "Review monitoring" },
              { icon: "📇", text: "Lead capture" },
              { icon: "🎂", text: "Birthday campaigns" },
              { icon: "💔", text: "Win-back texts" },
              { icon: "📢", text: "New menu alerts" },
              { icon: "💬", text: "WhatsApp" },
              { icon: "📸", text: "Instagram DMs" },
              { icon: "🌐", text: "Website widget" },
              { icon: "📱", text: "SMS support" },
              { icon: "📊", text: "Weekly reports" },
              { icon: "🔔", text: "Team alerts" },
              { icon: "⬆️", text: "Instant escalation" },
              { icon: "🛠️", text: "Ongoing maintenance" },
            ].map(({ icon, text }) => (
              <div key={text} className="bg-rcream/8 hover:bg-rcream/15 transition-colors rounded-2xl p-4 flex items-center gap-3">
                <span className="text-xl flex-shrink-0">{icon}</span>
                <span className="text-rcream/80 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────── */}
      <section id="pricing" className="bg-rcream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-ink/40 mb-4 uppercase">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tighter mb-4">
            Simple, predictable pricing.
          </h2>
          <p className="text-ink/50 text-lg mb-16 max-w-xl">
            Month-to-month. Cancel anytime. No setup fees, no hidden charges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border-2 border-ink/10">
              <div className="text-xs font-bold text-ink/40 uppercase tracking-widest mb-5">Starter</div>
              <div className="text-5xl font-black text-ink mb-1">
                $97<span className="text-2xl font-normal text-ink/40">/mo</span>
              </div>
              <p className="text-ink/50 text-sm mb-8 leading-relaxed">One tool. Huge impact. Perfect for getting started with AI automation.</p>
              <ul className="space-y-3 mb-10">
                {["AI Chatbot (1 channel)", "FAQ automation", "Basic lead capture", "Menu & hours knowledge", "Monthly report"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink/70">
                    <span className="text-rg font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center border-2 border-ink text-ink py-3 rounded-full font-bold hover:bg-ink hover:text-rcream transition-colors">
                Get Started
              </Link>
            </div>

            {/* Growth - highlighted */}
            <div className="bg-rb rounded-3xl p-8 border-2 border-rb relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ry text-ink text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                Most Popular
              </div>
              <div className="text-xs font-bold text-rcream/55 uppercase tracking-widest mb-5">Growth</div>
              <div className="text-5xl font-black text-rcream mb-1">
                $197<span className="text-2xl font-normal text-rcream/50">/mo</span>
              </div>
              <p className="text-rcream/60 text-sm mb-8 leading-relaxed">Bookings + reputation on autopilot.</p>
              <ul className="space-y-3 mb-10">
                {[
                  "Everything in Starter",
                  "AI Chatbot (3 channels)",
                  "Review requests (Google + Yelp)",
                  "AI review response drafts",
                  "Reservation bot",
                  "Confirmation + reminder texts",
                  "Weekly reports",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-rcream/80">
                    <span className="text-ry font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center bg-ry text-ink py-3 rounded-full font-black hover:brightness-105 transition-all">
                Get Started
              </Link>
            </div>

            {/* Full Stack */}
            <div className="bg-white rounded-3xl p-8 border-2 border-ink/10">
              <div className="text-xs font-bold text-ink/40 uppercase tracking-widest mb-5">Full Stack</div>
              <div className="text-5xl font-black text-ink mb-1">
                $297<span className="text-2xl font-normal text-ink/40">/mo</span>
              </div>
              <p className="text-ink/50 text-sm mb-8 leading-relaxed">The complete automation system for serious restaurants.</p>
              <ul className="space-y-3 mb-10">
                {[
                  "Everything in Growth",
                  "All 5+ channels",
                  "Guest loyalty campaigns",
                  "Win-back automation",
                  "Birthday messages",
                  "New menu announcements",
                  "Custom integrations",
                  "Bi-weekly check-in call",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink/70">
                    <span className="text-rg font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center border-2 border-ink text-ink py-3 rounded-full font-bold hover:bg-ink hover:text-rcream transition-colors">
                Get Started
              </Link>
            </div>
          </div>

          <p className="text-center text-ink/40 text-sm mt-8">
            Not sure which plan?{" "}
            <Link href="/contact" className="text-rb underline underline-offset-2">
              Book a free 30-min call
            </Link>{" "}
            and we'll recommend the right fit.
          </p>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section id="faq" className="bg-ink py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-rcream/40 mb-4 uppercase">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-black text-rcream tracking-tighter mb-16">
            Common questions.
          </h2>

          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="bg-rcream/8 rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-rcream/12 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-rcream font-semibold leading-snug">{q}</span>
                  <span className={`text-rcream/60 text-xl flex-shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-rcream/65 leading-relaxed text-sm border-t border-rcream/10 pt-4">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="bg-rg py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-bold tracking-widest text-rcream/40 mb-4 uppercase">Get Started</div>
          <h2 className="text-5xl md:text-7xl font-black text-rcream tracking-tighter mb-6">
            Ready to stop<br />missing bookings?
          </h2>
          <p className="text-rcream/70 text-xl mb-10 max-w-xl mx-auto">
            Most restaurants see results in the first week.
            Let's talk about what automation makes sense for yours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-rcream text-ink px-10 py-5 font-black text-lg rounded-full hover:bg-ry transition-colors"
          >
            Book Your Free Demo →
          </Link>
          <p className="text-rcream/40 text-sm mt-6">No credit card. No commitment. Just 30 minutes.</p>
        </div>
      </section>

    </main>
  );
}
