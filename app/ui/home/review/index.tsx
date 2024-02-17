import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { epilogue, inconsolata, sora } from "@/app/ui/fonts";
import { Rating } from "@/app/ui/commons/rating";

type Review = {
  id: string;
  title: string;
  description: string;
  author: string;
  location: string;
  rating: number;
};
const reviews: ReadonlyArray<Review> = [
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

const Review = (review: Review) => (
  <div
    className={`
                relative
                h-[291px] 
                md:pl-14
                md:before:top-[5px] 
                md:before:h-[calc(100%-14px)] 
                md:before:bg-[#262d33] 
                md:before:absolute 
                md:before:content-[""]
                md:before:w-[1px]
                md:before:left-0
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
);
export const Reviews = () => {
  return (
    <section className={"pt-[101px] pl-8 pr-4 md:px-16"}>
      <div className={"pb-[101px]"}>
        <h1
          className={`${epilogue.className} text-white text-[40px] md:text-[50px]`}
        >
          {"We trive to meet the needs"} <br />
          {"of our clients and we value their"} <br />
          {"opinions about our work "}
        </h1>
      </div>
      <div className={"hidden md:block"}>
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
              <Review key={review.id} {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={"block md:hidden"}>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop={true}
        >
          {reviews.map(review => (
            <SwiperSlide key={review.id}>
              <Review key={review.id} {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
