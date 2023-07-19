import React from "react";
import { Dashboard, Content, Sale, Licensed, Setting, Logout } from "@/svgicon";
import Link from "next/link";

const element = [
  {
    name: "dashboard",
    icon: <Dashboard />,
  },
  {
    name: "Content",
    icon: <Content />,
  },
  {
    name: "dashboard",
    icon: <Dashboard />,
  },
  {
    name: "Sale",
    icon: <Sale />,
  },
  {
    name: "Settings",
    icon: <Setting />,
  },
  {
    name: "Logout",
    icon: <Logout />,
  },
];

const SideBar = () => {
  return (
    <div className="overflow-x-auto">
      <ul className="flex md:flex-col flex-row text-white_300 sm:gap-0 gap-4">
        {element.map((item, i) => {
          return (
            <Link href={"/userdashboard"} key={i}>
            <li
              key={i}
              className="capitalize flex text-[16px] font-semibold items-center gap-2 sm:mb-10"
            >
              <span>{item.icon}</span> {item.name}
            </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
