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
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pt-4 sm:pt-8 pb-20 md:pb-28">
      {/* Soft Ambient Warm Glows matching reference design */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F3ECE0]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#EFE5D5]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Hand-drawn Arrow & Text indicating down to Marquee */}
        <div className="hidden lg:flex absolute right-1   xl:right-1 -bottom-12 xl:-bottom-6  flex-col items-center pointer-events-none select-none z-20">
          <span className="font-handwriting text-2xl lg:text-3xl text-[#36281E] -rotate-10 tracking-wide font-normal">
            Elevate your brand
          </span>
          <img
            src="/arrow.png"
            alt="Arrow pointing to marquee"
            className="w-16 sm:w-20 h-auto ml-4 -mt-1"
          />
        </div>
        {/* Top Target Audience Pill Badge with Dotted Border */}
        <div className="w-fit   sm:max-w-none mx-auto p-1 rounded-full border-2 border-dotted border-[#36281E] mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 py-1 sm:py-2 px-4 sm:px-8 md:px-12 bg-[#EFE7DC] rounded-full text-[#36281E] text-center">
            <span className="text-[0.84rem] sm:text-[0.9rem] font-semibold leading-tight">
              For Agencies, Videographers, Social Media Managers, Coaches &
              Content Teams
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl max-w-4xl font-semibold text-[#2D231E] tracking-tight leading-[1.1] sm:leading-[1] mb-4 sm:mb-6 mx-auto font-heading">
          Take On More Video{" "}
          <img
            src="/video-icon.png"
            alt="Video Icon"
            className="inline-block h-[1em] w-auto align-middle -translate-y-[2px]"
          />{" "}
          Work Without Building a{" "}
          <span className="bg-[#FEF08A] text-[#36281E] px-2 sm:px-2.5 py-0.5 rounded-lg inline-block text-3xl sm:text-4xl md:text-5xl lg:text-[4rem]">
            BIGGER
          </span>{" "}
          Editing Team.
        </h1>

        {/* Subheadline & Pitch Paragraph */}
        <div className="max-w-4xl mx-auto space-y-3 mb-6 sm:mb-10 px-2 sm:px-0">
          <p className="text-xl sm:text-xl md:text-[1.6rem] font-bold text-[#382D26] tracking-tight leading-tight">
            You win the client. We handle the editing behind the scenes.
          </p>
          <p className="text-md sm:text-base md:text-[1.4rem] text-[#5E5047] font-normal ">
            Get a reliable backend editing team behind your business so you can
            handle more content, more clients and larger projects without
            constantly recruiting, testing, training and managing editors.
          </p>
        </div>

        {/* Primary Call to Action Button & Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 mb-4">
          {/* CTA Button with Outer Dotted Border & Space */}
          <div className="w-full sm:w-auto p-1.5 rounded-full border-2 border-dotted border-[#36281E]/40 flex sm:inline-flex items-center justify-center">
            <a
              href="#book-call"
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 sm:px-12 py-3.5 text-base sm:text-lg font-bold rounded-full text-[#FAF7F2] bg-[#36281E] shadow-lg shadow-stone-900/10"
            >
              <span>Book 10 min Call</span>
              <ArrowRight className="w-5 h-5 ml-2.5" />
            </a>
          </div>

          {/* Rating Display with Overlapping Client Avatars */}
          <div className="hidden sm:flex items-center gap-2.5 text-left">
            {/* 4 Overlapping Avatar Images (Women & Men) */}
            <div className="flex -space-x-2.5 overflow-hidden p-0.5">
              <img
                className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover shrink-0"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Client avatar 1"
              />
              <img
                className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover shrink-0"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Client avatar 2"
              />
              <img
                className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover shrink-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                alt="Client avatar 3"
              />
              <img
                className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#FAF7F2] object-cover shrink-0"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                alt="Client avatar 4"
              />
            </div>
            <div className="text-xs">
              <span className="text-2xl sm:text-3xl font-bold text-[#2D231E] block">
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
