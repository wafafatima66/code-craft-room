'use client';

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const faqData = [
  {
    id: 1,
    question: "What exactly are your website services?",
    answer: "I build professional websites for businesses based on your needs — whether it’s a simple landing page, a small business website, or a fully custom-built website. This is a one-time project fee (not monthly maintenance), and your website is fully deployed to your domain with all core technical setup included."
  },
  {
    id: 2,
    question: "Do you build websites from scratch?",
    answer: "Yes. Every website is built from the ground up based on your business goals, brand, and required features — from landing pages to complete custom websites."
  },
  {
    id: 3,
    question: "What website packages do you offer?",
    answer: "I currently offer 3 core packages: Custom Website, Business Dashboard, and Smart Automation. Each one is designed to help your business build its presence, manage operations, or save time through automation."
  },
  {
    id: 4,
    question: "Is this a monthly service?",
    answer: "No. This is a one-time payment for your website build. There are no required monthly maintenance fees."
  },
  {
    id: 5,
    question: "What’s included in the one-time fee?",
    answer: "Your project includes website design and development, deployment to your domain, technical setup, essential website fixes, and 3 months of support after launch."
  },
  {
    id: 6,
    question: "Do you provide website maintenance?",
    answer: "Ongoing maintenance is not included as a monthly subscription. However, you receive 3 months of post-launch support for technical issues, fixes, and guidance related to the website."
  },
  {
    id: 7,
    question: "How long does it take to build my website?",
    answer: "Project timelines depend on the package and complexity, but most websites are completed in clear stages with regular updates throughout the process."
  },
  {
    id: 8,
    question: "Will you connect my domain and launch the website for me?",
    answer: "Yes. I handle deployment to your domain and ensure the website is properly set up and live."
  },
  {
    id: 9,
    question: "Can you help with technical website issues?",
    answer: "Yes. I handle technical setup related to the website, including deployment, structure setup, and core functionality issues."
  },
  {
    id: 10,
    question: "Will you upload my content, products, or pages?",
    answer: "Yes. Depending on your package, I can add pages, upload content, products, or business information as part of the build."
  },
  {
    id: 11,
    question: "Do you work with all business types?",
    answer: "Yes. Websites can be built for most industries, including local businesses, personal brands, service providers, restaurants, and custom projects."
  },
  {
    id: 12,
    question: "What happens after my website is completed?",
    answer: "Once your website is live, you’ll receive 3 months of support for technical fixes and website-related issues."
  },
  {
    id: 13,
    question: "Will my website be mobile-friendly?",
    answer: "Yes. All websites are designed to work across desktop, tablet, and mobile devices."
  },
  {
    id: 14,
    question: "Do you offer custom features?",
    answer: "Yes. Custom website builds can include advanced features depending on your business needs."
  },
  {
    id: 15,
    question: "How do I get started?",
    answer: "Simply share your business details, goals, and the package you need, whether that is a Custom Website, Business Dashboard, or Smart Automation setup, and we will plan the best option for you."
  },
  {
    id: 16,
    question: "How do payments work?",
    answer: "Payment is typically structured as 50% upfront and 50% upon project completion, unless otherwise agreed."
  },
  {
    id: 17,
    question: "Where do you work?",
    answer: "I work remotely and can build websites for clients anywhere in the US or internationally."
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
