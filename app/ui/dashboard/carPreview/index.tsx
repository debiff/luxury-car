import Image from "next/image";
import { motion } from "framer-motion";
import { epilogue, sora } from "@/app/ui/fonts";

const cars = [
  {
    id: 1,
    name: "Mercedes Benz S-Class",
    image: "/vehicle-list-1.jpeg",
    price: 100,
    category: "Luxury",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
  },
  {
    id: 2,
    name: "Mercedes Benz S-Class",
    image: "/vehicle-list-2.jpeg",
    price: 100,
    category: "Luxury",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
  },
  {
    id: 3,
    name: "Mercedes Benz S-Class",
    image: "/vehicle-list-3.jpeg",
    price: 100,
    category: "Luxury",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
  },
  {
    id: 1,
    name: "Mercedes Benz S-Class",
    image: "/vehicle-list-1.jpeg",
    price: 100,
    category: "Luxury",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
  },
  {
    id: 2,
    name: "Mercedes Benz S-Class",
    image: "/vehicle-list-2.jpeg",
    price: 100,
    category: "Luxury",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
  },
  {
    id: 3,
    name: "Mercedes Benz S-Class",
    image: "/vehicle-list-3.jpeg",
    price: 100,
    category: "Luxury",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
  }
];
export const CarPreview = () => {
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
    <section className={"pt-[109px] pb-[106px] px-16"}>
      <div className="grid grid-cols-3 gap-x-7 gap-y-16">
        {cars.map(car => (
          <a href={"#"} key={car.id}>
            <div key={car.id} className={"relative"}>
              <Image src={car.image} alt={car.name} width={800} height={1027} />
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
                    {car.description}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
