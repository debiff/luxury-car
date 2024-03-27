import { useState } from "react";
import { elegantIcons, inconsolata } from "@/app/ui/fonts";
import { motion } from "framer-motion";

type Option = {
  id: string;
  name: string;
};
type Props = {
  defaultOption: string;
  options: Option[];
  onSelect: (option: string) => void;
};
export const SelectBox = ({ defaultOption, options, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    undefined
  );
  return (
    <div className={"px-10"}>
      <div className={"flex flex-col relative"}>
        <span
          className={`
            ${inconsolata.className} 
            w-[332px] 
            inline-block 
            mb-5 
            relative 
            align-middle 
            px-5 
            py-2
            border-b
            border-[#d9d6ce]
            cursor-pointer
            `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={""}>{selectedOption?.name ?? defaultOption}</span>
          <span
            className={`h-full 
                w-[50px] 
                absolute 
                flex 
                items-center 
                text-[22px] 
                justify-center
                right-0 
                top-0
                before:content-["3"]
                before:block
                cursor-pointer
                ${elegantIcons.className}
                `}
            onClick={() => setIsOpen(!isOpen)}
          ></span>
        </span>
        <motion.div
          className={`
          absolute
          top-[45px]
          w-[332px]
          block
          z-50
        `}
          animate={{
            height: isOpen ? "100%" : 0,
            opacity: isOpen ? 1 : 0,
            display: isOpen ? "block" : "none"
          }}
          initial={false}
        >
          <motion.span
            initial={false}
            animate={{
              height: isOpen ? "100%" : 0,
              opacity: isOpen ? 1 : 0,
              display: isOpen ? "block" : "none"
            }}
          >
            <ul
              className={`
            max-h-[200px]
            overflow-y-auto
            bg-white
            border
            border-[#000]
          `}
            >
              {options.map(option => (
                <li
                  key={option.id}
                  className={`
                        ${inconsolata.className}
                        px-5
                        py-2
                        hover:bg-[#f4f4f4]
                        cursor-pointer
                        `}
                  onClick={() => {
                    setSelectedOption(option);
                    onSelect(option.name);
                    setIsOpen(false);
                  }}
                >
                  {option.name}
                </li>
              ))}
            </ul>
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};
