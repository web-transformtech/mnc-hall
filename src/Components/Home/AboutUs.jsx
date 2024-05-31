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

import Building from "./../../assets/Home/mnc/building.png";
import Table from "./../../assets/Home/mnc/table.png";
import Location from "./../../assets/Home/mnc/location.png";
import Parking from "./../../assets/Home/mnc/parking.png";

import HallGallery from "../../assets/Home/hall/hall-gallery.png";
import HallTwo from "../../assets/Home/hall/living-hall-two.png";
import BanquetHall from "../../assets/Home/hall/Banquet Halls.jpg";
import About from "../../assets/Home/hall/About.jpg";

import DinnerHall from "../../assets/Home/hall/Dinner Hall.jpg";
import GuestRoom from "../../assets/Home/hall/Guest Room.jpg";
import CarPark from "../../assets/Home/hall/car-park.jpg";

import HallBackground from "../../assets/Home/about/hall-background.jpg";
import Call from "../../assets/Home/about/call.png";

export default function AboutUs() {
  return (
    <div id="aboutus">
      <div className=" container mx-auto py-[100px]">
        <div className=" grid grid-cols-12 sm:gap-0  gap-10">
          <div className=" sm:hidden  "></div>
          <div className=" sm:px-4 lg:col-span-4 sm:col-span-12  md:col-span-12  mdsm:col-span-12 relative z-4">
            <div className=" absolute h-[150px] rounded-r-[20px] rounded-b-[20px] top-0 z-[-1] bg-[#ededed] w-[200px]"></div>

            <img
              src={About}
              className="w-[90%] sm:w-full object-cover lg:h-[400px] md:h-[600px] mdsm:h-[600px]  sm:mx-0  rounded-r-[40px] rounded-b-[40px] mt-[20px]  my-auto mx-auto"
            />
            <div className=" bg-primary absolute sm:w-[90%] sm:relative md:right-0 mdsm:right-0 rounded-md sm:top-[10%] sm:left-4  sm:right-0 -bottom-[4%] lg:right-[-90px] flex text-white p-4 ">
              <div className=" flex  border-dashed w-full sm:justify-center rounded-md border-2 border-sky-500 px-10">
                <div className=" text-[42px] px-2 relative">
                  250<sup className=" text-tiny pb-10 "></sup>
                </div>
                <div className=" py-2 px-4 text-sm relative tracking-wide">
                  <div className=" absolute left-[-10px]"> +</div> Events
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className=" lg:col-span-5 sm:px-4 sm:pt-[86px] sm:col-span-12  md:col-span-12  mdsm:col-span-12 h-full flex justify-center items-center">
            <div className=" block">
              <div className="text-[36px] pb-2 text-primary font-semibold">
                About MNC
              </div>
              <p>
                MNC Vel Kalyana Mandapam in Coimbatore welcomes you to its
                vibrant ambiance, nestled near the Muthugoundan Pudur Railway
                Bridge. With subtle ceiling lights and upscale decor, it's
                perfect for dream weddings and receptions. Indulge in delightful
                cuisine from in-house caterers and enjoy seamless event planning
                with their decor services. Experience unmatched quality and
                warmth at this centrally located venue, ensuring cherished
                memories for every occasion.
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
      <div
        className=" relative sm:h-[100vh] sm:overflow-hidden"
        id="infrawehave"
      >
        <img
          src={HallBackground}
          className=" h-[500px] sm:h-[100vh] sm:object-cover w-full object-cover"
        />
        <div className=" absolute  bg-[#b76a00e0] h-full w-full top-0">
          <div className=" text-white font-extralight tracking-wide text-[44px] sm:px-4 pt-16 pb-16 px-10">
            Infra
            <span className=" font-semibold"> we have </span>
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
              breakpoints={{
                300: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                980: {
                  slidesPerView: 2.3,
                  spaceBetween: 50,
                },
                1000: {
                  slidesPerView: 3.4,
                  spaceBetween: 20,
                },
                1224: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              id="servicesSlider"
              className="mySwiper px-4"
            >
              <SwiperSlide>
                <div>
                  <img
                    src={BanquetHall}
                    className=" sm:h-[40vh] h-[400px] object-cover sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative rounded-b-lg">
                    <div className=" absolute top-[-34px] right-[20px] bg-[#b2444d] rounded-md p-1.5">
                      <img src={Building} className="h-[50px]" />
                    </div>
                    <h4 className="text-h4 pt-3 text-black font-semibold text-left">
                      Banquet Hall
                    </h4>
                    <p className="pt-3 text-base">
                      Our Spacious Banquet Hall accommodates up to 800 guests
                      comfortably, ideal for large gatherings and events
                      requiring ample seating.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={DinnerHall}
                    className=" sm:h-[40vh] h-[400px] object-cover sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative rounded-b-lg">
                    <div className=" absolute top-[-34px] right-[20px] bg-[#fba732] rounded-md p-1.5">
                      <img src={Table} className="h-[50px]" />
                    </div>
                    <h4 className="text-h4 pt-3 text-black font-semibold text-left">
                      Dining Hall
                    </h4>
                    <p className="pt-3 text-base">
                      Enter our dining facility, where over 500 seats await,
                      promising ample space for gatherings of any size to dine
                      and enjoy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={GuestRoom}
                    className=" sm:h-[40vh] h-[400px] object-cover sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative rounded-b-lg">
                    <div className=" absolute top-[-34px] right-[20px] bg-[#4ea2b3] rounded-md p-1.5">
                      <img src={Location} className="h-[50px]" />
                    </div>
                    <h4 className="text-h4 pt-3 text-black font-semibold text-left">
                      Guest Rooms
                    </h4>
                    <p className="pt-3 text-base">
                      We provide 8 comfortable guest rooms to ensure seamless
                      accommodation, catering to every attendee's needs with
                      enough space and convenience.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src={CarPark}
                    className=" sm:h-[40vh] h-[400px] object-cover sm:object-cover w-full rounded-md"
                  />
                  <div className="p-4 sm:bg-white relative rounded-b-lg">
                    <div className=" absolute top-[-34px] right-[20px] bg-[#353978] rounded-md p-1.5">
                      <img src={Parking} className="h-[50px]" />
                    </div>
                    <h4 className="text-h4 pt-3 text-black font-semibold text-left">
                      Larger Car Parking
                    </h4>
                    <p className="pt-3 text-base">
                      Facilitating convenience, we offer parking with 75+ spaces
                      for larger vehicles, ensuring hassle-free arrivals for all
                      guests.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className=" lg:py-[170px] md:py-[170px] mdsm:py-[120px] sm:py-0 sm:pb-16"></div>

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
