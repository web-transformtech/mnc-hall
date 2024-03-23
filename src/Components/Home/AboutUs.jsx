import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
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
        <div className=" grid grid-cols-12 sm:gap-0  gap-10">
          <div className=" sm:hidden  "></div>
          <div className=" sm:px-4 lg:col-span-4 sm:col-span-12  md:col-span-12  mdsm:col-span-12 relative z-4">
            <div className=" absolute h-[150px] rounded-r-[20px] rounded-b-[20px] top-0 z-[-1] bg-[#ededed] w-[200px]"></div>

            <img
              src={HallOne}
              className="w-[90%] sm:w-full object-cover lg:h-[400px] md:h-[600px] mdsm:h-[600px]  sm:mx-0  rounded-r-[40px] rounded-b-[40px] mt-[20px]  my-auto mx-auto"
            />
            <div className=" bg-primary absolute sm:w-[90%] sm:relative md:right-0 mdsm:right-0 rounded-md sm:top-[10%] sm:left-4  sm:right-0 top-[20%] lg:right-[-90px] flex text-white p-4 ">
              <div className=" flex  border-dashed w-full sm:justify-center rounded-md border-2 border-sky-500 px-10">
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
          <div className=" lg:col-span-5 sm:px-4 sm:pt-[86px] sm:col-span-12  md:col-span-12  mdsm:col-span-12 h-full flex justify-center items-center">
            <div className=" block">
              <div className="text-h2 pb-2 text-black font-semibold">
                About MNC
              </div>
              <p>
                Founded in 1975, Qaiba Homes is a full-service realty company,
                assisting homeowners from selection to financing, all the way to
                the purchase of their homes. All properties feature world-class
                standards and affordable property rates designed to fit every
                lifestyle.
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
      <div className=" relative sm:h-[100vh] sm:overflow-hidden">
        <img
          src={HallBackground}
          className=" h-[500px] sm:h-[100vh] sm:object-cover w-full object-cover"
        />
        <div className=" absolute  bg-[#b2444dde] h-full w-full top-0">
          <div className=" text-white font-extralight tracking-wide text-[44px] sm:px-4 pt-16 pb-16 px-10">
            Services <span className=" font-semibold">We Provide </span>
          </div>

          <div className=" container mx-auto">
            <Swiper
              slidesPerView={4}
              spaceBetween={50}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              id="servicesSlider"
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <img
                    src={HallTwo}
                    className=" sm:h-[40vh] sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative">
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
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={HallTwo}
                    className=" sm:h-[40vh] sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative">
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
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={HallTwo}
                    className=" sm:h-[40vh] sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative">
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
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={HallTwo}
                    className=" sm:h-[40vh] sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative">
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
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={HallTwo}
                    className=" sm:h-[40vh] sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative">
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
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={HallTwo}
                    className=" sm:h-[40vh] sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative">
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
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={HallTwo}
                    className=" sm:h-[40vh] sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative">
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
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={HallTwo}
                    className=" sm:h-[40vh] sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative">
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
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={HallTwo}
                    className=" sm:h-[40vh] sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative">
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="py-[100px] sm:py-0"></div>

      {/* <div className="sm:hidden grid grid-cols-12 my-20">
        <div className=" col-span-5">
          <div className=" shapes my-6"></div>
        </div>

        <div className="relative col-span-7">
          <img src={Call} className=" absolute w-full  z-[-1] h-[200px]" />
        </div>
      </div> */}
    </div>
  );
}
