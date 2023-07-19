import React from "react";
import Typography from "../typography";
import Image from "next/image";
import calender from "../../../public/assests/icon/calender.png";
import feature_blog from "../../../public/assests/feature_blog.png";

const SingleBlogHero = () => {
  return (
    <section className="sm:px-10 px-4  text-gray-600 body-font overflow-hidden">
      <div className="sm:py-24 mx-auto">
        <div className=" mx-auto flex justify-between flex-wrap">
          <Typography
            variant={"h1"}
            className=" text-white_300 italic capitalize mb-6"
          >
            Feature Upload
          </Typography>
          <div className="lg:w-3/4 w-full  lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center items-start gap-6">
            <p className="mb-8 sm:text-5xl text-2xl font-bold text-start text-white">
              I Created a Developer Rap Video - Here's What I Learneds
            </p>

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
            <Image
              alt="ecommerce"
              className=" w-full lg:h-auto h-64 object-cover object-center rounded"
              src={feature_blog}
            />
            <p className="mb-8 xl:text-[27px] sm:leading-[37px] font-light text-start text-stone-300 ">
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt on Lieutenant Worf. Could someone
              survive inside a transporter buffer for 75 years? Fate. It
              protects fools, little children, and ships.
            </p>

            <p className="mb-8 sm:text-5xl text-xl font-bold text-start text-white">
              I Created a Developer Rap Video - Here's What I Learneds
            </p>
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

              <div className="flex flex-col justify-center">
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

            <p className="sm:mb-8 sm:text-[27px] sm:leading-[37px] font-light text-start text-stone-300 ">
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt on Lieutenant Worf. Could someone
              survive inside a transporter buffer for 75 years? Fate. It
              protects fools, little children, and ships.
            </p>
          </div>

          <div className="md:flex hidden flex-col  gap-4">
            <div className="flex  justify-between  ">
              <Typography variant="h3" className="text-white font-normal">
                Lowfied Originals
              </Typography>
              <div>
                <Typography variant="h3" className="text-white font-normal">
                  09
                </Typography>
              </div>
            </div>

            <div className="flex w-80 justify-between">
              <Typography variant="h3" className="text-white font-normal">
                Mixing & Mastering Tips
              </Typography>
              <div>
                <Typography variant="h3" className="text-white font-normal">
                  09
                </Typography>
              </div>
            </div>

            <div className="flex w-80 justify-between">
              <Typography variant="h3" className="text-white font-normal">
                How-To Series
              </Typography>
              <div>
                <Typography variant="h3" className="text-white font-normal">
                  09
                </Typography>
              </div>
            </div>
            <div className="flex w-80 justify-between">
              <Typography variant="h3" className="text-white font-normal">
                Music Industry
              </Typography>
              <div>
                <Typography variant="h3" className="text-white font-normal">
                  09
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogHero;
