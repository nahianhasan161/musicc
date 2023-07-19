import React from "react";
import { Heading } from "../heading/Heading";
import { SearchHome } from "../search/Search";
import Image from "next/image";
import downIcon from "/src/svgicon/keyboard_arrow_down.svg"
import { Button } from "../button";

import {FaArrowDown} from "react-icons/fa"
import Link from "next/link";
const HomeHero = () => {
  return (
    <section className="bg-black ml-2">
      <div className="flex max-w-screen-xl px-4 sm:px-[5rem]  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        {/* increased the font */}
        <div className="flex flex-col  leading-[60px]">
          <Heading text="WE" fontWeight="font-bold" />
          <Heading text="ARE" fontWeight="font-bold" />
          <Heading text2="LOWFIED" fontWeight="font-bold" />
           <div className="w-80">
          <SearchHome />
        </div>
        </div>
       

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ml-auto w-[30rem]">
        {/*   <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          /> */}
         {/*  color: #E6E6E6;
font-family: AmsiProNarw-BoldItalic;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase; */}
           <div className="text-[20px] font-bold uppercase text-white space-y-8">
            <div className="flex gap-3 items-center justify-between  text-[20px] pr-10 ">

           <Button
                className={
                  "italic rounded-full  font-semibold text-[20px]  sm:text-[24px] px-4  sm:px-4  py-3 sm:py-3 flex items-center gap-5"
                }
                >
                GENRE<FaArrowDown/>
              </Button>
            <p className="">MOOD</p>
            <p className="">BPM</p>
           </div>
           <div className="flex justify-between items-center">
            <div className="flex flex-col gap-5">
          
            <h1 className="text-4xl font-bold italic ">50+</h1>
            <p className="font-light text-[#C3C3C3] text-base">
            A community of more than 50+ music producers.
            </p>
            </div>
            <div className="flex flex-col gap-5">

         
            <h1 className="text-4xl font-bold italic ">1000+</h1>
            <p className="font-light text-[#C3C3C3] text-base">And a catalogue of over 1000+ beats which updates, daily!</p>
            </div>
           </div>
           <Link href={"/tracks"} className="cursor-pointer">
                <Button
                className={
                  " italic rounded-full w-full  font-semibold text-[20px]  sm:text-[24px] px-4  sm:px-8  py-3 sm:py-3 flex items-center gap-5 justify-center"
                }
                >
                Explore 
                </Button>
                </Link>
                </div>
        </div> 
       {/*  <section>
          <div>
            <p>Genre <label></label> </p>
          </div>
        </section> */}
        
      </div>
    </section>
  );
};
export default HomeHero;
