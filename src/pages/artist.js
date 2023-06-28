import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { Button } from "@/components/button";
import Typography from "@/components/typography";
import Profile from "../../public/assests/DP.png";
import SongImage from "../../public/assests/image 6.png";
import Picture from "../../public/assests/image 12.png";
import Cover from "../../public/assests/c.png"
import { songsdata } from '@/datalist/audio';

import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdVolumeUp,
  MdPlayArrow,
  MdRepeat,
  MdShoppingBag,
  MdTune,
  MdPause,
  MdMoreVert
} from "react-icons/md";
import {
  VerifiedSvg,
  InstSvg,
  TwitterSvg,
  SpotifySvg,
  FavoriteSvg,
  More_vertSvg,
  KeyDownvertSvg,
  NewRealse,
  Download,
  ShoppingBag,
  Currency,
  PlaySvg,
  AudioWave
} from "@/svgicon";

import Slider from "@/components/slider";
import { classNames } from '@/helper/classNames';
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
const Artist = () => {

  const audioRef = useRef(null);
  const [songs, setSongs] = useState(songsdata[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {

      audioRef.current.pause()
    }

  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };


  return (
    <div>
      <div className=" px-5 container mx-auto w-full pt-6  sm:pt-28 ">
        <div className=" h-[185px]  sm:h-[300px]   w-full pt-[94px]  sm:pt-48  bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="  w-full  ">
            <div className=" flex  items-center justify-center  sm:flex-row  sm:justify-between pl-3">
              <div className="  flex flex-col sm:flex-row sm:gap-10 ">
                <div className=" flex justify-center   sm:justify-start">


                  <div className="  bg-black rounded-full sm:ml-0  h-[145px] w-[145px] sm:h-[250px] sm:w-[250px]">
                    <Image
                      src={Profile}
                      height={500}
                      width={500}
                      className=" object-cover w-full h-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-white_300   sm:mt-[8rem]  ">
                  <div className="flex items-center  justify-center  sm:justify-start sm:flex-none">
                    <div>
                      <Typography variant={"h1"} className="  text-center  flex items-center  gap-3  sm:pl-0 font-bold ">Olive James  <span>
                        <VerifiedSvg />
                      </span></Typography>
                    </div>


                  </div>
                  <div className=" text-center sm:text-left" >@OliveJamesMusic</div>
                  <p className=" pt-3 text-center  sm:text-left text-[1rem] sm:text-[20px] font-light leading-[23px]">
                    Multi platinum Record Producer <br />
                    .Drake, Kendrik Lamar, Joyner.
                  </p>
                  <div className=" gap-6 item-center justify-center sm:justify-start  flex  mt-4 sm:mt-8">
                    <span>
                      <InstSvg />
                    </span>
                    <span>
                      <TwitterSvg />
                    </span>
                    <span>
                      <SpotifySvg />
                    </span>
                  </div>
                </div>
              </div>
              <div className=" hidden mt-4  sm:block ">
                <Button
                  className={"ml-6  font-semibold text-[20px]  sm:text-[24px] px-8  sm:px-12  py-1 sm:py-3"}
                >
                  Follow
                </Button>
                <Button
                  variant={"secondary"}
                  className=" ml-6  font-semibold  text-[20px]  sm:text-[24px] px-8  sm:px-12 py-1 sm:py-3"
                >
                  Message
                </Button>
              </div>
            </div>
            <div className=" flex items-center justify-center sm:justify-start flex-wrap gap-2 sm:gap-10 text-[14px] sm:text-[18px] mt-10">
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                Following:
                <span className="text-[#text-whit_100] ml-1 font-light">2,080</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                Followers::
                <span className="text-[#text-whit_100] ml-1 font-light">70.8k</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                Tracks:
                <span className="text-[#text-whit_100] ml-1 font-light">186</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                Plays:
                <span className="text-[#text-whit_100] ml-1 font-light">865k</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                <FavoriteSvg />
                <span className="text-[#text-whit_100] ml-1 font-light">269k</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                <More_vertSvg />
              </div>
            </div>
            <div className="flex mt-10 sm:hidden  ">
              <Button
                className={"ml-6  font-semibold text-[20px]  sm:text-[24px] px-8  sm:px-12  py-1 sm:py-3"}
              >
                Follow
              </Button>
              <Button
                variant={"secondary"}
                className=" ml-6  font-semibold  text-[20px]  sm:text-[24px] px-8  sm:px-12 py-1 sm:py-3"
              >
                Message
              </Button>
            </div>
            <div className=" mt-20">
              <div className=" flex justify-between">
                <Typography variant={"h1"} className=" text-white_300 font-bold ">
                  Olive’s Playlists
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

        </div>

        <div className="  mt-[62rem] sm:mt-[50rem] ">
          <div className=" flex justify-between ktem-center sm:hidden">
            <div>
              <MdTune className=" text-white_300 text-2xl" />
            </div>
            <div>
              <span className="text-[15px] font-light  text-white_100">
                Sort by:

              </span>



            </div>
          </div>
          <div className="  mt-20 text-white_300 px-2 sm:px-8   flex justify-between items-center">
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
                <Typography varient={"h4"} className=" font-bold smtext-base leading-[21px]">
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
              < MdMoreVert className=" text-xl text-white_300" />
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

          <div className=" mt-12 text-white_300 px-2 sm:px-8 flex justify-between items-center">
            <div className="flex items-center  gap-4  sm:gap-10">
              <div className="text-[18px] hidden sm:block font-semibold">2</div>
              <div className=" w-[50px] h-[50px] rounded-[4px]">
                <Image
                  src={Picture}
                  className=" object-cover w-full h-full"
                  alt=""
                />
              </div>
              <div>
                <h4 className=" font-bold text-base leading-[21px]">
                  Pride Is A Devil
                </h4>
                <div className=" flex items-center gap-3">
                  <span className=" font-light text-[#text-whit_100]">J Cole</span>{" "}
                  <span className=" w-2 h-2">
                    <NewRealse />
                  </span>
                </div>
              </div>
            </div>
            <div className="block sm:hidden">
              < MdMoreVert className=" text-xl text-white_300" />
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
          <div className=" mt-12   bg-black_100 py-4 sm:py-10 px-2 sm:px-8  rounded-[5px] text-white_300 flex justify-between items-center">
            <div className="flex items-center gap-10">
              <div className="  hidden sm:block">< PlaySvg /></div>
              <div className=" w-[50px] h-[50px] rounded-[4px]">
                <Image
                  src={Picture}
                  className=" object-cover w-full h-full"
                  alt=""
                />
              </div>
              <div>
                <h4 className=" font-bold text-base leading-[21px]">
                  Pride Is A Devil
                </h4>
                <div className=" flex items-center gap-3">
                  <span className=" font-light text-[#text-whit_100]">J Cole</span>{" "}
                  <span className=" w-2 h-2">
                    <NewRealse />
                  </span>
                </div>
              </div>
            </div>
            <div className="block sm:hidden">
              < MdMoreVert className=" text-xl text-white_300" />
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
        <div className=" mt-10">
          <Typography variant={"h1"} className=" text-white_300   capitalize">
            similar Tracks
          </Typography>
          <div className=" mt-6">
            <div className=" grid  sm:grid-cols-6 gap-10">
              {smililarTrack.map((track, i) => {
                return (
                  <div className="w-full h-[280px]" key={i}>
                    <div className="  bg-slate-950 rounded-tl-[5px] rounded-tr-[5px] overflow-hidden  w-full h-[208px]">
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


      </div>
      <div className=" px-20 hidden    mt-10  sm:flex  justify-between items-center bg-black_100 py-3">
        <div className=" flex justify-between items-center gap-10">

          <audio ref={audioRef} src={songs.url} controls={false} autoPlay={isPlaying} />
          <div>

            < MdShuffle className=" text-white_300 text-[24px]" onClick={toggleShuffle} />

          </div>
          <div>

            <   MdSkipPrevious className=" text-white_300 text-[24px]" />

          </div>
          <div>
            {
              isPlaying ? < MdPause className=" text-white_300 text-[24px]" onClick={togglePlay} /> : < MdPlayArrow className=" text-white_300 text-[24px]" onClick={togglePlay} />
            }



          </div>

          <div>

            < MdSkipNext className=" text-white_300 text-[24px]" />

          </div>
          <div>

            <  MdRepeat className=" text-white_300   text-[24px]" onClick={toggleRepeat} />

          </div>
          <div>
            <AudioWave />
          </div>
          <div className="flex items-center">
            <div>   <label for="range" className="font-bold  text-white_300"><MdVolumeUp className=" text-[30px]" /></label></div>
            <div>
              <input type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange} classNameS="w-full rounded-lg h-2 bg-white_300 appearance-none" />
            </div>
          </div>

          <div>

          </div>
          <div>



          </div>


        </div>
        <div>

          <div>
            <ul className=" flex items-center  gap-5">
              <li>
                <Download />
              </li>
              <li>
                <FavoriteSvg />
              </li>
              <li>
                <button className="  px-3 py-2 flex  items-center gap-4 rounded-[6px] bg-yellow ">
                  <div>
                    {" "}
                    <MdShoppingBag />
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

export default Artist;
