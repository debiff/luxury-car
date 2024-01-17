"use client";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "@/app/ui/dashboard/slider/slider.module.css";

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
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);

  const handleNext = () => {
    if (counter !== slides.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="slide">
      {slides.map((slide, index) => (
        <div
          className={counter - 1 === index ? styles.show : styles.notShow}
          key={index}
        >
          <Image
            id={`slide-img-${slide.id.toString()}`}
            src={slide.src}
            width={slide.width}
            height={slide.height}
            className={`h-screen object-cover object-center absolute top-0 max-w-fit md:max-w-full md:left-0 ${slide.customClassName}`}
            alt={slide.alt}
          />
        </div>
      ))}
    </div>
  );
};
