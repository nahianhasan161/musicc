import React from "react";
import { Dashboard, Content, Sale, Licensed, Setting, Logout } from "@/svgicon";
import Link from "next/link";



const Item = ({title}) => {
  return (
    <li className=" text-[#E6E6E6] text-base font-semibold italic transition-all  hover:scale-110  duration-200 ease-in ">{title}</li> 
  );
};

export default Item;
