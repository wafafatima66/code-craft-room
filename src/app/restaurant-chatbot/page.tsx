'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// ── Types ──────────────────────────────────────────────────────────────────
interface ChatMsg {
  from: 'bot' | 'user';
  text: string;
}

type Step =
  | 'greeting'
  | 'party-size'
  | 'date'
  | 'time'
  | 'name-input'
  | 'confirm'
  | 'done'
  | 'menu'
  | 'hours'
  | 'catering';

// ── Static data ────────────────────────────────────────────────────────────
const QUICK_REPLIES: Partial<Record<Step, string[]>> = {
  greeting: ['📅 Make a Reservation', '🍽️ View the Menu', '⏰ Hours & Location', '🎉 Catering & Events'],
  'party-size': ['1 guest', '2 guests', '3–4 guests', '5+ guests'],
  date: ['Tonight', 'Tomorrow', 'This Weekend', 'Next Week'],
  time: ['6:00 PM', '7:00 PM', '7:30 PM', '8:00 PM'],
  confirm: ['✅ Confirm Booking', '✏️ Change Details'],
  done: ['📅 Book Again', '💬 Ask a Question'],
  menu: ['📅 Make a Reservation', '💬 Ask Another Question'],
  hours: ['📅 Make a Reservation', '💬 Ask Another Question'],
  catering: ['📅 Book a Table Instead', '💬 Ask Another Question'],
};

const INITIAL_MESSAGES: ChatMsg[] = [
  {
    from: 'bot',
    text: "👋 Hi! I'm the AI assistant for Bella Roma. I can help with reservations, menu questions, and event bookings — any time of day. How can I help you?",
  },
];

const FEATURES = [
  {
    icon: CalendarDaysIcon,
    title: '24/7 Reservations',
    desc: 'Takes bookings at 2 AM or 2 PM — never misses a table request, even when the restaurant is closed.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Menu & FAQ Answers',
    desc: "Instantly answers questions about the menu, allergens, specials, and pricing from your restaurant's own data.",
  },
  {
    icon: BoltIcon,
    title: 'Lead Capture',
    desc: 'Collects contact details for catering and event inquiries, then notifies you instantly so no lead goes cold.',
  },
  {
    icon: ClockIcon,
    title: 'Auto Confirmations',
    desc: 'Sends booking confirmation texts or emails automatically — no staff involvement needed.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Works Everywhere',
    desc: 'Embeds on your website, integrates with Instagram DMs, WhatsApp, and SMS for maximum reach.',
  },
  {
    icon: ChartBarIcon,
    title: 'Tracks What Guests Ask',
    desc: 'Logs every conversation so you can see what customers ask most — powerful data for your menu and marketing.',
  },
];

const APPROACHES = [
  {
    badge: 'No-Code',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    title: 'Plug-and-play widgets',
    desc: 'Tools like Tidio, Intercom, and Chatbase let you embed a chatbot in minutes. You train it by pasting your menu URL or uploading a PDF.',
    pros: ['Quick setup (hours not weeks)', 'Restaurant templates built-in', 'Monthly fee (~$30–$100/mo)'],
    con: 'Limited customization, generic feel',
  },
  {
    badge: 'Social Bots',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    title: 'Instagram & WhatsApp',
    desc: "Tools like ManyChat connect your Instagram or WhatsApp to a chatbot. When a customer DMs 'reserve', the bot walks them through booking automatically.",
    pros: ['Meets customers where they are', 'High engagement on social', 'Great for reservations'],
    con: 'Only works within those platforms',
  },
  {
    badge: 'Custom AI',
    badgeColor: 'bg-accent/20 text-accent border-accent/30',
    title: 'Claude / OpenAI API',
    desc: "A fully custom chatbot trained on your exact menu, tone, and policies. Integrates with your booking system and sends SMS alerts via Twilio.",
    pros: ['Fully personalized to your brand', 'No monthly platform fees', 'Unlimited customization'],
    con: 'Requires a developer to build',
  },
];

