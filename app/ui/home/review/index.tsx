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
    title: "Top-notch Luxury Ride",
    description:
      "From start to finish, this rental service offers unmatched luxury. Clean, stylish interiors and a smooth ride make it a must-try.",
    author: "Luca Visentin",
    location: "Padova",
    rating: 5
  },
  {
    id: "2",
    title: "Elegant Wheels",
    description:
      "Experience sophistication and convenience with their modern fleet, combining style and functionality seamlessly.",
    author: "Sofia Müller",
    location: "Berlin",
    rating: 5
  },
  {
    id: "3",
    title: "Consistently Excellent",
    description:
      "This rental service consistently goes above and beyond, from customer service to vehicle quality. Highly recommended.",
    author: "Ahmed Al-Mansoori",
    location: "Dubai",
    rating: 5
  },
  {
    id: "4",
    title: "Luxury Redefined",
    description:
      "Indulge in unparalleled luxury with attention to detail in service and vehicle selection.",
    author: "Maria Garcia",
    location: "Madrid",
    rating: 5
  },
  {
    id: "5",
    title: "Elegant and Powerful Rides",
    description:
      "Enjoy elegance and performance with their impressive high-performance vehicles.",
    author: "Emily Johnson",
    location: "New York City",
    rating: 4.5
  },
  {
    id: "6",
    title: "Luxury Travel at Its Best",
    description:
      "Elevate your journey with seamless booking and first-class amenities for the ultimate luxury experience.",
    author: "Michael Thompson",
    location: "London",
    rating: 5
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
          {"We meet our clients' needs"} <br />
          {"and value their opinions"} <br />
          {"about our work. "}
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
