"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  DollarSign,
  CheckCircle2,
  Layers,
} from "lucide-react";

export default function PricingSection() {
  const requirementFactors = [
    {
      label: "NUMBER OF VIDEOS",
      bg: "bg-[#CFFAFE] text-[#0891B2]",
      transform: "-rotate-3 -translate-y-1",
    },
    {
      label: "VIDEO LENGTH",
      bg: "bg-[#FFEDD5] text-[#9A3412]",
      transform: "rotate-3 translate-y-1",
    },
    {
      label: "EDITING STYLE",
      bg: "bg-[#DCFCE7] text-[#166534]",
      transform: "-rotate-5 -translate-y-1.5",
    },
    {
      label: "COMPLEXITY",
      bg: "bg-[#F3E8FF] text-[#581C87]",
      transform: "rotate-4 translate-y-1",
    },
    {
      label: "MOTION GRAPHICS",
      bg: "bg-[#FEF9C3] text-[#854D0E]",
      transform: "-rotate-4 -translate-y-1",
    },
    {
      label: "REVISIONS",
      bg: "bg-[#FEE2E2] text-[#991B1B]",
      transform: "rotate-5 translate-y-1.5",
    },
    {
      label: "TURNAROUND",
      bg: "bg-[#CCFBF1] text-[#115E59]",
      transform: "-rotate-2 -translate-y-0.5",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-16 md:pb-24">
      {/* Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#F5EFE6]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl  font-semibold text-[#2D231E] tracking-tight leading-[1.1] mb-6 mx-auto font-heading"
        >
          Video Editing Starts From{" "}
          <span className="bg-[#FF5B24] text-[#ffffff] px-2 sm:px-2.5 py-0.5 rounded-lg inline-block">
            $15/Video.
          </span>
        </motion.h2>

        {/* Subheadline Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12   text-[#5E5047]  flex items-center justify-center gap-3  "
        >
          <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-center sm:text-left">
            Recurring editing works best from 12+ videos/month.
          </p>
        </motion.div>

        {/* Main Pricing Factors Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#FFFDF9] rounded-xl p-6 sm:p-10 text-left mb-12 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2D231E] font-heading leading-tight">
              Final pricing depends on your actual requirements, including:
            </h3>
          </div>

          {/* Requirement Factors Pill Tags Wrap (Tight Gap + Cool Random Offsets) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 pb-1">
            {requirementFactors.map((factor, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-extrabold tracking-wider ${factor.bg} ${factor.transform} transition-all inline-flex items-center gap-1.5 cursor-pointer origin-center relative`}
              >
                <CheckCircle2 className="w-4 h-4 opacity-70 shrink-0" />
                {factor.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Pre-CTA Text Block (No Card Container) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-3xl mx-auto text-center mb-10 px-4 space-y-5"
        >
          {/* Badge Tag */}
          <div className="flex justify-center">
            <span className="  font-bold text-sm sm:text-lg tracking-wider uppercase   ">
              Let’s Look At Your Real Requirements
            </span>
          </div>

          {/* Main Headline */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D231E] tracking-tight leading-[1.15] font-heading">
            Want to see what this would cost for{" "}
            <span className="bg-[#FF5B24] text-[#ffffff] px-2 sm:px-2.5 py-0.5 rounded-lg inline-block">
              your workflow?
            </span>
          </h3>

          {/* Subtitle / Copy */}
          <div className="space-y-2 pt-1 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-semibold text-[#2D231E] leading-relaxed">
              Bring your volume, formats, and turnaround needs to a{" "}
              <span className="underline decoration-[#FF5B24] decoration-4 underline-offset-4 font-bold text-[#2D231E]">
                10-minute call
              </span>
              .
            </p>
            <p className="text-sm sm:text-base text-[#6B5A4E] font-normal leading-relaxed max-w-lg mx-auto">
              We’ll help you understand the exact editing setup that makes sense
              for your current workflow.
            </p>
          </div>
        </motion.div>

        {/* Global Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="w-full sm:w-auto p-1.5 rounded-full border-2 border-dotted border-[#f97316]/55 flex sm:inline-flex items-center justify-center">
            <a
              href="#book-call"
              className="w-full sm:w-auto min-w-[260px] sm:min-w-[360px]  relative inline-flex items-center justify-center px-8 sm:px-12 py-3.5 text-base sm:text-lg font-bold rounded-full text-white gradient-brand hover:brightness-105 transition-all shadow-lg shadow-orange-900/20"
            >
              <span>Book 10 min Call</span>
              <ArrowRight className="w-5 h-5 ml-2.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
