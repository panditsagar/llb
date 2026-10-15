import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#36281E] text-[#FAF7F2] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Header */}
        <p
          className="text-base sm:text-lg md:text-xl font-bold text-[#FF5B24] tracking-wider uppercase mb-3"
        >
          HAVE MORE VIDEO WORK THAN YOUR TEAM CAN HANDLE?
        </p>

        {/* Main Headline */}
        <h2
          className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FAF7F2] font-heading tracking-tight leading-[1.15] max-w-3xl mx-auto mb-5"
        >
          Let’s See If We Can{" "}
          <span className="bg-[#FF5B24] text-[#ffffff] px-2.5 py-0.5 rounded-lg inline-block shadow-md my-0.5">
            Help You Deliver It.
          </span>
        </h2>

        {/* Clean Paragraphs Flow */}
        <div
          className="max-w-3xl mx-auto space-y-2.5 mb-8 text-base sm:text-lg text-[#FAF7F2]/90 leading-relaxed"
        >
          <p>
            Tell us what you&apos;re producing, how much editing capacity you need and where your current workflow is getting stuck.
          </p>
          <p className="font-semibold text-[#FF5B24]">
            We take on a limited number of new recurring editing partnerships at a time.
          </p>
          <p>
            In 10 minutes, we’ll look at your volume, style, turnaround and current workflow.
          </p>
        </div>

        {/* Bottom Next Step Callout & CTA Button */}
        <div className="space-y-4 pt-6 border-t border-[#FAF7F2]/15 relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold text-[#FF5B24]"
          >
            <CheckCircle2 className="w-5 h-5 text-[#FF5B24] shrink-0" />
            <span>If it makes sense, we’ll recommend the next step.</span>
          </div>

          {/* Global CTA Button */}
          <div
            className="flex flex-col items-center"
          >
            <div className="w-full sm:w-auto p-1.5 rounded-full border-2 border-dotted border-[#f97316]/55 flex sm:inline-flex items-center justify-center">
              <a
                href="#book-call"
                className="w-full sm:w-auto min-w-[260px] sm:min-w-[340px] relative inline-flex items-center justify-center px-8 py-3.5 text-base sm:text-lg font-bold rounded-full text-white gradient-brand hover:brightness-105 shadow-md shadow-orange-900/20"
              >
                <span>Book 10 min Call</span>
                <ArrowRight className="w-5 h-5 ml-2.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
