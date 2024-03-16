import React from "react";
import HallOne from "../../assets/Home/hall/living-hall-one.png";
import HallTwo from "../../assets/Home/hall/living-hall-two.png";

export default function LeadSection() {
  return (
    <div className=" container mx-auto py-16">
      <div className=" grid grid-cols-12 py-10">
        <div className=" col-span-1"></div>
        <div className=" col-span-5 h-full  relative ">
          <p className=" text-textback text-[44px] pl-10 pr-16 absolute bottom-0 font-semibold leading-[60px]">
            Get the{" "}
            <span className=" text-hightlighttext font-semibold">Best</span>{" "}
            property
            <span className=" text-hightlighttext font-semibold">
              {" "}
              investment{" "}
            </span>
            options with the help of our highly experienced group of real estate
            brokers.
          </p>
        </div>
        <div className=" col-span-5">
          <div className=" grid grid-cols-3 gap-6">
          <div className=" relative h-full">
            <div className=" absolute bottom-0">
            <img src={HallTwo}/>
            </div>
              
            </div>
            <div className=" col-span-2">
                <div className="  text-hightlighttext text-[36px] pb-4 font-semibold">Stage Decoration</div>
                <img src={HallOne}/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
