"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      id: "style-match",
      question: "Can you match our existing editing style?",
      answer:
        "Yes. We review your references, brand guidelines, existing content and editing preferences before establishing the workflow.",
    },
    {
      id: "white-label",
      question: "Can you work white-label for our agency or clients?",
      answer:
        "Yes. LBB can work behind the scenes according to the agreed workflow while your brand remains client-facing.",
    },
    {
      id: "existing-editors",
      question: "Can you work with our existing editors?",
      answer:
        "Yes. LBB can add capacity without replacing your existing team.",
    },
    {
      id: "formats",
      question: "Do you handle both short-form and long-form content?",
      answer:
        "Yes. We handle short-form, long-form, UGC, product videos, ads, motion graphics and more.",
    },
    {
      id: "different-styles",
      question: "Can you handle different styles for different clients?",
      answer:
        "Yes. Different projects can have separate references, guidelines and workflows so the requirements remain clear.",
    },
    {
      id: "volume",
      question: "Can you handle 50, 100 or more videos?",
      answer:
        "Potentially. We assess the volume, style, complexity, deadline and current available capacity before confirming any larger project.",
    },
    {
      id: "turnaround",
      question: "What does turnaround look like?",
      answer:
        "Turnaround depends on format, complexity, volume, revisions and workflow. Expectations are agreed before production begins.",
    },
    {
      id: "freelancer",
      question: "Why not just hire a freelancer?",
      answer:
        "For many projects, a freelancer may be the right solution. LBB becomes useful when you need recurring capacity, multiple formats, quality checks and less day-to-day coordination of individual editors.",
    },
    {
      id: "ai-process",
      question: "Do you use AI in the editing process?",
      answer:
        "Yes. We use AI where it improves speed and efficiency, with human editing and quality control.",
    },
    {
      id: "why-call",
      question: "Why do I need a call?",
      answer:
        "Because your volume, style and turnaround determine the right setup and pricing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-16 sm:pb-24">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#F5EFE6]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D231E] text-center tracking-tight leading-[1.15] mb-12 sm:mb-16 font-heading"
        >
          Everything You Need to Know
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-4  mb-10 ">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={faq.id} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className={`bg-[#FFFDF9] rounded-xl   ${
                    isOpen
                      ? "border-[#36281E]/40 shadow-xs"
                      : "border-[#E5DDD0] hover:border-[#C8BDB0]"
                  } transition-all overflow-hidden`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl font-semibold text-[#2D231E] font-heading pr-2">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#C2410C] text-[#FAF7F2] rotate-180"
                          : "bg-[#EFE7DC] text-[#36281E]"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6  text-base text-[#5E5047] leading-relaxed  ">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
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
