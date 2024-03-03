"use client";
import Image from "next/image";
import { elegantIcons, epilogue, inconsolata, sora } from "@/app/ui/fonts";
import { useState } from "react";
import { motion } from "framer-motion";
import { SelectBox } from "@/app/ui/commons/SelectBox";
import { Cars } from "@/app/lib/placeholder-car";
import { Button } from "@/app/ui/commons/Button";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className={"text-center h-[400px] relative"}>
        <Image
          src="/fleet-header.jpeg"
          fill
          objectFit="cover"
          quality={100}
          alt={"fleet header image"}
        />
        <div className={"h-full flex flex-col justify-center"}>
          <div className={"z-50"}>
            <h1 className={`${epilogue.className} text-white text-[40px]`}>
              Our fleet
            </h1>
          </div>
        </div>
      </div>
      <section className={"pt-24 pb-12"}>
        <div
          className={
            "flex flex-col md:flex-row md:justify-between md:items-center"
          }
        >
          <div className={"px-10 mb-3"}>
            <h2
              className={`${epilogue.className} text-[#0c1315] text-[32px] my-6`}
            >
              {"Find your car"}
            </h2>
          </div>
          <div className={"md:flex md:flex-row"}>
            <SelectBox
              defaultOption={"Vehicle type"}
              options={[
                { id: "1", name: "Sport" },
                { id: "2", name: "SUV" },
                { id: "4", name: "Truck" },
                { id: "5", name: "Van" }
              ]}
              onSelect={() => true}
            />
            <SelectBox
              defaultOption={"Vehicle make"}
              options={[
                { id: "1", name: "BMW" },
                { id: "2", name: "Audi" },
                { id: "4", name: "Mercedes" },
                { id: "5", name: "Porsche" }
              ]}
              onSelect={() => true}
            />
          </div>
        </div>
      </section>
      <section className={"w-full px-10 pb-32 flex flex-col gap-10"}>
        {Cars.map(car => {
          return (
            <div
              key={car.id}
              className={"pt-8 px-8 pb-10 w-full min-h-1 bg-[#f7f5f2]"}
            >
              <Image
                className={"w-full"}
                src={car.image}
                alt={car.name}
                width={car.width}
                height={car.height}
              />
              <div
                className={`${epilogue.className} mt-9 flex flex-col justify-center text-[#0c1315]`}
              >
                <h5 className={"mb-8"}>{car.name}</h5>
                <span
                  className={`${sora.className} mb-4 text-[16px] text-[#404040]`}
                >
                  {car.descriptionShort}
                </span>
                <div className={`${sora.className} flex items-end`}>
                  <span
                    className={` 
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
                    before:content-['/']
                    before:mx-1
                    `}
                  >
                    hour
                  </span>
                </div>
                <Button variant={"secondary"}>MORE DETAILS</Button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Page;
