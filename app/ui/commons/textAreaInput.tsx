import { inconsolata } from "@/app/ui/fonts";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

type Props = {
  placeholder: string;
  name: string;
  errorMessage?: string;
};
export const TextAreaInput = ({ placeholder, name, errorMessage }: Props) => {
  const { register } = useFormContext();

  const computedClassname = clsx(
    `
        ${inconsolata.className}
        w-full
        md:w-2/3
        text-[14px]
        bg-transparent
        border-0 
        border-b 
        border-[rgb(255 255 255 / 35%)] 
        text-[rgba(255,255,255,.7)] 
        pl-[10px]
        pr-[9px] 
        py-[9px]
        focus:text-white
        focus:border-white
        transition-colors
        outline-0
        leading-[28px]
        placeholder-[rgba(255,255,255,.7)]
    `,
    {
      "mb-[15px] py-[9px]": !errorMessage,
      "mb-[2px] pt-[9px] py-[3px]": errorMessage
    }
  );

  return (
    <>
      <textarea
        style={{
          boxShadow: "none"
        }}
        {...register(name)}
        className={computedClassname}
        placeholder={placeholder}
      />
      {errorMessage && (
        <span className={"text-[#BFA37C] text-[10px]  w-full md:w-2/3"}>
          {errorMessage}
        </span>
      )}
    </>
  );
};
