"use client";

import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const valueBadges = [
    { text: "White-Label Ready", subtext: "Your brand front & center" },
    { text: "Recurring Editing", subtext: "Consistent monthly capacity" },
    { text: "Multiple Formats", subtext: "Shorts, Long-form & Ads" },
    { text: "Scalable Capacity", subtext: "Grow without hiring stress" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] text-slate-900   pb-20   md:pb-28">
      {/* Background Soft Glow & Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
      {/* Top Target Audience Pill Badge */}
      <div className="w-full flex items-center justify-center gap-2 p-4 bg-[#F5EBE3] rounded-b-4xl border-b border-[#E9D8CC] text-[#784632] shadow-xs mb-8 text-center">
        <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
          FOR AGENCIES, VIDEOGRAPHERS, SOCIAL MEDIA MANAGERS, CONTENT
          STRATEGISTS, COACHES & CONTENT TEAMS
        </span>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.12] mb-6  mx-auto font-heading">
          Take On More Video Work Without Building a Bigger Editing Team.
        </h1>

        {/* Subheadline & Pitch Paragraph */}
        <div className="max-w-4xl mx-auto space-y-3 mb-10">
          <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
            You win the client. We handle the editing behind the scenes.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Get a reliable backend editing team behind your business so you can
            handle more content, more clients and larger projects without
            constantly recruiting, testing, training and managing editors.
          </p>
        </div>

        {/* Primary Call to Action Button with Hand-Drawn Annotation */}
        <div className="relative inline-block mb-14">
          {/* CTA Button */}
          <a
            href="#book-call"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-[#F26559] hover:bg-[#E05246] shadow-xl shadow-rose-500/25 hover:shadow-2xl hover:shadow-rose-500/35 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
          >
            <span>Book 10 min Call</span>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
