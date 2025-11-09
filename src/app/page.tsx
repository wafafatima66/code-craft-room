import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import WhyChoose from "@/components/WhyChoose";
import CustomCodeComparison from "@/components/CustomCodeComparison";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
// Navbar and Footer are provided globally via layout

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <ProblemSolution />
        <WhyChoose />
        {/* <CustomCodeComparison /> */}
        <WhoWeHelp />
        <Services />
        <Pricing />
        <FAQ />
        <Testimonials />
      </main>
    </div>
  );
}