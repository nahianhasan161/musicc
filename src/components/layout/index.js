import React from "react";
import SideBar from "../navbar/sidebar";
import Typography from "../typography";

const LayOut = ({ children }) => {
  return (
    <div className="md:flex gap-10 min-w-fit">
      <div className="basis-[20%] md:min-h-screen bg-black_100">
        <div className=" font-semibold text-white_300 pt-10 px-8">
          <Typography variant={"h3"} className={"text-[20px]"}>
            Hello Tokas,
          </Typography>
          <div className=" text-[14px] text-white_100 mt-10">Seller Panel</div>
        </div>
        <div className="md:px-12 px-4 mt-10">
          <SideBar />
        </div>
      </div>
      <div className="basis-[80%] bg-black_100">{children}</div>
    </div>
  );
};

export default LayOut;
