/* eslint-disable no-unused-vars */
import React from "react";
import HallOne from "../../assets/Home/hall/living-hall-one.png";
import HallTwo from "../../assets/Home/hall/living-hall-two.png";

export default function LeadSection() {
  return (
    <div className=" container mx-auto py-16">
      <div className=" grid grid-cols-12 py-10">
        <div className=" col-span-6 h-full  relative ">
          <p className=" text-black text-[40px] pl-10 pr-16 absolute bottom-0 font-semibold leading-[50px]">
            Get the <span className=" text-primary font-semibold">Best</span>{" "}
            property
            <span className=" text-primary font-semibold"> investment </span>
            options with the help of our highly experienced group of real estate
            brokers.
          </p>
        </div>
        <div className=" col-span-6">
          <div className=" grid grid-cols-3 gap-6">
            <div className=" relative h-full">
              <div className=" absolute bottom-0">
                <img src={HallTwo} />
              </div>
            </div>
            <div className=" col-span-2 relative">
              <div className="  text-primary ml-[-30px] text-[44px] pb-4 font-semibold">
                Stage Decoration
              </div>
              <img src={HallOne} />
            </div>
          </div>
        </div>
      </div>

      <div className="  py-10  h-[400px] ">
        <div className=" grid relative grid-cols-3 ">
          <div className="relative ">
            <div className=" bg-primary my-6 absolute right-[-40px] w-full  z-[-2] rounded-md p-10">
              <div className=" text-white font-semibold text-center tracking-wide text-[24px]">
                Contact <span className=" font-semibold">Details </span>
              </div>

              <div className=" grid grid-cols-3 text-white">
                <div className="pb-4 pt-4">Call us:</div>
                <div className="text-left col-span-2 mt-[1px] pt-4">
                  +91 97505 77456
                </div>

                <div className=" pb-4">Address :</div>
                <div className=" col-span-2 pb-4 mt-[1px]">
                  123, Any where <br />
                  Any Street, <br />
                  Any State - 00000
                </div>

                <div className="pb-2">Call us:</div>
                <div className=" col-span-2 mt-[1px] pb-2">+91 97505 77456</div>
              </div>
            </div>
          </div>
          <div className="relative  ">
            <div className=" bg-secondary absolute  w-full  z-[4] rounded-md p-10">
              <div className=" text-white font-semibold mb-1 text-center tracking-wide text-[24px]">
                Contact <span className=" font-semibold">us </span>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className=" py-2 px-3 w-full mt-4"
                />
              </div>

              
              <div>
                <input
                  type="email"
                  placeholder="email"
                  className=" py-2 px-3 w-full mt-4"
                />
              </div>

              
              <div>
                <input
                  type="number"
                  placeholder="Number"
                  className=" py-2 px-3 w-full mt-4"
                />
              </div>

              <div className=" pt-4">
                <button className=" bg-peacockGreen w-full py-3 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="relative ">
            <div className=" bg-peacockGreen absolute left-[-40px] w-full  z-[-2] rounded-md p-10">

            <div className=" text-white font-semibold mb-1 text-center tracking-wide text-[24px]">
                Our <span className=" font-semibold">Location </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
