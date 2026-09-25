"use client";

import { ArrowRight, Sparkles, CheckCircle2, Star } from "lucide-react";
import VideoMarquee from "./VideoMarquee";

export default function Hero() {
  const valueBadges = [
    { text: "White-Label Ready", subtext: "Your brand front & center" },
    { text: "Recurring Editing", subtext: "Consistent monthly capacity" },
    { text: "Multiple Formats", subtext: "Shorts, Long-form & Ads" },
    { text: "Scalable Capacity", subtext: "Grow without hiring stress" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pt-8 pb-20 md:pb-28">
      {/* Soft Ambient Warm Glows matching reference design */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F3ECE0]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#EFE5D5]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Target Audience Pill Badge with Dotted Border */}
        <div className=" w-fit mx-auto p-1 rounded-full border-2 border-dotted border-[#36281E] mb-8">
          <div className="flex items-center justify-center gap-2 py-2 px-12 bg-[#EFE7DC] rounded-full text-[#36281E] text-center">
            <span className="text-[0.8rem] sm:text-[0.89rem] font-semibold tracking-wide">
              For Agencies, Videographers, Social Media Managers, Coaches & Content Teams
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl max-w-4xl font-semibold text-[#2D231E] tracking-tight leading-[1]  mb-6 mx-auto font-heading">
          Take On More Video{" "}
          <img
            src="/video-icon.png"
            alt="Video Icon"
            className="inline-block h-[1em] w-auto align-middle   -translate-y-[2px]"
          />{" "}
          Work Without Building a{" "}
          <span className="bg-[#FEF08A] text-[#36281E] px-2.5 py-0.5 rounded-lg inline-block lg:text-[4rem]">
            BIGGER
          </span>{" "}
          Editing Team.
        </h1>

        {/* Subheadline & Pitch Paragraph */}
        <div className="max-w-4xl mx-auto space-y-3 mb-10">
          <p className="text-xl sm:text-2xl font-bold text-[#382D26] tracking-tight">
            You win the client. We handle the editing behind the scenes.
          </p>
          <p className="text-base sm:text-lg text-[#5E5047] leading-relaxed font-normal">
            Get a reliable backend editing team behind your business so you can
            handle more content, more clients and larger projects without
            constantly recruiting, testing, training and managing editors.
          </p>
        </div>

        {/* Primary Call to Action Button & Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
          {/* CTA Button with Outer Dotted Border & Space */}
          <div className="p-1.5 rounded-full border-2 border-dotted border-[#36281E]/40 inline-flex items-center justify-center">
            <a
              href="#book-call"
              className="relative inline-flex items-center justify-center px-12 py-3.5 text-base sm:text-lg font-bold rounded-full text-[#FAF7F2] bg-[#36281E] shadow-lg shadow-stone-900/10"
            >
              <span>Book 10 min Call</span>
              <ArrowRight className="w-5 h-5 ml-2.5" />
            </a>
          </div>

          {/* Rating Display with Overlapping Client Avatars */}
          <div className="flex items-center gap-2.5 text-left">
            {/* 4 Overlapping Avatar Images (Women & Men) */}
            <div className="flex -space-x-2.5 overflow-hidden p-0.5">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover shrink-0"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Client avatar 1"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover shrink-0"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Client avatar 2"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover shrink-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                alt="Client avatar 3"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover shrink-0"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                alt="Client avatar 4"
              />
            </div>
            <div className="text-xs">
              <span className="text-3xl font-bold text-[#2D231E] block  ">
                1000+
              </span>
              <span className="text-[#6E5E54] font-medium">
                Satisfied Customers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Running Video Marquee Banner */}
      <VideoMarquee />
    </section>
  );
}
