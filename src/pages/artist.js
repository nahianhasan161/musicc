import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import Typography from "@/components/typography";
import Profile from "../../public/assests/DP.png";
import SongImage from "../../public/assests/image 6.png";
import Picture from "../../public/assests/image 12.png";
import Cover from "../../public/assests/c.png";
import { songsdata } from "@/datalist/audio";
import { getSession } from "next-auth/react"


// import Wavesurfer from "react-wavesurfer";

// import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js";
// import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min.js";
import dynamic from "next/dynamic";

const Wavesurfer = dynamic(() => import("react-wavesurfer"), {
  ssr: false,
});
// const TimelinePlugin = dynamic(
//   () => import("wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js"),
//   {
//     ssr: false,
//   }
// );
// const RegionsPlugin = dynamic(
//   () => import("wavesurfer.js/dist/plugin/wavesurfer.regions.min.js"),
//   {
//     ssr: false,
//   }
// );
// import WaveSurfer from "wavesurfer.js";

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
  MdRepeatOne,
  MdMoreVert,
  MdShuffleOn,
  MdVolumeOff,
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
  AudioWave,
} from "@/svgicon";

import Slider from "@/components/slider";
import { classNames } from "@/helper/classNames";
import SimilarTrack from "@/components/artist/SimilarTrack";
import Songs from "@/components/common/Songs";
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
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  const handlePrev = () => {
    if (!songsdata.length < 0) {
      setDisable(true);
    } else {
      setSongs(songsdata[songsdata.length - 1]);
    }
  };
  const handleNex = () => {
    if (!songsdata.length === songsdata.length) {
      setDisable(true);
    } else {
      setSongs(songsdata[songsdata.length - 1]);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setPlaying(!playing);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);

  const handleTogglePlay = () => {};

  const handlePosChange = (e) => {
    setPos(e.originalArgs[0]);
  };

  const waveOptions = {
    barGap: 15,

    height: 60,
    progressColor: "#0056CF",
    waveColor: "#C1CDD6",
    normalize: true,
    barWidth: 3,
    barRadius: 3,
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  console.log(volume);

  return (
    <div>
      <div className=" px-5 mx-auto w-full pt-6  sm:pt-28 ">
        <div className=" h-[185px]  sm:h-[300px]   w-full pt-[94px]  sm:pt-48  bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="w-full">
            <div className=" flex  items-center justify-center  lg:flex-row  sm:justify-between pl-3">
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
                <div className="text-white_300 sm:mt-[8rem]  ">
                  <div className="flex items-center justify-center sm:justify-start sm:flex-none">
                    <div>
                      <Typography
                        variant={"h1"}
                        className="  text-center  flex items-center  gap-3  sm:pl-0 font-bold "
                      >
                        Olive James{" "}
                        <span>
                          <VerifiedSvg />
                        </span>
                      </Typography>
                    </div>
                  </div>
                  <div className=" text-center sm:text-left">
                    @OliveJamesMusic
                  </div>
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
                  className={
                    "ml-6  font-semibold text-[20px]  sm:text-[24px] px-8  sm:px-12  py-1 sm:py-3"
                  }
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
                <span className="text-[#text-whit_100] ml-1 font-light">
                  2,080
                </span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                Followers::
                <span className="text-[#text-whit_100] ml-1 font-light">
                  70.8k
                </span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                Tracks:
                <span className="text-[#text-whit_100] ml-1 font-light">
                  186
                </span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                Plays:
                <span className="text-[#text-whit_100] ml-1 font-light">
                  865k
                </span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                <FavoriteSvg />
                <span className="text-[#text-whit_100] ml-1 font-light">
                  269k
                </span>
              </div>
              <div className=" flex items-center text-[#E6E6E6]  font-medium">
                <More_vertSvg />
              </div>
            </div>
            <div className="flex mt-10 sm:hidden  ">
              <Button
                className={
                  "ml-6  font-semibold text-[20px]  sm:text-[24px] px-8  sm:px-12  py-1 sm:py-3"
                }
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
              <div className="flex flex-wrap justify-between">
                <Typography
                  variant={"h1"}
                  className=" text-white_300 font-bold "
                >
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
     <Songs/>
         
        </div>
      <SimilarTrack/>
      </div>

      <div className=" px-20 hidden    mt-10  lg:flex  justify-between items-center bg-black_100 py-3">
        <div className=" flex justify-between items-center gap-10">
          <audio
            ref={audioRef}
            src={songs.url}
            controls={false}
            autoPlay={isPlaying}
          />
          <div>
            {isShuffle ? (
              <button disabled={disable}>
                <MdShuffleOn className=" text-white_300 text-[24px]" />
              </button>
            ) : (
              <MdShuffle
                className=" text-white_300 text-[24px]"
                onClick={toggleShuffle}
              />
            )}
          </div>
          <div>
            <MdSkipPrevious
              className=" text-white_300 text-[24px]"
              onClick={handlePrev}
            />
          </div>
          <div>
            {isPlaying ? (
              <MdPause
                className=" text-white_300 text-[24px]"
                onClick={togglePlay}
              />
            ) : (
              <MdPlayArrow
                className=" text-white_300 text-[24px]"
                onClick={togglePlay}
              />
            )}
          </div>

          <div>
            <MdSkipNext
              className=" text-white_300 text-[24px]"
              onClick={handleNex}
            />
          </div>
          <div>
            {isRepeat ? (
              <MdRepeatOne
                className=" text-white_300   text-[24px]"
                onClick={toggleRepeat}
              />
            ) : (
              <MdRepeat
                className=" text-white_300   text-[24px]"
                onClick={toggleRepeat}
              />
            )}
          </div>
          <div className="w-80">
            <Wavesurfer
              audioFile={songs.url}
              pos={pos}
              onPosChange={handlePosChange}
              playing={playing}
              options={waveOptions}
            />
          </div>
          <div className="flex items-center">
            <div>
              {" "}
              <label for="range" className="font-bold  text-white_300">
                {volume === 0 ? (
                  <MdVolumeOff className="text-[30px]" />
                ) : (
                  <MdVolumeUp className=" text-[30px]" />
                )}
              </label>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                classNameS="w-full rounded-lg h-2 bg-white_300 appearance-none"
              />
            </div>
          </div>

          <div></div>
          <div></div>
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

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        premanent: false,
      },
    };
  }
  // authorize user return session
  return {
    props: { session },
  };
}
