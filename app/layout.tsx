"use client";
import "@/app/ui/global.css";
import { sora } from "@/app/ui/fonts";
import { Navbar } from "@/app/ui/dashboard/navbar";
import { Slider } from "@/app/ui/dashboard/slider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} 
                    antialiased 
                    bg-blue-400 
                    text-base 
                    leading-7 
                    text-gray-400 
                    font-normal
                    `}
      >
        <Navbar />
        <Slider />
        {children}
      </body>
    </html>
  );
}
