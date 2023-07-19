import Layout from "@/components/layout";
import React from "react";
import DropMenu from "@/components/select";
import { MdMoreVert, MdExpandMore } from "react-icons/md";
import InputField from "@/components/inputfield";
import { useState } from "react";
import RadioButton from "@/components/checkbox";

const Seller = () => {
  const [open, setClose] = useState(true);
  return (
    <div className=" pt-20 container mx-auto">
      <Layout>
        <div className=" px-4 py-6">
          <div>
            <h5 className=" text-[20px] font-semibold text-white_300  leading-[50%]">
              Your Licenses
            </h5>
            <p className=" text-[14px] mt-8 text-white_100 leading-[18px]">
              We recommend to use our stock contract. However, you can <br />{" "}
              edit and personalize your licenses according to your needs.
            </p>
          </div>
          <div className=" flex justify-between items-center px-4 rounded-[5px] bg-black py-2 mt-6">
            <div className=" flex capitalize gap-2">
              <div className=" text-white_100 font-light text-[14px]">
                license Type:{" "}
                <span className=" text-[14px] font-semibold">Regular</span>
              </div>
              <div className=" text-[14px] font-light text-white_100">
                MP3 <span>1500 $</span>
              </div>
            </div>
            <div className=" text-white_300  gap-5 flex items-center">
              <div
                className="  flex items-center capitalize font-semibold  text-[15px]"
                onClick={() => setClose(!open)}
              >
                preview <MdExpandMore className=" text-2xl" />
              </div>
              <MdMoreVert className=" text-2xl" />
            </div>
          </div>
          {open && (
            <div>
              <div
                className={` ${
                  open && "transition-all duration-1000"
                }  py-10 rounded-[5px] bg-black px-3 mt-2`}
              >
                <div className=" md:w-1/3 lg:w-1/5">
                  <InputField className={"py-4"} label={"Default Price "} />
                </div>
                <div className=" mt-8 md:w-1/3 lg:w-1/5">
                  <DropMenu
                    label="Files to Deliver"
                    className={"bg-black_100 rounded-[4px] py-4"}
                  />
                </div>
              </div>
            </div>
          )}
          <div className=" px-3 py-5 rounded-[5px] bg-black mt-20">
            <div>
              <h4 className=" font-semibold capitalize text-white_100 text-[16px]">
                Distribution
              </h4>
              <div className=" mt-6 grid gap-20 sm:grid-cols-2">
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Term of year fro the license "}
                  />
                </div>
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Number of Distribution Copies allowed "}
                  />
                  <div className=" mt-3">
                    <RadioButton type={"checkbox"} label={"Unlimited"} />
                  </div>
                </div>
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Number of Audio Streams allowed "}
                  />
                </div>
              </div>
            </div>
            <div className="   border-t-2  mt-20 pt-8  border-white_100">
              <h4 className="capitalize font-semibold text-white_100 text-[16px]">
                music vedios
              </h4>
              <div className=" mt-8 grid gap-20 sm:grid-cols-2">
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Number of Non Monetized Music vedios allowed"}
                  />
                </div>
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Number of Monetized Video Streams Allowed"}
                  />
                  <div className=" mt-3">
                    <RadioButton type={"checkbox"} label={"Unlimited"} />
                  </div>
                </div>
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Number of Non Monetized Video Streams Allowed "}
                  />
                  <div className=" mt-3">
                    <RadioButton type={"checkbox"} label={"Unlimited"} />
                  </div>
                </div>
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Number of Non Monetized Music Videos allowed"}
                  />
                  <div className=" mt-3">
                    <RadioButton type={"checkbox"} label={"Unlimited"} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" capitalize  border-t-2  mt-20 pt-8  border-white_100">
              <h4 className=" font-semibold text-white_100 text-[16px]">
                Radio broadcasting
              </h4>
              <div className=" mt-8 grid gap-20 sm:grid-cols-2">
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Broadcasting Rights "}
                  />
                </div>
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Number of Radio Stations Allowed"}
                  />
                  <div className=" mt-3">
                    <RadioButton type={"checkbox"} label={"Unlimited"} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" capitalize  border-t-2  mt-20 pt-8  border-white_100">
              <h4 className=" font-semibold text-white_100 text-[16px]">
                Live performances
              </h4>
              <div className=" mt-8 grid gap-20 sm:grid-cols-2">
                <div>
                  <DropMenu
                    className={" bg-bt_color px-3 rounded-[5px] py-4"}
                    label={"Allow performances for profit (may or may not)"}
                  />
                </div>
                <div>
                  <InputField
                    className={"py-4"}
                    label={"Number of Not for Profit Performances Allowed"}
                  />
                  <div className=" mt-3">
                    <RadioButton type={"checkbox"} label={"Unlimited"} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-5 flex gap-4">
              {" "}
              <button className=" capitalize bg-yellow text-black_100 text-[14px] rounded-[5px] font-normal text-center px-8 py-2">
                update
              </button>
              <button className=" capitalize   bg-bt_color border-[1px]  border-yellow text-yellow text-[14px] rounded-[5px] font-normal text-center px-8 py-2">
                Cancel
              </button>
            </div>
          </div>
          <div className=" flex justify-between items-center px-4 rounded-[5px] bg-black py-2 mt-4">
            <div className=" flex capitalize gap-2">
              <div className=" text-white_100 font-light text-[14px]">
                license Type:{" "}
                <span className=" text-[14px] font-semibold">Professional</span>
              </div>
              <div className=" text-[14px] font-light flex items-center gap-2 text-white_100">
                MP3 + WAV{" "}
                <div className=" w-1 h-1 bg-white_100 rounded-full"></div>{" "}
                <span>2500 s</span>
              </div>
            </div>
            <div className=" text-white_300  gap-5 flex items-center">
              <div
                className="  flex items-center capitalize font-semibold  text-[15px]"
                onClick={() => setClose(!open)}
              >
                Preview <MdExpandMore className=" text-2xl" />
              </div>
              <MdMoreVert className=" text-2xl" />
            </div>
          </div>
          <div className=" flex justify-between items-center px-4 rounded-[5px] bg-black py-2 mt-4">
            <div className=" flex capitalize gap-2">
              <div className=" text-white_100 font-light text-[14px]">
                license Type:{" "}
                <span className=" text-[14px] font-semibold">Trackout</span>
              </div>
              <div className=" text-[14px] font-light flex items-center gap-2 text-white_100">
                MP3 + WAV{" "}
                <div className=" w-1 h-1 bg-white_100 rounded-full"></div>{" "}
                <span>2500 s</span>
              </div>
            </div>
            <div className=" text-white_300  gap-5 flex items-center">
              <div
                className="  flex items-center capitalize font-semibold  text-[15px]"
                onClick={() => setClose(!open)}
              >
                Preview <MdExpandMore className=" text-2xl" />
              </div>
              <MdMoreVert className=" text-2xl" />
            </div>
          </div>
          <div className=" flex justify-between items-center px-4 rounded-[5px] bg-black py-2 mt-4">
            <div className=" flex capitalize gap-2">
              <div className=" text-white_100 font-light text-[14px]">
                license Type:{" "}
                <span className=" text-[14px] font-semibold">Exclusive</span>
              </div>
              <div className=" text-[14px] font-light flex items-center gap-2 text-white_100">
                MP3 + WAV{" "}
                <div className=" w-1 h-1 bg-white_100 rounded-full"></div>{" "}
                <span>2500 s</span>
              </div>
            </div>
            <div className=" text-white_300  gap-5 flex items-center">
              <div
                className="  flex items-center capitalize font-semibold  text-[15px]"
                onClick={() => setClose(!open)}
              >
                Preview <MdExpandMore className=" text-2xl" />
              </div>
              <MdMoreVert className=" text-2xl" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Seller;
