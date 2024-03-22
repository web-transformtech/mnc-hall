/* eslint-disable no-unused-vars */
import React from "react";
import Building from "./../../assets/Home/mnc/building.png";
import Table from "./../../assets/Home/mnc/table.png";
import Location from "./../../assets/Home/mnc/location.png";
import Parking from "./../../assets/Home/mnc/parking.png";
import HeroImage from "../../assets/Home/mnc/hero.png";
import Logo from "../../assets/Home/logo.png";
import Hall from "../../assets/Home/about/hall.jpg"

export default function Hero() {
  return (
    <div className="">
      <div className=" h-[100vh] relative">
        <div className="  h-[100vh] ">
          <img src={Hall} className=" h-[100vh]  object-cover w-full" />
        </div>
        <div className=" gradient h-full absolute top-0 w-full">
          <div className=" container mx-auto py-[50px]">
            <div className=" grid grid-cols-12 sm:gid-cols-12">
              <div className="sm:grid-cols-12 flex justify-center">
                <img src={Logo} alt="logo" />
              </div>
              <div className=" col-span-6 sm:grid-cols-11 ">
                <h1 className=" text-white sm:text-[30px] font-border font-semibold  py-1 text-[36px]">
                  MNC
                </h1>
              </div>
            </div>

            <div className="w-full mt-12 px-10">
              <h1 className=" sm:text-[40px] text-white w-[70%]  text-left text-[50px] pt-[50px] leading-[80px] font-semibold pb-4">
                Unique housing solutions
                <br />
                for you
              </h1>
              <p className=" text-left text-white pb-10">
                Whether you’re buying, listing, or renting,
                we can be of assistance to you.
              </p>
            </div>
            <div className=" mx-10 flex">
              <button className=" bg-peacockGreen text-white py-4 px-10 my-2 text-base">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
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
