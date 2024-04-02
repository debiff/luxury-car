import { epilogue, inconsolata } from "@/app/ui/fonts";
import Image from "next/image";
import styles from "@/app/ui/home/callUs/callUs.module.css";

export const CallUs = () => {
  return (
    <section
      className={`${epilogue.className} flex flex-col md:flex-row pt-[95px] md:pt-[117px] pl-8 pr-4 md:px-16 bg-[#141a1c] `}
    >
      <div className={"md:w-1/2"}>
        <h2 className={"text-white"}>
          What We Provide Is The Luxury Transport And Most Comfortable
          Experience
        </h2>
      </div>
      <div className={"my-3.5 md:w-1/2 md:my-0"}>
        <div className={"md:pl-[14.5%]"}>
          <p className={"text-[#a6a6a6] mt-[10px] "}>
            Indulge in unparalleled luxury travel with our exquisite fleet. From
            executive sedans to spacious SUVs, we provide top-notch comfort and
            style for every journey.
          </p>
          <p className={"text-[#a6a6a6] mb-[20px]"}>
            Write us now for the ultimate travel experience.
          </p>
          <div className={` flex items-center`}>
            <div className={"mr-[19px]"}>
              <Image src={"/call.png"} width={45} height={50} alt={"call-us"} />
            </div>
            <a
              href="https://wa.me/00393312136784"
              className={`${inconsolata.className} ${styles.whatsappNumber} uppercase text-sm text-[#bfa37c] hover:text-[#8C7554] leading-6 tracking-[.25em]`}
              target="_blank"
              rel="noopener"
            >
              whatsapp: +1234 5678 901{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
