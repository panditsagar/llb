"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#36281E] text-[#FAF7F2] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Header */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-base sm:text-lg md:text-xl font-bold text-[#FEF08A] tracking-wider uppercase mb-3"
        >
          HAVE MORE VIDEO WORK THAN YOUR TEAM CAN HANDLE?
        </motion.p>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FAF7F2] font-heading tracking-tight leading-[1.15] max-w-3xl mx-auto mb-5"
        >
          Let’s See If We Can{" "}
          <span className="bg-[#FEF08A] text-[#36281E] px-2.5 py-0.5 rounded-xl inline-block shadow-md my-0.5">
            Help You Deliver It.
          </span>
        </motion.h2>

        {/* Clean Paragraphs Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-2.5 mb-8 text-base sm:text-lg text-[#FAF7F2]/90 leading-relaxed"
        >
          <p>
            Tell us what you're producing, how much editing capacity you need and where your current workflow is getting stuck.
          </p>
          <p className="font-semibold text-[#FEF08A]">
            We take on a limited number of new recurring editing partnerships at a time.
          </p>
          <p>
            In 10 minutes, we’ll look at your volume, style, turnaround and current workflow.
          </p>
        </motion.div>

        {/* Bottom Next Step Callout & CTA Button */}
        <div className="space-y-4 pt-6 border-t border-[#FAF7F2]/15 relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold text-[#FEF08A]"
          >
            <CheckCircle2 className="w-5 h-5 text-[#FEF08A] shrink-0" />
            <span>If it makes sense, we’ll recommend the next step.</span>
          </motion.div>

          {/* Global CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col items-center"
          >
            <div className="w-full sm:w-auto p-1.5 rounded-full border-2 border-dotted border-[#FEF08A]/50 flex sm:inline-flex items-center justify-center">
              <a
                href="#book-call"
                className="w-full sm:w-auto min-w-[260px] sm:min-w-[340px] relative inline-flex items-center justify-center px-8 py-3.5 text-base sm:text-lg font-bold rounded-full text-[#36281E] bg-[#FEF08A] hover:bg-[#FDE047] transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] duration-200"
              >
                <span>Book 10 min Call</span>
                <ArrowRight className="w-5 h-5 ml-2.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
