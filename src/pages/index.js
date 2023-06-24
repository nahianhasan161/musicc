import React from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import Typography from "@/components/typography";
import Profile from "../../public/assests/DP.png";
import SongImage from "../../public/assests/image 6.png";
import Picture from "../../public/assests/image 12.png";
import Cover from "../../public/assests/c.png"
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdVolumeUp,
  MdPlayArrow,
  MdRepeat,
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
} from "@/svgicon";
import Slider from "@/components/slider";
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
  return (
    <div>
      {/* <div className=" container mx-auto w-full  pt-28 ">
        <div className=" h-[300px]   w-full  pt-48  bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="  w-full">
            <div className=" flex  justify-between items-center  w-full">
              <div className=" flex gap-8 items-center  ">
                <div className=" border-2 rounded-full h-96 w-96">
                  <Image
                    src={Profile}
                    height={500}
                    width={500}
                    className=" object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div className="text-white_300 mt-16 ">
                  <div className=" flex items-center gap-5">
                    <h1 className="  font-bold text-[36px]">Olive James</h1>{" "}
                    <span>
                      <VerifiedSvg />
                    </span>
                  </div>
                  <span>@OliveJamesMusic</span>
                  <p className=" pt-3  text-[20px] font-light leading-[23px]">
                    Multi platinum Record Producer <br />
                    .Drake, Kendrik Lamar, Joyner.
                  </p>
                  <div className=" flex gap-6 item-center  mt-4">
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
              <div>
                <Button
                  className={"ml-6  font-semibold  text-[24px]  px-12 py-3"}
                >
                  Follow
                </Button>
                <Button
                  variant={"secondary"}
                  className=" ml-6  font-semibold  text-[24px]  px-12 py-3"
                >
                  Message
                </Button>
              </div>
            </div>
            <div className=" flex items-center gap-10 mt-10">
              <div className=" flex items-center text-[#E6E6E6] text-[18px] font-medium">
                Following:
                <span className="text-[#text-whit_100] ml-1 font-light">2,080</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6] text-[18px] font-medium">
                Followers::
                <span className="text-[#text-whit_100] ml-1 font-light">70.8k</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6] text-[18px] font-medium">
                Tracks:
                <span className="text-[#text-whit_100] ml-1 font-light">186</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6] text-[18px] font-medium">
                Plays:
                <span className="text-[#text-whit_100] ml-1 font-light">865k</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6] text-[18px] font-medium">
                <FavoriteSvg />
                <span className="text-[#text-whit_100] ml-1 font-light">269k</span>
              </div>
              <div className=" flex items-center text-[#E6E6E6] text-[18px] font-medium">
                <More_vertSvg />
              </div>
            </div>
            <div className=" mt-20">
              <div className=" flex justify-between">
                <h2 className=" text-white_300 font-bold  text-[32px]">
                  Olive’s Playlists
                </h2>
                <div>
                  <button className=" bg-bt_color flex items-center px-3 gap-2 text-white_300py-2 ">
                    Hide <KeyDownvertSvg />
                  </button>
                </div>
              </div>
              <div className=" mt-10">
                <Slider playlist={playlist} />
              </div>
            </div>
          </div>
          
          </div>
          <div className="  mt-[40rem] ">
            <div className="  mt-20 text-white_300 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div>1</div>
                <div className=" w-[50px] h-[50px] rounded-[4px]">
                  <Image
                    src={Picture}
                    className=" object-cover w-full h-full"
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
              <div className=" flex gap-4 items-center">
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
            <div className=" mt-12 text-white_300 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div>2</div>
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
              <div className=" flex gap-4 items-center">
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
            <div className=" mt-12 text-white_300 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div>3</div>
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
              <div className=" flex gap-4 items-center">
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
            <div className=" mt-12 text-white_300 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div>4</div>
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
              <div className=" flex gap-4 items-center">
                <div>
                  <ul className=" flex gap-4 font-light text-[#ADADAD]">
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
            <div className=" mt-12 text-white_300 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div>5</div>
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
                    <span className=" font-light text-[#ADADAD]">J Cole</span>{" "}
                    <span className=" w-2 h-2">
                      <NewRealse />
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex gap-4 items-center">
                <div>
                  <ul className=" flex gap-4 font-light text-[#ADADAD]">
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
          </div>
          <div className=" mt-10">
            <h2 className=" text-white_300 text-[32px] font-bold  capitalize">
              similar Tracks
            </h2>
            <div className=" mt-6">
              <div className=" grid  grid-cols-6 gap-10">
                {smililarTrack.map((track, i) => {
                  return (
                    <div className="w-full h-[280px]" key={i}>
                      <div className="  bg-slate-950 rounded-tl-[5px] rounded-tr-[5px] overflow-hidden  w-full h-[208px]">
                        <Image
                          src={track.image}
                          height={200}
                          width={200}
                          className=" object-cover w-full h-full"
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
         
        </div> */}
    </div>

  );
};

export default Artist;
