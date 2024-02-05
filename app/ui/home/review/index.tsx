import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { epilogue, inconsolata, sora } from "@/app/ui/fonts";
import { Rating } from "@/app/ui/commons/rating";

const reviews = [
  {
    id: "1",
    title: "Clean & Comfortable",
    description:
      "Habitant morbi tristique senectus et du amon ut venenatis tellus in metus vulpute ate augue interdum velit euismod in pel lent sque mauris pharetra et ultrices neq ue te amet cursus sit amet dictum sit ami justo arcu dictu.",
    author: "Gloria Foles",
    location: "Chicago ",
    rating: 4.5
  },
  {
    id: "2",
    title: "Best Price Assured",
    description:
      "Pretium fusce id velit ut consectetur ada pisa ing elit pellentesque habitant morbi tristiqe senectus.",
    author: "Madison Edwar",
    location: "New York",
    rating: 5
  },
  {
    id: "3",
    title: "Smooth Car Transport",
    description:
      "In hac habitasse platea dictu imst vesti ulumon rhoncus est pellentesqu ini ultriceso in iaculis nunc sed augue lac imperdiet dui accumsan sit a.",
    author: "Eloin Malone",
    location: "Auburn ",
    rating: 5
  },
  {
    id: "1",
    title: "Clean & Comfortable",
    description:
      "Habitant morbi tristique senectus et du amon ut venenatis tellus in metus vulpute ate augue interdum velit euismod in pel lent sque mauris pharetra et ultrices neq ue te amet cursus sit amet dictum sit ami justo arcu dictu.",
    author: "Gloria Foles",
    location: "Chicago ",
    rating: 4.5
  }
];

export const Review = () => {
  return (
    <section className={"pt-[101px] px-16"}>
      <div className={"pb-[101px]"}>
        <h1 className={`${epilogue.className} text-white`}>
          {"We trive to meet the needs"} <br />
          {"of our clients and we value their"} <br />
          {"opinions about our work "}
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        loop={true}
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <div
              className={`
                relative
                h-[291px] 
                pl-14
                before:top-[5px] 
                before:h-[calc(100%-14px)] 
                before:bg-[#262d33] 
                before:absolute 
                before:content-[""]
                before:w-[1px]
                before:left-0
                `}
            >
              <h5 className={`${epilogue.className} text-white mb-2.5`}>
                {review.title}
              </h5>
              <div className={"mb-7"}>
                <Rating rating={review.rating} maxRating={5} />
              </div>
              <p className={`${sora.className} text-[#a6a6a6] text-base mb-3`}>
                {review.description}
              </p>
              <div className={"flex"}>
                <span
                  className={`${inconsolata.className} text-[#bfa37c] text-sm uppercase tracking-[.25em] leading-6`}
                >
                  {review.author}
                </span>
                <span
                  className={`${inconsolata.className} text-[#bfa37c] text-sm uppercase tracking-[.25em] leading-6 after:content-[","] after:mr-1.5`}
                ></span>
                <span
                  className={`${inconsolata.className} text-[#bfa37c] text-sm uppercase tracking-[.25em] leading-6`}
                >
                  {review.location}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
