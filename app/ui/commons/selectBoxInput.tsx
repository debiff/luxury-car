import { inconsolata } from "@/app/ui/fonts";
import { useFormContext } from "react-hook-form";

type Props = {
  placeholder: string;
  options: string[];
  selected?: string;
  name: string;
};
export const SelectBoxInput = ({
  options,
  placeholder,
  selected,
  name
}: Props) => {
  const { register } = useFormContext();
  return (
    <select
      style={{
        boxShadow: "none"
      }}
      {...register(name)}
      className={`
                    ${inconsolata.className}
                    w-full
                    md:w-2/3
                    text-[14px]
                    bg-transparent
                    border-0 
                    border-b 
                    border-[rgb(255 255 255 / 35%)] 
                    text-[rgba(255,255,255,.5)] 
                    pl-[10px]
                    pr-[9px] 
                    py-[9px]
                    focus:text-white
                    focus:border-white
                    transition-colors
                    outline-0
                    leading-[28px]
                    mb-[20px]
                  `}
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