const BUILD_STEPS = [
  {
    num: '1',
    title: 'Train it on your restaurant',
    desc: "Your menu, hours, location, policies, and FAQs are fed into the AI so it knows your business inside out — no generic answers.",
  },
  {
    num: '2',
    title: 'Connect your booking system',
    desc: 'Hooks into OpenTable, Resy, Google Calendar, or a simple spreadsheet to check availability and log reservations in real time.',
  },
  {
    num: '3',
    title: 'Embed it on your website',
    desc: 'A small chat widget is added to your existing site. No redesign needed — it sits in the corner and activates when a guest needs help.',
  },
  {
    num: '4',
    title: 'Notify you on every lead',
    desc: "Every reservation and catering inquiry triggers an instant SMS or email to you, so you always know what's coming in.",
  },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function RestaurantChatbotPage() {
  const [messages, setMessages] = useState<ChatMsg[]>(INITIAL_MESSAGES);
  const [step, setStep] = useState<Step>('greeting');
  const [nameInput, setNameInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const booking = useRef({ partySize: '', date: '', time: '', name: '' });
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chatContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  function addBotMessage(text: string, nextStep: Step) {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text }]);
      setStep(nextStep);
    }, 900);
  }

  function handleQuickReply(reply: string) {
    if (isTyping) return;
    setMessages(prev => [...prev, { from: 'user', text: reply }]);

    switch (step) {
      case 'greeting':
        if (reply.includes('Reservation')) {
          addBotMessage('Great! How many people will be dining?', 'party-size');
        } else if (reply.includes('Menu')) {
          addBotMessage(
            '🍽️ Here are some highlights from our menu:\n\n• Margherita Pizza — $16\n• Truffle Pappardelle — $24\n• Grilled Salmon — $28\n• Signature Tiramisu — $9\n\nWe also have vegetarian, vegan, and gluten-free options. Would you like to make a reservation?',
            'menu'
          );
        } else if (reply.includes('Hours')) {
          addBotMessage(
            '📍 Bella Roma — 234 Oak Street, Downtown\n\n🕐 Mon–Thu: 11am – 9pm\n🕐 Fri–Sat: 11am – 11pm\n🕐 Sunday: 12pm – 8pm\n\nFree parking is available behind the building. Anything else I can help with?',
            'hours'
          );
        } else if (reply.includes('Catering')) {
          addBotMessage(
            "🎉 We'd love to help with your event! We handle corporate lunches, birthday parties, weddings, and private dinners.\n\nOur team will follow up within 2 hours. What name and email should we use to reach you?",
            'catering'
          );
        }
        break;

      case 'party-size':
        booking.current.partySize = reply;
        addBotMessage(`${reply} — perfect! What date works for you?`, 'date');
        break;

      case 'date':
        booking.current.date = reply;
        addBotMessage(`${reply} it is! What time would you like?`, 'time');
        break;

      case 'time':
        booking.current.time = reply;
        addBotMessage(`${reply} — great choice! Last step: what name should the reservation be under?`, 'name-input');
        break;

      case 'confirm': {
        const b = booking.current;
        if (reply.includes('Confirm')) {
          addBotMessage(
            `🎉 You're all set, ${b.name}!\n\n✅ ${b.partySize} · ${b.date} · ${b.time}\nName: ${b.name}\n\nA confirmation text is on its way. We look forward to seeing you! 🍷`,
            'done'
          );
        } else {
          booking.current = { partySize: '', date: '', time: '', name: '' };
          addBotMessage("No problem! Let's try again. How many people will be dining?", 'party-size');
        }
        break;
      }

      case 'done':
        if (reply.includes('Book')) {
          booking.current = { partySize: '', date: '', time: '', name: '' };
          addBotMessage('Sure! How many guests this time?', 'party-size');
        } else {
          addBotMessage('Of course! How can I help you today?', 'greeting');
        }
        break;

      case 'menu':
      case 'hours':
      case 'catering':
        if (reply.includes('Reservation') || reply.includes('Table')) {
          addBotMessage('Great! How many people will be dining?', 'party-size');
        } else {
          addBotMessage('Of course! How can I help you today?', 'greeting');
        }
        break;
    }
  }

  function handleNameSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = nameInput.trim();
    if (!name || isTyping) return;
    setNameInput('');
    setMessages(prev => [...prev, { from: 'user', text: name }]);
    booking.current.name = name;
    const b = booking.current;

    if (step === 'catering') {
      addBotMessage(
        `Thank you, ${name}! 📋 Your catering inquiry has been logged. Our events team will reach out within 2 hours to discuss details and pricing.\n\nIs there anything else I can help with?`,
        'catering'
      );
    } else {
      addBotMessage(
        `Almost there! Here's your reservation summary:\n\n👥 Party: ${b.partySize}\n📅 Date: ${b.date}\n🕐 Time: ${b.time}\n👤 Name: ${name}\n\nShall I confirm this booking?`,
        'confirm'
      );
    }
  }

  const currentReplies = QUICK_REPLIES[step] ?? [];
  const showTextInput = step === 'name-input' || step === 'catering';

  return (
    <div className="min-h-screen bg-charcoal">

      {/* ── Hero ── */}
      <section className="relative py-20 overflow-hidden bg-charcoal/95">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
            <SparklesIcon className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">AI-Powered Chatbot — Live Demo</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Your Restaurant&apos;s{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Digital Employee
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8" />
          <p className="text-xl text-lightgray max-w-3xl mx-auto leading-relaxed">
            An AI chatbot that handles reservations, answers menu questions, and captures catering leads — 24/7, on autopilot. Try the live demo below.
          </p>
        </div>
      </section>

      {/* ── Demo + Features ── */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Chat Demo */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden shadow-[0_28px_90px_rgba(0,0,0,0.5)] border border-white/10">

                {/* Chat header */}
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 flex items-center gap-3 border-b border-white/10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    AI
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Bella Roma Assistant</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-xs">Online 24/7</span>
                    </div>
                  </div>
                  <span className="ml-auto text-xs text-white/40 bg-white/5 px-2 py-1 rounded-md">Demo</span>
                </div>

                {/* Messages */}
                <div ref={chatContainerRef} className="bg-charcoal/80 h-96 overflow-y-auto p-4 space-y-3">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {msg.from === 'bot' && (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-xs font-bold mr-2 mt-1 flex-shrink-0">
                          AI
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line leading-relaxed ${
                          msg.from === 'bot'
                            ? 'bg-white/10 text-white rounded-tl-none'
                            : 'bg-gradient-to-br from-accent to-primary text-white rounded-tr-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-xs font-bold mr-2 mt-1 flex-shrink-0">
                        AI
                      </div>
                      <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1.5 items-center">
                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Input area */}
                <div className="bg-charcoal/90 border-t border-white/10 p-3 min-h-[64px]">
                  {!showTextInput && currentReplies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {currentReplies.map(reply => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          disabled={isTyping}
                          className="text-xs px-3 py-1.5 rounded-full border border-accent/50 text-accent hover:bg-accent hover:text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                  {showTextInput && (
                    <form onSubmit={handleNameSubmit} className="flex gap-2">
                      <input
                        type="text"
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}
                        placeholder={step === 'catering' ? 'Your name & email...' : 'Your name...'}
                        disabled={isTyping}
                        autoFocus
                        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
                      />
                      <button
                        type="submit"
                        disabled={isTyping || !nameInput.trim()}
                        className="px-4 py-2 bg-gradient-to-r from-accent to-primary text-white rounded-xl text-sm font-semibold disabled:opacity-40 hover:opacity-90 transition-opacity"
                      >
                        Send
                      </button>
                    </form>
                  )}
                </div>
              </div>
              <p className="text-center text-white/30 text-xs mt-3">
                * Demo uses scripted responses. Real version uses live AI.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                  What the chatbot{' '}
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">handles</span>
                </h2>
                <p className="text-lightgray text-lg leading-relaxed">
                  60% of restaurant bookings happen outside business hours. Every unanswered message is a missed table — this AI catches all of them.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURES.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-1">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it's built ── */}
      <section className="relative py-20 bg-charcoal/95 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              How people are{' '}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">building this</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6" />
            <p className="text-lightgray text-lg max-w-2xl mx-auto">
              There are a few ways to build a restaurant chatbot. Here&apos;s what&apos;s actually working in 2025.
            </p>
          </div>

          {/* Approach cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {APPROACHES.map(a => (
              <div
                key={a.title}
                className="rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col"
              >
                <span className={`inline-flex self-start text-xs font-bold px-2.5 py-1 rounded-full border mb-4 ${a.badgeColor}`}>
                  {a.badge}
                </span>
                <h3 className="text-white font-extrabold text-lg mb-2">{a.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">{a.desc}</p>
                <ul className="space-y-1.5 mb-3">
                  {a.pros.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-green-300">
                      <span className="mt-0.5 flex-shrink-0">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/40 flex items-start gap-1.5">
                  <span className="flex-shrink-0">⚠</span>
                  <span>{a.con}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Build steps */}
          <h3 className="text-2xl font-extrabold text-white mb-6 text-center">
            For the custom AI build — here&apos;s the process:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {BUILD_STEPS.map(s => (
              <div
                key={s.num}
                className="rounded-xl bg-white/5 border border-white/10 p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-extrabold">{s.num}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{s.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack note */}
          <div className="mt-10 rounded-xl bg-white/5 border border-white/10 p-6">
            <p className="text-white font-bold mb-3">Typical tech stack for a custom restaurant chatbot:</p>
            <div className="flex flex-wrap gap-2">
              {[
                'Claude / OpenAI API',
                'Next.js frontend',
                'Vercel deployment',
                'Twilio SMS alerts',
                'Google Sheets / Airtable',
                'Resend for email',
                'OpenTable API (optional)',
              ].map(t => (
                <span
                  key={t}
                  className="text-xs bg-white/10 border border-white/10 text-white/70 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Want this for{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              your restaurant?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6" />
          <p className="text-lightgray text-lg mb-8 leading-relaxed">
            I build custom restaurant chatbots that handle bookings, answer FAQs, and capture leads — so you stop losing customers to missed messages.
          </p>
          <Link
            href="/contact"
            className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-2"
          >
            Get a Free Quote
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-4 text-white/40 text-sm">No commitment. I&apos;ll reply within 24 hours.</p>
        </div>
      </section>
    </div>
  );
}
