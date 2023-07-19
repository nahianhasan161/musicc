import React from "react";
import Typography from "../typography";
import Slider from "../slider";
import { KeyDownvertSvg, NewRealse } from "@/svgicon";
import SongImage from "../../../public/assests/image 6.png";

const FeaturePlaylists = () => {
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
  return (
    <div>
      <div className=" mt-20 ">
        <div className=" flex justify-between">
          <Typography variant={"h1"} className=" sm:text-2xl text-xl text-white_300 font-bold italic">
            Featured Playlists
          </Typography>
          <div>
            <button className=" bg-bt_color flex items-center px-3 gap-2 text-white_300 py-2 ">
              Hide <KeyDownvertSvg />
            </button>
          </div>
        </div>
        <div className=" mt-4 sm:mt-10">
          <Slider playlist={playlist} />
        </div>
      </div>
    </div>
  );
};

export default FeaturePlaylists;
