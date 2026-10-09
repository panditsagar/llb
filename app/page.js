import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ComparisonSection from "./components/ComparisonSection";
import WorkflowSection from "./components/WorkflowSection";
import TestimonialSection from "./components/TestimonialSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import RepeatableWorkflowSection from "./components/RepeatableWorkflowSection";
import ClientTestimonialsSection from "./components/ClientTestimonialsSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import FinalCtaSection from "./components/FinalCtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Hero />
      <ProblemSection />
      <ComparisonSection />
      <TestimonialSection />
      <WorkflowSection />
      <CapabilitiesSection />
      <RepeatableWorkflowSection />
      <ClientTestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
