"use client";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "@/app/ui/home/slider/slider.module.css";
import { epilogue } from "@/app/ui/fonts";
import { Button } from "@/app/ui/commons/Button";

const slides = [
  {
    id: 1,
    src: "/huracan-bg.jpeg",
    width: 1920,
    height: 900,
    alt: "huracan",
    customClassName: "left-[-450px]"
  },
  {
    id: 2,
    src: "/ferrari-bg.jpeg",
    width: 1920,
    height: 1080,
    alt: "ferrari",
    customClassName: "left-[-405px]"
  },
  {
    id: 3,
    src: "/urus-bg.jpeg",
    width: 1920,
    height: 1080,
    alt: "urus",
    customClassName: "left-[-425px] "
  },
  {
    id: 4,
    src: "/g63-bg.jpeg",
    width: 1920,
    height: 1065,
    alt: "g63",
    customClassName: "left-[-415px]"
  }
];
export const Slider = () => {
  return (
    <div className={"relative mt-[-69px] md:mt-[-77px] h-screen"}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true
        }}
        loop={true}
        className={"h-screen"}
        direction={"horizontal"}
        watchSlidesProgress
        allowTouchMove={false}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} className={"overflow-hidden absolute"}>
            <Image
              id={`slide-img-${slide.id.toString()}`}
              src={slide.src}
              width={slide.width}
              height={slide.height}
              className={`h-screen object-cover object-center absolute top-0 max-w-fit md:max-w-full md:left-0 ${slide.customClassName}`}
              alt={slide.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${epilogue.className} absolute bottom-[15%] left-[5%] text-white max-w-[45%] md:max-w-[40%] z-40`}
      >
        <h2>Need to Rent a Luxury Car? Send A Request</h2>
        <Button variant={"primary"}>SEND</Button>
      </div>
    </div>
  );
};
