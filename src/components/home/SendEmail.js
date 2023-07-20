import Image from "next/image";
import React from "react";
import Typography from "../typography";
import { Search } from "../search/Search";

const SendEmail = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen sm:px-10 px-4">
      <Typography variant="h1" className="text-[#E6E6E6]  mb-24  text-center leading-[48px] font-normal font-AmsiProNarw-BI text-[40px]">
        Join our community of musicians and take <br /> your music to the next
        level.
      </Typography>
      <Search/>
    </div>
  );
};

export default SendEmail;
