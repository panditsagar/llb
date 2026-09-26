"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Scissors,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function RepeatableWorkflowSection() {
  const steps = [
    {
      id: "raw-footage",
      verticalTag: "Step 01",
      title: "YOUR CONTENT",
      description:
        "Upload your raw video recordings, podcasts, calls, or video briefs into your dedicated client folder.",
      icon: Upload,
      cardBg: "bg-[#FFFDF9]",
      borderColor: "border-[#E5DDD0]",
      barBg: "bg-[#36281E] text-[#FAF7F2]",
      iconBg: "bg-[#EFE7DC] text-[#36281E]",
      align: "left", // Left aligned on desktop
    },
    {
      id: "lbb-editing",
      verticalTag: "Step 02",
      title: "LBB EDITING",
      description:
        "Our dedicated backend editing team turns your raw files into engaging, high-retention video content.",
      icon: Scissors,
      cardBg: "bg-[#FFFDF9]",
      borderColor: "border-[#E5DDD0]",
      barBg: "bg-[#36281E] text-[#FAF7F2]",
      iconBg: "bg-[#EFE7DC] text-[#36281E]",
      align: "right", // Right aligned on desktop
    },
    {
      id: "quality-check",
      verticalTag: "Step 03",
      title: "QUALITY CHECK",
      description:
        "Senior editors review every cut to ensure strict 100% human quality control before initial delivery.",
      icon: ShieldCheck,
      cardBg: "bg-[#FFFDF9]",
      borderColor: "border-[#E5DDD0]",
      barBg: "bg-[#36281E] text-[#FAF7F2]",
      iconBg: "bg-[#EFE7DC] text-[#36281E]",
      align: "left",
    },
    {
      id: "revisions",
      verticalTag: "Step 04",
      title: "REVISIONS",
      description:
        "We process any feedback or requested tweaks rapidly with zero hassle or training stress on your end.",
      icon: RotateCcw,
      cardBg: "bg-[#FFFDF9]",
      borderColor: "border-[#E5DDD0]",
      barBg: "bg-[#36281E] text-[#FAF7F2]",
      iconBg: "bg-[#EFE7DC] text-[#36281E]",
      align: "right",
    },
    {
      id: "final-videos",
      verticalTag: "Step 05",
      title: "FINAL VIDEOS",
      description:
        "Receive high-quality, high-converting final video files fully optimized and ready to publish across all platforms.",
      icon: CheckCircle2,
      cardBg: "bg-[#FFFDF9]",
      borderColor: "border-[#E5DDD0]",
      barBg: "bg-[#36281E] text-[#FAF7F2]",
      iconBg: "bg-[#EFE7DC] text-[#36281E]",
      align: "left",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] py-16 md:py-24">
      {/* Ambient Warm Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#F5EFE6]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Pill Badge */}
        <div className="w-fit mx-auto p-1 rounded-full border-2 border-dotted border-[#36281E]/40 mb-6">
          <div className="flex items-center justify-center gap-2 py-1.5 px-5 bg-[#EFE7DC] rounded-full text-[#36281E]">
            <Sparkles className="w-4 h-4 text-[#8C6D53]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Step-by-Step Workflow
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-3xl font-semibold text-[#2D231E] tracking-tight leading-[1.1] sm:leading-[1.08] mb-12 md:mb-20 mx-auto font-heading">
          A Repeatable Editing Workflow Behind Your Business.
        </h2>

        {/* Staggered Snake / Zig-Zag Cards Container */}
        <div className="relative space-y-8 md:space-y-12 text-left">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const isRight = step.align === "right";

            return (
              <div key={step.id} className="relative">
                {/* Connector Line to Next Step (Desktop SVG Bezier S-Curve) */}
                {idx < steps.length - 1 && (
                  <svg
                    className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-12 pointer-events-none z-0 overflow-visible"
                    viewBox="0 0 160 48"
                    fill="none"
                  >
                    <path
                      d={
                        !isRight
                          ? "M 30 0 C 30 24, 130 24, 130 48" // Left Card -> Right Card
                          : "M 130 0 C 130 24, 30 24, 30 48" // Right Card -> Left Card
                      }
                      stroke="#8C6D53"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  </svg>
                )}

                {/* Staggered Row Container */}
                <div
                  className={`flex ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* Card Reveal Animation on Scroll */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`w-full md:w-[62%] ${step.cardBg} rounded-xl p-5 sm:p-7 relative overflow-hidden flex items-start gap-4 sm:gap-6 z-10`}
                  >
                    {/* Vertical Pill Bar attached to Left Edge (Matching Reference Image) */}
                    <div
                      className={`w-9 sm:w-10 rounded-lg ${step.barBg} flex items-center justify-center shrink-0 self-stretch min-h-[100px]`}
                    >
                      <span className="text-xs font-black tracking-wider uppercase rotate-[-90deg] whitespace-nowrap">
                        {step.verticalTag}
                      </span>
                    </div>

                    {/* Main Card Content */}
                    <div className="flex-1 py-1">
                      {/* Top Header: Icon + Title */}
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-9.5 h-9.5 rounded-full ${step.iconBg} flex items-center justify-center shrink-0`}
                        >
                          <StepIcon className="w-4.5 h-4.5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2D231E] font-heading">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description Paragraph */}
                      <p className="text-sm sm:text-base md:text-lg text-[#4A3C33] leading-relaxed mt-3 font-medium">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Bottom CTA Button */}
        <div className="pt-12 md:pt-16 flex flex-col items-center">
          <div className="w-full sm:w-auto p-1.5 rounded-full border-2 border-dotted border-[#36281E]/40 flex sm:inline-flex items-center justify-center">
            <a
              href="#book-call"
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 sm:px-12 py-3.5 text-base sm:text-lg font-bold rounded-full text-[#FAF7F2] bg-[#36281E] hover:bg-[#2D231E] transition-colors shadow-lg shadow-stone-900/10"
            >
              <span>Book 10 min Call</span>
              <ArrowRight className="w-5 h-5 ml-2.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
