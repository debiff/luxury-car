import { XMarkIcon } from "@heroicons/react/20/solid";
import { TextInput } from "@/app/ui/commons/textInput";
import { DateInput } from "@/app/ui/commons/dateInput";
import { Button } from "@/app/ui/commons/Button";
import { SelectBoxInput } from "@/app/ui/commons/selectBoxInput";
import { Cars } from "@/app/lib/placeholder-car";
import useSWRMutation from "swr/mutation";
import { routes } from "@/app/routePaths";
import { bookingFormSchema, BookingForm } from "@/types/bookingForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  setIsModalOpen: (isOpen: boolean) => void;
  carId?: number;
};
export const BookModalContent = ({ setIsModalOpen, carId }: Props) => {
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

  const { trigger } = useSWRMutation(routes.bookingApi(), fetcher);

  const carsOptions = Cars.slice()
    .sort((a, b) => (`${a.make} ${a.name}` > `${b.make} ${b.name}` ? 1 : -1))
    .map(car => `${car.make} ${car.name}`);

  const selectedCar = Cars.find(car => car.id === carId);

  console.log(methods.formState.errors);
  const onSubmit = (data: BookingForm) => {
    console.log("data", data);
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
                selectedCar
                  ? `${selectedCar.make} ${selectedCar.name}`
                  : undefined
              }
              name={"car"}
            />
            <TextInput
              placeholder={"Pick up location"}
              name={"pickUpLocation"}
            />
            <DateInput placeholder={"Pick up date"} name={"pickUpDate"} />
            <TextInput
              placeholder={"Drop off location"}
              name={"dropOffLocation"}
            />
            <DateInput placeholder={"Drop off date"} name={"dropOffDate"} />
            <div className={"md:w-1/2"}>
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
