import React from "react";
import styles from "@/app/ui/navbar/MenuItems/menuItem.module.css";

type Props = {
  className?: string;
};

type MenuItemProps = {
  label: string;
  url?: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ label, url }) => (
  <li key={label} className={"relative group"}>
    <a className={`${styles.item}`} href={url}>
      <div
        className={`translate-x-0 duration-700 ease-in-out group-hover:translate-x-4`}
      >
        {label}
      </div>
    </a>
  </li>
);
export const MenuItems: React.FC<Props> = ({ className }) => {
  const items = [
    { label: "Home" },
    { label: "Pages" },
    { label: "Vehicle fleet" },
    { label: "Blog" },
    { label: "Shop" }
  ];

  return (
    <nav className={className}>
      <ul className="items-start md:items-center flex flex-col md:flex-row gap-4 main-menu uppercase ">
        {items.map(item => (
          <MenuItem key={item.label} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};
