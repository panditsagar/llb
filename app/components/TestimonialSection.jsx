"use client";

import { useState } from "react";

const testimonials = {
  Landscape: {
    type: "landscape",
    videos: [
      {
        id: "landscape-1",
        src: "https://play.gumlet.io/embed/6ac34f6fbbfc8c05707d4619",
      },
      {
        id: "landscape-2",
        src: "https://play.gumlet.io/embed/6ac34f6f5599ef1e51a4b006",
      },
      {
        id: "landscape-3",
        src: "https://play.gumlet.io/embed/6ac34f6f5599ef1e51a4b005",
      },
      {
        id: "landscape-4",
        src: "https://play.gumlet.io/embed/6ac3e142bbfc8c057081836f",
      },
      {
        id: "landscape-5",
        src: "https://play.gumlet.io/embed/6ac3e1425599ef1e51a8ff96",
      },
      {
        id: "landscape-6",
        src: "https://play.gumlet.io/embed/6ac3e142d00ed21e8bc3bf91",
      },
    ],
  },
  Vertical: {
    type: "vertical",
    videos: [
      {
        id: "vertical-2",
        src: "https://play.gumlet.io/embed/6ac34f6fbbfc8c05707d4618",
      },
      {
        id: "vertical-3",
        src: "https://play.gumlet.io/embed/6ac3e142d00ed21e8bc3bf92",
      },
      {
        id: "vertical-4",
        src: "https://play.gumlet.io/embed/6ac3e1425599ef1e51a8ff97",
      },
    ],
  },
  Marquee: {
    type: "vertical",
    videos: [
      {
        id: "marquee-1",
        src: "https://play.gumlet.io/embed/6ac34f6fd00ed21e8bbfa726",
      },
      {
        id: "marquee-2",
        src: "https://play.gumlet.io/embed/6ac34f6f5599ef1e51a4b003",
      },
      {
        id: "marquee-3",
        src: "https://play.gumlet.io/embed/6ac34f6fbbfc8c05707d461a",
      },
      {
        id: "marquee-4",
        src: "https://play.gumlet.io/embed/6ac34f6f5599ef1e51a4b004",
      },
      {
        id: "marquee-5",
        src: "https://play.gumlet.io/embed/6ac34f6f5599ef1e51a4b007",
      },
      {
        id: "marquee-6",
        src: "https://play.gumlet.io/embed/6ac34f6fd00ed21e8bbfa725",
      },
    ],
  },
};

const categories = Object.keys(testimonials);

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState("Landscape");

  const currentCategoryData = testimonials[activeTab] || testimonials.Landscape;
  const isVerticalCategory = currentCategoryData.type === "vertical";

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-[#2D231E] pb-16">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#F5EFE6]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#EFE5D5]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-2xl font-semibold text-[#2D231E] tracking-tight leading-[1.1] sm:leading-[1.08] mb-8 mx-auto font-heading">
          See the Work Before You{" "}
          <span className="text-[#C2410C]">Book the Call.</span>
        </h2>

        <div className="w-fit max-w-full mx-auto bg-[#EFE8DD] p-1.5 rounded-lg flex items-center justify-start sm:justify-center gap-2 overflow-x-auto mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeTab === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#C2410C] text-[#FAF7F2] shadow-md shadow-stone-900/15 scale-[1.02]"
                    : "text-[#574940] hover:text-[#2D231E] hover:bg-white/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            isVerticalCategory ? "lg:grid-cols-4 max-w-5xl" : "lg:grid-cols-3 max-w-6xl"
          } gap-3 mx-auto mb-12 items-center justify-center`}
        >
          {currentCategoryData.videos.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden shadow-lg shadow-stone-900/10 hover:shadow-2xl transition-all duration-300 w-full ${
                isVerticalCategory ? "aspect-[9/16]" : "aspect-[16/9]"
              }`}
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
      </div>
    </section>
  );
}
