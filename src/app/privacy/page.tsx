import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      {/* Hero Section */}
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
                <pattern id="privacy-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#privacy-grid)" />
            </svg>
          </div>
          
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
               }}>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Privacy <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Policy</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
            <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-light mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              
              <h2 className="text-3xl font-extrabold text-white mb-6">Information We Collect</h2>
              <div className="text-light space-y-4 mb-8">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fill out our contact form or request a quote</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Communicate with us via email, phone, or chat</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
                <p>This information may include your name, email address, phone number, company name, project details, and any other information you choose to provide.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">How We Use Your Information</h2>
              <div className="text-light space-y-4 mb-8">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you technical notices, updates, and administrative messages</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Process transactions and send related information</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">Information Sharing</h2>
              <div className="text-light space-y-4 mb-8">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                </ul>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">Data Security</h2>
              <div className="text-light space-y-4 mb-8">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">Cookies and Tracking</h2>
              <div className="text-light space-y-4 mb-8">
                <p>Our website may use cookies and similar tracking technologies to enhance your experience. These technologies help us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve our website functionality and performance</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
                <p>You can control cookie settings through your browser preferences.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">Your Rights</h2>
              <div className="text-light space-y-4 mb-8">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of the information we have about you</li>
                  <li>Request that we correct any inaccurate information</li>
                  <li>Object to the processing of your personal information</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">Third-Party Links</h2>
              <div className="text-light space-y-4 mb-8">
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">Children&apos;s Privacy</h2>
              <div className="text-light space-y-4 mb-8">
                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">Changes to This Policy</h2>
              <div className="text-light space-y-4 mb-8">
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">Contact Us</h2>
              <div className="text-light space-y-4">
                <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                <div className="bg-white/10 rounded-lg p-6 mt-6">
                  <p><strong>Email:</strong> privacy@codecraftroom.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> Texas, USA</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}