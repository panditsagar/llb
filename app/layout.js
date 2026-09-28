import { Manrope, Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "White-Label Backend Video Editing Team for Agencies & Creators",
  description: "Take on more video work without building a bigger editing team. White-label recurring editing, multiple formats, and scalable capacity.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${caveat.variable} ${plusJakarta.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-[#FBF9F5] text-slate-900 selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}


