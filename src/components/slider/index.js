import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { PlaySvg } from "@/svgicon";
import { MdSkipNext, MdSkipPrevious, MdPlayArrow } from "react-icons/md";

export default function Slider({ playlist }) {
  console.log(playlist);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>
        {playlist.map((song, i) => {
          return (
            <>
              <div className=" h-[260px] w-[259px]">
                {" "}
                <Image
                  src={song.image}
                  height={200}
                  width={200}
                  className=" w-full h-full object-cover"
                />
                {i === 0 && (
                  <div className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <PlaySvg />
                  </div>
                )}
              </div>
              <div className=" text-white_300 pt-2">
                <h2 className=" ">{song.title}</h2>
                <div className=" flex items-center gap-2">
                  <span className=" font-light">{song.name}</span>{" "}
                  <span className=" font-light">{song.icon}</span>
                </div>
              </div>
            </>
          );
        })}

        {/* <div className=" h-[260px] w-[259px]">
          {" "}
          <Image
            src={SongImage}
            height={200}
            width={200}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" h-[260px] w-[259px]">
          {" "}
          <Image
            src={SongImage}
            height={200}
            width={200}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" h-[260px] w-[259px]">
          {" "}
          <Image
            src={SongImage}
            height={200}
            width={200}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" h-[260px] w-[259px]">
          {" "}
          <Image
            src={SongImage}
            height={200}
            width={200}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" h-[260px] w-[259px]">
          {" "}
          <Image
            src={SongImage}
            height={200}
            width={200}
            className=" w-full h-full object-cover"
          />
        </div> */}
      </Carousel>
    </>
  );
}
