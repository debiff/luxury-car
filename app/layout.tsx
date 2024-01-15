// "use client";
import "@/app/ui/global.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { sora } from "@/app/ui/fonts";
import { Navbar } from "@/app/ui/dashboard/navbar";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
import { Slider } from "@/app/ui/dashboard/slider";

// const Slider = () => {
//   const slides = [
//     {
//       id: 1,
//       src: "/huracan-bg.jpeg",
//       width: 1920,
//       height: 900,
//       alt: "huracan",
//       customClassName: "left-[-450px]"
//     },
//     {
//       id: 2,
//       src: "/ferrari-bg.jpeg",
//       width: 1920,
//       height: 1080,
//       alt: "ferrari",
//       customClassName: "left-[-405px]"
//     },
//     {
//       id: 3,
//       src: "/urus-bg.jpeg",
//       width: 1920,
//       height: 1080,
//       alt: "urus",
//       customClassName: "left-[-425px] "
//     },
//     {
//       id: 4,
//       src: "/g63-bg.jpeg",
//       width: 1920,
//       height: 1065,
//       alt: "g63",
//       customClassName: "left-[-415px]"
//     }
//   ];
//   return (
//     <div className={"relative mt-[-69px] md:mt-[-77px] h-screen"}>
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect={"fade"}
//         speed={2000}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           waitForTransition: true
//         }}
//         loop={true}
//         className={"h-screen"}
//         direction={"horizontal"}
//         watchSlidesProgress
//         allowTouchMove={false}
//       >
//         {slides.map(slide => (
//           <SwiperSlide key={slide.id} className={"overflow-hidden absolute"}>
//             <Image
//               id={`slide-img-${slide.id.toString()}`}
//               src={slide.src}
//               width={slide.width}
//               height={slide.height}
//               className={`h-screen object-cover object-center absolute top-0 max-w-fit md:max-w-full md:left-0 ${slide.customClassName}`}
//               alt={slide.alt}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };
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
