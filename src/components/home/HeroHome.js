import React from "react";
import { Heading } from "../heading/Heading";
import { SearchHome } from "../search/Search";
import Image from "next/image";
const HomeHero = () => {
  return (
    <section className="bg-black ml-2">
      <div className="flex max-w-screen-xl px-4 sm:px-[5rem]  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* increased the font */}
        <div className="flex flex-col  leading-[60px]">
          <Heading text="WE" fontWeight="font-bold" />
          <Heading text="ARE" fontWeight="font-bold" />
          <Heading text2="LOWFIED" fontWeight="font-bold" />
           <div className="w-80">
          <SearchHome />
        </div>
        </div>
       

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
