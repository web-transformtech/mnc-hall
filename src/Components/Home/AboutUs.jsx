/* eslint-disable no-unused-vars */
import React from "react";
import HallOne from "../../assets/Home/hall/living-hall-one.png";
import { BsBuildingFill } from "react-icons/bs";

import HallGallery from "../../assets/Home/hall/hall-gallery.png";
import HallTwo from "../../assets/Home/hall/living-hall-two.png";
import HallBackground from "../../assets/Home/about/hall-background.jpg";
import Call from "../../assets/Home/about/call.png";

export default function AboutUs() {
  return (
    <div>
      <div className=" container mx-auto py-[100px]">
        <div className=" grid grid-cols-12 gap-10">
          <div></div>
          <div className=" col-span-4 relative z-4">
            <div className=" absolute h-[150px] rounded-r-[20px] rounded-b-[20px] top-0 z-[-1] bg-[#ededed] w-[200px]"></div>
            {/* <div className=" h-[100px] w-[100px] bg-[#ccc]">

            </div> */}
            <img
              src={HallOne}
              className="w-[90%] object-cover h-[400px]  rounded-r-[40px] rounded-b-[40px] mt-[20px]  my-auto mx-auto"
            />
            <div className=" bg-primary absolute rounded-md top-[20%] right-[-20%] flex text-white p-4 ">
              <div className=" flex  border-dashed rounded-md border-2 border-sky-500 px-10">
                <div className=" text-[42px] px-2 relative">
                  100<sup className=" text-tiny pb-10 "></sup>
                </div>
                <div className=" py-2 px-4 text-sm relative tracking-wide">
                  <div className=" absolute left-[-10px]"> +</div> HAPPY
                  <br />
                  EVENTS
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className=" col-span-5 h-full flex justify-center items-center">
            <div className=" block">
            <div className="text-h2 pb-2 text-black font-semibold">About MNC</div>
            <p>
            Founded in 1975, Qaiba Homes is a full-service realty company, assisting homeowners from selection to financing, all the way to the purchase of their homes. All properties feature world-class standards and affordable property rates designed to fit every lifestyle.
            </p>
            </div>
          
          </div>
        </div>
      </div>
      {/* <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div style={{ display: "inline-block" }}>
            <div id="zz" className="arrow-left"></div>
            <div id="zz" className="arrow-ctr"></div>
            <div id="zz" className="arrow-right"></div>
          </div>

          <div
            style={{
              display: "inline-block",
              position: "relative",
              left: "-30px",
            }}
          >
            <div id="zz" className="arrow-left"></div>
            <div id="zz" className="arrow-ctr"></div>
            <div id="zz" className="arrow-right"></div>
          </div>

          <div
            style={{
              display: "inline-block",
              position: "relative",
              left: "-30px",
            }}
          >
            <div id="zz" className="arrow-left"></div>
            <div id="zz" className="arrow-ctr"></div>
            <div id="zz" className="arrow-right"></div>
          </div>
        </div>
      </div> */}
      <div className=" relative">
        <img src={HallBackground} className=" h-[500px] w-full object-cover" />
        <div className=" absolute bg-[#b2444dde] h-full w-full top-0">
          <div className=" text-white font-extralight tracking-wide text-[44px] py-16 px-10">
            Services <span className=" font-semibold">We Provide </span>
          </div>

          <div className=" grid grid-cols-4 gap-16 px-10">
            <div>
              <img src={HallTwo} className=" w-full rounded-md" />
              <div className="p-4 relative">
                <div className=" absolute top-[-24px] right-[20px] bg-primary rounded-md p-3">
                  <BsBuildingFill className="text-white text-h3" />
                </div>
                <h4 className="text-h4 pt-3 text-black font-semibold text-left">
                  Dinning Hall
                </h4>
                <p className="pt-3 text-base">
                  Over 150,000 available homes for every budget.
                </p>
              </div>
            </div>

            <div>
              <img src={HallTwo} className=" w-full rounded-md" />
              <div className="p-4 relative">
                <div className=" absolute top-[-24px] right-[20px] bg-primary rounded-md p-3">
                  <BsBuildingFill className="text-white text-h3" />
                </div>
                <h4 className="text-h4 pt-3 text-black font-semibold text-left">
                  Dinning Hall
                </h4>
                <p className="pt-3 text-base">
                  Over 150,000 available homes for every budget.
                </p>
              </div>
            </div>

            <div>
              <img src={HallTwo} className=" w-full rounded-md" />
              <div className="p-4 relative">
                <div className=" absolute top-[-24px] right-[20px] bg-primary rounded-md p-3">
                  <BsBuildingFill className="text-white text-h3" />
                </div>
                <h4 className="text-h4 pt-3 text-black font-semibold text-left">
                  Dinning Hall
                </h4>
                <p className="pt-3 text-base">
                  Over 150,000 available homes for every budget.
                </p>
              </div>
            </div>

            <div>
              <img src={HallTwo} className=" w-full rounded-md" />
              <div className="p-4 relative">
                <div className=" absolute top-[-24px] right-[20px] bg-primary rounded-md p-3">
                  <BsBuildingFill className="text-white text-h3" />
                </div>
                <h4 className="text-h4 pt-3 text-black font-semibold text-left">
                  Dinning Hall
                </h4>
                <p className="pt-3 text-base">
                  Over 150,000 available homes for every budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[100px]"></div>

      <div className=" grid grid-cols-12 my-20">
        <div className=" col-span-5">
          <div className=" shapes my-6"></div>
        </div>

        <div className="relative col-span-7">
          <img src={Call} className=" absolute w-full  z-[-1] h-[200px]" />
        </div>
      </div>
    </div>
  );
}
