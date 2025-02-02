import Image from "next/image";
import { motion } from "framer-motion";
import { epilogue, sora } from "@/app/ui/fonts";
import { Cars, Category, category } from "@/app/lib/placeholder-car";
import Link from "next/link";

const CategoryContentMap = new Map<
  Category,
  { label: string; image: string; description: string; fromPrice: string }
>([
  [
    "Luxury",
    {
      label: "Luxury",
      image: "/preview/luxury.webp",
      description:
        "Indulge in opulence and prestige. Elevate your journey with unmatched comfort, style, and performance.",
      fromPrice: Math.min(
        ...Object.values(
          Cars.filter(c => c.category.includes("Luxury")).sort(
            (a, b) =>
              Math.min(...Object.values(a.prices)) -
              Math.min(...Object.values(b.prices))
          )[0].prices
        )
      ).toString()
    }
  ],
  [
    "Sport",
    {
      label: "Sport",
      image: "/preview/sport.webp",
      description:
        "Experience the thrill of precision engineering and dynamic performance. Embrace the road with unparalleled agility and power.",
      fromPrice: Math.min(
        ...Object.values(
          Cars.filter(c => c.category.includes("Sport")).sort(
            (a, b) =>
              Math.min(...Object.values(a.prices)) -
              Math.min(...Object.values(b.prices))
          )[0].prices
        )
      ).toString()
    }
  ],
  [
    "Suv",
    {
      label: "SUV",
      image: "/preview/suv.webp",
      description:
        "Conquer any terrain in comfort and style. Versatile, spacious, and ready for adventure wherever you roam.",
      fromPrice: Math.min(
        ...Object.values(
          Cars.filter(c => c.category.includes("Suv")).sort(
            (a, b) =>
              Math.min(...Object.values(a.prices)) -
              Math.min(...Object.values(b.prices))
          )[0].prices
        )
      ).toString()
    }
  ],
  [
    "Van",
    {
      label: "Luxury Van",
      image: "/preview/van.webp",
      description:
        "Effortless versatility meets unparalleled comfort. Travel in spacious luxury, whether for business or pleasure.",
      fromPrice: Math.min(
        ...Object.values(
          Cars.filter(c => c.category.includes("Van")).sort(
            (a, b) =>
              Math.min(...Object.values(a.prices)) -
              Math.min(...Object.values(b.prices))
          )[0].prices
        )
      ).toString()
    }
  ],
  [
    "Executive",
    {
      label: "Executive",
      image: "/preview/executive.webp",
      description:
        "Sleek sophistication meets unparalleled comfort. Experience the pinnacle of luxury and refinement on every drive.",
      fromPrice: Math.min(
        ...Object.values(
          Cars.filter(c => c.category.includes("Executive")).sort(
            (a, b) =>
              Math.min(...Object.values(a.prices)) -
              Math.min(...Object.values(b.prices))
          )[0].prices
        )
      ).toString()
    }
  ],
  [
    "Supercar",
    {
      label: "Supercars",
      image: "/preview/supercar.webp",
      description:
        "Unleash adrenaline with breathtaking speed and unparalleled engineering. Elevate every moment with unmatched performance.",
      fromPrice: Math.min(
        ...Object.values(
          Cars.filter(c => c.category.includes("Supercar")).sort(
            (a, b) =>
              Math.min(...Object.values(a.prices)) -
              Math.min(...Object.values(b.prices))
          )[0].prices
        )
      ).toString()
    }
  ]
]);

const CategoryBox = ({ category }: { category: Category }) => {
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

  const categoryContent = CategoryContentMap.get(category);
  if (!categoryContent) {
    return null;
  }

  return (
    <div className={"mb-14 md:mb-auto"}>
      <Link href={`/fleet?category=${category}`}>
        <div className={"relative"}>
          <Image
            src={categoryContent.image}
            alt={category}
            width={800}
            height={1027}
          />

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
                    €
                  </span>
                  <span>{categoryContent.fromPrice}</span>
                </span>
                <span
                  className={`
                    text-[#bfa37c]
                    before:content-['/']
                    before:mx-1
                    `}
                >
                  day
                </span>
              </motion.div>
              <motion.div
                variants={descriptionMotion}
                className={`
                      mt-8
                      text-[#a6a6a6]
                    `}
              >
                {categoryContent.description}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Link>
      <div className={`${epilogue.className} mt-8 flex flex-col items-center`}>
        <a href={"#"}>
          <h5 className={"text-white"}>{category}</h5>
        </a>
      </div>
    </div>
  );
};

export const CarPreview = () => {
  const orderedCategories = category.slice().sort();
  return (
    <section
      className={
        "pt-[98px] md:pt-[109px] pb-[106px] px-8 md:px-16 bg-[#141a1c]"
      }
    >
      <div className="hidden md:grid grid-cols-3 gap-x-7 gap-y-16">
        {orderedCategories.map((category, id) => (
          <CategoryBox key={id} category={category} />
        ))}
      </div>
      <div className={"md:hidden flex flex-col"}>
        {orderedCategories.map((category, id) => (
          <CategoryBox key={id} category={category} />
        ))}
      </div>
    </section>
  );
};
