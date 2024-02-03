import clsx from "clsx";
import styles from "@/app/ui/commons/button.module.css";
import { inconsolata } from "@/app/ui/fonts";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        `${styles.button} ${inconsolata.className} text-[14px] tracking-[.25em] leading-[25px] mt-[15px] mb-[14px] pt-[17px] pl-[60px] pr-[47px] pb-[17px] border border-[#BFA37C]`,
        className
      )}
    >
      <span className={`${styles.plus} ml-[23px] relative`}>{children}</span>
    </button>
  );
};
