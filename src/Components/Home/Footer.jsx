/* eslint-disable no-unused-vars */
import React from "react";
import { RiFacebookFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <div className=" grid grid-cols-2 relative  bg-[#3c3c3c] py-[100px]">
        {/* <div className=" absolute py-[20px] top-[-90px] w-full">
          <div className="  py-10 w-[80%] mx-auto">
            <div className="grid grid-cols-3 rounded-md ">
              <div className=" bg-primary rounded-l-md py-6 px-10">
                <div className=" flex">
                  <div className=" w-[10%]">
                    <div className=" bg-white rounded-md text-primary flex justify-center py-2">
                      <RiFacebookFill />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className=" bg-primary  py-6 px-10">
                
              <div className=" flex">
                  <div className=" w-[10%]">
                    <div className=" bg-white rounded-md text-primary flex justify-center py-2">
                      <RiFacebookFill />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="bg-primary rounded-r-md py-6 px-10">
              <div className=" flex">
                  <div className=" w-[10%]">
                    <div className=" bg-white rounded-md text-primary flex justify-center py-2">
                      <RiFacebookFill />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex space-x-4 px-10">
          <div className=" bg-primary h-[30px]  w-[30px] rounded-md text-white flex justify-center items-center">
            <RiFacebookFill />
          </div>

          <div className=" bg-primary h-[30px]  w-[30px] rounded-md text-white flex justify-center items-center">
            <RiFacebookFill />
          </div>

          <div className=" bg-primary h-[30px]  w-[30px] rounded-md text-white flex justify-center items-center">
            <RiFacebookFill />
          </div>
        </div>
      </div>
    </>
  );
}
