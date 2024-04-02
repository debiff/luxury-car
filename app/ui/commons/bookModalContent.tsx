import { XMarkIcon } from "@heroicons/react/20/solid";
import { TextInput } from "@/app/ui/commons/textInput";
import { DateInput } from "@/app/ui/commons/dateInput";
import { Button } from "@/app/ui/commons/Button";
import { SelectBoxInput } from "@/app/ui/commons/selectBoxInput";
import { Cars } from "@/app/lib/placeholder-car";

type Props = {
  setIsModalOpen: (isOpen: boolean) => void;
  carId?: number;
};
export const BookModalContent = ({ setIsModalOpen, carId }: Props) => {
  const carsOptions = Cars.slice()
    .sort((a, b) => (`${a.make} ${a.name}` > `${b.make} ${b.name}` ? 1 : -1))
    .map(car => `${car.make} ${car.name}`);

  const selectedCar = Cars.find(car => car.id === carId);

  return (
    <>
      <div
        className={"fixed h-full w-full bg-black top-0 left-0 opacity-40 z-50"}
      ></div>
      <div
        className={`
              fixed 
              bg-[#0c1315] 
              w-[86%] 
              md:w-[40%]
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
        <div className={"flex flex-col md:justify-center md:items-center"}>
          <TextInput placeholder={"Name"} />
          <TextInput placeholder={"Email"} />
          <TextInput placeholder={"Phone"} />
          <SelectBoxInput
            placeholder={"Select your car"}
            options={carsOptions}
            selected={
              selectedCar
                ? `${selectedCar.make} ${selectedCar.name}`
                : undefined
            }
          />
          <TextInput placeholder={"Pick up location"} />
          <DateInput placeholder={"Pick up date"} />
          <TextInput placeholder={"Drop off location"} />
          <DateInput placeholder={"Drop off date"} />
          <div className={"md:w-1/2"}>
            <Button variant={"modal"}>BOOK NOW</Button>
          </div>
        </div>
      </div>
    </>
  );
};
