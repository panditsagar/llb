"use client";

import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function CapabilitiesSection() {
  const cardsData = [
    {
      id: "short-form",
      title: "Short-Form",
      pills: [
        { label: "Reels", bg: "bg-[#FFEDD5] text-[#9A3412]" },
        { label: "TikTok", bg: "bg-[#E0F2FE] text-[#0369A1]" },
        { label: "YouTube Shorts", bg: "bg-[#FEE2E2] text-[#991B1B]" },
        { label: "Talking-Head Videos", bg: "bg-[#CFFAFE] text-[#0891B2]" },
        { label: "Founder Content", bg: "bg-[#EDE9FE] text-[#5B21B6]" },
        { label: "Social Clips", bg: "bg-[#DCFCE7] text-[#166534]" },
      ],
      badgeText: "Short-Form",
    },
    {
      id: "long-form",
      title: "Long-Form",
      pills: [
        { label: "YouTube Videos", bg: "bg-[#FEF3C7] text-[#92400E]" },
        { label: "Podcasts", bg: "bg-[#F3E8FF] text-[#6B21A8]" },
        { label: "Interviews", bg: "bg-[#DBEAFE] text-[#1E40AF]" },
        { label: "Educational Videos", bg: "bg-[#D1FAE5] text-[#065F46]" },
        { label: "Business Content", bg: "bg-[#FFE4E6] text-[#9F1239]" },
      ],
      badgeText: "Long-Form",
    },
    {
      id: "creative",
      title: "Creative",
      pills: [
        { label: "UGC", bg: "bg-[#FEF9C3] text-[#854D0E]" },
        { label: "Product Videos", bg: "bg-[#E0F2FE] text-[#075985]" },
        { label: "Ad Creatives", bg: "bg-[#FFEDD5] text-[#C2410C]" },
        { label: "Motion Graphics", bg: "bg-[#EDE9FE] text-[#6D28D9]" },
        { label: "Performance Creatives", bg: "bg-[#CCFBF1] text-[#115E59]" },
      ],
      badgeText: "Creative",
    },
    {
      id: "repurposing",
      title: "Repurposing",
      pills: [
        { label: "One Long Video", bg: "bg-[#FEE2E2] text-[#991B1B]" },
        {
          label: "SMultiple Short Videos",
          bg: "bg-[#DCFCE7] text-[#166534]",
        },
        {
          label: "Content for Multiple Platforms",
          bg: "bg-[#E0F2FE] text-[#0369A1]",
        },
      ],
      badgeText: "Repurposing",
    },
    {
      id: "ai-work",
      title: "AI-Assisted Video Work",
      pills: [
        { label: "AI-assisted workflows", bg: "bg-[#E9D5FF] text-[#581C87]" },
        {
          label: "Script-to-video requirements",
          bg: "bg-[#CFFAFE] text-[#0891B2]",
        },
        {
          label: "High-volume repetitive formats",
          bg: "bg-[#FFEDD5] text-[#9A3412]",
        },
        {
          label: "Suitable AI-based video production",
          bg: "bg-[#DCFCE7] text-[#166534]",
        },
      ],
      badgeText: "AI-Assisted",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-16 md:pb-24">
      {/* Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F5EFE6]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-3xl font-semibold text-[#2D231E] tracking-tight leading-[1.1] sm:leading-[1.08] mb-12 mx-auto font-heading">
          What Can We Handle for You?
        </h2>

        {/* 2-Card Per Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          {cardsData.map((card, idx) => (
            <div
              key={card.id}
              className={`bg-white/80 rounded-xl p-6 sm:p-7 transition-all space-y-4 relative overflow-hidden ${
                idx === cardsData.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              {/* Header Row: Title */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2D231E] font-heading">
                  {card.title}
                </h3>
              </div>

              {/* Middle Section: Colorful Tags/Pills Row */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {card.pills.map((pill, pIdx) => (
                  <span
                    key={pIdx}
                    className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold tracking-wide ${pill.bg} transition-transform hover:scale-[1.02] inline-flex items-center`}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Text below all cards */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-6 bg-[#F5EFE6] text-[#FAF7F2] rounded-xl flex items-center justify-center gap-3.5   ">
          <ShieldCheck className="w-5 h-5 text-[#FEF08A] shrink-0" />
            <h3 className="text-lg sm:text-xl   font-semibold font-heading  text-[#2D231E]">
            AI where it improves speed. Human quality control stays in the loop.
          </h3>
        </div>

        {/* Global Bottom Section CTA */}
        <div className="pt-4 flex flex-col items-center">
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
