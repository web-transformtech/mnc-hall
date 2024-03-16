import React from "react";
import User from "../../assets/Home/mnc/user.png";
import Background from "../../assets/Home/hall/background.png";

export default function SatisfiedClients() {
  return (
    <div className=" relative">
      <div className="absolute z-0 w-full ">
        <img src={Background} alt="background" className=" h-[100vh] w-full" />
      </div>

      <div className="Satisfied relative z-4 container mx-auto py-[100px]">
        <div className="grid grid-cols-12">
          <div className=" col-span-1"></div>
          <div className=" col-span-4 flex justify-center">
            <div
              className=" text-textback text-[56px] font-semibold"
              style={{ margin: "auto 0px" }}
            >
              Satisfied Clients
            </div>
          </div>
          <div className=" col-span-7">
            <div className=" w-[75%]">
              <div className=" flex w-full">
                <div className=" w-[25%]  ">
                  <div
                    className=" bg-textback border-box flex justify-center h-[70px] w-[70px] rounded-[50%]  "
                    style={{ margin: "6px auto" }}
                  >
                    <img src={User} alt="user" className=" h-[30px] my-4" />
                  </div>
                </div>
                <div className=" w-[75%]">
                  <div className=" text-textback text-h2 leading-[34px]">
                    My real estate agent was with me and my wife every step of
                    the way. She kept us updated throughout the process.
                  </div>
                  <div className=" text-hightlighttext text-h5  font-semibold mt-1">
                    Jonah Granger
                  </div>
                </div>
              </div>

              <div className=" flex w-full mt-6">
                <div className=" w-[25%]  ">
                  <div
                    className=" bg-textback border-box flex justify-center h-[70px] w-[70px] rounded-[50%]  "
                    style={{ margin: "6px auto" }}
                  >
                    <img src={User} alt="user" className=" h-[30px] my-4" />
                  </div>
                </div>
                <div className=" w-[75%]">
                  <div className=" text-textback text-h2 leading-[34px]">
                    I always rely on Qaiba Homes to take care of my real estate
                    needs, no matter the location, square footage, or budget.
                  </div>
                  <div className=" text-hightlighttext text-h5  font-semibold mt-1">
                    Mimi Bristow
                  </div>
                </div>
              </div>

              <div className=" flex w-full mt-6">
                <div className=" w-[25%]  ">
                  <div
                    className=" bg-textback border-box flex justify-center h-[70px] w-[70px] rounded-[50%]  "
                    style={{ margin: "6px auto" }}
                  >
                    <img src={User} alt="user" className=" h-[30px] my-4" />
                  </div>
                </div>
                <div className=" w-[75%]">
                  <div className=" text-textback text-h2 leading-[34px]">
                    Our agent went above and beyond what was expected of her.
                    We're thankful for her excellent service and assistance.
                  </div>
                  <div className=" text-hightlighttext text-h5  font-semibold mt-1">
                    Gina Laing
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
