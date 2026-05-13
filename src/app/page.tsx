import Hero from "@/components/Hero";
import ExampleDeliverableSection from "@/components/ExampleDeliverableSection";
import WhyNeedThisSection from "@/components/WhyNeedThisSection";
// import ProblemSolution from "@/components/ProblemSolution";
// import WhyChoose from "@/components/WhyChoose";
// import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import PreviousWork from "@/components/PreviousWork";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutFatimaSection from "@/components/AboutFatimaSection";
// import Testimonials from "@/components/Testimonials";
// Navbar and Footer are provided globally via layout

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <WhyNeedThisSection />
        <Services />
        
        

        <ExampleDeliverableSection />
        {/* <ProblemSolution /> */}
        {/* <WhyChoose /> */}
        {/* Uncomment to include comparison
        <CustomCodeComparison />
        */}
        {/* <WhoWeHelp /> */}
        <HowItWorksSection />
        <PreviousWork />

        
        <AboutFatimaSection />
        <FAQ />
        {/* <Testimonials /> */}
      </main>
    </div>
  );
}
