import React from 'react'
import Typography from '../typography';
import Image from 'next/image';
import { More_vertSvg, NewRealse } from '@/svgicon';
import SongImage from "../../../public/assests/image 6.png";

const LatestUpload = () => {
  const latestUpload = [
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
    <div className="mt-10">
    <Typography variant={"h1"} className=" sm:text-2xl text-xl text-white_300 italic capitalize">
      Latest Upload
    </Typography>
    <div className=" mt-6">
      <div className=" grid  sm:grid-cols-6 gap-10">
        {latestUpload.map((track, i) => {
          return (
            <div className="w-full h-[280px]" key={i}>
              <div className="  bg-slate-950 rounded-tl-[5px] rounded-tr-[5px] overflow-hidden  w-full sm:h-[208px] h-[240px]">
                <Image
                  src={track.image}
                  height={200}
                  width={200}
                  className=" object-cover w-full h-full"
                  alt="track"
                />
              </div>
              <div className="  flex justify-between items-center  text-white_300  rounded-bl-[5px] px-2 py-3 rounded-br-[5px] bg-[#2F2F2F]">
                <div>
                  <h4 className=" font-bold">{track.title}</h4>
                  <span className=" font-light">Alt Kid</span>
                </div>
                <div>
                  <More_vertSvg />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default LatestUpload
