import Image from "next/image";
import { motion } from "framer-motion";
import { epilogue, sora } from "@/app/ui/fonts";
import { Rating } from "@/app/ui/commons/rating";
import { Cars, Car } from "@/app/lib/placeholder-car";

const Car = (car: Car) => {
  const backgroundMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.4, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };
  const textMotion = {
    rest: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: "easeOut"
      }
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: "easeIn"
      }
    }
  };

  const categoryMotion = {
    ...textMotion,
    hover: {
      ...textMotion.hover,
      delay: 0.1
    }
  };

  const priceMotion = {
    ...textMotion,
    hover: {
      ...textMotion.hover,
      delay: 0.2
    }
  };

  const descriptionMotion = {
    ...textMotion,
    hover: {
      ...textMotion.hover,
      delay: 0.3
    }
  };

  return (
    <div key={car.id} className={"mb-14 md:mb-auto"}>
      <a href={"#"}>
        <div className={"relative"}>
          {car.imagePreview && (
            <Image
              src={car.imagePreview}
              alt={car.name}
              width={800}
              height={1027}
            />
          )}
          <motion.div initial="rest" whileHover="hover" animate="rest">
            <motion.div
              className="
                box
                w-full
                h-full
                absolute
                bg-slate-
                200
                py-8
                px-[20%]
                flex
                flex-col
                justify-center
                top-0
                left-0
                bg-[#0c1315]
                bg-opacity-[.85]
                "
              variants={backgroundMotion}
            >
              <motion.h4
                className={`${epilogue.className} text-white`}
                variants={categoryMotion}
              >
                {car.category}
              </motion.h4>
              <motion.div
                className={`${sora.className} flex items-end`}
                variants={priceMotion}
              >
                <span
                  className={`
                        text-[#a6a6a6] 
                        text-base 
                        leading-7 
                        font-normal`}
                >
                  from
                </span>
                <span
                  className={`
                        text-[#bfa37c] 
                        inline-flex 
                        text-4xl 
                        leading-none`}
                >
                  <span
                    className={`
                        self-start
                        pt-1
                        text-xl
                        leading-none
                        `}
                  >
                    $
                  </span>
                  <span>180</span>
                </span>
                <span
                  className={`
                    text-[#bfa37c]
                    before:content-['/']
                    before:mx-1
                    `}
                >
                  hour
                </span>
              </motion.div>
              <motion.div
                variants={descriptionMotion}
                className={`
                      mt-8
                      text-[#a6a6a6]
                    `}
              >
                {car.descriptionShort}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </a>
      <div className={`${epilogue.className} mt-8 flex flex-col items-center`}>
        <a href={"#"}>
          <h5 className={"text-white"}>{car.name}</h5>
        </a>
        <Rating rating={5} maxRating={5} />
      </div>
    </div>
  );
};

export const CarPreview = () => {
  return (
    <section
      className={
        "pt-[98px] md:pt-[109px] pb-[106px] px-8 md:px-16 bg-[#141a1c]"
      }
    >
      <div className="hidden md:grid grid-cols-3 gap-x-7 gap-y-16">
        {Cars.filter(c => c.previewCar === true).map(car => (
          <Car key={car.id} {...car} />
        ))}
      </div>
      <div className={"md:hidden flex flex-col"}>
        {Cars.filter(c => c.previewCar === true).map(car => (
          <Car key={car.id} {...car} />
        ))}
      </div>
    </section>
  );
};
