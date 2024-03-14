"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import car1 from "@/public/ferrari-bg.jpeg";
import car2 from "@/public/g63-bg.jpeg";
import car3 from "@/public/huracan-bg.jpeg";
import car4 from "@/public/huracan-bg.jpeg";
import styles from "@/app/ui/navbar/MenuItems/menuItem.module.css";
import Link from "next/link";
import { epilogue, sora } from "@/app/ui/fonts";
import { Rating } from "@/app/ui/commons/rating";
import { Button } from "@/app/ui/commons/Button";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

const slides = [
  {
    src: car1.src,
    width: car1.width,
    height: car1.height
  },
  {
    src: car2.src,
    width: car2.width,
    height: car2.height
  },
  {
    src: car3.src,
    width: car3.width,
    height: car3.height
  },
  {
    src: car4.src,
    width: car4.width,
    height: car4.height
  }
];

const StatItem = ({
  value,
  title,
  measureUnit
}: {
  title: string;
  value: string;
  measureUnit: string;
}) => (
  <div
    className={`${sora.className}
    flex 
    items-start 
    flex-col
    pb-5
    pt-5
    border-b
    border-[#d9d6ce]
     
  `}
  >
    <div>
      <span
        className={` 
                        inline-flex 
                        text-4xl 
                        leading-none`}
      >
        <span>{value}</span>
      </span>
      <span className={"ml-1"}>{measureUnit}</span>
    </div>
    <span>{title}</span>
  </div>
);

