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
  // Triplicated array for seamless infinite scrolling
  const items = [...MARQUEE_VIDEOS, ...MARQUEE_VIDEOS, ...MARQUEE_VIDEOS];

  return (
    <div className="w-full relative py-6 overflow-x-auto sm:overflow-hidden select-none touch-pan-x scrollbar-none">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-amber-900/5 rounded-full blur-3xl pointer-events-none" />

      {/* Continuous Marquee Track */}
      <div className="flex w-max items-center animate-video-marquee">
        {items.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="relative mx-1 w-[165px] h-[285px] sm:w-[210px] sm:h-[360px] rounded-2xl overflow-hidden shrink-0"
          >
            <iframe
              src={item.src}
              title={`Gumlet video player ${item.id}`}
              loading="lazy"
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        ))}
      </div>

      {/* Embedded Animation CSS */}
      <style jsx>{`
        @keyframes videoMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-video-marquee {
          animation: videoMarquee 35s linear infinite;
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
