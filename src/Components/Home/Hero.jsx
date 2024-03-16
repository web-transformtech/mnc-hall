import React from "react";
import Building from "./../../assets/Home/mnc/building.png";
import Table from "./../../assets/Home/mnc/table.png";
import Location from "./../../assets/Home/mnc/location.png";
import Parking from "./../../assets/Home/mnc/parking.png";
import HeroImage from "../../assets/Home/mnc/hero.png";
import Logo from "../../assets/Home/logo.png";

export default function Hero() {
  return (
    <div>
      <div className=" relative">
        <div className="">
          <img src={HeroImage} className=" h-[100vh] object-cover w-full" />
        </div>
        <div className=" absolute top-0 w-full">
          <div className=" container mx-auto py-[100px]">
            <div className=" grid grid-cols-12 sm:gid-cols-12">
              <div className="sm:grid-cols-12 flex justify-center">
                <img src={Logo} alt="logo" />
              </div>
              <div className=" col-span-6 sm:grid-cols-11 ">
                <h1 className=" text-white sm:text-[30px] font-border font-semibold  py-1 text-[36px]">
                  MNC VEL KALYANAMANDAPAM
                </h1>
              </div>
            </div>

            <div className="w-full">
              <h1 className=" sm:text-[40px] text-textback font-white text-center text-[70px] pt-[70px] font-semibold pb-4">
                Unique housing solutions
                <br />
                for you
              </h1>
              <p className=" text-center pt-6 pb-10">
                Whether you’re buying, listing, or renting,
                <br />
                we can be of assistance to you.
              </p>
            </div>
            <div className=" flex justify-center">
              <button class=" bg-peacockGreen text-white py-4 px-10 my-6 text-base">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-primary ">
        <div className=" container mx-auto">
          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2">
            <div className=" flex justify-center text-center">
              <img src={Building} alt="Building" className="  h-[100px]" />
            </div>
            <div className=" flex justify-center text-center">
              <img src={Table} alt="Table" className=" h-[100px] " />
            </div>
            <div className=" flex justify-center text-center">
              <img src={Location} alt="Location" className="  h-[100px]" />
            </div>
            <div className=" flex justify-center text-center">
              <img src={Parking} alt="Parking" className=" h-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
