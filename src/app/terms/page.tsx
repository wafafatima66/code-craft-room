import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
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
                <pattern id="terms-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#terms-grid)" />
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
              Terms of <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Service</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
            <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services. By using our services, you agree to these terms.
            </p>
            <p className="text-light mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              
              <h2 className="text-3xl font-extrabold text-white mb-6">1. Acceptance of Terms</h2>
              <div className="text-light space-y-4 mb-8">
                <p>By accessing and using Code Craft Room's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">2. Services Description</h2>
              <div className="text-light space-y-4 mb-8">
                <p>Code Craft Room provides custom web development services, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Custom website design and development</li>
                  <li>E-commerce website development</li>
                  <li>Website maintenance and support</li>
                  <li>Web application development</li>
                  <li>Consultation and technical advisory services</li>
                </ul>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">3. Project Terms and Payment</h2>
              <div className="text-light space-y-4 mb-8">
                <h3 className="text-xl font-bold text-blue-200 mb-3">Project Scope</h3>
                <p>All projects begin with a detailed scope of work that outlines deliverables, timelines, and costs. Changes to the project scope may result in additional charges and timeline adjustments.</p>
                
                <h3 className="text-xl font-bold text-blue-200 mb-3">Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A deposit of 50% is required before work begins</li>
                  <li>Final payment is due upon project completion</li>
                  <li>Additional work outside the original scope will be billed separately</li>
                  <li>Late payments may incur additional fees</li>
                </ul>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">4. Client Responsibilities</h2>
              <div className="text-light space-y-4 mb-8">
                <p>Clients are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing accurate and complete project requirements</li>
                  <li>Supplying necessary content, images, and materials in a timely manner</li>
                  <li>Providing feedback and approvals within agreed timeframes</li>
                  <li>Ensuring they have rights to all provided materials</li>
                  <li>Making timely payments as outlined in the project agreement</li>
                </ul>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">5. Intellectual Property</h2>
              <div className="text-light space-y-4 mb-8">
                <h3 className="text-xl font-bold text-blue-200 mb-3">Client Ownership</h3>
                <p>Upon full payment, clients own the final website and its custom code. However, we retain rights to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the project in our portfolio and marketing materials</li>
                  <li>Reuse general techniques, methodologies, and non-proprietary code</li>
                  <li>Third-party components and frameworks remain under their respective licenses</li>
                </ul>
                
                <h3 className="text-xl font-bold text-blue-200 mb-3">Pre-existing Materials</h3>
                <p>Any pre-existing intellectual property, tools, or frameworks used in the project remain the property of their respective owners.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">6. Warranties and Disclaimers</h2>
              <div className="text-light space-y-4 mb-8">
                <h3 className="text-xl font-bold text-blue-200 mb-3">Limited Warranty</h3>
                <p>We warrant that our services will be performed in a professional manner. We provide a 30-day warranty on custom development work for bug fixes and issues directly related to our code.</p>
                
                <h3 className="text-xl font-bold text-blue-200 mb-3">Disclaimers</h3>
                <p>Our services are provided "as is" without warranty of any kind. We do not guarantee:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Specific search engine rankings or traffic results</li>
                  <li>Compatibility with all future browser updates</li>
                  <li>Uninterrupted service or error-free operation</li>
                  <li>Results from third-party integrations or services</li>
                </ul>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">7. Limitation of Liability</h2>
              <div className="text-light space-y-4 mb-8">
                <p>In no event shall Code Craft Room be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.</p>
                <p>Our total liability for any claim arising out of or relating to these terms or our services shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">8. Termination</h2>
              <div className="text-light space-y-4 mb-8">
                <p>Either party may terminate a project with written notice. In the event of termination:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Client will pay for all work completed up to the termination date</li>
                  <li>We will provide all completed work and materials</li>
                  <li>Any deposits for uncompleted work may be refunded at our discretion</li>
                  <li>Both parties will return any confidential information</li>
                </ul>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">9. Confidentiality</h2>
              <div className="text-light space-y-4 mb-8">
                <p>We agree to maintain the confidentiality of any proprietary information shared during the course of our business relationship. This includes business plans, customer data, and other sensitive information.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">10. Force Majeure</h2>
              <div className="text-light space-y-4 mb-8">
                <p>Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, or government actions.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">11. Governing Law</h2>
              <div className="text-light space-y-4 mb-8">
                <p>These terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">12. Changes to Terms</h2>
              <div className="text-light space-y-4 mb-8">
                <p>We reserve the right to modify these terms at any time. We will notify clients of any material changes via email or through our website. Continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">13. Contact Information</h2>
              <div className="text-light space-y-4">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-white/10 rounded-lg p-6 mt-6">
                  <p><strong>Email:</strong> legal@codecraftroom.com</p>
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