"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { inconsolata } from "@/app/ui/fonts";
import { MenuButton } from "@/app/ui/navbar/MenuButton";
import { MenuItems } from "@/app/ui/navbar/MenuItems";

export const Navbar = () => {
  const [transparentBackground, setTransparentBackground] = useState(true);
  const changeNavButton = () => {
    if (window.scrollY >= 30) {
      setTransparentBackground(false);
    } else {
      setTransparentBackground(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);
  return (
    <header
      className={clsx(
        `
          ${inconsolata.className}
          py-7
          flex
          flex-row
          justify-between
          px-5
          md:px-20
          font-normal
          text-sm
          tracking-[.25em]
          text-white
          sticky
          top-0
          z-50
          border-b
          border-[#e4e7eb]
          border-opacity-50`,
        {
          "bg-transparent": transparentBackground,
          "bg-blue-400": !transparentBackground
        }
      )}
    >
      <a
        itemProp="url"
        href="https://luxedrive.qodeinteractive.com/"
        rel="home"
      >
        <Image width="121" height="12" src="/logo.png" alt="logo main" />
      </a>

      <MenuItems className={"hidden md:block"} />
      <MenuButton />
    </header>
  );
};
