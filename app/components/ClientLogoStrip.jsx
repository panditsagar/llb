"use client";

export default function ClientLogoStrip() {
  const clientLogos = [
    { src: "/logos/logo2.png", alt: "Client Logo 2" },
    { src: "/logos/logo3.png", alt: "Client Logo 3" },
    { src: "/logos/logo6.webp", alt: "Client Logo 10" },

    { src: "/logos/logo1.jpg", alt: "Client Logo 1" },
    { src: "/logos/logo4.png", alt: "Client Logo 7" },
    { src: "/logos/logo5.png", alt: "Client Logo 9" },
  ];

  return (
    <div className="w-full mt-10 sm:mt-14 pt-4 sm:pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#78695F] mb-6 sm:mb-8">
          Trusted By Leading Agencies, Creators & Growth Brands
        </p>

        {/* Client Logos Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8   ">
          {clientLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[120px] sm:max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
