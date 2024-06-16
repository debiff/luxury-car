import { XMarkIcon } from "@heroicons/react/20/solid";
import { TextInput } from "@/app/ui/commons/textInput";
import { DateInput } from "@/app/ui/commons/dateInput";
import { Button } from "@/app/ui/commons/Button";
import { SelectBoxInput } from "@/app/ui/commons/selectBoxInput";
import { Car, Cars } from "@/app/lib/placeholder-car";
import useSWRMutation from "swr/mutation";
import { routes } from "@/app/routePaths";
import { bookingFormSchema, BookingForm } from "@/types/bookingForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

type Props = {
  setIsModalOpen: (isOpen: boolean) => void;
  carId?: number;
};
export const BookModalContent = ({ setIsModalOpen, carId }: Props) => {
  const [selectedCar, setSelectedCar] = useState<string | undefined>(undefined);
  const [selectedCarColors, setSelectedCarColors] = useState<
    string[] | undefined
  >(undefined);
  const [carFromDetailPage, setCarFromDetailPage] = useState<Car | undefined>(
    undefined
  );
  const methods = useForm<BookingForm>({
    resolver: zodResolver(bookingFormSchema),
    mode: "all",
    reValidateMode: "onChange"
  });

  const fetcher = async (url: string, { arg }: { arg: BookingForm }) => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg)
    });
    return res.json();
  };

  const { trigger, data, error } = useSWRMutation(routes.bookingApi(), fetcher);

  useEffect(() => {
    if (data) {
      setIsModalOpen(false);
    }
  }, [data, setIsModalOpen]);

  useEffect(() => {
    const car = Cars.find(car => car.id === carId);

    if (car) {
      methods.setValue("car", `${car?.make} ${car?.name}`);
    }
    setCarFromDetailPage(car);
  }, [methods, carId]);

  const car = methods.watch().car;
  useEffect(() => {
    setSelectedCar(car);
    setSelectedCarColors(
      Cars.find(c => `${c.make} ${c.name}` === car)?.availableColors.map(
        v => v.label
      )
    );
  }, [car]);

  const carsOptions = Cars.slice()
    .sort((a, b) => (`${a.make} ${a.name}` > `${b.make} ${b.name}` ? 1 : -1))
    .map(car => `${car.make} ${car.name}`);

  const onSubmit = (data: BookingForm) => {
    void trigger(data);
  };

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
              px-[30px]
              pt-[20px]
              pb-[15px]
              overflow-y-scroll
              top-1/2
              left-1/2
              h-auto
              md:h-full
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
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className={"flex flex-col md:justify-center md:items-center"}
          >
            <TextInput
              placeholder={"Name"}
              name={"name"}
              errorMessage={
                methods.formState.errors.name
                  ? "Please, insert your name"
                  : undefined
              }
            />
            <TextInput
              placeholder={"Email"}
              name={"email"}
              errorMessage={
                methods.formState.errors.email
                  ? "Please, insert a valid email"
                  : undefined
              }
            />
            <TextInput
              placeholder={"Phone"}
              name={"phone"}
              errorMessage={
                methods.formState.errors.phone
                  ? "Please, insert your number with "
                  : undefined
              }
            />
            <SelectBoxInput
              placeholder={"Select your car"}
              options={carsOptions}
              selected={
                carFromDetailPage
                  ? `${carFromDetailPage.make} ${carFromDetailPage.name}`
                  : undefined
              }
              name={"car"}
            />
            <SelectBoxInput
              placeholder={"Select the color"}
              options={selectedCarColors ?? []}
              name={"color"}
              disabled={selectedCar === undefined}
            />
            <TextInput
              placeholder={"Pick up location"}
              name={"pickUpLocation"}
              errorMessage={
                methods.formState.errors.pickUpLocation
                  ? "Please, insert a pick up location"
                  : undefined
              }
            />
            <DateInput placeholder={"Pick up date"} name={"pickUpDate"} />
            <TextInput
              placeholder={"Drop off location"}
              name={"dropOffLocation"}
              errorMessage={
                methods.formState.errors.dropOffLocation
                  ? "Please, insert a drop off location"
                  : undefined
              }
            />
            <DateInput placeholder={"Drop off date"} name={"dropOffDate"} />
            <div className={"flex justify-center md:w-1/2"}>
              {error && (
                <span>
                  {
                    "An error has occurred while sending the request. Please try again later."
                  }
                </span>
              )}
              <Button type={"submit"} variant={"modal"}>
                BOOK NOW
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};
