/* eslint-disable no-unused-vars */
import React from "react";
import Building from "./../../assets/Home/mnc/building.png";
import Table from "./../../assets/Home/mnc/table.png";
import Location from "./../../assets/Home/mnc/location.png";
import Parking from "./../../assets/Home/mnc/parking.png";
import HeroImage from "../../assets/Home/mnc/hero.png";
import Logo from "../../assets/Home/logo.png";
import Hall from "../../assets/Home/about/hall.jpg";

export default function Hero() {
  return (
    <div className="">
      <div className=" h-[100vh] landscape:h-auto relative">
        <div className="  h-[100vh] landscape:h-auto">
          <img src={Hall} className=" h-[100vh] landscape:h-auto object-cover w-full" />
        </div>
        <div className=" gradient h-full absolute top-0 w-full">
          <div className=" container mx-auto py-[50px]">
            <div className=" grid grid-cols-12 sm:gid-cols-12">
              <div className="sm:col-span-2 md:col-span-2 lg:col-span-1 md:mx-4 mdsm:col-span-2 md:justify-end mdsm:justify-end  flex justify-center sm:justify-end">
                <img src={Logo} alt="logo" className=" sm:h-[50px]" />
              </div>
              <div className=" col-span-6 sm:grid-cols-11 ">
                <h1 className="sm:px-2  sm:text-left text-white sm:text-[30px]  md:mt-1 mdsm:mt-1 font-border font-semibold  py-1 text-[36px]">
                  MNC
                </h1>
              </div>
            </div>

            <div className="w-full mt-12 px-10 sm:px-4">
              <h1 className=" sm:text-[30px] text-white lg:w-[100%] sm:w-full  sm:leading-[40px] text-left text-[50px] pt-[50px] leading-[80px] font-semibold pb-4">
                Unique housing solutions
    <br/>
                for you
              </h1>
              <p className=" text-left text-white pb-10">
                Whether you’re buying, listing, or renting, we can be of
                assistance to you.
              </p>
            </div>
            <div className=" mx-10 flex sm:justify-center">
              <button className=" bg-peacockGreen text-white py-4 px-10 my-2 text-base">
                Book Now
              </button>
            </div>
          </div>
        </div>
       
      </div>
      <div className="  w-full ">
        <div className="">
          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2">
            <div className="bg-primary  flex justify-center text-center">
              <img src={Building} alt="Building" className="  h-[100px]" />
            </div>
            <div className="bg-secondary flex justify-center text-center">
              <img src={Table} alt="Table" className=" h-[100px] " />
            </div>
            <div className="bg-peacockGreen flex justify-center text-center">
              <img src={Location} alt="Location" className="  h-[100px]" />
            </div>
            <div className="bg-[#353978] flex justify-center text-center">
              <img src={Parking} alt="Parking" className=" h-[100px]" />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
