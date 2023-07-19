import React from "react";
import feature_blog from "../../../public/assests/feature_blog.png";
import Image from "next/image";
import Typography from "../typography";
import { Download, FavoriteSvg, More_vertSvg, VerifiedSvg } from "@/svgicon";
import { Button } from "../button";

const MusicSingle = () => {
  return (
    <div>
      <main className="flex  items-center justify-center sm:px-10">
        <article className="flex lg:flex-row flex-col overflow-hidden rounded-2xl w-full bg-[#272727] p-10">
          <div className="">
            <Image src={feature_blog} className=" h-auto" />
            <p className=" text-white_300 text-[22px] capitalize mb-6 font-semibold mt-4">
              How Could You Leave Us?
            </p>
            <div className="flex gap-3">
              <p
                variant={"h4"}
                className=" text-white text-xl flex items-center   sm:gap-3 gap-0.5  sm:pl-0  "
              >
                Olive James{" "}
                <span className="mt-1">
                  <VerifiedSvg />
                </span>
              </p>
              <Button
                variant={"secondary"}
                className="font-normal  text-[18px]  sm:text-[24px] px-8  sm:px-5 py-1 sm:py-0  border-white border"
              >
                follow
              </Button>
            </div>
          </div>

          <div className=" w-full overflow-hidden rounded-2xl ">
            <div className="h-full w-full bg-cover bg-center">
              <div className="h-full w-full">
                <header className="space-y-4 lg:px-10">
                  <Typography
                    variant={"h2"}
                    className=" text-white_300  capitalize mb-6 font-semibold mt-10"
                  >
                    How Could You Leave Us?
                  </Typography>

                  <div className=" flex items-center justify-between sm:justify-start flex-wrap gap-2 sm:gap-10 text-[14px] sm:text-[18px] mt-10">
                    <div className=" flex items-center text-[#ACACAC]  font-medium">
                      Plays:
                      <span className="text-[#text-whit_100] ml-1 font-light">
                        865k
                      </span>
                    </div>
                    <div className=" flex items-center text-[#ACACAC]  font-medium">
                      <FavoriteSvg />
                      <span className="text-[#text-whit_100] ml-1 font-light">
                        269k
                      </span>
                    </div>
                    <div className=" flex items-center text-[#ACACAC]  font-medium">
                      <Download />
                      <span className="text-[#text-whit_100] ml-1 font-light">
                        26
                      </span>
                    </div>
                    <div className=" flex items-center text-[#ACACAC]  font-medium">
                      <More_vertSvg />
                    </div>
                  </div>

                  <div className=" flex items-center justify-around sm:justify-start flex-wrap gap-2 sm:gap-10 text-[14px] sm:text-[18px] mt-10">
                    <span className="text-[#ACACAC] ml-1 font-light">
                      Hip Hop
                    </span>

                    <span className="text-[#ACACAC]  ml-1 font-light">Rap</span>

                    <span className="text-[#ACACAC]  ml-1 font-light">
                      Modern Hip Hop
                    </span>
                  </div>

                  <div className=" flex items-center justify-around sm:justify-start flex-wrap gap-2 sm:gap-10 text-[14px] sm:text-[18px] mt-10">
                    <span className="text-[#ACACAC] ml-1 font-light">
                      865 BMP
                    </span>

                    <span className="text-[#ACACAC]  ml-1 font-light">
                      F # M
                    </span>

                    <span className="text-[#ACACAC]  ml-1 font-light">
                      3:15
                    </span>
                    <span className="text-[#ACACAC]  ml-1 font-light">
                      2015
                    </span>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default MusicSingle;
