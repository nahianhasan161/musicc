import React from "react";

export const Heading = ({ textColor, text, text2 , fontWeight }) => {
  return (
    <h1 className={` ${fontWeight} italic `}>
      <span
        className={`text-white xl:text-[80px] sm:text-[60px] text-[50px] uppercase ${textColor} `}
      >
        {text}
      </span>
      <span className={`xl:text-[80px] sm:text-[60px] text-[50px] uppercase text-[#D8EB55]`}>
        {text2}
      </span>
    </h1>
  );
};
