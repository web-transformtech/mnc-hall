import React from "react";
import HallGallery from "../../assets/Home/hall/hall-gallery.png";

export default function About() {
  return (
    <div className=" container sm:px-4 mx-auto py-[100px]">
      <div className="grid grid-cols-12 gap-16 sm:gap-0">
        <div className=" sm:hidden">

        </div>
        <div className="sm:col-span-12 col-span-6">
          <img src={HallGallery} className="border-[50px] sm:border-l-[10px] sm:border-r-[10px] sm:border-l-secondary border-t-secondary rounded-r-[40px]  border-b-secondary border-r-secondary border-l-0 w-full h-[500px] object-cover" />
        </div>
        <div className="sm:col-span-12 col-span-5">
          <div>
            <h2 className=" text-textback text-left text-[42px] pt-[70px] font-semibold pb-4">
              About MNC
            </h2>
            <p className="w-[70%] sm:w-full text-textbasiccolor">
              Founded in 1975, Qaiba Homes is a full-service realty company,
              assisting homeowners from selection to financing, all the way to
              the purchase of their homes. All properties feature world-class
              standards and affordable property rates designed to fit every
              lifestyle.
            </p>
            <button className=" bg-peacockGreen text-white py-4 px-10 my-6 text-base">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
