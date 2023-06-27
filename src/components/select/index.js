import React from "react";
import { classNames } from "@/helper/classNames";
const DropMenu = ({ className }) => {
  return (
    <>
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