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
        <h1 className="font-normal sm:text-[80px] text-[48px] text-center font-AmsiProNarw-BI">
          <span className="text-white   uppercase  ">EXPLORE OUR </span>
          <span className=" uppercase text-[#D8EB55]">BEASTSTORE</span>
        </h1>
      </div>
      <Typography
        variant="h2"
        className="mb-8 px-10 text-center text-[#C3C3C3] mt-4 font-normal  font-AmsiPro-L text-[16px] md:text-[24px]"
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
                <div className="flex  flex-col justify-center items-center transition-all  hover:scale-110  duration-200 ease-in ">
                <Link href={"/artist"}>
                  <Image
                    src={song.image}
                    className="  "
                  />
                  </Link>
                   <div className="text-white_300 text-16 sm:text-[18px] font-normal ">
                  <h2 className="font-AmsiPro-SB">{song.title}</h2>
                  <div className="flex text-[#ADADAD] items-center gap-2  ">
                    <span className="font-AmsiPro-L">{song.name}</span>{" "}
                    <span className="">{song.icon}</span>
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
                  "  rounded-full      px-8  sm:px-12  py-3 sm:py-3"
                }
              >
                START SELLING
              </Button>
            </div>
    </>
  );
};

export default BeastStore;
