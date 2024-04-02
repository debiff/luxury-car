import { inconsolata } from "@/app/ui/fonts";

type Props = {
  placeholder: string;
  options: string[];
  selected?: string;
};
export const SelectBoxInput = ({ options, placeholder, selected }: Props) => (
  <select
    style={{
      boxShadow: "none"
    }}
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
