/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Building from "./../../assets/Home/mnc/building.png";
import Table from "./../../assets/Home/mnc/table.png";
import Location from "./../../assets/Home/mnc/location.png";
import Parking from "./../../assets/Home/mnc/parking.png";
import HeroImage from "../../assets/Home/mnc/hero.png";
import Logo from "../../assets/Home/logo.png";
import { Link } from "react-router-dom";
import { RiAlignLeft } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

// import Hall from "../../assets/Home/about/hall.png";
import Hall from "../../assets/Home/hall/mnc_hall.png";

export default function Hero() {
  const [navbarState, setNavBar] = useState(false);

  const handleNav = () => {
    setNavBar(!navbarState);
  };
  return (
    <>
        {navbarState ? (
              <>
                <div className=" bg-[#3b82f680] sm:block  z-10  fixed top-0 h-full w-full ">
                  <div className="  flex justify-end p-4 ">
                    <MdCancel onClick={()=>handleNav()} className=" text-white hover:text-secondary  cursor-pointer" />
                  </div>
                  <div className="text-center text-white  py-0">Logo</div>
                  <div></div>
                  <div className="=  p-4">

                
                  <a href="#home">
                    <div onClick={()=>handleNav()} className="  px-2 py-2 text-white hover:text-primary  cursor-pointer">
                      Home
                    </div>
                  </a>
                  <a href="#aboutus">
                    <div onClick={()=>handleNav()} className=" px-2 py-2 text-white hover:text-primary  cursor-pointer">
                      About us
                    </div>
                  </a>
                  <a href="#infrawehave">
                    <div onClick={()=>handleNav()} className=" px-2 py-2 text-white hover:text-primary  cursor-pointer">
                      Infra we have
                    </div>
                  </a>
                  <a href="#team">
                    <div className=" px-2 py-2 text-white hover:text-primary  cursor-pointer">
                      Teams
                    </div>
                  </a>
                  <a href="#contact">
                    <div className=" px-2 py-2 text-white hover:text-primary  cursor-pointer">
                      Contact
                    </div>
                  </a>
                  </div>
                </div>{" "}
              </>
            ) : (
              <div></div>
            )}

    <div className="" id="home">
   
      <div className=" h-[100vh]  mdlg:h-[100vh]  relative">
        <div className=" mdlg:h-[100vh]  overflow-hidden ">
          <div className="h-[100vh] overflow-hidden ">
            <img
              src={Hall}
              className=" h-[100vh]  overflow-hidden object-cover w-full"
            />
          </div>
          <div className=" absolute top-0 bg-[#00000061] w-full h-full">
            <div className=" lg:block lge:block md:hidden  mdsm:hidden sm:hidden absolute top-0 w-full px-8">
              {/* Desktop View */}
              <div className=" container mx-auto">
                <div class="grid grid-cols-1   gap-4  h-full">
                  <div class="h-full ">
                    <div className=" flex  justify-center space-x-16 py-10">
                      <a href={`#home`}>
                        <div className=" text-white hover:text-secondary cursor-pointer ">
                          Home{" "}
                        </div>
                      </a>
                      <a href={`#aboutus`}>
                        <div className=" text-white hover:text-secondary cursor-pointer">
                          About{" "}
                        </div>
                      </a>
                      <a href={`#infrawehave`}>
                        <div className=" text-white hover:text-secondary cursor-pointer">
                          Infra we have{" "}
                        </div>
                      </a>
                      <a href={`#team`}>
                        <div className=" text-white hover:text-secondary cursor-pointer">
                          Teams
                        </div>
                      </a>
                      <a href={`#contact`}>
                        <div className=" text-white hover:text-secondary cursor-pointer">
                          Contact
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile View  */}

            <div className=" lg:hidden  p-5 lge:hidden md:block mdsm:block sm:block">
              {navbarState ? null : (
                <RiAlignLeft
                  onClick={() => handleNav()}
                  className=" text-white  cursor-pointer text-h1"
                />
              )}
            </div>
           
            <div className=" container mx-auto h-full">
              <div class="grid grid-cols-1   gap-4  h-full">
                <div class="  h-full">
                  <div className="h-full px-8  flex justify-center items-center	">
                    <div className=" block">
                      <h1 className=" text-secondary text-center  text-[42px] font-semibold">
                        MNC Vel Kalyana Mandapam
                      </h1>
                      <div className="w-[80%] mx-auto text-center text-white w-80% text-h4">
                        "Cherish your moment in our enchanting marriage hall
                        where dreams become unforgettable realities."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" gradient h-full absolute top-0 w-full">
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
        </div> */}
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
      {/* <div className=" lg:bg-primary mdlg:bg-red ">
        Hello
     </div> */}
    </div>

    </>
  );
}
