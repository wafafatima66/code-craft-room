'use client';

import { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    id: 1,
    question: "Why custom code instead of using AI website builders?",
    answer: "AI builders create generic templates that can&apos;t handle real e-commerce needs. They lack proper Stripe integration, custom database management for products, professional blog systems, and personalized features specific to your business. Custom code gives you a real online store, not just a pretty template."
  },
  {
    id: 2,
    question: "Why $0 down instead of charging upfront?",
    answer: "We believe your business deserves a chance to succeed without massive upfront costs. Our monthly model lets you invest in inventory, marketing, and growth instead of a huge website bill."
  },
  {
    id: 3,
    question: "What if I need changes after launch?",
    answer: "Unlimited edits are included! Need to update text, add products, change images, or modify anything? Just tell us and we&apos;ll do it within 24-48 hours."
  },
  {
    id: 4,
    question: "How do you handle product and blog uploads?",
    answer: "Just send us your content via email or our client portal. We&apos;ll format it, optimize images, add it to your website, and let you know when it&apos;s live. No learning curve for you."
  },
  {
    id: 5,
    question: "Do I own the website?",
    answer: "While we maintain the code and hosting during your subscription, you own all your content, images, and data. If you ever want to move to self-hosting, we can discuss options."
  },
  {
    id: 6,
    question: "How long does it take to build?",
    answer: "Most websites are live within 3-4 weeks. Need it faster? We offer rush service for an additional fee."
  },
  {
    id: 7,
    question: "What if I'm not happy with the design?",
    answer: "We include two rounds of revisions during the design phase. If after that you&apos;re still not satisfied, we&apos;ll refund any payments and part ways—no hard feelings."
  },
  {
    id: 8,
    question: "Can I cancel anytime?",
    answer: "After your initial 3-month commitment, you can cancel anytime with 30 days notice."
  },
  {
    id: 9,
    question: "What happens if I cancel?",
    answer: "Your website will remain live for 30 days, giving you time to migrate elsewhere if desired. We&apos;ll provide you with all your content and data."
  },
  {
    id: 10,
    question: "Can you integrate with my Etsy shop?",
    answer: "Yes! We can display your Etsy products on your website, or help you transition completely away from Etsy."
  },
  {
    id: 11,
    question: "How is this different from Shopify?",
    answer: "Shopify charges monthly fees + transaction fees + expensive app costs, uses templates, and limits customization. We charge one flat monthly fee, no transaction fees, build everything custom, and include all features—no expensive apps needed."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative py-24 bg-charcoal overflow-hidden">
      {/* Background elements - consistent with WhoWeHelp/Hero sections */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="faq-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faq-grid)" />
          </svg>
        </div>
        
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
             }}>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our custom website development services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            
            return (
              <div 
                key={faq.id}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-500 ease-out overflow-hidden hover:shadow-lg hover:shadow-accent/10"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all duration-500 ease-out"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ease-out">
                      <QuestionMarkCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-200 group-hover:text-blue-100 transition-all duration-500 ease-out leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <ChevronDownIcon 
                    className={`w-6 h-6 text-accent transition-all duration-500 ease-out flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                    }`}
                  />
                </button>

                {/* Answer Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    transitionProperty: 'max-height, opacity, padding',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className={`px-6 pl-20 transition-all duration-500 ease-out ${
                    isOpen ? 'pb-6 pt-2' : 'pb-0 pt-0'
                  }`}>
                    <div className={`w-full h-px bg-gradient-to-r from-accent/30 to-primary/30 mb-4 transition-all duration-500 ease-out ${
                      isOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}></div>
                    <p className={`text-light leading-relaxed text-lg transition-all duration-500 ease-out delay-100 ${
                      isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-lg text-light mb-4">
              Still have questions? We&apos;re here to help!
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto mb-4"></div>
            <button className="btn btn-primary px-6 py-3 text-base font-semibold hover:scale-105 transition-transform duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}