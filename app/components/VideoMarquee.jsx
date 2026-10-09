"use client";

import React from "react";

const MARQUEE_VIDEOS = [
  {
    id: 1,
    src: "https://play.gumlet.io/embed/6ac34f6fd00ed21e8bbfa726",
  },
  {
    id: 2,
    src: "https://play.gumlet.io/embed/6ac34f6f5599ef1e51a4b003",
  },
  {
    id: 3,
    src: "https://play.gumlet.io/embed/6ac34f6fbbfc8c05707d461a",
  },
  {
    id: 4,
    src: "https://play.gumlet.io/embed/6ac34f6f5599ef1e51a4b004",
  },
  {
    id: 5,
    src: "https://play.gumlet.io/embed/6ac34f6f5599ef1e51a4b007",
  },
  {
    id: 6,
    src: "https://play.gumlet.io/embed/6ac34f6fd00ed21e8bbfa725",
  },
];

export default function VideoMarquee() {
  // Triplicated array for seamless desktop infinite scrolling
  const desktopItems = [...MARQUEE_VIDEOS, ...MARQUEE_VIDEOS, ...MARQUEE_VIDEOS];

  return (
    <div className="w-full relative py-6 overflow-hidden select-none">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-amber-900/5 rounded-full blur-3xl pointer-events-none" />

      {/* MOBILE VIEW: Native touch swipe cards with scroll snapping (Zero lag, zero animation glitches, smooth video tap/play) */}
      <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none px-4 gap-3 py-2">
        {MARQUEE_VIDEOS.map((item) => (
          <div
            key={`mobile-${item.id}`}
            className="relative h-[340px] aspect-[9/16] rounded-xl overflow-hidden shrink-0 snap-center border border-amber-950/10"
          >
            <iframe
              src={item.src}
              title={`Gumlet video player ${item.id}`}
              loading="lazy"
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 scale-[1.05] origin-center"
            />
          </div>
        ))}
      </div>

      {/* DESKTOP VIEW: Continuous auto-scrolling marquee */}
      <div className="hidden sm:flex w-max items-center animate-video-marquee">
        {desktopItems.map((item, index) => (
          <div
            key={`desktop-${item.id}-${index}`}
            className="relative mx-1.5 h-[360px] aspect-[9/16] rounded-xl overflow-hidden shrink-0"
          >
            <iframe
              src={item.src}
              title={`Gumlet video player ${item.id}`}
              loading="lazy"
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 scale-[1.05] origin-center"
            />
          </div>
        ))}
      </div>

      {/* Embedded Animation CSS */}
      <style jsx>{`
        @keyframes videoMarquee {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .animate-video-marquee {
          animation: videoMarquee 35s linear infinite;
          will-change: transform;
          -webkit-backface-visibility: hidden;
        }
        .animate-video-marquee:hover,
        .animate-video-marquee:active,
        .animate-video-marquee:focus {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
