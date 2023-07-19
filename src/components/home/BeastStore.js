import React from "react";
import { NewRealse, PlaySvg } from "@/svgicon";
import SongImage from "../../../public/assests/image 6.png";
import Image from "next/image";
import Typography from "../typography";
import { Heading } from "../heading/Heading";
import { Button } from "../button";
import Link from "next/link";

const BeastStore = () => {
  const playlist = [
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
  ];
  const smililarTrack = [
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
  ];
  return (
    <>
      {/* header section  */}
      <div className="flex justify-center">
        <h1 className="font-bold sm:text-[80px] text-[40px] text-center italic">
          <span className="text-white   uppercase  ">EXPLORE OUR </span>
          <span className=" uppercase text-[#D8EB55]">BEASTSTORE</span>
        </h1>
      </div>
      <Typography
        variant="h2"
        className="mb-8 px-10 sm:text-lg text-xs sm:font-normal  text-center text-[#C3C3C3] mt-4 "
      >
        We know that finding the right beat for your project can be a challenge,
        which is <br className="sm:flex hidden" /> why we offer our wide
        selection of beats, sorted by genre, mood, and tempo.
      </Typography>

      {/* playlist section  */}
      <div className=" flex justify-center items-center ">
      
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:gap-16 gap-y-20 gap-3  grid-cols-2 justify-center items-center ">
          {playlist.map((song, i) => {
            return (
              <div
                key={i}
                className="sm:w-[208px] sm:h-[208px] rounded-3xl w-[143px] h-[143px]"
              >
                <div className="flex  flex-col justify-center items-center">
                <Link href={"/artist"}>
                  <Image
                    src={song.image}
                    className="  "
                  />
                  </Link>
                   <div className="text-white_300">
                  <h2>{song.title}</h2>
                  <div className=" items-center gap-2">
                    <span className="font-light">{song.name}</span>{" "}
                    <span className="font-light">{song.icon}</span>
                  </div>
                </div>
                </div>  
              </div>
            );
          })}
        </div>
        
      </div>
      <div className="  text-center sm:px-10 px-4 mt-24">
              <Button
                className={
                  " italic rounded-full  font-semibold text-[20px]  sm:text-[24px] px-8  sm:px-12  py-3 sm:py-3"
                }
              >
                START SELLING
              </Button>
            </div>
    </>
  );
};

export default BeastStore;
