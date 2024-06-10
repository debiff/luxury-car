"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import styles from "@/app/ui/navbar/MenuItems/menuItem.module.css";
import Link from "next/link";
import { epilogue, sora } from "@/app/ui/fonts";
import { Rating } from "@/app/ui/commons/rating";
import { Button } from "@/app/ui/commons/Button";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Cars } from "@/app/lib/placeholder-car";
import z from "zod";
import { BookModalContent } from "@/app/ui/commons/bookModalContent";

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
    carId?: number;
  };
};

const numberValid = z.coerce.number().min(1);
const Page = ({ params }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const maybeCarId = numberValid.safeParse(params.carId);

  if (!maybeCarId.success) {
    return null;
  }

  const car = Cars[maybeCarId.data - 1];

  if (!car) {
    return null;
  }

  return (
    <>
      <main className="flex min-h-screen flex-col bg-white px-7 md:px-20">
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
          md:justify-end

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
        <div className={"md:flex md:flex-row-reverse gap-24 "}>
          <section
            className={`${epilogue.className} mt-[25px] mb-[5px] text-[#0c1315] md:w-full`}
          >
            <h4>{`${car.make} ${car.name}`}</h4>
            <div className={"mb-[25px]"}>
              <Rating rating={5} maxRating={5} />
            </div>
            <div>
              <h5 className={`${epilogue.className} text-[#0c1315] mb-4`}>
                Car performance
              </h5>
              <StatItem
                title={"0 to 100 km/h"}
                value={car["0to100"].toString()}
                measureUnit={"s"}
              />
              <StatItem
                title={"Top speed"}
                value={car.maxSpeed.toString()}
                measureUnit={"km/h"}
              />
              <StatItem
                title={"Engine Power"}
                value={car.enginePower.toString()}
                measureUnit={"cv"}
              />
              <AvailableColors colors={car.availableColors} />
            </div>
            <div className={"mt-[5px]"}>
              <Button
                variant={"secondary"}
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                BOOK YOUR CARS
              </Button>
            </div>
          </section>

          <div>
            <section
              className={`mt-[25px] mb-[66px] flex flex-col gap-6 md:hidden`}
            >
              {car.gallery.map((slide, index) => (
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
            <section className={`mt-[25px] mb-[66px] hidden md:block`}>
              <div
                className={"w-full relative mb-5 cursor-pointer"}
                onClick={() => {
                  setGalleryIndex(0);
                  setOpen(true);
                }}
              >
                <Image
                  className={"w-full max-h-[750px] object-cover"}
                  src={car.gallery[0].src}
                  alt={"car image"}
                  width={car.gallery[0].width}
                  height={car.gallery[0].height}
                />
              </div>
              <div className={"flex flex-row gap-5"}>
                {car.gallery.slice(1).map((slide, index) => (
                  <div
                    key={index}
                    className={"w-full relative cursor-pointer max-h-[200px]"}
                    onClick={() => {
                      setGalleryIndex(index + 1);
                      setOpen(true);
                    }}
                  >
                    <Image
                      className={"w-full h-full object-cover"}
                      src={slide.src}
                      alt={"car image"}
                      width={slide.width}
                      height={slide.height}
                    />
                  </div>
                ))}
              </div>
            </section>
            <section className={"pb-[50px]"}>
              <h2
                className={`${epilogue.className} text-[#0c1315] text-4xl mb-1`}
              >
                Car overview
              </h2>
              {car.description ? (
                car.description
              ) : (
                <>
                  <p className={`${sora.className} my-2.5 text-[#404040]`}>
                    {
                      "Discover the epitome of luxury and performance with the Mercedes SL 63. This iconic roadster seamlessly blends breathtaking design with formidable power under the hood. Crafted with precision and finesse, the SL 63 boasts a sleek exterior that commands attention on every street. Its potent engine delivers an exhilarating driving experience, effortlessly merging performance and comfort. "
                    }
                  </p>
                  <p className={`${sora.className} my-2.5 text-[#404040]`}>
                    {
                      "Step inside the opulent cabin, where cutting-edge technology meets unparalleled elegance, providing a sanctuary for drivers who demand nothing but the best. Elevate your driving experience with the Mercedes SL 63."
                    }
                  </p>
                </>
              )}
            </section>
            <section className={"mb-[50px]"}>
              <h2
                className={`${epilogue.className} text-[#0c1315] text-4xl mb-1`}
              >
                Services Offered with This Vehicle
              </h2>
              <p className={`${sora.className} my-2.5 text-[#404040]`}>
                {
                  "Indulge in an unparalleled luxury car rental experience with our exclusive services. We go above and beyond to ensure that your journey is as smooth and enjoyable as possible, offering a range of premium services designed to cater to your every need."
                }
              </p>
              <ul
                className={`${sora.className} my-2.5 text-[#404040] gap-2 pb-[10px]`}
              >
                <li className={"mb-3"}>
                  <div className={"flex flex-row gap-2"}>
                    <CheckIcon width={19} />
                    <span>
                      {
                        "Professional delivery and pick-up service at your specified location"
                      }
                    </span>
                  </div>
                </li>
                <li className={"mb-3"}>
                  <div className={"flex flex-row gap-2"}>
                    <CheckIcon width={19} />
                    <span>
                      {
                        "Complimentary professional car wash before every rental"
                      }
                    </span>
                  </div>
                </li>
                <li className={"mb-3"}>
                  <div className={"flex flex-row gap-2"}>
                    <CheckIcon width={19} />
                    <span>{"24/7 roadside assistance"}</span>
                  </div>
                </li>
                <li className={"mb-3"}>
                  <div className={"flex flex-row gap-2"}>
                    <CheckIcon width={19} />
                    <span>{"Comprehensive insurance coverage"}</span>
                  </div>
                </li>
                <li className={"mb-3"}>
                  <div className={"flex flex-row gap-2"}>
                    <CheckIcon width={19} />
                    <span>{"Personalized concierge service"}</span>
                  </div>
                </li>
                <li className={"mb-3"}>
                  <div className={"flex flex-row gap-2"}>
                    <CheckIcon width={19} />
                    <span>{"GPS navigation system"}</span>
                  </div>
                </li>
                <li className={"mb-3"}>
                  <div className={"flex flex-row gap-2"}>
                    <CheckIcon width={19} />
                    <span>{"Child seats available upon request"}</span>
                  </div>
                </li>
              </ul>
              <p className={`${sora.className} my-2.5 text-[#404040]`}>
                {
                  "Our commitment to excellence ensures that every aspect of your rental experience is meticulously handled. Whether you need transportation for a special event, a business trip, or a leisurely drive, we provide the highest standards of service and luxury. Trust us to make your journey extraordinary."
                }
              </p>
            </section>

            <section className={"mb-[50px]"}>
              <h5 className={`${epilogue.className} text-[#0c1315] mb-4`}>
                Car details
              </h5>
              <div className={"flex flex-col md:flex-row md:gap-16"}>
                <table id={"details"}>
                  <tbody>
                    {[
                      { title: "Category", value: "Supercar" },
                      { title: "Displacement", value: "3.902 cc" },
                      { title: "Top Speed", value: "330 Km/h" },
                      { title: "Transmission", value: "Automatic" },
                      { title: "GPS", value: "Yes" }
                    ].map((detail, index) => (
                      <tr key={index} className={"border-b border-[#d9d6ce]"}>
                        <td className={"pb-5 pt-5 w-2/3"}>
                          <h6 className={"pr-20 font-extrabold"}>
                            {detail.title}
                          </h6>
                        </td>
                        <td className={"pb-2 pt-2"}>
                          <h6>{detail.value}</h6>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table>
                  <tbody>
                    {[
                      { title: "Seat", value: "2" },
                      { title: "Engine Power", value: "670 CV" },
                      { title: "0-100 Km/h", value: "3.0 s" },
                      { title: "Tank", value: "78 L" },
                      { title: "Minimum Age", value: "35" }
                    ].map((detail, index) => (
                      <tr key={index} className={"border-b border-[#d9d6ce]"}>
                        <td className={"pb-5 pt-5 w-2/3"}>
                          <h6 className={"pr-20 font-extrabold"}>
                            {detail.title}
                          </h6>
                        </td>
                        <td className={"pb-2 pt-2"}>
                          <h6>{detail.value}</h6>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className={"mb-[30px]"}>
              <h5 className={`${epilogue.className} text-[#0c1315] mb-4`}>
                Prices
              </h5>
              <table id={"priceTable"}>
                <thead className={"text-left"}>
                  <tr>
                    <th></th>
                    <th className={" md:pr-10"}>Low season</th>
                    <th>High season</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      title: "Daily",
                      lowSeason: "700 €",
                      highSeason: "800 €"
                    },
                    {
                      title: "Weekend",
                      lowSeason: "900 €",
                      highSeason: "1100 €"
                    },
                    {
                      title: "Weekly",
                      lowSeason: "600 €",
                      highSeason: "700 €"
                    }
                  ].map((detail, index) => (
                    <tr key={index} className={"border-b border-[#d9d6ce]"}>
                      <td className={"pb-5 pt-5"}>
                        <h6 className={"pr-20 font-extrabold"}>
                          {detail.title}
                        </h6>
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
              <Button
                variant={"secondary"}
                onClick={() => setIsModalOpen(true)}
              >
                BOOK YOUR CARS
              </Button>
            </div>
          </div>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={car.gallery}
          index={galleryIndex}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        />
      </main>
      {isModalOpen && (
        <BookModalContent setIsModalOpen={setIsModalOpen} carId={car.id} />
      )}
    </>
  );
};

export default Page;
