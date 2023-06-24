import React from "react";
import Image from "next/image";
import Logo from "../../../public/assests/logo.png";
import SearchIcon from "../../../public/assests/search.png";
import P1 from "../../../public/assests/p1.png";
import C1 from "../../../public/assests/cart.png";
import { SearchSvg } from "@/svgicon";

const NavMenu = () => {
  return (
    <div className=" border-b-[1px]  border-border_color  bg-black">
      <div className=" container mx-auto">
        <div className=" flex py-4 justify-between text-[16px] items-center">
          <div>
            <ul className=" flex gap-4 text-white capitalize items-center">
              <li>
                <Image src={Logo} height={55} width={55} />
              </li>
              <li>tracks</li>
              <li>pricing</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <ul className=" p-0 flex text-white items-center gap-5">
              <li>{/* <SearchSvg /> */}</li>
              <li>
                <Image src={SearchIcon} height={18} width={18} />
              </li>
              <li>SIGN IN </li>
              <li className="  border-l-[1px] py-0 border-white pl-4 ">
                {" "}
                SIGN UP
              </li>
              <li className=" text-yellow">Start Selling</li>
              <li className="   pl-4 ">
                {" "}
                <div className="  flex items-center gap-4  rounded-full">
                  <div>
                    <Image
                      src={P1}
                      className=" object-cover w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p>Rahul Singh</p>
                    <p>@rahul05</p>
                  </div>
                </div>
              </li>
              <li className="  border-l-[1px] border-border_color pl-3 text-yellow">
                <div className=" w-[48px] flex justify-center  items-center h-[25px] bg-yellow rounded-[23px]">
                  {" "}
                  <Image src={C1} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
