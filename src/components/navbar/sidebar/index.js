import React from "react";
import { Dashboard, Content, Sale, Licensed, Setting, Logout } from "@/svgicon";
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
    name: " Logout",
    icon: <Logout />,
  },
];

const SideBar = () => {
  return (
    <div className=" ">
      <ul className=" flex flex-col text-white_300">
        {element.map((item, i) => {
          return (
            <li
              key={i}
              className=" capitalize flex text-[16px] font-semibold items-center gap-4 mb-10"
            >
              <span>{item.icon}</span> {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
