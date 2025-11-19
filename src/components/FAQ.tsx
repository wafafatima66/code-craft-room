'use client';

import { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

const faqData = [
  {
    id: 1,
    question: "Why custom code instead of using AI website builders?",
    answer: "AI builders create generic templates that can't handle real e-commerce needs. They lack proper Stripe integration, custom database management for products, professional blog systems, and personalized features specific to your business. Custom code gives you a real online store, not just a pretty template."
  },
  {
    id: 2,
    question: "Why $0 down instead of charging upfront?",
    answer: "We believe your business deserves a chance to succeed without massive upfront costs. Our monthly model lets you invest in inventory, marketing, and growth instead of a huge website bill."
  },
  {
    id: 3,
    question: "What if I need changes after launch?",
    answer: "Unlimited edits are included! Need to update text, add products, change images, or modify anything? Just tell us and we'll do it within 24-48 hours."
  },
  {
    id: 4,
    question: "How do you handle product and blog uploads?",
    answer: "Just send us your content via email or our client portal. We'll format it, optimize images, add it to your website, and let you know when it's live. No learning curve for you."
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
    answer: "We include two rounds of revisions during the design phase. If after that you're still not satisfied, we'll refund any payments and part ways—no hard feelings."
  },
  {
    id: 8,
    question: "Can I cancel anytime?",
    answer: "After your initial 3-month commitment, you can cancel anytime with 30 days' notice."
  },
  {
    id: 9,
    question: "What happens if I cancel?",
    answer: "Your website will remain live for 30 days, giving you time to migrate elsewhere if desired. We'll provide you with all your content and data."
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
  },
  {
    id: 12,
    question: "Can I switch plans later?",
    answer: "Absolutely! If your business grows or your needs change, we can adjust your subscription plan without downtime."
  },
  {
    id: 13,
    question: "Do you provide ongoing SEO support?",
    answer: "Yes! All websites are SEO-ready and we offer optional monthly SEO services to help you rank higher on Google."
  },
  {
    id: 14,
    question: "Will my website be mobile-friendly?",
    answer: "100%! Every site is built mobile-first to ensure a smooth experience on phones and tablets."
  },
  {
    id: 15,
    question: "Can I integrate other tools like Mailchimp or Google Analytics?",
    answer: "Yes! We can integrate most third-party tools to streamline marketing, analytics, and customer engagement, with additional cost."
  },
  {
    id: 16,
    question: "Can I create my own discount codes or promotions?",
    answer: "Absolutely! Just tell us what kind of discounts or promotions you want to offer—percentage off, buy-one-get-one, seasonal deals, or special bundles—and we'll set everything up and manage it for you. No technical work required on your end."
  },
    {
    id: 17,
    question: "What happens after I submit my project request?",
    answer: "Once you contact us, we’ll review your message and reach out to discuss your project in detail. We’ll go back and forth to understand your goals, requirements, and preferences. After that, we’ll prepare a personalized quote and send you an invoice. Once payment is confirmed, we’ll begin working on your custom-coded website."
  },
    {
    id: 18,
    question: "Do I need to buy a domain, hosting, or email separately?",
    answer: "No — all of that is included in your package!. Also, will be under your business name"
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
      {/* Simplified background elements */}
      <div className="absolute inset-0">
        {/* Single gradient orb */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
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
          {/* <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our custom website development services
          </p> */}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                layout
                transition={{ layout: { duration: 0.1, ease: "easeOut" } }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/30 overflow-hidden hover:shadow-lg hover:shadow-accent/10"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-150"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                      <QuestionMarkCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-200 group-hover:text-blue-100 leading-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.span
                    className="flex-shrink-0 ml-4"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  >
                    <ChevronDownIcon className="w-6 h-6 text-accent" />
                  </motion.span>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.12, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pl-20 pt-2 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-accent/30 to-primary/30 mb-4" />
                        <p className="text-light leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
            <Link href="/contact" className="btn btn-primary px-6 py-3 text-base font-semibold hover:scale-105 transition-transform duration-300">
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}