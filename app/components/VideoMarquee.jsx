"use client";

import React from "react";

const VIDEO_IMAGES = [
  { id: 1, image: "/video1.png" },
  { id: 2, image: "/video2.png" },
  { id: 3, image: "/video3.png" },
  { id: 4, image: "/video4.png" },
  { id: 5, image: "/video5.png" },
  { id: 6, image: "/video6.png" },
];

export default function VideoMarquee() {
  // Triplicated array for seamless infinite scrolling
  const items = [...VIDEO_IMAGES, ...VIDEO_IMAGES, ...VIDEO_IMAGES];

  return (
    <div className="w-full relative py-6 overflow-hidden select-none">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Continuous Marquee Track */}
      <div className="flex w-max items-center animate-video-marquee">
        {items.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="relative mx-1 w-[165px] h-[285px] sm:w-[210px] sm:h-[360px] rounded-2xl overflow-hidden shrink-0"
          >
            {/* Background Image from Public Folder */}
            <img
              src={item.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
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
      `}</style>
    </div>
  );
}
