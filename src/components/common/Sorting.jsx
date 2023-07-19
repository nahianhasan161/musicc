import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdTune } from "react-icons/md";

const Sorting = () => {
  return (
    <div className="sm:flex hidden justify-between item-center mt-10 ">
      <div className="flex flex-row gap-10">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-light  text-white_100">
            Sort by:
          </span>
          <div>
            <FiChevronDown className="text-white" />
          </div>
          <span className="text-[15px] font-light  text-white_100">
            Sort by:
          </span>
          <div>
            <FiChevronDown className="text-white" />
          </div>
          <span className="text-[15px] font-light  text-white_100">
            Sort by:
          </span>
          <div>
            <FiChevronDown className="text-white" />
          </div>
          <span className="text-[15px] font-light  text-white_100">
            Sort by:
          </span>
          <div>
            <FiChevronDown className="text-white" />
          </div>
          <span className="text-[15px] font-light  text-white_100">
            Sort by:
          </span>
          <div>
            <FiChevronDown className="text-white" />
          </div>
          <span className="text-[15px] font-light  text-white_100">
            Sort by:
          </span>
          <div>
            <FiChevronDown className="text-white" />
          </div>
        </div>
      </div>
      {/* for mobile */}
      <div className="flex flex-row gap-4">
        <span className="text-[16px] font-light  text-white_100">Sort by:</span>
        <div className="flex flex-row items-center gap-2 ">
          <span className="text-[18px]  font-semibold  text-white">
            Popularity
          </span>
          <FiChevronDown className="text-white" />
        </div>
      </div>

      <div className="sm:hidden flex justify-between item-center ">
        <div>
          <MdTune className=" text-white_300 text-2xl" />
        </div>
        <div className="flex flex-row gap-4">
          <span className="text-[16px] font-light  text-white_100">
            Sort by:
          </span>
          <div className="flex flex-row items-center gap-2 ">
            <span className="text-[18px]  font-semibold  text-white">
              Popularity
            </span>
            <FiChevronDown className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
