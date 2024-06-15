"use client";

import clsx from "clsx";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { inconsolata } from "@/app/ui/fonts";
import { MenuButton } from "@/app/ui/navbar/MenuButton";
import { MenuItems } from "@/app/ui/navbar/MenuItems";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [transparentBackground, setTransparentBackground] = useState(isHome);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeNavButton = useCallback(() => {
    if (window.scrollY >= 30) {
      setTransparentBackground(false);
    } else {
      setTransparentBackground(true);
    }
  }, []);
  useEffect(() => {
    if (isHome) {
      window.addEventListener("scroll", changeNavButton);
    } else {
      setTransparentBackground(false);
      window.removeEventListener("scroll", changeNavButton);
    }
  }, [isHome, changeNavButton]);

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
          items-baseline
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
      <Link href={"/"} className={"z-[100]"}>
        <Image width="240" height="10" src="/logo-white.webp" alt="logo main" />
      </Link>

      <MenuItems className={"hidden md:block"} setIsMenuOpen={setIsMenuOpen} />
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
        <MenuItems setIsMenuOpen={setIsMenuOpen} />
      </motion.nav>
    </header>
  );
};
