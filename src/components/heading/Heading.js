import React from "react";

export const Heading = ({ textColor, text, text2 , fontWeight }) => {
  return (
    <h1 className={` ${fontWeight} italic `}>
      <span
        className={`text-white sm:text-[80px] text-[60px] uppercase ${textColor} `}
      >
        {text}
      </span>
      <span className={`sm:text-[80px]  text-[60px] uppercase text-[#D8EB55]`}>
        {text2}
      </span>
    </h1>
  );
};
