import {
  Currency,
  Download,
  FavoriteSvg,
  NewRealse,
  PlaySvg,
  ShoppingBag,
} from "@/svgicon";
import Image from "next/image";
import React from "react";
import { MdMoreVert, MdTune } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import Picture from "../../../public/assests/image 12.png";
import Typography from "../typography";
import Sorting from "./Sorting";
import Link from "next/link";

const Songs = () => {
  return (
    <div className="  mt-[3rem] sm:mt-[5em] sm:border-t-2 sm:border-gray-500  ">
      {/* for desktop */}
      <div className="mt-">
        <Sorting />
      </div>

      {/* for mobile  */}

      <div className="sm:hidden flex justify-between item-center transition-all  duration-200 ease-in">
        <div>
          <MdTune className=" text-white_300 text-2xl" />
        </div>
        <div>
          <span className="text-[15px] font-light  text-white_100">
            Sort by:
          </span>
        </div>
      </div>
            <Link href={"/artist"} className="cursor-pointer ">
      <div className="  mt-20 text-white_300 px-2 sm:px-8   flex justify-between items-center p-3  hover:ring hover:scale-105 ">
        <div className="flex  items-center justify-between gap-4 sm:gap-10">
          <div className="text-[18px] hidden sm:block font-semibold">1</div>
          <div className=" w-[50px] h-[50px] rounded-[4px]">
            <Image
              src={Picture}
              className=" object-cover w-full h-full"
              alt="pic"
            />
          </div>
          <div>
            <Typography
              varient={"h4"}
              className=" font-bold smtext-base leading-[21px]"
              >
              Pride Is A Devil
            </Typography>
            <div className=" flex items-center gap-3">
              <span className=" font-light text-[#text-whit_100]">J Cole</span>{" "}
              <span className=" w-2 h-2">
                <NewRealse />
              </span>
            </div>
          </div>
        </div>
              
        <div className="block sm:hidden">
          <MdMoreVert className=" text-xl text-white_300" />
        </div>
        <div className=" hidden  sm:flex gap-4 items-center">
          <div>
            <ul className=" flex  gap-4 font-light text-[#text-whit_100]">
              <li>Hip Hop</li>
              <li>94 BPM</li>
              <li>F#m</li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <ul className=" flex items-center  gap-5">
              <li>
                <Download />
              </li>
              <li>
                <FavoriteSvg />
              </li>
              <li>
                <button className="  px-3 py-2 flex  items-center gap-4 rounded-[6px] bg-[#272727]">
                  <div>
                    {" "}
                    <ShoppingBag />
                  </div>
                  <div className=" flex items-center">
                    <Currency /> 1999
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Link>
      <div className="mt-8 text-white_300 px-2 sm:px-8 flex justify-between items-center p-3 hover:ring hover:scale-105 ">
        <div className="flex  items-center justify-between gap-4 sm:gap-10">
          <div className="text-[18px] hidden sm:block font-semibold">2</div>
          <Link href={"/artist"}>
          <div className=" w-[50px] h-[50px] rounded-[4px]">
            <Image
              src={Picture}
              className=" object-cover w-full h-full"
              alt="pic"
            />
          </div>
          </Link>
          <div>
            <Typography
              varient={"h4"}
              className=" font-bold smtext-base leading-[21px]"
            >
              Pride Is A Devil
            </Typography>
            <div className=" flex items-center gap-3">
              <span className=" font-light text-[#text-whit_100]">J Cole</span>{" "}
              <span className=" w-2 h-2">
                <NewRealse />
              </span>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <MdMoreVert className=" text-xl text-white_300" />
        </div>
        <div className=" hidden  sm:flex gap-4 items-center">
          <div>
            <ul className=" flex  gap-4 font-light text-[#text-whit_100]">
              <li>Hip Hop</li>
              <li>94 BPM</li>
              <li>F#m</li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <ul className=" flex items-center  gap-5">
              <li>
                <Download />
              </li>
              <li>
                <FavoriteSvg />
              </li>
              <li>
                <button className="  px-3 py-2 flex  items-center gap-4 rounded-[6px] bg-[#272727]">
                  <div>
                    {" "}
                    <ShoppingBag />
                  </div>
                  <div className=" flex items-center">
                    <Currency /> 1999
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" mt-3 bg-black_100 py-4 sm:py-8 px-2 sm:px-4  rounded-[5px] text-white_300 flex justify-between items-center">
            <div className="flex items-center gap-7">
              <div className=" hidden sm:block">
                <PlaySvg />
              </div>
              <Link href={"/artist"}>
              <div className=" w-[50px] h-[50px] rounded-[4px]">
                <Image
                  src={Picture}
                  className=" object-cover w-full h-full"
                  alt=""
                />
              </div>
              </Link>
              <div>
                <h4 className=" font-bold text-base leading-[21px]">
                  Pride Is A Devil
                </h4>
                <div className=" flex items-center gap-3">
                  <span className=" font-light text-[#text-whit_100]">
                    J Cole
                  </span>{" "}
                  <span className=" w-2 h-2">
                    <NewRealse />
                  </span>
                </div>
              </div>
            </div>
            <div className="block sm:hidden">
              <MdMoreVert className=" text-xl text-white_300" />
            </div>
            <div className=" hidden sm:flex gap-4 items-center">
              <div>
                <ul className=" flex gap-4 font-light text-[#text-whit_100]">
                  <li>Hip Hop</li>
                  <li>94 BPM</li>
                  <li>F#m</li>
                </ul>
              </div>
              <div>
                <ul className=" hidden sm:flex items-center  gap-5">
                  <li>
                    <Download />
                  </li>
                  <li>
                    <FavoriteSvg />
                  </li>
                  <li>
                    <button className="  px-3 py-2 flex  items-center gap-4 rounded-[6px] bg-[#272727]">
                      <div>
                        {" "}
                        <ShoppingBag />
                      </div>
                      <div className=" flex items-center">
                        <Currency /> 1999
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Songs;
