import React from "react";
import Typography from "../typography";
import RightIcon from "../icon/RightIcon";
import { Button } from "../button";
import Image from "next/image";
import alien from "../../../public/assests/icon/alien.png";
import alien2 from "../../../public/assests/icon/alien2.png";

const Price = () => {
  return (
    <section className="bg-[#131313]">
      <div className="py-8 px-4 mx-auto  lg:py-10 lg:px-6">
        Header sec
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <p  className="text-white font-bold text-6xl" >
        Start For Free, Then <br/> Upgrade Anytime.
              </p>
         <Typography variant="h3" className="text-[#C3C3C3] font-normal mt-8 mb-28 ">Try Lowfied for free, no credit card required.</Typography>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0">
            {/* 1st card  */}
          <div className="flex flex-col p-6 mx-auto w-80 text-start  bg-[#272727] text-white">
            <div className="flex items-center gap-2">
              <Image src={alien} alt="alt" />
              <Typography variant="h2" className="text-[#D8EB55]">
                {" "}
                Flow{" "}
              </Typography>
            </div>

            <Typography variant="h3" className="font-normal mt-6">
              What's include
            </Typography>

            <ul role="list" className="mb-8 space-y-4 text-left my-10">
              <li className="flex items-center space-x-3">
                <RightIcon />

                <span>Upload 10 Beats</span>
              </li>
              <li className="flex items-center space-x-3">
                <RightIcon />

                <span>2GB Storage</span>
              </li>
              <li className="flex items-center space-x-3">
                <RightIcon />

                <span>Upload 10 Beats</span>
              </li>
              <li className="flex items-center space-x-3">
                <RightIcon />

                <span>2GB Storage</span>
              </li>
            </ul>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-4xl font-extrabold text-[#D8EB55]">
                Free Forever
              </span>
            </div>

            <button className="bg-[#1C1C1C] rounded-lg font-semibold text-[20px] sm:text-[24px] px-8 sm:px-12 py-1 sm:py-3">
              Choose
            </button>
            {/* <Button
              className={
                "  font-semibold text-[20px]  sm:text-[24px] px-8  sm:px-12  py-1 sm:py-3"
              }
            >
              Follow
            </Button> */}
          </div>

          {/* 2nd card  */}

          <div className="flex justify-between flex-col p-6 mx-auto w-80 text-start relative bottom-10 h-full bg-[#272727] text-white">
            <div>
              <div className="flex items-center gap-2">
                <Image src={alien2} alt="alt" />
                <Typography variant="h2" className="text-[#D8EB55]">
                  {" "}
                  Flow{" "}
                </Typography>
              </div>

              <Typography variant="h3" className="font-normal mt-6">
                What's include
              </Typography>

              <ul role="list" className="mb-8 space-y-4 text-left my-10">
                <li className="flex items-center space-x-3">
                  <RightIcon />

                  <span>Upload 10 Beats</span>
                </li>
                <li className="flex items-center space-x-3">
                  <RightIcon />

                  <span>2GB Storage</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-4xl font-extrabold text-[#D8EB55]">
                  Rs . 999/mo
                </span>
              </div>

              <Button
                className={
                  "  font-semibold w-full text-[20px]  sm:text-[24px] px-8  sm:px-12  py-1 sm:py-3"
                }
              >
                Choose
              </Button>
            </div>
          </div>
          {/* 3rd card  */}
          <div className="flex justify-between flex-col p-6 mx-auto w-80 text-start  bg-[#272727] text-white">
            <div>
              <div className="flex items-center gap-2">
                <Image src={alien} alt="alt" />
                <Typography variant="h2" className="text-[#D8EB55]">
                  {" "}
                  Flow{" "}
                </Typography>
              </div>

              <Typography variant="h3" className="font-normal">
                What's include
              </Typography>

              <ul role="list" className="mb-8 space-y-4 text-left my-10">
                <li className="flex items-center space-x-3">
                  <RightIcon />

                  <span>Upload 10 Beats</span>
                </li>
                <li className="flex items-center space-x-3">
                  <RightIcon />

                  <span>2GB Storage</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-4xl font-extrabold text-[#D8EB55]">
                  Rs . 999/mo
                </span>
              </div>

              <button className="bg-[#1C1C1C] w-full rounded-lg font-semibold text-[20px] sm:text-[24px] px-8 sm:px-12 py-1 sm:py-3">
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
