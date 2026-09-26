"use client";

import { Check, Play, Film, Music, Activity } from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] py-10 sm:py-14 md:py-16">
      {/* Inline animation keyframes for timeline playhead */}
      <style>{`
        @keyframes slidePlayhead {
          0%, 100% { left: 10%; }
          50% { left: 90%; }
        }
      `}</style>

      {/* Soft Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F5EFE6]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Headline */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-4xl font-semibold text-[#2D231E] tracking-tight leading-[1.1] sm:leading-[1.08] mx-auto font-heading">
            From Raw Footage To Final LBB Edit
          </h2>
        </div>

        {/* 3-Card Interactive Process Showcase */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-5  my-2 sm:my-4 relative">
          {/* LEFT CARD: RAW FOOTAGE PHONE FRAME */}
          <div className="relative group shrink-0">
             

            {/* Tilted Phone Frame (-rotate-3) */}
            <div className="w-56 sm:w-64 lg:w-72 bg-white rounded-[2rem] p-2 shadow-xl shadow-stone-900/10 border border-stone-200/80 -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative aspect-[9/16] rounded-[1.5rem] overflow-hidden bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Raw Footage Creator"
                  className="w-full h-full object-cover grayscale-[20%] brightness-95"
                />

                {/* Top Badge: Raw Footage */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-[0.7rem] sm:text-xs font-semibold rounded-full tracking-wide">
                    Raw Footage
                  </span>
                </div>

                {/* Bottom Video Controls Overlay */}
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 rounded-xl text-white">
                  <div className="flex items-center gap-2 text-xs">
                    <Play className="w-3 h-3 fill-white" />
                    <div className="flex-1 h-1 bg-white/40 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-white rounded-full" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono opacity-90">
                      0:00 / 0:28
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DOODLE ARROW 1 */}
          <div className="hidden lg:block text-[#C69C6D] shrink-0">
            <svg
              width="24"
              height="18"
              viewBox="0 0 28 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse"
            >
              <path
                d="M2 10C8 8.5 18 8.8 24 10M24 10L18 4M24 10L18 16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* CENTER CARD: LBB EDITING (BEHIND THE SCENES) */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-[420px] bg-[#FAF6F0] rounded-2xl p-5 sm:p-6 shadow-lg shadow-stone-900/5 border border-[#EBE3D5] z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <h3 className="text-xl  font-semibold text-[#2D231E]">
                LBB Editing
              </h3>
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#8C6D53]">
                <span className="w-2 h-2 rounded-full bg-[#C69C6D] animate-ping" />
                Behind the scenes
              </div>
            </div>

            {/* Interactive Animated Editing Timeline Container */}
            <div className="bg-[#FAF7F2] rounded-xl p-3.5 sm:p-4 border border-[#E8DFC9] mb-4 sm:mb-5 relative overflow-hidden">
              {/* Animated Playhead Line */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-[#2D231E] z-20 pointer-events-none animate-[slidePlayhead_4s_ease-in-out_infinite]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2D231E] -ml-[4px] -mt-0.5 shadow-xs" />
              </div>

              {/* Track 1: Video Thumbnail Strip */}
              <div className="grid grid-cols-5 gap-0.5 mb-2.5 rounded-md overflow-hidden  ">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  className="h-9 w-full object-cover rounded-md"
                  alt="Thumb 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  className="h-9 w-full object-cover rounded-md"
                  alt="Thumb 2"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                  className="h-9 w-full object-cover rounded-md"
                  alt="Thumb 3"
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  className="h-9 w-full object-cover rounded-md"
                  alt="Thumb 4"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  className="h-9 w-full object-cover rounded-md"
                  alt="Thumb 5"
                />
              </div>

              {/* Track 2: Video Segment Blocks */}
              <div className="flex items-center gap-2 mb-2.5">
                <Film className="w-3.5 h-3.5 text-[#8C6D53] shrink-0" />
                <div className="flex-1 flex gap-1.5 h-5">
                  <div className="w-[45%] h-full bg-[#FCE5B4] rounded-md" />
                  <div className="w-[50%] h-full bg-[#FCE5B4] rounded-md" />
                </div>
              </div>

              {/* Track 3: Audio Blocks */}
              <div className="flex items-center gap-2 mb-2.5">
                <Music className="w-3.5 h-3.5 text-[#8C6D53] shrink-0" />
                <div className="flex-1 flex gap-1.5 h-4.5">
                  <div className="w-[20%] h-full bg-[#EADEC9] rounded-md" />
                  <div className="w-[50%] h-full bg-[#EADEC9] rounded-md" />
                  <div className="w-[25%] h-full bg-[#EADEC9] rounded-md" />
                </div>
              </div>

              {/* Track 4: Animated Audio Waveform */}
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#8C6D53] shrink-0" />
                <div className="flex-1 flex items-center justify-between h-4.5 px-1   rounded-md">
                  {[
                    40, 70, 30, 90, 60, 100, 45, 80, 55, 95, 35, 75, 50, 85, 65,
                    40, 90, 70, 30, 85,
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="w-0.5 sm:w-1 bg-[#A88C74] rounded-full"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom 3 Pills (Edit, Quality Check, Revisions) */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FAF0E4] text-[#7A5B3E] rounded-md text-[0.7rem] sm:text-xs font-semibold  ">
                  Edit
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FAF0E4] text-[#7A5B3E] rounded-md text-[0.7rem] sm:text-xs font-semibold  ">
                 Quality Check
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FAF0E4] text-[#7A5B3E] rounded-md text-[0.7rem] sm:text-xs font-semibold  ">
                  Revisions
              </div>
            </div>
          </div>

          {/* DOODLE ARROW 2 */}
          <div className="hidden lg:block text-[#C69C6D] shrink-0">
            <svg
              width="24"
              height="18"
              viewBox="0 0 28 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse"
            >
              <path
                d="M2 10C8 8.5 18 8.8 24 10M24 10L18 4M24 10L18 16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* RIGHT CARD: FINAL LBB EDIT PHONE FRAME */}
          <div className="relative group shrink-0">
         

            {/* Tilted Phone Frame with Gold Border (rotate-3) */}
            <div className="w-56 sm:w-64 lg:w-72 bg-white rounded-[2rem] p-2 shadow-xl shadow-amber-900/10 border-2 border-[#D97706]/40 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative aspect-[9/16] rounded-[1.5rem] overflow-hidden bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
                  alt="Final LBB Edit Creator"
                  className="w-full h-full object-cover contrast-[105%] saturate-[110%]"
                />

                {/* Top Badge: Final LBB Edit */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#36281E] text-[0.7rem] sm:text-xs font-serif font-bold rounded-full shadow-sm tracking-wide">
                    Final LBB Edit
                  </span>
                </div>

                {/* Bottom Video Controls Overlay */}
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 rounded-xl text-white">
                  <div className="flex items-center gap-2 text-xs">
                    <Play className="w-3 h-3 fill-white" />
                    <div className="flex-1 h-1 bg-white/40 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[#FCE5B4] rounded-full" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono opacity-90">
                      0:00 / 0:28
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
