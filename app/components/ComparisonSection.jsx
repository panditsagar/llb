"use client";

import {
  ArrowRight,
  Trophy,
  FileText,
  BarChart3,
  Scale,
  Check,
  Users,
  FileCheck,
  UserPlus,
  GraduationCap,
  Settings,
  Clock,
  GitMerge,
  Video,
  ShieldCheck,
  RefreshCw,
  Download,
} from "lucide-react";

export default function ComparisonSection() {
  const option1Steps = [
    "Recruit",
    "Test",
    "Onboard",
    "Train",
    "Manage",
    "Chase Deadlines",
  ];

  const option2Steps = [
    "Confirm Scope",
    "Confirm Capacity",
    "Set Workflow",
    "Edit",
    "Quality Check",
    "Revisions",
    "Final Delivery",
  ];

  const option1IconSteps = [
    { name: "Recruit", icon: Users },
    { name: "Test", icon: FileCheck },
    { name: "Onboard", icon: UserPlus },
    { name: "Train", icon: GraduationCap },
    { name: "Manage", icon: Settings },
    { name: "Chase Deadlines", icon: Clock },
  ];

  const option2IconSteps = [
    { name: "Confirm Scope", icon: FileText },
    { name: "Confirm Capacity", icon: Users },
    { name: "Set Workflow", icon: GitMerge },
    { name: "Edit", icon: Video },
    { name: "Quality Check", icon: ShieldCheck },
    { name: "Revisions", icon: RefreshCw },
    { name: "Final Delivery", icon: Download },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-16 md:pb-24">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[400px] bg-[#F3ECE0]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Eyebrow Badge */}
        <div className="w-fit max-w-[95%] sm:max-w-none mx-auto p-1 rounded-full border-2 border-dotted border-[#36281E]/40 mb-6 shadow-xs">
          <div className="flex items-center justify-center gap-2 py-1 px-6 sm:px-8   rounded-full text-[#36281E] text-center">
            <span className="text-[0.75rem] sm:text-xs md:text-sm font-semibold tracking-wider uppercase">
              What Happens When You Win The Big Project?
            </span>
          </div>
        </div>

        {/* Main Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-4xl font-semibold text-[#2D231E] tracking-tight leading-[1.1] sm:leading-[1.08] mb-10 mx-auto font-heading">
          Imagine Your Client Suddenly Needs 100 Videos.
        </h2>

        {/* Top Scenario Bottleneck Flow Cards (Pills with Arrows) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-8">
          {/* Step 1 */}
          <div className="w-full md:w-1/3 p-4 sm:p-5 bg-[#EDF3F8] rounded-xl flex items-center gap-4 text-left ">
            <div className="w-12 h-12 rounded-full bg-[#D8E4EF] text-[#1E3A8A] flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">
                01
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1E293B] font-heading leading-tight uppercase">
                You Win The Project
              </h3>
            </div>
          </div>

          {/* Arrow 1 */}
          <span className="hidden md:block text-[#36281E]  ">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="  stroke-current shrink-0"
            >
              <path
                d="M2 7C6 5.8 11.5 6 15 7M15 7L10.5 3M15 7L11 11"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* Step 2 */}
          <div className="w-full md:w-1/3 p-4 sm:p-5 bg-[#F7F2E8] rounded-xl flex items-center gap-4 text-left ">
            <div className="w-12 h-12 rounded-full bg-[#E8DFC9] text-[#36281E] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider block">
                02
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#36281E] font-heading leading-tight uppercase">
                Client Needs 100 Videos
              </h3>
            </div>
          </div>

          {/* Arrow 2 */}
          <span className="hidden md:block text-[36281E]  ">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="  stroke-current shrink-0"
            >
              <path
                d="M2 7C6 5.8 11.5 6 15 7M15 7L10.5 3M15 7L11 11"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* Step 3 */}
          <div className="w-full md:w-1/3 p-4 sm:p-5 bg-[#F0F6EE] rounded-xl flex items-center gap-4 text-left ">
            <div className="w-12 h-12 rounded-full bg-[#D5E8CE] text-[#166534] flex items-center justify-center shrink-0">
              <BarChart3 className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                03
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#166534] font-heading leading-tight uppercase">
                Current Setup Handles 30
              </h3>
            </div>
          </div>
        </div>

        {/* Transition Header */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#2D231E] font-heading mb-8">
          Now You Have Two Options
        </h3>

        {/* 2 Options Comparison Cards Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6   mb-12 text-left">
          {/* OPTION 1 — BUILD CAPACITY FROM SCRATCH */}
          <div className="p-6 sm:p-8 bg-[#FFFFFF]/80   rounded-xl flex flex-col justify-between ">
            <div>
              {/* Header with Title on Left, Man1 Image on Right */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-[#FDF0EE] text-[#991B1B] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    Option 1
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#991B1B] font-heading uppercase tracking-tight leading-tight">
                    Build Capacity From Scratch
                  </h4>
                </div>
                {/* Man 1 Image */}
                <div className="w-48 sm:w-60 md:w-64 shrink-0 self-center sm:self-start">
                  <img
                    src="/man1.png"
                    alt="Stressed Editor"
                    className="w-full h-auto object-contain max-h-[220px] sm:max-h-[260px] md:max-h-[300px]"
                  />
                </div>
              </div>

              {/* Step Sequence Text Flow */}
              <div className="flex flex-wrap items-center gap-2">
                {option1Steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="px-3.5 py-2 bg-[#FDF0EE] text-[#2D231E] rounded-xl text-xs sm:text-sm font-semibold">
                      {step}
                    </span>
                    {idx < option1Steps.length - 1 && (
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#991B1B]/60 stroke-current shrink-0"
                      >
                        <path
                          d="M2 7C6 5.8 11.5 6 15 7M15 7L10.5 3M15 7L11 11"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OPTION 2 — USE YOUR LBB BACKEND TEAM */}
          <div className="p-6 sm:p-8 bg-[#FFFFFF]/80  rounded-xl flex flex-col justify-between  ">
            <div>
              {/* Header with Title on Left, Man 2 Image on Right */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-[#F0F7EE] text-[#166534] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    Option 2
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#166534] font-heading uppercase tracking-tight leading-tight">
                    Use Your LBB Backend Team
                  </h4>
                </div>
                {/* Man 2 Image */}
                <div className="w-48 sm:w-60 md:w-64 shrink-0 self-center sm:self-start">
                  <img
                    src="/man2.png"
                    alt="Happy Editor"
                    className="w-full h-auto object-contain max-h-[220px] sm:max-h-[260px] md:max-h-[300px]"
                  />
                </div>
              </div>

              {/* Step Sequence Text Flow */}
              <div className="flex flex-wrap items-center gap-2">
                {option2Steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="px-3 py-2 bg-[#F0F7EE] text-[#1B382B] rounded-xl text-xs sm:text-sm font-semibold">
                      {step}
                    </span>
                    {idx < option2Steps.length - 1 && (
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#166534]/70 stroke-current shrink-0"
                      >
                        <path
                          d="M2 7C6 5.8 11.5 6 15 7M15 7L10.5 3M15 7L11 11"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Summary Banner */}
        <div className="w-full p-5 sm:p-6 bg-[#F5EFE6]   rounded-xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left mb-12 shadow-2xs">
          <div className="w-11 h-11 rounded-full bg-[#E8DFC9] text-[#36281E] flex items-center justify-center shrink-0">
            <Scale className="w-6 h-6 stroke-[1.8]" />
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#D8CDBA]" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-heading  text-[#2D231E]">
            Same opportunity. Two very different ways to deliver it.
          </h3>
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
