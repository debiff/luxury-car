import { inconsolata } from "@/app/ui/fonts";

type Props = {
  placeholder: string;
};
export const TextInput = ({ placeholder }: Props) => (
  <input
    type={"text"}
    style={{
      boxShadow: "none"
    }}
    className={`
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
  />
);
