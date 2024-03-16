import React from "react";
import Background from "../../assets/Home/hall/background-yellow.png";
import HallGallery from "../../assets/Home/hall/hall-gallery.png";

export default function Gallery() {
  return (
    <div className=" relative py-[100px]">
      <div className="z-0 absolute w-full">
        <img src={Background} alt="Background" className="w-full" />
      </div>
      <div className="relative z-4 container mx-auto">
        <h2 className=" text-textback text-center text-[42px] pt-[70px] font-semibold py-10">
          Gallery
        </h2>

        <div className=" grid grid-cols-12 gap-16">
          <div></div>
          <div className=" col-span-10">
            <div className=" grid  grid-cols-3 gap-10">
              <div>
                <img src={HallGallery} alt="Hall" className=" rounded-[30px]" />
              </div>
              <div>
                <img src={HallGallery} alt="Hall" className=" rounded-[30px]" />
              </div>
              <div>
                <img src={HallGallery} alt="Hall" className=" rounded-[30px]" />
              </div>
              <div>
                <img src={HallGallery} alt="Hall" className=" rounded-[30px]" />
              </div>
              <div>
                <img src={HallGallery} alt="Hall" className=" rounded-[30px]" />
              </div>
              <div>
                <img src={HallGallery} alt="Hall" className=" rounded-[30px]" />
              </div>
            </div>

            <div className=" flex justify-center">

              <button className=" bg-peacockGreen py-4 px-10 text-white mt-8">Know More</button>

            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
