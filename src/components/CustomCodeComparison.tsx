'use client';

import { SparklesIcon, RocketLaunchIcon, ShoppingCartIcon, PaintBrushIcon, BoltIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function CustomCodeComparison() {
  const comparisonData = [
    {
      id: 1,
      icon: <ShoppingCartIcon className="w-6 h-6" />,
      category: "Complete E-Commerce & Business Features",
      aiBuilder: {
        title: "Fake Buttons & Limited Tools",
        description: "No real checkout, weak product management, poor SEO, can't integrate with your business tools"
      },
      customCode: {
        title: "Full Business Solution",
        description: "Real Stripe checkout, unlimited products, SEO-optimized blog, custom integrations for your workflow"
      }
    },
    {
      id: 2,
      icon: <PaintBrushIcon className="w-6 h-6" />,
      category: "Design & Customization Freedom",
      aiBuilder: {
        title: "Cookie-Cutter Templates",
        description: "Everyone's site looks the same, locked features, can't match your brand vision"
      },
      customCode: {
        title: "100% Custom Design & Features",
        description: "Tailored perfectly to your brand, any feature you imagine, unlimited customization"
      }
    },
    {
      id: 3,
      icon: <BoltIcon className="w-6 h-6" />,
      category: "Performance, Security & Reliability",
      aiBuilder: {
        title: "Slow, Vulnerable & Unreliable",
        description: "Bloated with plugins, frequent security risks, breaks when you grow"
      },
      customCode: {
        title: "Fast, Secure & Built to Scale",
        description: "98-100 PageSpeed scores, no plugin vulnerabilities, handles 1,000+ products easily"
      }
    },
    {
      id: 4,
      icon: <BuildingOfficeIcon className="w-6 h-6" />,
      category: "Ownership & Long-Term Control",
      aiBuilder: {
        title: "You Rent Their System",
        description: "Platform controls your business, surprise fees, DIY support with hidden costs"
      },
      customCode: {
        title: "You Own Everything",
        description: "Full control, no surprise fees, dedicated dev support with hosting & updates included"
      }
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal to-charcoal/90 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <SparklesIcon className="w-8 h-8 text-accent animate-pulse" />
            <span className="text-accent font-bold text-lg tracking-wide uppercase">The Truth About AI Website Builders</span>
            <SparklesIcon className="w-8 h-8 text-accent animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            You&apos;ve seen the ads: <span className="text-blue-400">&quot;Build a website in 5 minutes with AI!&quot;</span>
          </h2>
          
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Sounds great — until your site actually needs to <span className="text-white font-bold">work, sell, and scale.</span>
          </p>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here&apos;s how Custom Code stacks up against AI tools like Wix ADI, 10Web, Framer AI, Durable, Shopify, and others 👇
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          {/* Table Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-300 mb-2">Feature</h3>
              <p className="text-gray-400/80">What you need</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-red-500/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-red-500/20">
                <span className="text-3xl">🤖</span>
                <h3 className="text-2xl font-bold text-red-300">AI Builders & Templates</h3>
              </div>
              {/* <p className="text-red-400/80 mt-2">Common limitations</p> */}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-green-500/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-green-500/20">
                 <span className="text-3xl">⚙️</span>
                 <h3 className="text-2xl font-bold text-green-300">Custom-Coded Website</h3>
               </div>
              {/* <p className="text-green-400/80 mt-2">Professional solutions</p> */}
            </div>
          </div>

          {/* Comparison Rows */}
           <div className="space-y-4">
             {comparisonData.map((item, index) => (
               <div 
                 key={item.id}
                 className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6 bg-gradient-to-r from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-lg transition-all duration-300 hover:shadow-lg"
                 style={{ animationDelay: `${index * 100}ms` }}
               >
                 {/* Feature Column */}
                 <div className="flex items-center border-l-4 border-gray-500 pl-4">
                   <div className="p-2 bg-gray-600/20 rounded-lg text-gray-300 mr-4 flex-shrink-0">
                     {item.icon}
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-200">{item.category}</h4>
                   </div>
                 </div>

                 {/* AI Builder Column */}
                 <div className="border-l-4 border-red-500 pl-4 py-2">
                   <h5 className="text-lg font-bold text-red-200 mb-2">{item.aiBuilder.title}</h5>
                   <p className="text-red-300 text-sm leading-relaxed">{item.aiBuilder.description}</p>
                 </div>

                 {/* Custom Code Column */}
                 <div className="border-l-4 border-green-500 pl-4 py-2">
                   <h5 className="text-lg font-bold text-green-200 mb-2">{item.customCode.title}</h5>
                   <p className="text-green-300 text-sm leading-relaxed">{item.customCode.description}</p>
                 </div>
               </div>
             ))}
           </div>

          {/* Summary Row */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 p-6 bg-gradient-to-r from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-lg">
             <div className="flex items-center justify-center border-l-4 border-gray-500 pl-4">
               <h4 className="text-xl font-bold text-gray-200">Best For:</h4>
             </div>
             <div className="border-l-4 border-red-500 pl-4 py-2">
               <h4 className="text-lg font-bold text-red-300 mb-2">⚠️ Quick Solutions</h4>
               <p className="text-red-200 text-sm leading-relaxed">
                 Simple blogs, basic landing pages, or quick prototypes where limitations are acceptable.
               </p>
             </div>
             <div className="border-l-4 border-green-500 pl-4 py-2">
               <h4 className="text-lg font-bold text-green-300 mb-2">🚀 Real Business</h4>
               <p className="text-green-200 text-sm leading-relaxed">
                 Businesses that need professional websites with custom features, optimal performance, and complete control.
               </p>
             </div>
           </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Stop Losing Money to Template Limitations?
            </h3>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Your competitors are already switching to custom code. Don&apos;t get left behind with slow, generic websites that hurt your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="group btn btn-primary px-8 py-4 text-lg font-bold shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Your Custom Website
                <RocketLaunchIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#pricing" 
                className="group btn bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:-translate-y-1"
              >
                See Investment Options
                <SparklesIcon className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}