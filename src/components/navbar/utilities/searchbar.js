import React from "react";
import { Dashboard, Content, Sale, Licensed, Setting, Logout } from "@/svgicon";
import Link from "next/link";



const Searchbar = ({title}) => {
  return (
    <>
      <form action="" className="relative mx-auto w-max">
    <input type="search" placeholder="Are you lost?" className="peer relative z-10 h-12 w-12 cursor-pointer rounded-full  bg-transparent pl-12 outline-none transition-all duration-300 focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4 transition-all duration-300 hover:border" />
     <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-slate-100 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
   
  
           
  </form>
    </> 
  );
};

export default Searchbar;
