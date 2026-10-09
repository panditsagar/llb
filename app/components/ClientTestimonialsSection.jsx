"use client";

import { ArrowRight, CheckCircle2, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "LBB made editing feel like a dependable backend process instead of another creative bottleneck we had to manage every week.",
    name: "Agency Founder",
    role: "Recurring short-form content",
    initials: "AF",
    date: "09/30/2024",
    avatarBg: "bg-[#2D231E]",
    result: "More videos delivered with less coordination",
  },
  {
    quote:
      "The biggest win was consistency. We could send raw recordings, get clean edits back, and keep publishing without rebuilding the workflow each time.",
    name: "Content Lead",
    role: "Podcast and clips workflow",
    initials: "CL",
    date: "10/12/2024",
    avatarBg: "bg-[#7A5B3E]",
    result: "Cleaner delivery rhythm across formats",
  },
  {
    quote:
      "We needed a team that understood revisions, quality checks, and deadlines. LBB fit into the process quickly and kept things moving.",
    name: "Creative Operator",
    role: "High-volume editing support",
    initials: "CO",
    date: "11/04/2024",
    avatarBg: "bg-[#C2410C]",
    result: "Reliable support during busy production weeks",
  },
];

const proofPoints = [
  "Simple handoff",
  "Human quality control",
  "Revision-friendly",
  "Built for repeat work",
];

export default function ClientTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-16 md:pb-24">
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5EFE6]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 h-[260px] w-[260px] rounded-full bg-[#EFE5D5]/45 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F5EFE6] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#8C4A22]">
            <Star className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
            Client Feedback
          </span>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight text-[#2D231E] sm:text-4xl md:text-5xl sm:leading-[1.08] font-heading">
            What It Feels Like When{" "}
            <span className="text-[#C2410C]">
              Editing Stops Slowing You Down.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative flex min-h-[360px] flex-col rounded-xl bg-[#FFFDF9] p-6 sm:p-7"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3.5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.avatarBg} text-sm font-extrabold text-white`}
                  >
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold leading-tight text-[#2D231E] sm:text-lg font-heading">
                      {item.name}
                    </h3>
                    <p className="truncate text-sm font-semibold text-[#8C8179]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="flex-1 text-sm font-semibold leading-relaxed text-[#7A5B3E]">
                &quot;{item.quote}&quot;
              </blockquote>

              <div className="mt-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-[#F9B000]">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-4.5 w-4.5 fill-current stroke-current"
                    />
                  ))}
                </div>
                <time className="text-sm font-semibold text-[#5E5047]">
                  {item.date}
                </time>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex w-full items-center justify-center rounded-full border-2 border-dotted border-[#f97316]/55 p-1.5 sm:w-auto sm:inline-flex">
            <a
              href="#book-call"
              className="gradient-brand relative inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-900/20 transition-all hover:brightness-105 sm:w-auto sm:min-w-[360px] sm:px-12 sm:text-lg"
            >
              <span>Book 10 min Call</span>
              <ArrowRight className="ml-2.5 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
