import React from "react";
import { classNames } from "@/helper/classNames";
const DropMenu = ({ label, className }) => {
  return (
    <>
      {label && (
        <label className="block capitalize  text-[14px] mb-1      text-white_100  font-semibold ">
          {label}
        </label>
      )}
      <select
        className={classNames(
          "custom-select w-full py-2 px-3 text-white_300 text-[15px] font-semibold ",
          className
        )}
        name="cars"
        id="cars"
      >
        <option value="volvo">Preiview</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
};

export default DropMenu;
