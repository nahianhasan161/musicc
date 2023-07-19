import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Logo from "../../../public/assests/logo.png";
import SearchIcon from "../../../public/assests/search.png";
import P1 from "../../../public/assests/p1.png";
import C1 from "../../../public/assests/cart.png";
import { SearchSvg } from "@/svgicon";
import { MdDehaze, MdSearch } from "react-icons/md";
import Link from "next/link";
import HomeSection from "@/pages/home";
import {BiSearchAlt2} from "react-icons/bi"

import Item from "./utilities/item";
import Searchbar from "./utilities/searchbar";
import { Button } from "../button";
const NavMenu = () => {
  const { data: session } = useSession();
  const gmailHandler = "@" + session?.user?.email.slice(0, session?.user?.email.indexOf("@"))
  function handleSignOut() {
    signOut();
  }

  return (
    <div className="border-b-[1px] border-border_color bg-black sm:px-10 min-w-[40rem]">
      <div className="px-5 sm:px-0 container mx-auto">
        {/* mobile menu */}
        <div className="flex items-center py-8 justify-between sm:hidden">
          <div>
            <div className="w-[44px] h-[44px]">
              <Link href={"/home"} className="cursor-pointer">
              <Image
                src={Logo}
                height={60}
                width={60}
                className="w-full h-full"
                alt="logo"
              />
              </Link>
            </div>
            <div></div>
          </div>
          <div>
            <div className="text-white_300 flex gap-3">
              <input className="w-[8.5rem] bg-transparent" />
              <MdSearch className="text-[20px]" />{" "}
              <MdDehaze className="text-[20px]" />
              <div className="w-[32px] flex justify-center items-center h-[20px] sm:h-[25px] bg-yellow rounded-[23px]">
                <Image src={C1} alt="cart" />
              </div>
            </div>
          </div>
        </div>
        {/* desktop menu */}
        <div className="hidden sm:flex py-4 justify-between text-[16px] items-center">
          
      
          <div className="sm:flex hidden">
            <ul className="flex gap-16 text-white capitalize items-center">
            <Link href={"/home"} className="cursor-pointer"> <li className="transition-all  hover:scale-110  duration-200 ease-in ">
                <Image src={Logo} height={55} width={55} alt="logo" />
              </li> </Link>
              <Link href={"/tracks"} className="cursor-pointer"> <Item title="tracks"/> </Link>
              <Link href={"/tracks"} className="cursor-pointer"> <Item title="pricing"/> </Link>
              <Link href={"/tracks"} className="cursor-pointer"> <Item title="blog"/> </Link>
              
            </ul>
          </div>
          <div>
            <ul className="p-0 flex text-white items-center gap-5">
              <li>{/* <SearchSvg /> */}</li>
              <li>
              <Searchbar /> 
          
                {/* <Image src={SearchIcon} height={18} width={18} /> */}
              </li>
              {session ? (
                <>
                  <li
                    onClick={handleSignOut}
                    className="border-l-[1px] py-0 border-white pl-4 text-base cursor-pointer font-light italic whitespace-nowrap hover:border-none hover:scale-110  duration-200 ease-in "
                  >
                    SIGN OUT
                  </li>
                  <Link href={"/seller"}>
                  {/* <li className="text-yellow cursor-pointer p-3 bg-[#272727] rounded whitespace-nowrap ">
                    Start Selling
                  </li> */}
                  <li >
                    <Button variant="secondary" className={"p-3"}>Start Seliing</Button>
                  </li>
                  </Link>
                  <Link href={"/"} className="cursor-pointer">
                  <li className="pl-4 transition-all  hover:scale-110  duration-200 ease-in ">
                    <div className="flex items-center gap-4 rounded-full">
                      <div>
                        {session.user.image &&  (<Image
                          src={session.user.image}
                          width={40}
                          height={40}
                          className="object-cover w-full rounded-full"
                          alt="userImg"
                        />)}
                      </div>
                      <div>
                
                        <p className="text-base font-semibold italic">{session.user.name}</p>
                        <p className="truncate text-[#D8EB55] text-sm font-semibold italic p-1" title={session.user.email}>
                         {/*  {session.user.email} */}
                         {gmailHandler}
                        </p>
                      </div>
                    </div>
                  </li>
                  </Link>
                  <li className="border-l-[1px] border-border_color pl-3 text-yellow cursor-pointer">
                    <div className="w-[48px] flex justify-center items-center h-[25px] bg-yellow rounded-[23px] transition-scale duration-200 ease-in hover:scale-110">
                      <Image src={C1} alt="cart" />
                    </div>
                  </li>
                </>
              ) : (
                <Link href={"/login"}>
                <li className="cursor-pointer  text-base font-light italic whitespace-nowrap transition-all  hover:scale-110  duration-200 ease-in ">SIGN IN</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
        {/* Conditional rendering of Home component */}
       
      </div>
    </div>
  );
};

export default NavMenu;
