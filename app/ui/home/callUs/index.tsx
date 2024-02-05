import { epilogue, inconsolata } from "@/app/ui/fonts";
import Image from "next/image";
import styles from "@/app/ui/home/callUs/callUs.module.css";

export const CallUs = () => {
  return (
    <section
      className={`${epilogue.className} flex pt-[117px] px-16 bg-[#141a1c]`}
    >
      <div className={"w-1/2"}>
        <h2 className={"text-white"}>
          What We Provide Is The Luxury Transport And Most Comfortable
          Experience
        </h2>
      </div>
      <div className={"w-1/2"}>
        <div className={"pl-[14.5%]"}>
          <p className={"text-[#a6a6a6] mt-[10px] mb-[20px]"}>
            Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo
            intege in malesuada nunc vel risus commodo. Sapien nec sagittis
            aliquam male bibendum arcu vitae. In ornare quam viverra orci
            sagittis eu volutpat odio facilisis. Fringilla est ullamcorper eget
            nulla facilisi nul.
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
