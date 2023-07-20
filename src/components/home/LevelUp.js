import React from "react";
import Typography from "../typography";
import levelup from "../../../public/assests/level-up.png";
import onestop from "../../../public/assests/one-stop.png";
import SongImage from "../../../public/assests/image 6.png";
import Image from "next/image";
import { Heading } from "../heading/Heading";
import { Button } from "../button";
import Link from "next/link";

const LevelUp = () => {
  return (
    <>
     <section className="text-gray-600 body-font overflow-hidden">
      <div className="container py-24 mx-auto">
        <div className="sm:px-10 px-4 mx-auto flex flex-wrap">
         
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center items-start gap-6">
            <div className="leading-[55px] text-start">
              <Heading text="LEVEL UP WITH" fontWeight="font-semibold" font="font-AmsiProNarw-BI" fontSize="text-[72px]"/>
              <Heading text2="LOWFIED"  fontWeight="font-semibold" font="font-AmsiProNarw-BI" fontSize="text-[72px]"/>
            </div>

            <div className="sm:w-full w-11/12 ">
              <Typography
                variant="p"
                className="mb-8  text-start "
              >
                Discover the best beats in one place. Search and purchase tracks
                easily.
              </Typography>

              <Typography
                variant="p"
                className=" "
              >
                Join our community and never miss a beat.
              </Typography>
       
            </div>
            <div className="sm:mx-0  mb-10">
            <Link href={"/seller"}>
              <Button
                className={
                  "  rounded-full   px-8  sm:px-12  py-3 sm:py-3"
                }
              >
                START SELLING
              </Button>
              </Link>
            </div>
          </div>
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded"
            src={levelup}
          />
        </div>
      </div>
    </section>
    {/* level up */}
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container  mx-auto">
        <div className="sm:px-10 px-4 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded"
            src={onestop}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center items-start gap-6">
            <div className="leading-[55px] text-start">
              <Heading text="one step"  font="font-AmsiProNarw-BI"/>
              <Heading text2="Beat Shop!"  font="font-AmsiProNarw-BI"/>
            </div>

            <div className="">
              <Typography
                variant="p"
                className="mb-8 text-lg font-normal text-start text-stone-300 "
              >
                Discover the best beats in one place. Search and purchase tracks
                easily.
              </Typography>

              <Typography
                variant="p"
                className="mb-8 text-base font-normal text-start text-stone-300 "
              >
                Join our community and never miss a beat.
              </Typography>
            </div>
            <div className="sm:mx-0 ">
            <Link href={"/tracks"}>
              <Button
                className={
                  "rounded-full  px-8  sm:px-12  py-3 sm:py-3"
                }
              >
                EXPLORE
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
};

export default LevelUp;
