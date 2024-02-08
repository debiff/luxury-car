import "@/app/ui/global.css";
import { sora } from "@/app/ui/fonts";
import { Navbar } from "@/app/ui/navbar";
import { Footer } from "@/app/ui/footer";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"overflow-x-hidden"}>
      <body
        className={`${sora.className} 
                    antialiased 
                    bg-blue-400 
                    text-base 
                    leading-7 
                    text-gray-400 
                    font-normal
                    overflow-x-hidden
                    `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
