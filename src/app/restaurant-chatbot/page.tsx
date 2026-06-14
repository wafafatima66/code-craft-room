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
  CheckCircleIcon,
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
    desc: 'Takes bookings at 2 AM or 2 PM — never misses a table request, even when your doors are closed.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Menu & FAQ Answers',
    desc: "Answers questions about your menu, allergens, specials, and hours instantly — using your own information.",
  },
  {
    icon: BoltIcon,
    title: 'Catering & Event Leads',
    desc: 'Collects contact info for catering and event inquiries, then notifies you right away — no lead goes cold.',
  },
  {
    icon: ClockIcon,
    title: 'Instant Confirmations',
    desc: 'Sends booking confirmation texts or emails automatically the moment a reservation is made.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Works on Any Channel',
    desc: 'Sits on your website, connects to Instagram DMs, WhatsApp, and SMS — wherever your guests reach out.',
  },
  {
    icon: ChartBarIcon,
    title: 'See What Guests Ask Most',
    desc: 'Every conversation is logged so you know what your customers want — useful for your menu and marketing.',
  },
];

const HOW_IT_WORKS = [
  {
    num: '1',
    title: 'We learn your restaurant',
    desc: 'Your menu, hours, policies, and FAQs get fed into the AI. It learns your business so every answer sounds like it came from your own team.',
  },
  {
    num: '2',
    title: 'We connect it to your bookings',
    desc: 'The chatbot links to your existing booking setup — Google Calendar, OpenTable, Resy, or a simple spreadsheet — and logs reservations in real time.',
  },
  {
    num: '3',
    title: 'We add it to your website',
    desc: 'A small chat widget goes on your site. No redesign needed. It sits in the corner and steps in whenever a guest needs help.',
  },
  {
    num: '4',
    title: 'You get an alert for every booking',
    desc: 'Every reservation and catering inquiry triggers an instant text or email to you. You always know what\'s coming in — without checking anything.',
  },
];

const PAIN_POINTS = [
  { emoji: '📵', text: 'Guests call after hours and get voicemail — then book somewhere else' },
  { emoji: '💸', text: 'Catering inquiries sit in your DMs for days and go cold' },
  { emoji: '😩', text: 'Staff spends time answering "what are your hours?" instead of serving tables' },
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
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
            <SparklesIcon className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">AI Chatbot for Restaurants — Live Demo Inside</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Stop losing reservations{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              after hours
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8" />

          <p className="text-xl text-lightgray max-w-2xl mx-auto leading-relaxed mb-4">
            60% of restaurant bookings happen outside business hours — when no one is there to answer.
            This AI chatbot takes reservations, answers questions, and captures catering leads for you,{' '}
            <strong className="text-white">24/7, on autopilot.</strong>
          </p>

          <p className="text-accent font-semibold text-base mb-10">
            👇 Try the live demo below — it works exactly like the real thing
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn btn-primary px-7 py-3.5 text-base font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Get This for My Restaurant
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <span className="text-white/40 text-sm">Free quote · No commitment</span>
          </div>
        </div>
      </section>

      {/* ── Pain Points Strip ── */}
      <section className="bg-white/5 border-y border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-white/50 text-sm font-semibold uppercase tracking-widest mb-6">
            Sound familiar?
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {PAIN_POINTS.map(({ emoji, text }) => (
              <div key={text} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-6">
            A chatbot handles all of this — automatically, while you focus on the food.
          </p>
        </div>
      </section>

      {/* ── Demo + Features ── */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Chat Demo */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-4 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 text-accent text-sm font-bold">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                  Interactive Demo — click a button to start
                </span>
              </div>

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
                * Demo uses scripted responses. The real version uses live AI trained on your restaurant.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                  Everything it{' '}
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">handles for you</span>
                </h2>
                <p className="text-lightgray text-lg leading-relaxed">
                  It&apos;s not just a chatbot — it&apos;s like having a front-of-house team member available around the clock, never off sick, never on break.
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

      {/* ── How It Works ── */}
      <section className="relative py-20 bg-charcoal/95 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              How it works for{' '}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">your restaurant</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6" />
            <p className="text-lightgray text-lg max-w-xl mx-auto">
              You don&apos;t need to do anything technical. We handle the entire setup — you just start getting bookings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {HOW_IT_WORKS.map(s => (
              <div
                key={s.num}
                className="rounded-xl bg-white/5 border border-white/10 p-6 flex gap-4 hover:bg-white/8 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-extrabold">{s.num}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1.5">{s.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What's included */}
          <div className="mt-10 rounded-xl bg-accent/5 border border-accent/20 p-6">
            <p className="text-white font-bold mb-4 text-center">What&apos;s included in every build:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'AI trained on your menu, hours & FAQs',
                'Reservation flow with booking confirmation',
                'Catering & event lead capture',
                'Instant SMS or email alerts to you',
                'Embedded widget on your website',
                '30 days of support after launch',
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                  <CheckCircleIcon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
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
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Ready to stop{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              missing bookings?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6" />
          <p className="text-lightgray text-lg mb-3 leading-relaxed">
            I build custom AI chatbots for restaurants — trained on your menu, connected to your bookings, and running on your site within days.
          </p>
          <p className="text-white/50 text-base mb-10">
            No tech knowledge needed. No monthly platform fees. Just more bookings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-2"
            >
              Get a Free Quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40">
            <span>✓ Free quote, no commitment</span>
            <span>✓ Reply within 24 hours</span>
            <span>✓ Built specifically for your restaurant</span>
          </div>
        </div>
      </section>
    </div>
  );
}
