"use client";
import Image from "next/image";
import { epilogue, sora } from "@/app/ui/fonts";
import { SelectBox } from "@/app/ui/commons/SelectBox";
import {
  Cars,
  Car as CarType,
  make,
  Make,
  category,
  Category
} from "@/app/lib/placeholder-car";
import { Button } from "@/app/ui/commons/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Car = ({
  car,
  selectedCategory
}: {
  car: CarType;
  selectedCategory: Category | undefined;
}) => {
  const router = useRouter();
  return (
    <div key={car.id} className={"pt-8 px-8 pb-10 w-full min-h-1 bg-[#f7f5f2]"}>
      <Image
        className={"w-auto h-[160px]"}
        src={car.imageList.src}
        alt={car.name}
        width={car.imageList.width}
        height={car.imageList.height}
      />
      <div
        className={`${epilogue.className} mt-9 flex flex-col justify-center text-[#0c1315]`}
      >
        <h5 className={"mb-2"}>{car.name}</h5>
        <span className={`${sora.className} mb-10 text-[16px] text-[#404040]`}>
          {car.make}
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
              €
            </span>
            <span>{Math.min(...Object.values(car.prices))}</span>
          </span>
          <span
            className={`
                    before:content-['/']
                    before:mx-1
                    `}
          >
            day
          </span>
        </div>
        <Button
          variant={"secondary"}
          onClick={() => {
            router.push(
              `/fleet/${car.id}${selectedCategory ? "?category=" + selectedCategory : ""}`
            );
          }}
        >
          MORE DETAILS
        </Button>
      </div>
    </div>
  );
};

const FleetList = ({
  selectedCategory,
  setSelectedCategory,
  selectedMake
}: {
  selectedMake: Make | undefined;
  selectedCategory: Category | undefined;
  setSelectedCategory: (category: Category) => void;
}) => {
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  useEffect(() => {
    if (
      searchCategory &&
      category.filter(c => c === searchCategory).length > 0
    ) {
      setSelectedCategory(searchCategory as Category);
    }
  }, [searchCategory, setSelectedCategory]);

  const filteredCars = Cars.filter(
    car => !selectedMake || car.make === selectedMake
  )
    .filter(car => !selectedCategory || car.category.includes(selectedCategory))
    .sort(
      (a, b) => a.make.localeCompare(b.make) || a.name.localeCompare(b.name)
    );

  return filteredCars.length === 0 ? (
    <div className={"flex flex-col flex-1 items-center mb-16"}>
      <h5 className={"mb-6"}>
        No car available for the category and the make you choose.
      </h5>
      <h5>Please contact us and let us know which car you are looking for.</h5>

      <h5>We will do our best to satisfy your needs</h5>
    </div>
  ) : (
    <>
      <section className={"w-full px-10 pb-32 flex flex-col gap-10 md:hidden"}>
        {filteredCars.map(car => (
          <Car key={car.id} car={car} selectedCategory={selectedCategory} />
        ))}
      </section>
      <section
        className={
          "relative md:grid grid-cols-4 rw-full px-10 pb-32 gap-10 hidden"
        }
      >
        {filteredCars.map(car => (
          <Car key={car.id} car={car} selectedCategory={selectedCategory} />
        ))}
      </section>
    </>
  );
};

const allCarCategories = { id: "all", name: "Vehicle type" };
const allCarMakes = { id: "all", name: "Vehicle make" };
const Page = () => {
  const [selectedMake, setSelectedMake] = useState<Make | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className={"text-center h-[400px] relative"}>
        <Image
          src="/fleet-header.webp"
          className={"object-cover"}
          fill
          quality={100}
          alt={"fleet header image"}
        />
        <div className={"h-full flex flex-col justify-center"}>
          <div className={"z-30"}>
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
              defaultOption={
                selectedCategory ? selectedCategory : "Vehicle type"
              }
              options={[
                allCarCategories,
                ...category
                  .slice()
                  .sort()
                  .map((c, i) => ({ id: i.toString(), name: c }))
              ]}
              onSelect={v =>
                setSelectedCategory(
                  v === allCarCategories.name ? undefined : (v as Category)
                )
              }
            />
            <SelectBox
              defaultOption={"Vehicle make"}
              options={[
                allCarMakes,
                ...make
                  .slice()
                  .sort()
                  .map((m, i) => ({ id: i.toString(), name: m }))
              ]}
              onSelect={v =>
                setSelectedMake(
                  v === allCarMakes.name ? undefined : (v as Make)
                )
              }
            />
          </div>
        </div>
      </section>
      <Suspense>
        <FleetList
          selectedMake={selectedMake}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Suspense>
    </main>
  );
};

export default Page;
