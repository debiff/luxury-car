import { inconsolata } from "@/app/ui/fonts";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

type Props = {
  placeholder: string;
  options: string[];
  selected?: string;
  name: string;
  disabled?: boolean;
};
export const SelectBoxInput = ({
  options,
  placeholder,
  selected,
  name,
  disabled
}: Props) => {
  const { register } = useFormContext();
  return (
    <select
      style={{
        boxShadow: "none"
      }}
      {...register(name)}
      className={clsx(
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
                    mb-[15px]
                  
                  `,
        {
          "pointer-events-none bg-[#0c1315] opacity-40": disabled
        }
      )}
    >
      <option value="" disabled selected={!selected}>
        {placeholder}
      </option>
      {options.map((option, id) => (
        <option key={id} value={option} selected={option === selected}>
          {option}
        </option>
      ))}
    </select>
  );
};
