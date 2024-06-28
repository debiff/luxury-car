import { epilogue } from "@/app/ui/fonts";
// import { useForm } from "react-hook-form";
// import { BookingForm, bookingFormSchema } from "@/types/bookingForm";
// import { zodResolver } from "@hookform/resolvers/zod";
// import useSWRMutation from "swr/mutation";
// import { routes } from "@/app/routePaths";

const Page = () => {
  // const methods = useForm<BookingForm>({
  //   resolver: zodResolver(bookingFormSchema),
  //   mode: "all",
  //   reValidateMode: "onChange"
  // });
  //
  // const fetcher = async (url: string, { arg }: { arg: BookingForm }) => {
  //   const res = await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(arg)
  //   });
  //   return res.json();
  // };
  //
  // const { trigger, data, error } = useSWRMutation(
  //   routes.contactUsApi(),
  //   fetcher
  // );
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section
        className={`${epilogue.className} flex flex-col pt-[50px] md:pt-[95px] md:py-[80px] md:px-4 md:pl-32 justify-between `}
      >
        <div>
          <h2>Our Mission</h2>
          <p className="mt-[26px]">
            {`At Car Luxury Rent, our mission is to provide the world's most
              exclusive and prestigious luxury car rental service. We offer an
              unparalleled selection of luxury vehicles, including brands like
              Ferrari, Lamborghini, Rolls-Royce, and Bentley.`}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;
