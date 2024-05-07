"use client";
import React from "react";
import styles from "@/app/ui/navbar/MenuItems/menuItem.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  className?: string;
  setIsMenuOpen: (_: boolean) => void;
};

type MenuItemProps = Pick<Props, "setIsMenuOpen"> & {
  label: string;
  url: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  setIsMenuOpen,
  label,
  url
}) => (
  <li key={label} className={"relative group"}>
    <Link
      className={`${styles.item}`}
      href={url}
      onClick={() => setIsMenuOpen(false)}
    >
      <div
        className={`translate-x-0 duration-700 ease-in-out group-hover:translate-x-4`}
      >
        {label}
      </div>
    </Link>
  </li>
);
export const MenuItems: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  const items = [
    // { label: "Home", href: "/" },
    // { label: "Pages", href: "/pages" },
    { label: "Vehicle fleet", href: "/fleet" }
    // { label: "Blog", href: "/blog" },
    // { label: "Shop", href: "/shop" }
  ];

  return (
    <nav className={className}>
      <ul className="items-start md:items-center flex flex-col md:flex-row gap-4 main-menu uppercase ">
        {items.map(item => (
          <MenuItem key={item.label} label={item.label} url={item.href} />
        ))}
      </ul>
    </nav>
  );
};
