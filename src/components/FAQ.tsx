'use client';

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const faqData = [
  {
    id: 1,
    question: "What exactly are your services?",
    answer: "I build complete business systems — including custom websites, business dashboards, and smart automation — designed around how your business operates. Whether you need a professional online presence, a system to manage operations, or automation to save time, each service is built specifically for your business needs."
  },
  {
    id: 2,
    question: "Do you only build websites?",
    answer: "No. Beyond websites, I also create custom dashboards to manage your business and automation systems that handle repetitive tasks like bookings, lead follow-ups, customer communication, and workflow processes."
  },
  {
    id: 3,
    question: "What services do you offer?",
    answer: "I currently offer 3 core services: Custom Website, Business Dashboard, and Smart Automation. Each can work independently or together as a full business growth system."
  },
  {
    id: 4,
    question: "Is this a monthly service?",
    answer: "No. These are one-time build services with upfront project pricing. There are no required monthly fees unless you request additional upgrades or future support."
  },
  {
    id: 5,
    question: "What’s included in the one-time fee?",
    answer: "Your project may include design, development, technical setup, deployment, dashboard creation, automation workflows, and post-launch support depending on the service selected."
  },
  {
    id: 6,
    question: "Do you build everything from scratch?",
    answer: "Yes. Every website, dashboard, and automation system is custom-built around your business goals, workflow, and operational needs."
  },
  {
    id: 7,
    question: "Can you automate my business tasks?",
    answer: "Yes. I can automate bookings, customer follow-ups, lead capture, email/SMS notifications, review requests, scheduling, and other repetitive processes to save you time."
  },
  {
    id: 8,
    question: "What does a business dashboard do?",
    answer: "A dashboard gives you one place to manage your business — including leads, bookings, customers, analytics, reports, sales, or operations — depending on your industry."
  },
  {
    id: 9,
    question: "How long does it take?",
    answer: "Timelines depend on complexity, but most projects are delivered in clear stages with updates throughout the process."
  },
  {
    id: 10,
    question: "Will you launch and set everything up for me?",
    answer: "Yes. I handle setup, deployment, and implementation so your system is ready to use."
  },
  {
    id: 11,
    question: "Do you offer support after launch?",
    answer: "Yes. Post-launch support is included to ensure your website, dashboard, or automation runs smoothly."
  },
  {
    id: 12,
    question: "Can this work for my type of business?",
    answer: "Yes. These systems can be customized for restaurants, photographers, salons, lawn care, service businesses, eCommerce, personal brands, and more."
  },
  {
    id: 13,
    question: "Can I start with one service and upgrade later?",
    answer: "Yes. You can start with a website, dashboard, or automation first and expand into a complete business system over time."
  },
  {
    id: 14,
    question: "How do I get started?",
    answer: "Simply reach out with your business type, goals, and what you need help with — website, dashboard, automation, or all three — and I’ll help build the right solution."
  },
  {
    id: 15,
    question: "How do payments work?",
    answer: "Most projects are structured with an upfront payment and final payment upon completion, depending on project scope."
  },
  {
    id: 16,
    question: "Where do you work?",
    answer: "I work remotely and can build for businesses in the US or internationally."
  }
];


export default function FAQ() {
  return (
    <section className="relative py-24 bg-charcoal overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0">
        {/* Single gradient orb */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="group overflow-hidden rounded-none bg-white/5 backdrop-blur-sm shadow-[0_22px_70px_rgba(0,0,0,0.34)] transition-all hover:shadow-[0_28px_80px_rgba(0,0,0,0.42)]"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                    <QuestionMarkCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-blue-200 group-hover:text-blue-100 leading-tight">
                      {faq.question}
                    </h3>
                    <div className="w-full h-px bg-gradient-to-r from-accent/30 to-primary/30 my-4" />
                    <p className="text-light leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block rounded-none bg-white/5 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.34)] backdrop-blur-sm">
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
