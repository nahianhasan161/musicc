import React from "react";

export const Heading = ({ textColor, text, text2 , fontWeight,font,fontSize }) => {
  return (
    <h1 className={` ${fontWeight} ${font}  italic `}>
      <span
        className={`font-AmsiProNarw-U font-normal text-white sm:text-[96px]   text-[64px] uppercase ${textColor} `}
      >
        {text}
      </span>
      <span className={`font-AmsiProNarw-U font-normal sm:text-[96px] text-[64px] uppercase text-[#D8EB55]`}>
        {text2}
      </span>
    </h1>
  );
};