const AvailableColors = ({ colors }: { colors: ReadonlyArray<string> }) => {
  return (
    <div
      className={`${sora.className}
    flex 
    items-start 
    flex-col
    pb-5
    pt-5
    border-b
    border-[#d9d6ce]
     
  `}
    >
      <div className={"flex flex-row gap-1"}>
        {/*  Circle div that represents input colors */}
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full`}
            style={{
              backgroundColor: color,
              ...(color === "#FFF" ? { border: "1px solid #000" } : {})
            }}
          ></div>
        ))}
      </div>
      <span>Available colors</span>
    </div>
  );
};

type Props = {
  params: {
    carId?: string;
  };
};
const Page = ({ params }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <main className="flex min-h-screen flex-col bg-white px-7">
        <section
          className={`
          ${sora.className}
          w-full 
          h-[76px] 
          text-left 
          flex 
          flex-row 
          justify-start 
          items-center 
          
          text-["#404040]
          `}
        >
          <Link className={`${styles.item}`} href={"/"}>
            {"Home"}
          </Link>
          <span className={`mx-[5px]`}>{"/"}</span>
          <Link className={`${styles.item}`} href={"/fleet?category=sport"}>
            {"Sport"}
          </Link>
          <span className={`mx-[5px]`}>{"/"}</span>
          <span>{"Porche Taycan Sport 6"}</span>
        </section>
        <section
          className={`${epilogue.className} mt-[25px] mb-[5px] text-[#0c1315]`}
        >
          <h4>Porche Taycan Sport 6</h4>
          <div className={"mb-[25px]"}>
            <Rating rating={5} maxRating={5} />
          </div>
        </section>
        <div>
          <h5 className={`${epilogue.className} text-[#0c1315] mb-4`}>
            Car performance
          </h5>
          <StatItem title={"0 to 100 km/h"} value={"0.3"} measureUnit={"s"} />
          <StatItem title={"Top speed"} value={"330"} measureUnit={"km/h"} />
          <StatItem title={"Engine Power"} value={"670"} measureUnit={"cv"} />
          <AvailableColors colors={["#000", "#FFF", "#F50", "#1139bb"]} />
        </div>
        <div className={"mt-[5px]"}>
          <Button variant={"secondary"}>BOOK YOUR CARS</Button>
        </div>
        <section className={`mt-[25px] mb-[66px] flex flex-col gap-6`}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={"w-full relative"}
              onClick={() => {
                setGalleryIndex(index);
                setOpen(true);
              }}
            >
              <Image
                className={"w-full"}
                src={slide.src}
                alt={"car image"}
                width={slide.width}
                height={slide.height}
              />
            </div>
          ))}
        </section>
        <section className={"pb-[50px]"}>
          <h2 className={`${epilogue.className} text-[#0c1315] text-4xl mb-1`}>
            Car overview
          </h2>
          <p className={`${sora.className} my-2.5 text-[#404040]`}>
            {
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo laborum consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla est pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
            }
          </p>
          <p className={`${sora.className} my-2.5 text-[#404040]`}>
            {
              "Sagittis molestie magnis etiam nullam tincidunt hendrerit enim ultricies phasellus, laoreet nascetur ornare torquent ultrices sapien sodales volutpat duis, accumsan ridiculus magna dictum cras gravida leo mus ex."
            }
          </p>
        </section>
        <section className={"mb-[50px]"}>
          <h2 className={`${epilogue.className} text-[#0c1315] text-4xl mb-1`}>
            Service Offered In This Vehicle{" "}
          </h2>
          <p className={`${sora.className} my-2.5 text-[#404040]`}>
            {
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo laborum consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla est pariatur."
            }
          </p>
          <ul
            className={`${sora.className} my-2.5 text-[#404040] gap-2 pb-[10px]`}
          >
            <li className={"mb-3"}>
              <div className={"flex flex-row gap-2"}>
                <CheckIcon width={19} />
                <span>{"Luxury Limousine Selectiont"}</span>
              </div>
            </li>
            <li className={"mb-3"}>
              <div className={"flex flex-row gap-2"}>
                <CheckIcon width={19} />
                <span>{"100% Luxurious Fleet"}</span>
              </div>
            </li>
            <li className={"mb-3"}>
              <div className={"flex flex-row gap-2"}>
                <CheckIcon width={19} />
                <span>{"Clean, Polite & Knowledgeable"}</span>
              </div>
            </li>
            <li className={"mb-3"}>
              <div className={"flex flex-row gap-2"}>
                <CheckIcon width={19} />
                <span>{"Fixed Price & Bonus System"}</span>
              </div>
            </li>
          </ul>
          <p className={`${sora.className} my-2.5 text-[#404040]`}>
            {
              "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo, cum quis laoreet luctus penatibus ligula auctor, consequat. Duis aute irure dolor in reprehenderit etiam sollicitudin nisl est purus."
            }
          </p>
        </section>
        <section className={"mb-[50px]"}>
          <h5 className={`${epilogue.className} text-[#0c1315] mb-4`}>
            Car details
          </h5>
          <table id={"details"}>
            <tbody>
              {[
                { title: "Category", value: "Supercar" },
                { title: "Displacement", value: "3.902 cc" },
                { title: "Top Speed", value: "330 Km/h" },
                { title: "Transmission", value: "Automatic" },
                { title: "GPS", value: "Yes" },
                { title: "Seat", value: "2" },
                { title: "Engine Power", value: "670 CV" },
                { title: "0-100 Km/h", value: "3.0 s" },
                { title: "Tank", value: "78 L" },
                { title: "Minimum Age", value: "35" }
              ].map((detail, index) => (
                <tr key={index} className={"border-b border-[#d9d6ce]"}>
                  <td className={"pb-5 pt-5"}>
                    <h6 className={"pr-20 font-extrabold"}>{detail.title}</h6>
                  </td>
                  <td className={"pb-2 pt-2"}>
                    <h6>{detail.value}</h6>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className={"mb-[30px]"}>
          <h5 className={`${epilogue.className} text-[#0c1315] mb-4`}>
            Prices
          </h5>
          <table id={"priceTable"}>
            <thead className={"text-left"}>
              <tr>
                <th></th>
                <th>Low season</th>
                <th>High season</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  title: "Daily",
                  lowSeason: "Supercar",
                  highSeason: "Supercar"
                },
                {
                  title: "Weekend",
                  lowSeason: "Supercar",
                  highSeason: "Supercar"
                },
                {
                  title: "Weekly",
                  lowSeason: "Supercar",
                  highSeason: "Supercar"
                }
              ].map((detail, index) => (
                <tr key={index} className={"border-b border-[#d9d6ce]"}>
                  <td className={"pb-5 pt-5"}>
                    <h6 className={"pr-20 font-extrabold"}>{detail.title}</h6>
                  </td>
                  <td className={"pb-2 pt-2"}>
                    <h6>{detail.lowSeason}</h6>
                  </td>
                  <td className={"pb-2 pt-2"}>
                    <h6>{detail.highSeason}</h6>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <div className={"mb-[50px]"}>
          <Button variant={"secondary"} onClick={() => setIsModalOpen(true)}>
            BOOK YOUR CARS
          </Button>
        </div>

        <Lightbox
          open={open}
          close={() => setIsModalOpen(false)}
          slides={slides}
          index={galleryIndex}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        />
      </main>
      {isModalOpen && (
        <>
          <div
            className={
              "fixed h-full w-full bg-black top-0 left-0 opacity-40 z-50"
            }
          ></div>
          <div
            className={`
              fixed 
              bg-[#0c1315] 
              w-[86%] 
              max-h-[calc(100%-60px)] 
              p-[30px] 
              overflow-y-scroll
              top-1/2
              left-1/2
              h-full
              z-[100]
              translate-x-[-50%]
              translate-y-[-50%]
            `}
          >
            <div
              className={`
              absolute
              top-0
              right-0
              w-[47px]
              h-[47px]
              bg-[#0c1315]
              text-white
              cursor-pointer
              flex
              items-center
              justify-center
            `}
              onClick={() => setIsModalOpen(false)}
            >
              <XMarkIcon width={"24px"} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
