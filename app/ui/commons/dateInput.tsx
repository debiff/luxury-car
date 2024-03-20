import { useState } from "react";
import { inconsolata } from "@/app/ui/fonts";
type Props = {
  placeholder: string;
};
export const DateInput = ({ placeholder }: Props) => {
  const [date, setDate] = useState<string | undefined>(undefined);
  return (
    <div className={"relative md:w-2/3"}>
      {!date && (
        <span
          className={`
        ${inconsolata.className} 
        absolute
        text-[14px]
        pl-[10px]
        pr-[9px] 
        py-[9px]
        text-[rgba(255,255,255,.5)] 
      `}
        >
          {placeholder}
        </span>
      )}
      <input
        type={"date"}
        style={{
          boxShadow: "none"
        }}
        className={`
                    picker
                    ${inconsolata.className}
                    w-full
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
        placeholder={placeholder}
        onChange={e => {
          setDate(e.target.value);
        }}
      />
    </div>
  );
};
