'use client';

import { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

const faqData = [
  {
    id: 1,
    question: "What is this service exactly?",
    answer: "We take care of your existing website: fixing issues, improving performance, updating content, and making practical structure improvements so it works better for customers."
  },
  {
    id: 3,
    question: "Do you build new websites from scratch?",
    answer: "Right now we focus on maintaining and improving existing websites. We build on top of what you already have to make it faster, clearer, and more effective."
  },
  {
    id: 5,
    question: "What do I get for $89/month?",
    answer: "A single monthly plan that covers ongoing fixes, content updates, performance improvements, and practical suggestions to help your website attract and convert more customers."
  },
  {
    id: 6,
    question: "How fast do you handle requests?",
    answer: "Most small fixes and content updates are handled within 24–48 hours. Bigger improvements are scheduled and delivered in clear steps."
  },
  {
    id: 7,
    question: "Will you add pages and upload content for me?",
    answer: "Yes. We can add new pages, update copy, upload products or customer data, and keep the site fresh so you don't have to spend time doing it yourself."
  },
  {
    id: 9,
    question: "Do you work with any kind of website?",
    answer: "Yes. We can support most websites and stacks. If we need access or there are platform limits, we’ll tell you upfront and propose the best path."
  },
  {
    id: 11,
    question: "Do you help with traffic and growth?",
    answer: "Yes. We monitor traffic, share improvement suggestions, and implement changes that help you reach more audience and convert more visitors."
  },
  {
    id: 12,
    question: "What do you need from me to get started?",
    answer: "Just share your website link and what you want improved. We'll review it, confirm what’s included, and start working on fixes and improvements."
  },
  {
    id: 13,
    question: "Will you break my site while making changes?",
    answer: "No. We make changes carefully, prioritize stability, and verify updates before they go live. The goal is to improve without disruption."
  },
  {
    id: 14,
    question: "Can you handle urgent issues?",
    answer: "Yes. If something is broken or stopping customers from contacting you or buying, we prioritize it as urgent."
  },
  {
    id: 15,
    question: "Is there a contract?",
    answer: "No long-term contracts. You can continue month-to-month as long as the service is valuable to you."
  },
  {
    id: 17,
    question: "What happens after I contact you?",
    answer: "We review your site, clarify what you want improved, and confirm the $89/month plan. Then we start implementing fixes, updates, and improvements."
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
