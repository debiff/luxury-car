import style from "@/app/ui/footer/footer.module.css";
import Image from "next/image";
import { epilogue, inconsolata, sora } from "@/app/ui/fonts";
import styles from "@/app/ui/home/callUs/callUs.module.css";
import { MenuItem } from "@/app/ui/navbar/MenuItems";
export const Footer = () => {
  return (
    <footer>
      <div className={"border-t border-[#2d363e] w-full pl-8 pr-4 md:px-16"}>
        <div className={"pt-20 md:pt-[131px] pb-[123px]"}>
          <div className={`${style.footerGrid} md:grid md:gap-x-24 relative`}>
            <div className={"mb-[66px] md:mb-0"}>
              <div className={"mb-9"}>
                <Image
                  src={"/logo-extended-gold.webp"}
                  alt={"logo extended gold"}
                  width={404}
                  height={36}
                />
              </div>

              <div className={"mb-3"}>
                <span
                  className={`${sora.className} text-[#a6a6a6] text-base leading-7 `}
                >
                  {
                    " Crafting unforgettable journeys with unparalleled luxury and comfort. Elevating travel experiences to new heights of sophistication and style."
                  }
                </span>
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
            <div>
              <h5 className={`${epilogue.className} text-white mb-8`}>
                {"Quick links"}
              </h5>
              <ul
                className={`${inconsolata.className} flex flex-col gap-4 uppercase text-white text-sm leading-6 tracking-[.25em]`}
              >
                <MenuItem label={"Home"} url={"/"} />
                {/*<MenuItem label={"Pages"} url={"#"} />*/}
                <MenuItem label={"Vehicle fleet"} url={"/fleet"} />
                <MenuItem label={"About us"} url={"/about-us"} />
                <MenuItem label={"Contacts"} url={"/contacts"} />
                {/*<MenuItem label={"Blog"} url={"#"} />*/}
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={"border-t border-[#2d363e] w-full"}>
        <div className={"px-16 pt-2 pb-2.5"}>
          <p className={`${sora.className} text-xs text-white leading-7`}>
            {`© 2023-${new Date().getFullYear()}. All Rights Reserved | P.Iva 09581400968`}
          </p>
        </div>
      </div>
    </footer>
  );
};
