import React from "react";
import Logo from "../../../public/assests/logo.png";
import Image from "next/image";
import Typography from "../typography";

const Footer = () => {
  return (
    <div className=" px-4 container mt-20 mx-auto">
      <div className=" sm:flex gap-24 items-start">
        <div className=" basis-[30%]  ">
          <Typography
            variant={"h1"}
            className="uppercase text-[#E6E6E6] font-AmsiProNarw-Bt text-10 text-base leading-[44px] "
          >
            We would love to hear form YOu
          </Typography>
          <div className="mt-[40px]">
            
            <Typography
            variant={"span"}
            className="leading"
            >
              Feel free to reach out if you want <br /> to collaborate with us,
              orsimply have a chat.
            
            </Typography>
            <div className=" border-t-2  mt-4 border-white_300">
              <h2 className=" text-[24px] sm:text-[28px] mt-3 text-[#E6E6E6] font-AmsiProNarw-SBI  font-normal">
                contact@lowfied.com
              </h2>
            </div>
          </div>
        </div>
        <div className="  sm:hidden  uppercase  grid grid-cols-2 gap-8 mt-10  font-AmsiProNarw-LI font-normal text-[14px] sm:text-[24px] text-[#ADADAD] space-y-4 ">
          <div>
            <h1 className="italic">lowfied</h1>
            <div className=" mt-3 sm:mt-[100px]">
              <ul className=" mb-0  ">
              
                <li className="cursor-pointer">
                  Tracks
                  </li>
              
                <li className="cursor-pointer">merch</li>
                <li className="cursor-pointer">about us</li>
                <li className="cursor-pointer">jobs</li>
                <li className="cursor-pointer">Lowfied.Space</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="italic">support</h1>
            <div className=" mt-3 sm:mt-[100px]">
              <ul className="  mb-0 text-[14px] text-white_100 font-light">
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Start Selling</li>
                <li className="cursor-pointer">Sign Up</li>
                <li className="cursor-pointer">Contact Us</li>
                <li className="cursor-pointer">Help Desk</li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </div>
          </div>
          <div>
            <h1>blogs</h1>
            <div className=" mt-3 sm:mt-[100px]">
              <ul className=" mb-0 text-[14px] text-white_100 font-light">
                <li className="cursor-pointer">Lowfied Originals</li>
                <li className="cursor-pointer">How To Series</li>
                <li className="cursor-pointer">Mix & Master</li>
              </ul>
            </div>
          </div>
          <div>
            <h1>
              <Image src={Logo} height={78} width={78} alt="" />
            </h1>
            <div className="sm:text-[14px] text-[10px] mt-10 sm:mt-[50px]  leading-0 text-white_100 font-light">
            <Typography
            variant={"span"}
            className="leading"
            >
              We are Lowfied and we make bangers. We make sure that we sound
              delicious and we always blow minds.Don't get us wrong, we actually
              do blow minds. Try us, satisfaction guaranteed.
             </Typography>
            </div>
          </div>
        </div>
        <div className=" hidden sm:block  sm:basis-[10%] uppercase  font-AmsiProNarw-LI font-normal text-[14px] sm:text-[24px] text-[#ADADAD] space-y-4">
          <h1 className="font-AmsiProNarw-SBI text-[20px] font-normal">lowfied</h1>
          <div className=" mt-3 sm:mt-[100px]">
            <ul className=" mb-0 text-[14px] text-white_100 font-light">
              <li className="cursor-pointer">Tracks</li>
              <li className="cursor-pointer">merch</li>
              <li className="cursor-pointer">about us</li>
              <li className="cursor-pointer">jobs</li>
              <li className="cursor-pointer">Lowfied.Space</li>
            </ul>
          </div>
        </div>

        <div className=" hidden sm:block uppercase basis-[10%]"></div>
        <div className=" hidden sm:block uppercase basis-[10%]  font-AmsiProNarw-LI font-normal text-[14px] sm:text-[24px] text-[#ADADAD] space-y-4">
          <h1 className="font-AmsiProNarw-SBI text-[20px] font-normal">blogs</h1>
          <div className=" mt-[100px]">
            <ul className=" mb-0 text-[14px] text-white_100 font-light">
              <li className="cursor-pointer">Lowfied Originals</li>
              <li className="cursor-pointer">How To Series</li>
              <li className="cursor-pointer">Mix & Master</li>
            </ul>
          </div>
        </div>
        <div className=" hidden sm:block basis-[20%] uppercase text-white_300 text-[20px]   font-semibold">
          <h1>
            <Image src={Logo} height={78} width={78} alt="" />
          </h1>
          <Typography
            variant={"span"}
            className="leading"
            >
          <div className=" mt-3 sm:mt-[50px]  leading-0 ">
            
            We are Lowfied and we make bangers. We make sure that we sound
            delicious and we always blow minds.Don't get us wrong, we actually
            do blow minds. Try us, satisfaction guaranteed.
          </div>
          </Typography>
        </div>
      </div>
      <div className="border-t-2 hidden py-10 sm:flex justify-between items-center  font-light text-[16px] text-white_100 mt-20 border-white_300">
        <div>
            <Typography
            variant={"span"}
            className="leading text-[16px]"
            >
          <h3>Copyright © 2020 Lowfied LLC. All rights reserved</h3>
          </Typography>
        </div>
        <div>
          <div className=" flex justify-between items-center gap-20">
            <div>
            <Typography
            variant={"span"}
            className="leading text-[16px]"
            >

             <h3>
             Terms & Conditions
              </h3>
            </Typography>
            </div>
            <div>
            <Typography
            variant={"span"}
            className="leading text-[16px]"
            >
              <h3>Privacy Policy</h3>
              </Typography>
            </div>
            <div>
            <Typography
            variant={"span"}
            className="leading text-[16px]"
            >
              <h3>Refund Policy</h3>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
