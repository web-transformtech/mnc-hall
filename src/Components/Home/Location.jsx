import React from "react";
import Hall from "../../assets/Home/hall/hall.jpg";
import { HiPhone, HiMail } from "react-icons/hi";

export default function Location() {
  return (
    <div className=" container mx-auto py-[100px]">
      <div className=" grid grid-cols-12 gap-16">
        <div className=" col-span-1"></div>
        <div className=" col-span-4 mx-auto">
          <img src={Hall} alt="Hall" />
          <h1 className="px-16 text-textback text-[40px] font-semibold">
            QUESTIONS OR <br />
            CONCERNS?
          </h1>
        </div>
        <div className=" col-span-7 px-8">
          <div className="flex w-[100%] pb-10 ">
            <div className=" w-[10%]">
              <div className=" bg-primary border-box flex items-center justify-center h-[70px] w-[70px] rounded-[50%]">
                <HiMail className=" text-white text-[42px]" />
              </div>
            </div>
            <div className=" w-[90%] px-12">
              <a href="mailto:mncvelkalyanamandapam@gmail.com">
                <p className="text-h1 font-semibold py-[10px]">
                  {" "}
                  mncvelkalyanamandapam@gmail.com
                </p>
              </a>
            </div>
          </div>

          <div className="flex w-[100%] pb-10  ">
            <div className=" w-[10%]">
              <div className=" bg-primary border-box  flex items-center justify-center h-[70px] w-[70px] rounded-[50%]">
                <HiPhone className=" text-white text-[42px]" />
              </div>
            </div>
            <div className=" w-[90%] px-12">
                <p className="text-h1 font-semibold pt-[2px] leading-[40px]">
                  {" "}
                  123 anywhere st,
                  <br/>
                   any city, st 12345
                </p>
            </div>
          </div>

          <div className="flex w-[100%] pb-10 ">
            <div className=" w-[10%]">
              <div className=" bg-primary  border-box flex items-center justify-center h-[70px] w-[70px] rounded-[50%]">
                <HiPhone className=" text-white text-[42px]" />
              </div>
            </div>
            <div className=" w-[90%] px-12">
              <a href="tel:+919047016032">
                <p className="text-h1 font-semibold pt-6 py-[10px]">
                  {" "}
                  +91 9047016032
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
