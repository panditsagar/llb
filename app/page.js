import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ComparisonSection from "./components/ComparisonSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Hero />
      <ProblemSection />
      <ComparisonSection />
    </main>
  );
}
