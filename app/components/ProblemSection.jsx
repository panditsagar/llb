"use client";

import { ArrowRight } from "lucide-react";

export default function ProblemSection() {
  const painPoints = [
    {
      number: "01",
      title: "Editors Get Overloaded",
      description:
        "Turnarounds start slipping and existing work begins competing for capacity.",
      stat: "Capacity Bottleneck",
      bg: "bg-[#DCE4ED]",
      textColor: "text-[#1E2E3D]",
    },
    {
      number: "02",
      title: "Freelancers Become Harder to Coordinate",
      description:
        "Availability changes, workflows vary and quality can become inconsistent.",
      stat: "Workflow Friction",
      bg: "bg-[#ECE2CF]",
      textColor: "text-[#36281E]",
    },
    {
      number: "03",
      title: "New Opportunities Become Harder to Accept",
      description:
        "You want the work, but first you have to ask whether your current setup can actually deliver it.",
      stat: "Growth Limitation",
      bg: "bg-[#D8E8D1]",
      textColor: "text-[#1B382B]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-20 md:pb-28  ">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#F3ECE0]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
 

        {/* Main Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-4xl font-semibold text-[#2D231E] tracking-tight leading-[1.1] sm:leading-[1.08] mb-6 mx-auto font-heading">
          Your Sales Can Grow Faster Than Your Editing Capacity.
        </h2>

        {/* Pitch Paragraph */}
        <p className="max-w-3xl mx-auto text-base sm:text-[1.2rem]  text-[#5E5047] leading-relaxed font-normal mb-14 px-2 sm:px-0">
          As your client roster grows, the editing workload grows with it more
          footage, more formats, tighter deadlines, more revisions and more
          projects landing on the same team.
        </p>

        {/* 3 Problem Cards with Title Pastel BG Accent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-14 text-left">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="relative p-7 sm:p-6 bg-[#ffffff]/80  rounded-xl min-h-[340px] flex flex-col justify-between  "
            >
              <div>
                {/* Title with Pastel BG */}
                <div className="mb-5">
                  <h3 className={`text-xl sm:text-2xl font-semibold ${point.textColor} ${point.bg} px-4 py-2.5 rounded-xl inline-block font-heading leading-tight`}>
                    {point.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#5E5047]  font-normal">
                  {point.description}
                </p>
              </div>

              {/* Bottom Stat / Metric Indicator */}
              <div className="mt-8 pt-5 border-t border-[#E8DFC5]/80">
                <span className="text-3xl sm:text-4xl font-bold font-heading block text-[#2D231E]">
                  {point.number}
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#6E5E54] mt-1 block">
                  {point.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <div className="w-full sm:w-auto p-1.5 rounded-full border-2 border-dotted border-[#36281E]/40 flex sm:inline-flex items-center justify-center">
            <a
              href="#book-call"
              className="w-full sm:w-auto min-w-[260px] sm:min-w-[360px] relative inline-flex items-center justify-center px-10 sm:px-20 py-4 text-base sm:text-lg font-bold rounded-full text-[#FAF7F2] bg-[#36281E] shadow-lg shadow-stone-900/10"
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
