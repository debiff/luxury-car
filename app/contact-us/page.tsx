"use client";
import { epilogue } from "@/app/ui/fonts";
import { Button } from "@/app/ui/commons/Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import { routes } from "@/app/routePaths";
import { ContactUsForm, contactUsFormSchema } from "@/types/contactUsForm";
import { useEffect } from "react";

const Page = () => {
  const methods = useForm<ContactUsForm>({
    resolver: zodResolver(contactUsFormSchema),
    mode: "all",
    reValidateMode: "onChange"
  });

  const fetcher = async (url: string, { arg }: { arg: ContactUsForm }) => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg)
    });
    return res.json();
  };

  const { trigger, data, error } = useSWRMutation(
    routes.contactUsApi(),
    fetcher
  );

  const onSubmit = (data: ContactUsForm) => {
    void trigger(data);
  };

  useEffect(() => {
    if (data) {
      methods.reset();
    }
  }, [data, methods]);

  return (
    <main className="flex min-h-screen flex-col bg-white items-center">
      <section
        className={`${epilogue.className} flex flex-col pt-[50px] pb-[70px] px-4 justify-between w-2/3`}
      >
        <div>
          <h2>Contact us</h2>
          <p className="mt-[26px]">
            {`At Car Luxury Rent, we pride ourselves on offering the finest luxury car rental service in the world. Whether you're planning a business trip, a special event, or simply wish to indulge in an extraordinary driving experience, we're here to make your journey unforgettable.`}
          </p>
          <p className="mt-[26px]">
            {`We’re committed to providing you with exceptional service and a seamless rental experience. Our team of dedicated professionals is ready to assist you with any inquiries, special requests, or booking needs.`}
          </p>

          <p className="mt-[26px]">
            {`For the ultimate luxury driving experience, contact Car Luxury Rent at `}
            <strong>
              <a href="mailto:info@carluxuryrent.com">info@carluxuryrent.com</a>
            </strong>
            {` or use the form below. Your dream car is just a click or a call away.`}
          </p>
        </div>
        <FormProvider {...methods}>
          <form
            className="mt-[20px] w-full  justify-center flex-col"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <label className="block mt-[20px]" htmlFor="email">
              Email:
            </label>
            <input
              className={
                "border rounded px-[10px] py-[5px] w-full md:w-[300px] focus:text-black focus:border-black border-[rgb(255 255 255 / 35%)]"
              }
              {...methods.register("email")}
            />
            {methods.formState.errors.email && (
              <span className={"text-[#BFA37C] text-[10px]  w-full md:w-2/3"}>
                {"Please, insert a valid email"}
              </span>
            )}
            <label className="block mt-[20px]" htmlFor="message">
              Message:
            </label>
            <textarea
              className={
                "border rounded px-[10px] py-[5px] w-full h-[150px] focus:text-black focus:border-black border-[rgb(255 255 255 / 35%)]"
              }
              {...methods.register("message")}
            />
            {methods.formState.errors.message && (
              <span className={"text-[#BFA37C] text-[10px]  w-full md:w-2/3"}>
                {"Please, insert at least 10 characters in the message"}
              </span>
            )}
            <Button type={"submit"} variant={"secondary"}>
              SEND
            </Button>
          </form>
        </FormProvider>
        {error && (
          <span className={"text-[#BFA37C] text-[10px]  w-full md:w-2/3"}>
            {
              "An error occurred during the submission, please try again later or contact us at "
            }
            <strong>
              <a
                className={
                  "text-[#BFA37C] text-[10px] border-0 p-0 outline-none focus:shadow-none focus:ring-transparent"
                }
                href={"mailto:info@carluxuryrent.com"}
                type={"email"}
              >
                info@carluxuryrent.com
              </a>
              .
            </strong>
          </span>
        )}
      </section>
    </main>
  );
};

export default Page;
