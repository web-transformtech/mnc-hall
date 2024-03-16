import React from "react";
import Background from "../../assets/Home/hall/background-yellow.png";
import HallGallery from "../../assets/Home/hall/hall-gallery.png";

export default function Services() {
  return (
    <div className=" relative ">
      <div className="z-0 absolute w-full">
        <img src={Background} alt="Background" className="w-full" />
      </div>
      <div className="relative z-4 container mx-auto">
        <h2 className=" text-textback text-center text-[42px] pt-[70px] font-semibold py-10">
          Services
        </h2>
        <div className=" grid grid-cols-12 gap-16">
          <div></div>
          <div className=" col-span-10">
            <div className=" grid  grid-cols-3 gap-10">
              <div>
                <img src={HallGallery} alt="Hall" className=" h-[200px] w-full object-cover" />
                <div className=" bg-white py-8">
                  <p className="text-center text-black text-h5 pb-1 font-semibold">
                    Dinning Hall
                  </p>
                  <p className=" text-center text-[#454545]">
                    Over 150,000 available homes <br /> for every budget.
                  </p>
                </div>
              </div>
              <div>
              <img src={HallGallery} alt="Hall" className=" h-[200px] w-full object-cover" />
                <div className=" bg-white py-8">
                  <p className="text-center text-black text-h5 pb-1 font-semibold">
                    Dinning Hall
                  </p>
                  <p className=" text-center text-[#454545]">
                    Over 150,000 available homes <br /> for every budget.
                  </p>
                </div>
              </div>
              <div>
              <img src={HallGallery} alt="Hall" className=" h-[200px] w-full object-cover" />
                <div className=" bg-white py-8">
                  <p className="text-center text-black text-h5 pb-1 font-semibold">
                    Dinning Hall
                  </p>
                  <p className=" text-center text-[#454545]">
                    Over 150,000 available homes <br /> for every budget.
                  </p>
                </div>
              </div>
              <div>
              <img src={HallGallery} alt="Hall" className=" h-[200px] w-full object-cover" />
                <div className=" bg-white py-8">
                  <p className="text-center text-black text-h5 pb-1 font-semibold">
                    Dinning Hall
                  </p>
                  <p className=" text-center text-[#454545]">
                    Over 150,000 available homes <br /> for every budget.
                  </p>
                </div>
              </div>
              <div>
              <img src={HallGallery} alt="Hall" className=" h-[200px] w-full object-cover" />
                <div className=" bg-white py-8">
                  <p className="text-center text-black text-h5 pb-1 font-semibold">
                    Dinning Hall
                  </p>
                  <p className=" text-center text-[#454545]">
                    Over 150,000 available homes <br /> for every budget.
                  </p>
                </div>
              </div>
              <div>
              <img src={HallGallery} alt="Hall" className=" h-[200px] w-full object-cover" />
                <div className=" bg-white py-8">
                  <p className="text-center text-black text-h5 pb-1 font-semibold">
                    Dinning Hall
                  </p>
                  <p className=" text-center text-[#454545]">
                    Over 150,000 available homes <br /> for every budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
