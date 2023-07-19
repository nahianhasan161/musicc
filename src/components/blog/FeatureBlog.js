import React from "react";
import Typography from "../typography";
import feature_blog from "../../../public/assests/feature_blog.png";
import calender from "../../../public/assests/icon/calender.png";
import Image from "next/image";
import Link from "next/link";

const FeatureBlog = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="py-24 mx-auto">
        <div className="sm:px-10 px-4 mx-auto flex sm:flex-row flex-col-reverse justify-between flex-wrap">
          <Typography
            variant={"h1"}
            className="text-white_300 italic capitalize mb-6"
          >
            Feature Upload
          </Typography>
          
          <div className="lg:w-1/2 w-full  lg:py-6 mt-6 lg:mt-0 flex flex-col  justify-center items-start gap-6">
            <Link href={"/singleblog"}>
            <p className="mb-8 md:text-5xl text-2xl font-bold text-start text-white">
              I Created a Rap Video - Here's What I Learned from it. Check it
              out
            </p>
            </Link>

            <div className="flex justify-center items-center flex-row  gap-4">
            <Link href={"/singleblog"}>
                <img
                  src="https://picsum.photos/seed/1/40/40"
                  className="rounded-full max-h-10 max-w-10"
                />
              </Link>

              <div className="flex flex-col justify-center items">
                <a href="#">
                  <p className="text-[#ADADAD]   whitespace-nowrap">
                    Jecia Koli
                  </p>
                </a>
              </div>
              <a href="#">
                <Image src={calender} className=" h-6 w-6 mt-2" />
              </a>

              <div className="flex flex-col  justify-center">
                <a href="#">
                  <p className="text-[#ADADAD]  whitespace-nowrap ">
                    02 December 2023
                  </p>
                </a>
              </div>
            </div>

            <p className="mb-8 sm:text-[27px] sm:leading-[37px] font-light text-start text-stone-300 ">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely <br /> streamline functionalized
              models
            </p>
          </div>
          <Image
            alt="ecommerce"
            className="lg:w-[450px] w-full lg:h-auto h-64 object-cover object-center rounded"
            src={feature_blog}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureBlog;
