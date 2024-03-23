/* eslint-disable no-unused-vars */
import React from "react";
import User from "../../assets/Home/mnc/user.png";
import Background from "../../assets/Home/hall/background.png";

export default function SatisfiedClients() {
  return (
    <div className=" relative">
      <div className="absolute z-0 w-full ">
        <img src={Background} alt="background" className="h-[100vh] sm:object-cover   w-full" />
      </div>

      <div className="Satisfied relative z-4 container mx-auto py-[100px]">
        <div className="grid grid-cols-12">
          <div className=" col-span-1"></div>
          <div className=" col-span-4 sm:col-span-12 flex justify-center">
            <div
              className=" text-textback sm:text-center sm:text-[26px] text-[56px] font-semibold"
              style={{ margin: "auto 0px" }}
            >
              Satisfied Clients
            </div>
          </div>
          <div className=" col-span-7 sm:col-span-12">
            <div className=" w-[90%] sm:w-full sm:px-4">
              <div className=" flex w-full sm:pt-3">
                <div className=" w-[25%] sm:w-[20%]  ">
                  <div
                    className=" bg-primary border-box flex justify-center h-[60px]  w-[60px] sm:h-[40px] sm:w-[40px] rounded-[50%]  "
                    style={{ margin: "6px auto" }}
                  >
                    <img src={User} alt="user" className=" h-[30px] sm:h-[20px] sm:my-2 my-4" />
                  </div>
                </div>
                <div className=" w-[75%] sm:w-[80%]">
                  <div className=" text-textback text-h3 sm:text-h6 sm:leading-[30px] leading-[34px]">
                    My real estate agent was with me and my wife every step of
                    the way. She kept us updated throughout the process.
                  </div>
                  <div className=" text-peacockGreen text-h5 sm:text-[14px] font-semibold mt-2">
                    Jonah Granger
                  </div>
                </div>
              </div>

              <div className=" flex w-full sm:pt-3">
                <div className=" w-[25%] sm:w-[20%]  ">
                  <div
                    className=" bg-primary border-box flex justify-center h-[60px]  w-[60px] sm:h-[40px] sm:w-[40px] rounded-[50%]  "
                    style={{ margin: "6px auto" }}
                  >
                    <img src={User} alt="user" className=" h-[30px] sm:h-[20px] sm:my-2 my-4" />
                  </div>
                </div>
                <div className=" w-[75%] sm:w-[80%]">
                  <div className=" text-textback text-h3 sm:text-h6 sm:leading-[30px] leading-[34px]">
                    My real estate agent was with me and my wife every step of
                    the way. She kept us updated throughout the process.
                  </div>
                  <div className=" text-peacockGreen text-h5 sm:text-[14px] font-semibold mt-2">
                    Jonah Granger
                  </div>
                </div>
              </div>

              <div className=" flex w-full sm:pt-3">
                <div className=" w-[25%] sm:w-[20%]  ">
                  <div
                    className=" bg-primary border-box flex justify-center h-[60px]  w-[60px] sm:h-[40px] sm:w-[40px] rounded-[50%]  "
                    style={{ margin: "6px auto" }}
                  >
                    <img src={User} alt="user" className=" h-[30px] sm:h-[20px] sm:my-2 my-4" />
                  </div>
                </div>
                <div className=" w-[75%] sm:w-[80%]">
                  <div className=" text-textback text-h3 sm:text-h6 sm:leading-[30px] leading-[34px]">
                    My real estate agent was with me and my wife every step of
                    the way. She kept us updated throughout the process.
                  </div>
                  <div className=" text-peacockGreen text-h5 sm:text-[14px] font-semibold mt-2">
                    Jonah Granger
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
