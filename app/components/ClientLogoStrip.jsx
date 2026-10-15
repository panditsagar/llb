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
        <div className="grid grid-cols-3 items-center gap-x-5 gap-y-6 sm:grid-cols-6 sm:gap-x-6 lg:grid-cols-[repeat(6,minmax(0,1fr))_auto]">
          {clientLogos.map((logo) => (
            <div key={logo.src} className="flex h-12 min-w-0 items-center justify-center sm:h-14 lg:h-16">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-auto max-h-10 w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:max-h-12 lg:max-h-14"
              />
            </div>
          ))}
          <span className="col-span-3 inline-flex items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full   border-[#E5D9CB] bg-[#FFFFFF]/80 px-5 py-2.5 sm:col-span-6 lg:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-[#C2410C]">70+</span>
            <span className="text-md font-medium text-[#78695F]">more</span>
          </span>
        </div>
      </div>
    </div>
  );
}
