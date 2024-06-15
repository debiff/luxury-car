import "@/app/ui/global.css";
import { sora } from "@/app/ui/fonts";
import { Navbar } from "@/app/ui/navbar";
import { Footer } from "@/app/ui/footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"overflow-x-hidden"}>
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="110a7a33-f58a-4ce5-94da-336ca3aa1793"
          type="text/javascript"
        />
      </head>
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
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
