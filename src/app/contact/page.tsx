'use client';

import { useState } from 'react';
import { EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
// Navbar and Footer are provided globally via layout

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    package: '',
    projectType: '',
    message: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) setSubmitStatus('success');
      else setSubmitStatus('error');

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        package: '',
        projectType: '',
        message: '',
        timeline: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      <section className="relative py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Geometric pattern */}
          <div className="absolute inset-0 opacity-3">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact-grid" width="20" height="20" patternUnits="userspaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-charcoal/10" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-grid)" />
            </svg>
          </div>

          {/* Grain texture */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-charcoal mb-6 tracking-tight leading-tight">
              Let&apos;s Build Your <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Dream Website</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with a custom website? Get in touch and let&apos;s discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-charcoal mb-6">Get In Touch</h2>
                <p className="text-secondary text-lg leading-relaxed mb-8">
                  Ready to start your project?  We&apos;ll discuss your project requirements back and forth to understand your needs clearly.
                  Once everything is finalized, we&apos;ll set up a personalized price for you and send an invoice before starting the project.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-pink-50/60 backdrop-blur-sm rounded-xl border border-pink-200 hover:bg-pink-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-charcoal font-semibold">Email</h3>
                    <p className="text-secondary">hello@codecraftspace.com</p>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-light">+1 (555) 123-4567</p>
                  </div>
                </div> */}

                <div className="flex items-center gap-4 p-4 bg-pink-50/60 backdrop-blur-sm rounded-xl border border-pink-200 hover:bg-pink-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-charcoal font-semibold">Location</h3>
                    <p className="text-secondary">Texas, USA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-pink-50/60 backdrop-blur-sm rounded-xl border border-pink-200 hover:bg-pink-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-charcoal font-semibold">Response Time</h3>
                    <p className="text-secondary">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-pink-50/60 backdrop-blur-sm rounded-2xl border border-pink-200 p-8">
              <h3 className="text-2xl font-extrabold text-charcoal mb-6">Send us a message</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-pink-500/10 border border-pink-200 rounded-lg">
                  <p className="text-charcoal">Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-charcoal font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-charcoal font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-charcoal font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-charcoal font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="package" className="block text-charcoal font-medium mb-2">Interested Package</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-white text-charcoal">Select a package</option>
                    <option value="landing-page" className="bg-white text-charcoal">Landing Page ($200)</option>
                    <option value="portfolio" className="bg-white text-charcoal">Portfolio Website ($500)</option>
                    <option value="small-business" className="bg-white text-charcoal">Small Business Website ($800)</option>
                    <option value="custom" className="bg-white text-charcoal">Custom / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-charcoal font-medium mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-white text-charcoal">Select project type</option>
                    {/* <option value="ecommerce" className="bg-charcoal text-white">E-commerce Website</option> */}
                    <option value="business" className="bg-white text-charcoal">Business Website</option>
                    <option value="portfolio" className="bg-white text-charcoal">Portfolio Website</option>
                    <option value="blog" className="bg-white text-charcoal">Blog/Content Site</option>
                    <option value="custom" className="bg-white text-charcoal">Custom Application</option>
                    <option value="redesign" className="bg-white text-charcoal">Website Redesign</option>
                    <option value="other" className="bg-white text-charcoal">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-charcoal font-medium mb-2">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-white text-charcoal">Select timeline</option>
                    <option value="asap" className="bg-white text-charcoal">ASAP</option>
                    <option value="1-month" className="bg-white text-charcoal">Within 1 month</option>
                    <option value="2-3-months" className="bg-white text-charcoal">2-3 months</option>
                    <option value="3-6-months" className="bg-white text-charcoal">3-6 months</option>
                    <option value="flexible" className="bg-white text-charcoal">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent to-primary text-white font-bold py-4 px-8 rounded-lg hover:from-accent/90 hover:to-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
