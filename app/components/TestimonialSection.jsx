"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState("Talking Head");

  const categories = [
    "Talking Head",
    "Podcast",
    "UGC",
    "Product Video",
    "Motion Graphics",
    "YouTube",
    "Reels",
  ];

  // Video orientation per category
  // Vertical categories: Talking Head, UGC, Reels
  // Landscape categories: Podcast, Product Video, Motion Graphics, YouTube
  const testimonials = {
    "Talking Head": {
      type: "vertical",
      videos: [
        {
          id: "th-1",
          poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        },
        {
          id: "th-2",
          poster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
          id: "th-3",
          poster: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        },
      ],
    },
    Podcast: {
      type: "landscape",
      videos: [
        {
          id: "pod-1",
          poster: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        },
        {
          id: "pod-2",
          poster: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        },
        {
          id: "pod-3",
          poster: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        },
      ],
    },
    UGC: {
      type: "vertical",
      videos: [
        {
          id: "ugc-1",
          poster: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
        {
          id: "ugc-2",
          poster: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        },
        {
          id: "ugc-3",
          poster: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        },
      ],
    },
    "Product Video": {
      type: "landscape",
      videos: [
        {
          id: "pv-1",
          poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        },
        {
          id: "pv-2",
          poster: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        },
        {
          id: "pv-3",
          poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        },
      ],
    },
    "Motion Graphics": {
      type: "landscape",
      videos: [
        {
          id: "mg-1",
          poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        },
        {
          id: "mg-2",
          poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        },
        {
          id: "mg-3",
          poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        },
      ],
    },
    YouTube: {
      type: "landscape",
      videos: [
        {
          id: "yt-1",
          poster: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
          id: "yt-2",
          poster: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
          id: "yt-3",
          poster: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
      ],
    },
    Reels: {
      type: "vertical",
      videos: [
        {
          id: "rl-1",
          poster: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        },
        {
          id: "rl-2",
          poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        },
        {
          id: "rl-3",
          poster: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        },
      ],
    },
  };

  const currentCategoryData = testimonials[activeTab] || { type: "vertical", videos: [] };
  const isVerticalCategory = currentCategoryData.type === "vertical";

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-16 ">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#F5EFE6]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#EFE5D5]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
       

        {/* Main Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-3xl font-semibold text-[#2D231E] tracking-tight leading-[1.1] sm:leading-[1.08] mb-8 mx-auto font-heading">
          See the Work Before You Book the Call.
        </h2>

        {/* Modern Segmented Pill Tabs Container */}
        <div className="w-fit max-w-full mx-auto bg-[#EFE8DD] p-1.5 rounded-lg flex items-center justify-start sm:justify-center gap-2 overflow-x-auto mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#36281E] text-[#FAF7F2] shadow-md shadow-stone-900/15 scale-[1.02]"
                    : "text-[#574940] hover:text-[#2D231E] hover:bg-white/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Clean 3 Video Grid (Reduced Gaps, No Borders) */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-2   mx-auto mb-12 items-center justify-center ${
            isVerticalCategory ? "max-w-4xl" : "max-w-6xl"
          }`}
        >
          {currentCategoryData.videos.map((item) => (
            <div
              key={item.id}
              className={`group relative   rounded-xl overflow-hidden shadow-lg shadow-stone-900/10 hover:shadow-2xl transition-all duration-300 w-full ${
                isVerticalCategory ? "aspect-[9/16]" : "aspect-[16/9]"
              }`}
            >
              {/* HTML Video Player Without Borders */}
              <video
                src={item.videoUrl}
                poster={item.poster}
                controls
                preload="metadata"
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
