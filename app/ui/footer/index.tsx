import style from "@/app/ui/footer/footer.module.css";
import Image from "next/image";
import { epilogue, inconsolata, sora } from "@/app/ui/fonts";
import styles from "@/app/ui/home/callUs/callUs.module.css";
import { MenuItem } from "@/app/ui/navbar/MenuItems";
export const Footer = () => {
  return (
    <footer>
      <div className={"border-t border-[#2d363e] w-full px-16"}>
        <div className={"pt-[131px] pb-[123px]"}>
          <div className={`${style.footerGrid} grid gap-x-24 relative`}>
            <div>
              <div className={"mb-9"}>
                <Image
                  src={"/logo-gold.png"}
                  alt={"logo"}
                  width={121}
                  height={12}
                />
              </div>

              <div className={"mb-3"}>
                <span
                  className={`${sora.className} text-[#a6a6a6] text-base leading-7 `}
                >
                  {
                    " Justo odio dignissimos ducimus qui blanditiis voluptatum deleniti corrupti quos dolores et quas molestias sint occaecati id est laborumesa etdolorum."
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
                <MenuItem label={"Home"} url={"#"} />
                <MenuItem label={"Pages"} url={"#"} />
                <MenuItem label={"Vehicle fleet"} url={"#"} />
                <MenuItem label={"Blog"} url={"#"} />
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={"border-t border-[#2d363e] w-full"}>
        <div className={"px-16 pt-2 pb-2.5"}>
          <p className={`${sora.className} text-xs text-white leading-7`}>
            © 2023-2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
