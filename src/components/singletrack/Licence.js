import React from "react";
import Typography from "../typography";
import { MdShoppingBag } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import rec from "../../../public/assests/icon/keyboard_voice.png";

const Licence = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <>
      <div>
        <div className="flex justify-between sm:mx-10 mx-4 mb-24 mt-10">
          <Typography
            variant={"h1"}
            className="text-white_300 font-bold italic sm:text-2xl text-xl"
          >
            Featured Playlists
          </Typography>
          <div className="flex gap-2">
            <div>
              <Typography variant={"h4"} className="text-white_300 mb-2">
                Total
              </Typography>
              <Typography variant={"h2"} className="text-white_300">
                $2500
              </Typography>
            </div>
            <button className="flex py-2 px-3 items-center gap-4 rounded-[6px] bg-yellow">
              <div>
                <MdShoppingBag />
              </div>
              <div className="flex items-center whitespace-nowrap">
                Add to Cart
              </div>
            </button>
          </div>
        </div>
        <Carousel className="grid sm:mx-10 mx-4 gap-10" responsive={responsive}>
  <div className="bg-[#272727] flex h-44 rounded-md sm:mr-10">
    <div className="m-6">
      <Typography variant={"h4"} className="text-white_300 mb-2">
        Total
      </Typography>
      <Typography variant={"h2"} className="text-white_300 mb-6">
        $2500
      </Typography>
      <Typography variant={"h4"} className="text-white_300">
        Total
      </Typography>
    </div>
  </div>
  <div className="bg-[#272727] flex h-44 rounded-md sm:mr-10">
    <div className="m-6">
      <Typography variant={"h4"} className="text-white_300 mb-2">
        Total
      </Typography>
      <Typography variant={"h2"} className="text-white_300 mb-6">
        $2500
      </Typography>
      <Typography variant={"h4"} className="text-white_300">
        Total
      </Typography>
    </div>
  </div>
  <div className="bg-[#272727] flex h-44 rounded-md sm:mr-10">
    <div className="m-6">
      <Typography variant={"h4"} className="text-white_300 mb-2">
        Total
      </Typography>
      <Typography variant={"h2"} className="text-white_300 mb-6">
        $2500
      </Typography>
      <Typography variant={"h4"} className="text-white_300">
        Total
      </Typography>
    </div>
  </div>
  <div className="bg-[#272727] flex h-44 rounded-md sm:mr-10">
    <div className="m-6">
      <Typography variant={"h4"} className="text-white_300 mb-2">
        Total
      </Typography>
      <Typography variant={"h2"} className="text-white_300 sm:mb-6">
        $2500
      </Typography>
      <Typography variant={"h4"} className="text-white_300">
        Total
      </Typography>
    </div>
  </div>
</Carousel>



      </div>
      <div>
        <div className="sm:mx-10 mx-4 mt-12">
          <Typography
            variant={"h1"}
            className="text-white_300 font-bold italic mb-6"
          >
            License Terms
          </Typography>
        </div>
        <main className="flex flex-col items-center justify-center h-full bg-[#272727]  sm:mx-10 mt-10">
          <Typography
            variant={"h1"}
            className="text-white_300 font-bold italic p-3 sm:ml-10 mb-10"
          >
            Advanced ($2,400)
          </Typography>
          <article className="overflow-hidden rounded-2xl w-full p-5">
            <div className="flex lg:flex-row flex-col gap-10  md:justify-between mb-10">
              <div className="flex sm:justify-center gap-2">
                <Image src={rec} alt="rec" className="sm:w-10 sm:h-10 w-6 h-6" />
                <p className="text-white_300 mb-6 font-normal sm:text-2xl text-base sm:w-96">
                  Used For Music Recording
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <Image src={rec} alt="rec" className="sm:w-10 sm:h-10 w-6 h-6" />
                <p className="text-white_300 mb-6 font-normal sm:text-2xl text-base sm:w-96">
                  Permited 1,00,000 Online Audio Streams
                </p>
              </div>
              <div className="flex sm:justify-center gap-2">
                <Image src={rec} alt="rec" className="sm:w-10 sm:h-10 w-6 h-6" />
                <p
                  variant={"h2"}
                  className="text-white_300 mb-6 font-normal sm:text-2xl text-base sm:w-96"
                >
                  1 Music Video
                </p>
              </div>
            </div>
            <div className="flex  lg:flex-row flex-col gap-10 justify-between">
              <div className="flex sm:justify-center gap-2">
                <Image src={rec} alt="rec" className="sm:w-10 sm:h-10 w-6 h-6" />
                <p className="text-white_300 mb-6 font-normal sm:text-2xl text-base sm:w-96">
                  Distribute 10,000 Copies
                </p>
              </div>
              <div className="flex sm:justify-center gap-2">
                <Image src={rec} alt="rec" className="sm:w-10 sm:h-10 w-6 h-6" />
                <p className="text-white_300 mb-6 font-normal sm:text-2xl text-base sm:w-96">
                  For Profit Live Performances
                </p>
              </div>
              <div className="flex sm:justify-center gap-2">
                <Image src={rec} alt="rec" className="sm:w-10 sm:h-10 w-6 h-6" />
                <p className="text-white_300 mb-6 font-normal sm:text-2xl text-base sm:w-96">
                  No Radio Broadcasting Rights
                </p>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default Licence;
