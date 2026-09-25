import { Bricolage_Grotesque, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

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

export const metadata = {
  title: "White-Label Backend Video Editing Team for Agencies & Creators",
  description: "Take on more video work without building a bigger editing team. White-label recurring editing, multiple formats, and scalable capacity.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${manrope.variable} ${caveat.variable} h-full antialiased font-sans`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=manrope@300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBF9F5] text-slate-900 selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}


