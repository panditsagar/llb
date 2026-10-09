"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I dedicate my incredible growth entirely to the team at Let's Build Brand. When we started 4 months ago, I was at 10k followers; today, I'm at 550k. This would have been impossible without their expert strategy and their amazing video editing team.",
    name: "Stephanie",
    role: "Influencer",
    initials: "AF",
    avatar: "/review1.png",
    date: "09/30/2024",
    avatarBg: "bg-[#2D231E]",
    result: "More videos delivered with less coordination",
  },
  {
    quote:
      " It's rare to find a creative team that truly listens and executes with such precision. They took my vision for my Taekwon-Do content and captured the energy and discipline of the art form in every edit. The final videos were exactly my dream style, only better.",
    name: "Johann De Silva",
    role: "Martial Arts Instructor",
    initials: "CL",
    avatar: "/review2.png",
    date: "10/12/2024",
    avatarBg: "bg-[#7A5B3E]",
    result: "Cleaner delivery rhythm across formats",
  },
  {
    quote:
      "We gave them an incredibly demanding project: 60 videos in just 10 days. Not only did they deliver on time, but the quality was exceptional. Their systematic process, which included three rounds of quality checks, ensured every video was perfect.",
    name: "Innerlink",
    role: "Agency Partner",
    initials: "CO",
    avatar: "/review3.png",
    date: "11/04/2024",
    avatarBg: "bg-[#C2410C]",
    result: "Reliable support during busy production weeks",
  },
];

const videoTestimonials = [
  {
    id: "video-testimonial-1",
    title: "Video testimonial 1",
    src: "https://play.gumlet.io/embed/6ac7ce57b7a0f1b153b6c9cb",
  },
  {
    id: "video-testimonial-2",
    title: "Video testimonial 2",
    src: "https://play.gumlet.io/embed/6ac7cd665990b730fc3f0b33",
  },
];

export default function ClientTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-16 md:pb-24">
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5EFE6]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 h-[260px] w-[260px] rounded-full bg-[#EFE5D5]/45 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
       
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
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#F5EFE6]">
                    <Image
                      src={item.avatar}
                      alt={`${item.name} avatar`}
                      fill
                      sizes="48px"
                      className="object-cover scale-155"
                    />
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

        <div className="mt-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {videoTestimonials.map((item) => (
              <div
                key={item.id}
                className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#FFFDF9]"
              >
                <iframe
                  loading="lazy"
                  title={item.title}
                  src={item.src}
                  className="absolute inset-0 h-full w-full border-0"
                  referrerPolicy="origin"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
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
