import clsx from "clsx";
import styles from "@/app/ui/commons/button.module.css";
import { inconsolata } from "@/app/ui/fonts";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "modal";
}
export const Button = ({
  children,
  className,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        `${styles.button}
        ${inconsolata.className}
        inline-flex
        text-[14px]
        tracking-[.25em]
        leading-[25px]
        mt-[15px]
        mb-[14px]
        pt-[17px]
        pl-[60px]
        pr-[47px]
        pb-[17px]
        border
        border-[#BFA37C]
        {className}`
      )}
    >
      <span
        className={clsx(`${styles.plus} ml-[23px] relative`, {
          "before:bg-[#FFF]": variant === "primary" || variant === "modal",
          "before:bg-[#000]": variant === "secondary",
          "after:bg-[#FFF]": variant === "primary" || variant === "modal",
          "after:bg-[#000]": variant === "secondary",
          "text-white": variant === "modal"
        })}
      >
        {children}
      </span>
    </button>
  );
};
