import React from "react";
import Image from "next/image";
import Logo from "../../../public/assests/logo.png";
import SearchIcon from "../../../public/assests/search.png";
import P1 from "../../../public/assests/p1.png";
import C1 from "../../../public/assests/cart.png";
import { SearchSvg } from "@/svgicon";
import { MdDehaze, MdSearch } from "react-icons/md";



const NavMenu = () => {
  return (
    <div className=" border-b-[1px]  border-border_color   bg-black">
      <div className=" px-5 sm:px-0 container mx-auto">
        {/* mobile menu */}
        <div className="  flex items-center py-8 justify-between sm:hidden">
          <div>

            <div className="  w-[44px] h-[44px]">
              <Image src={Logo} height={60} width={60} className="w-full h-full" alt="logo" />

            </div>
            <div>



            </div>

          </div>
          <div>
            <div className="   text-white_300 flex gap-3 ">
              <input className=" w-[8.5rem]  bg-transparent " />
              <MdSearch className=" text-[20px]" /> <MdDehaze className=" text-[20px]" />
              <div className=" w-[32px]   flex justify-center  items-center h-[20px] sm:h-[25px] bg-yellow rounded-[23px]">
                <Image src={C1} alt="cart" />
              </div>
            </div>


          </div>


        </div>
        <div className=" hidden  sm:flex py-4 justify-between text-[16px] items-center">

          <div>

            <Image src={Logo} height={55} width={55} alt="logo" />

          </div>
          <div>


          </div>
          <div className=" hidden">

            <ul className=" flex gap-4 text-white capitalize items-center">
              <li>
                <Image src={Logo} height={55} width={55} alt="logo" />
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
