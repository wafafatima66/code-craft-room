import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import WhyChoose from "@/components/WhyChoose";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
// Navbar and Footer are provided globally via layout
import PreviousWork from "@/components/PreviousWork";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <ProblemSolution />
        <WhyChoose />
        {/* Uncomment to include comparison
        <CustomCodeComparison />
        */}
        <WhoWeHelp />
        <PreviousWork />
        <Services />
        <Pricing />
        <FAQ />
        <Testimonials />
      </main>
    </div>
  );
}