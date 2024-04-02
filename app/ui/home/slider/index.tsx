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
import { useState } from "react";
import { BookModalContent } from "@/app/ui/commons/bookModalContent";

const slides = [
  {
    id: 1,
    src: "/slider/3.webp",
    width: 1920,
    height: 1080,
    alt: "huracan",
    customClassName: "left-[-150px] "
  },
  {
    id: 2,
    src: "/slider/1.webp",
    width: 1350,
    height: 900,
    alt: "ferrari",
    customClassName: "left-[-450px] md:w-full"
  },
  {
    id: 3,
    src: "/slider/4.webp",
    width: 1920,
    height: 1080,
    alt: "range sport",
    customClassName: "left-[-700px]"
  },
  {
    id: 4,
    src: "/slider/2.webp",
    width: 1920,
    height: 1080,
    alt: "g63",
    customClassName: "left-[-350px]"
  }
];
export const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
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
          className={`${epilogue.className} absolute bottom-[15%] md:bottom-[5%] left-[5%] text-white max-w-[45%] md:max-w-[40%] z-40`}
        >
          <h2>Elevate Your Journey.</h2>
          <h2>Rent Luxury Today.</h2>
          <Button variant={"primary"} onClick={() => setIsModalOpen(true)}>
            BOOK
          </Button>
        </div>
      </div>
      {isModalOpen && <BookModalContent setIsModalOpen={setIsModalOpen} />}
    </>
  );
};
