import Link from "next/link";
import React from "react";

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: "Hello",
    href: "#hello",
  },
  // {
  //   title: "Reviews",
  //   href: "#reviews",
  // },
  // {
  //   title: "Marketplace",
  //   href: "/marketplace",
  // },
  // {
  //   title: "Contact Us",
  //   href: "/contact",
  // }
];

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="block md:flex">
      {navItems.map((item, index) => (
        <Link key={item.title} href={item.href}>
          <h5
            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-2xl font-[500] font-Inter ${activeItem === index && "text-primary"
              }`}
          >
            {item.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
