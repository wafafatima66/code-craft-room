'use client';

import { useState } from 'react';
import { EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
// Navbar and Footer are provided globally via layout

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    package: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'partial' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const subjectParts: string[] = [];
  //     if (formData.projectType) subjectParts.push(formData.projectType);
  //     if (formData.company) subjectParts.push(formData.company);
  //     const subject = `[Contact] ${subjectParts.join(' - ') || 'Inquiry'}`;

  //     const body =
  //       `Name: ${formData.name || 'N/A'}\n` +
  //       `Email: ${formData.email}\n` +
  //       (formData.phone ? `Phone: ${formData.phone}\n` : '') +
  //       (formData.company ? `Company: ${formData.company}\n` : '') +
  //       (formData.projectType ? `Project Type: ${formData.projectType}\n` : '') +
  //       (formData.timeline ? `Timeline: ${formData.timeline}\n` : '') +
  //       `\nMessage:\n${formData.message}`;

  //     const mailto = `mailto:hello@codecraftspace.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  //     window.location.href = mailto;

  //     setSubmitStatus('idle');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       company: '',
  //       projectType: '',
  //       message: '',
  //       timeline: ''
  //     });
  //   } catch (err) {
  //     console.error('mailto open error:', err);
  //     setSubmitStatus('error');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setSubmitStatus('error');
      setSubmitMessage('Email and message are required.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setSubmitStatus(data.partial ? 'partial' : 'success');
        setSubmitMessage('The form has been submitted successfully.');
        setFormData({
          name: '',
          email: '',
          company: '',
          package: '',
          message: '',
          timeline: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || data.error || 'Something went wrong while sending your message.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-rcream">

      {/* ─── HERO ─── */}
      <section className="bg-ink py-20 relative overflow-hidden">
        {/* Decorative blocks */}
        <div className="absolute top-8 right-16 w-12 h-12 bg-ry opacity-70 hidden md:block" />
        <div className="absolute bottom-8 right-40 w-8 h-8 bg-rg opacity-70 hidden md:block" />
        <div className="absolute top-16 left-8 w-6 h-6 bg-rb opacity-60 hidden md:block" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-rcream/40 mb-4 uppercase">Free Demo</div>
          <h1 className="text-5xl md:text-7xl font-black text-rcream tracking-tighter leading-[0.9] mb-6">
            Let&apos;s talk about<br />
            <span className="text-rb">your restaurant.</span>
          </h1>
          <p className="text-rcream/60 text-xl max-w-xl leading-relaxed">
            Fill out the form and we&apos;ll get back to you within 24 hours.
            No commitment, no credit card — just a conversation.
          </p>
        </div>
      </section>

      {/* ─── FORM SECTION ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-ink tracking-tighter">What happens next</h2>
              <p className="text-ink/60 leading-relaxed">
                We&apos;ll review your message, check your restaurant&apos;s current setup,
                and come to the call with a clear recommendation — which plan makes sense,
                what channels to start with, and what results to expect in the first 30 days.
              </p>

              {/* Steps */}
              <div className="space-y-4 mt-8">
                {[
                  { num: "01", bg: "bg-rb", text: "text-rcream", title: "You fill out the form", desc: "Takes 2 minutes. Tell us about your restaurant and what you're trying to fix." },
                  { num: "02", bg: "bg-ry", text: "text-ink", title: "We review and prepare", desc: "Within 24 hours we review your info and prepare a specific recommendation for your restaurant." },
                  { num: "03", bg: "bg-rg", text: "text-rcream", title: "30-min call — zero pressure", desc: "We show you exactly what we'd build and what results to expect. You decide if it's a fit." },
                ].map(({ num, bg, text, title, desc }) => (
                  <div key={num} className="flex gap-4 items-start">
                    <div className={`${bg} ${text} w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0`}>
                      {num}
                    </div>
                    <div>
                      <div className="font-bold text-ink text-sm">{title}</div>
                      <div className="text-ink/55 text-sm mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div className="mt-10 space-y-3 pt-8 border-t border-ink/10">
                <div className="flex items-center gap-3 text-sm">
                  <EnvelopeIcon className="w-5 h-5 text-rb flex-shrink-0" />
                  <span className="text-ink/70">fatima.amir.dev@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPinIcon className="w-5 h-5 text-rg flex-shrink-0" />
                  <span className="text-ink/70">Serving restaurants worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ClockIcon className="w-5 h-5 text-ry flex-shrink-0" />
                  <span className="text-ink/70">Response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-3xl border border-ink/10 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-ink mb-6 tracking-tight">Book your free demo</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-rg/10 border border-rg/30 rounded-2xl">
                  <p className="text-rg font-semibold text-sm">{submitMessage}</p>
                </div>
              )}
              {submitStatus === 'partial' && (
                <div className="mb-6 p-4 bg-ry/20 border border-ry/40 rounded-2xl">
                  <p className="text-ink/70 text-sm">{submitMessage}</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-rr/10 border border-rr/30 rounded-2xl">
                  <p className="text-rr font-semibold text-sm">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-ink font-semibold text-sm mb-1.5">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-rcream border border-ink/15 rounded-xl text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-rb focus:border-transparent transition-all"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-ink font-semibold text-sm mb-1.5">Email address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-rcream border border-ink/15 rounded-xl text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-rb focus:border-transparent transition-all"
                      placeholder="jane@bellacafe.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-ink font-semibold text-sm mb-1.5">Restaurant name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-rcream border border-ink/15 rounded-xl text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-rb focus:border-transparent transition-all"
                    placeholder="Bella Cafe & Bistro"
                  />
                </div>

                <div>
                  <label htmlFor="package" className="block text-ink font-semibold text-sm mb-1.5">Which plan interests you?</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-rcream border border-ink/15 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-rb focus:border-transparent transition-all"
                  >
                    <option value="">Not sure yet — help me decide</option>
                    <option value="starter">Starter — $97/mo (AI Chatbot)</option>
                    <option value="growth">Growth — $197/mo (Chatbot + Reviews + Reservations)</option>
                    <option value="full-stack">Full Stack — $297/mo (Everything)</option>
                    <option value="custom">Custom / multiple locations</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-ink font-semibold text-sm mb-1.5">When do you want to get started?</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-rcream border border-ink/15 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-rb focus:border-transparent transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP — this week</option>
                    <option value="1-month">Within this month</option>
                    <option value="2-3-months">2–3 months</option>
                    <option value="flexible">Just exploring for now</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-ink font-semibold text-sm mb-1.5">Tell us about your restaurant *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-rcream border border-ink/15 rounded-xl text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-rb focus:border-transparent transition-all resize-none"
                    placeholder="What type of restaurant? What's your biggest challenge right now — missed calls, bad reviews, lost bookings?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-ink text-rcream font-black py-4 px-8 rounded-full hover:bg-rb transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Book Free Demo →'}
                </button>
                <p className="text-center text-xs text-ink/40">
                  No credit card. No commitment. We reply within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
