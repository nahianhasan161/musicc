import React from "react";
import Logo from "../../../public/assests/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" container mt-20 mx-auto">
      <div className=" flex gap-24 items-start">
        <div className=" basis-[30%]  ">
          <h1 className="uppercase text-white_300 text-[40px] leading-[50px] font-bold">
            We would love to hear form YOu
          </h1>
          <div className=" mt-[40px]">
            <p className="text-[14px]   leading-0 text-white_100 font-light">
              Feel free to reach out if you want <br /> to collaborate with us,
              orsimply have a chat.
            </p>
            <div className=" border-t-2  mt-4 border-white_300">
              <h2 className=" text-[28px] mt-3 text-white_300 font-semibold">
                contact@lowfied.com
              </h2>
            </div>
          </div>
        </div>
        <div className="  basis-[10%] uppercase text-white_300 text-[20px]   font-semibold">
          <h1>lowfied</h1>
          <div className=" mt-[100px]">
            <ul className=" mb-0 text-[14px] text-white_100 font-light">
              <li>Tracks</li>
              <li>merch</li>
              <li>about us</li>
              <li>jobs</li>
              <li>Lowfied.Space</li>
            </ul>
          </div>
        </div>

        <div className=" uppercase basis-[10%] text-white_300  text-[20px]   font-semibold">
          <h1>support</h1>
          <div className=" mt-[100px]">
            <ul className="  mb-0 text-[14px] text-white_100 font-light">
              <li>Pricing</li>
              <li>Start Selling</li>
              <li>Sign Up</li>
              <li>Contact Us</li>
              <li>Help Desk</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className=" uppercase basis-[10%] text-white_300 text-[20px]   font-semibold">
          <h1>blogs</h1>
          <div className=" mt-[100px]">
            <ul className=" mb-0 text-[14px] text-white_100 font-light">
              <li>Lowfied Originals</li>
              <li>How To Series</li>
              <li>Mix & Master</li>
            </ul>
          </div>
        </div>
        <div className=" basis-[20%] uppercase text-white_300 text-[20px]   font-semibold">
          <h1>
            <Image src={Logo} height={78} width={78} alt="" />
          </h1>
          <div className="text-[14px]  mt-[50px]  leading-0 text-white_100 font-light">
            We are Lowfied and we make bangers. We make sure that we sound
            delicious and we always blow minds.Don't get us wrong, we actually
            do blow minds. Try us, satisfaction guaranteed.
          </div>
        </div>
      </div>
      <div className="border-t-2   py-10 flex justify-between items-center  font-light text-[16px] text-white_100 mt-20 border-white_300">
        <div>
          <h3>Copyright © 2020 Lowfied LLC. All rights reserved</h3>
        </div>
        <div>
       <div className=" flex justify-between items-center gap-20">

       <div>
          <h3>Terms & Conditions</h3>
        </div>
        <div>
          <h3>Privacy Policy</h3>
        </div>
        <div>
          <h3>Refund Policy</h3>
        </div>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
