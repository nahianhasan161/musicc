import React from "react";
import feature_blog from "../../../public/assests/feature_blog.png";
import Image from "next/image";
import Typography from "../typography";
import calender from "../../../public/assests/icon/calender.png";
import { KeyDownvertSvg } from "@/svgicon";
import Link from "next/link";
const BlogCard = () => {
  return (
    <>
      <div className=" flex justify-between sm:mx-10 mx-4 sm:mb-24 mb-8 mt-10 ">
        <Typography variant={"h1"} className="sm:text-3xl text-xl text-white_300 font-bold italic">
          Featured Playlists
        </Typography>
        <div>
          <button className=" bg-bt_color flex items-center px-3 gap-2 text-white_300 py-2 ">
            Hide <KeyDownvertSvg />
          </button>
        </div>
      </div>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-gray-900 sm:mx-10 mx-4 gap-6">
        <card className="w-full flex flex-col">
          <div className="relative">
            <Link href="/singleblog">
              <Image src={feature_blog} className="h-auto" />
            </Link>

            <Typography
              variant={"h3"}
              className=" text-white_300 italic capitalize mb-6 text-[27px] mt-10"
            >
              Dealing With Societal Pressure As A Musician in India?
            </Typography>
            <div className="flex flex-row gap-4">
              <a href="#">
                <img
                  src="https://picsum.photos/seed/1/40/40"
                  className="rounded-full h-6 "
                />
              </a>

              <div className="flex flex-col justify-center items-center">
                <a href="#">
                  <Typography
                    variant="h3"
                    className="text-[#ADADAD] text-sm font-normal whitespace-nowrap"
                  >
                    Jecia Koli
                  </Typography>
                </a>
              </div>
              <a href="#">
                <Image src={calender} className=" sm:h-6 h-4 sm:w-6 w-4 mt-1" />
              </a>

              <div className="flex flex-col  justify-center">
                <a href="#">
                  <Typography
                    variant="h3"
                    className="text-[#ADADAD] text-sm font-normal whitespace-nowrap"
                  >
                    02 December 2023
                  </Typography>
                </a>
              </div>
            </div>

            <p className="mb-8 sm:text-[27px] sm:leading-[37px] font-light text-start text-stone-300 mt-4">
              Dynamically underwhelm integrated outsourcing via timely models.
            </p>
          </div>
        </card>

        <card className="w-full flex flex-col">
          <div className="relative">
            <a href="#">
              <Image src={feature_blog} className=" h-auto" />
            </a>

            <Typography
              variant={"h3"}
              className=" text-white_300 italic capitalize mb-6 text-[27px] mt-10"
            >
              Dealing With Societal Pressure As A Musician in India?
            </Typography>
            <div className="flex flex-row gap-4">
              <a href="#">
                <img
                  src="https://picsum.photos/seed/1/40/40"
                  className="rounded-full h-6 "
                />
              </a>

              <div className="flex flex-col justify-center items-center">
                <a href="#">
                  <Typography
                    variant="h3"
                    className="text-[#ADADAD] text-sm font-normal whitespace-nowrap"
                  >
                    Jecia Koli
                  </Typography>
                </a>
              </div>
              <a href="#">
                <Image src={calender} className=" sm:h-6 h-4 sm:w-6 w-4 mt-1" />
              </a>

              <div className="flex flex-col  justify-center">
                <a href="#">
                  <Typography
                    variant="h3"
                    className="text-[#ADADAD] text-sm font-normal whitespace-nowrap"
                  >
                    02 December 2023
                  </Typography>
                </a>
              </div>
            </div>

            <p className="mb-8 sm:text-[27px] sm:leading-[37px]font-light text-start text-stone-300 mt-4">
              Dynamically underwhelm integrated outsourcing via timely models.
            </p>
          </div>
        </card>

        <card className="w-full flex flex-col">
          <div className="relative">
            <a href="#">
              <Image src={feature_blog} className=" h-auto" />
            </a>

            <Typography
              variant={"h3"}
              className=" text-white_300 italic capitalize mb-6 text-[27px] mt-10"
            >
              Dealing With Societal Pressure As A Musician in India?
            </Typography>
            <div className="flex flex-row gap-4">
              <a href="#">
                <img
                  src="https://picsum.photos/seed/1/40/40"
                  className="rounded-full h-6 "
                />
              </a>

              <div className="flex flex-col justify-center items-center">
                <a href="#">
                  <Typography
                    variant="h3"
                    className="text-[#ADADAD] text-sm font-normal whitespace-nowrap"
                  >
                    Jecia Koli
                  </Typography>
                </a>
              </div>
              <a href="#">
                <Image src={calender} className=" sm:h-6 h-4 sm:w-6 w-4 mt-1" />
              </a>

              <div className="flex flex-col  justify-center">
                <a href="#">
                  <Typography
                    variant="h3"
                    className="text-[#ADADAD] text-sm font-normal whitespace-nowrap"
                  >
                    02 December 2023
                  </Typography>
                </a>
              </div>
            </div>

            <p className="mb-8 sm:text-[27px] sm:leading-[37px] font-light text-start text-stone-300 mt-4">
              Dynamically underwhelm integrated outsourcing via timely models.
            </p>
          </div>
        </card>
      </div>{" "}
    </>
  );
};

export default BlogCard;
