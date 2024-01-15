import React from "react";

type Props = {
  className?: string;
};
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
      <ul className="flex flex-row gap-4 main-menu uppercase">
        {items.map(item => (
          <li key={item.label} className={"relative group"}>
            <a>
              <div
                className={`translate-x-0 duration-700 ease-in-out group-hover:translate-x-4`}
              >
                {item.label}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
