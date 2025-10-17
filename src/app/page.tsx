import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import WhyChoose from "@/components/WhyChoose";
import CustomCodeComparison from "@/components/CustomCodeComparison";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <WhyChoose />
        <CustomCodeComparison />
        <WhoWeHelp />
        <Services />
        <Pricing />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}