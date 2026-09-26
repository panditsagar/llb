"use client";

import { ArrowRight } from "lucide-react";

export default function WorkflowSection() {
  const workflows = [
    {
      title: "Agencies",
      description:
        "You win the client. We handle the editing behind the scenes. Build additional fulfillment capacity without automatically adding more editors to payroll.",
      image: "/work1.png",
      cardBg: "bg-[#EDF3F8]",
    },
    {
      title: "Videographers",
      description:
        "You shoot. We handle the post-production. Spend more time shooting, serving clients and winning the next project instead of spending every available hour editing.",
      image: "/work2.png",
      cardBg: "bg-[#F7F2E8]",
    },
    {
      title: "Social Media Managers",
      description:
        "Take on more clients without becoming their full-time editor. Give clients consistent video output while keeping production off your plate.",
      image: "/work3.png",
      cardBg: "bg-[#F0F6EE]",
    },
    {
      title: "Coaches & Consultants",
      description:
        "Turn your footage into consistent content. Use long-form videos, calls, podcasts and recordings to create ongoing short-form and long-form content.",
      image: "/work4.png",
      cardBg: "bg-[#FDF0EE]",
    },
    {
      title: "D2C & Product Brands",
      description:
        "Produce more UGC, product videos, ads and social content without constantly expanding your internal team.",
      image: "/work5.png",
      cardBg: "bg-[#F3E8FF]",
    },
    {
      title: "Content Strategists",
      description:
        "You shape the content strategy. We turn it into finished videos across formats, clients and campaigns.",
      image: "/work6.png",
      cardBg: "bg-[#FFF3E0]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-16 md:pb-24">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-[#F3ECE0]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
       

        {/* Main Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-3xl font-semibold text-[#2D231E] tracking-tight leading-[1.1] sm:leading-[1.08] mb-12 mx-auto font-heading">
          Does LBB Fit Into Your Workflow?
        </h2>

        {/* 6 Workflow Cards Grid (2 cards per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
          {workflows.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden p-6 sm:p-8 ${item.cardBg} rounded-xl flex flex-col justify-between min-h-[190px] sm:min-h-[210px]`}
            >
              {/* Left Text Content */}
              <div className="relative z-10 pr-20 sm:pr-32 md:pr-36">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D231E] font-heading mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#574940]  ">
                  {item.description}
                </p>
              </div>

              {/* Right Background Image - Bottom Aligned */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute right-2 sm:right-4 bottom-0 w-28 sm:w-36 md:w-44 h-auto max-h-[90%] sm:max-h-[95%] object-contain object-bottom pointer-events-none z-0 opacity-90"
              />
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
