"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { inconsolata } from "@/app/ui/fonts";
import { MenuButton } from "@/app/ui/navbar/MenuButton";
import { MenuItems } from "@/app/ui/navbar/MenuItems";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [transparentBackground, setTransparentBackground] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  };

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
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <motion.nav
        className={`fixed
          md:hidden
          top-[69px]
          left-0
          z-40
          overflow-y-auto
          flex
          justify-left
          items-center
          bg-[#0c1315]
          w-full
          px-[7%]
          pt-6
          pb-10
          `}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <MenuItems />
      </motion.nav>
    </header>
  );
};
