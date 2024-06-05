/* eslint-disable no-unused-vars */
import React from 'react';
import Noprofile from '../../assets/Home/noprofile.webp';
import NoprofileFemale from '../../assets/Home/noprofilefemale.webp';
export default function LeadSection() {
    return (
        <>
            <div className=" container mx-auto pb-16" id="team">
                <div className="text-[36px] pb-6 text-center sm:px-2  text-primary font-semibold">Eventful Experiences Shared by Our Guests</div>
                <div className=" grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10">
                    <div className=" p-3">
                        <img src={Noprofile} className=" h-[200px] w-[200px] rounded-full object-cover mx-auto" />
                        <h2 className=" text-center text-h2 text-black font-semibold pt-2 ">Sathish SKN</h2>
                        <div className=" text-center pt-2">
                            Had my brothers marriage reception at this auditorium, and it was fantastic! The space was bright and airy, and the staff
                            went above and beyond to make sure everything was set up perfectly. It was a hassle-free experience from start to finish.
                        </div>
                    </div>
                    <div className=" p-3">
                        <img src={Noprofile} className=" h-[200px] w-[200px] rounded-full object-cover mx-auto" />
                        <h2 className=" text-center text-h2 text-black font-semibold pt-2 ">Samanue </h2>
                        <div className="text-center pt-2">
                            I attended a wedding reception at this auditorium, and it was fantastic! The venue was beautifully decorated, creating a
                            warm and inviting atmosphere. The facilities were excellent, and the staff were attentive and accommodating. Overall, it
                            was a wonderful experience. I highly recommend it for any event.
                        </div>
                    </div>
                    <div className=" p-3">
                        <img src={NoprofileFemale} className=" h-[200px] w-[200px] rounded-full object-cover mx-auto" />
                        <h2 className=" text-center text-h2 text-black font-semibold pt-2 ">Vidhya Selvaraj </h2>
                        <div className="text-center pt-2">
                            Very spacious Kalyana Mandapam. Our wedding on February 11 and 12, 2021, had a large stage where close relatives could
                            witness the ceremony. The outdoor space for photoshoots was fantastic, and parking made it convenient.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=" relative container mx-auto py-16">
      <div className=" grid grid-cols-12 py-10">
        <div className=" lg:col-span-6 md:col-span-12 mdsm:col-span-12 sm:col-span-12 h-full  relative ">
          <p className=" text-black text-[40px] sm:text-[36px] sm:pb-10 pl-10 pr-16 sm:px-4 lg:absolute md:relative sm:relative bottom-0 font-semibold leading-[50px]">
            Get the <span className=" text-primary font-semibold">Best</span>{" "}
            property
            <span className=" text-primary font-semibold sm:text-[36px]"> investment </span>
            options with the help of our highly experienced group of real estate
            brokers.
          </p>
        </div>
        <div className=" sm:col-span-12 md:col-span-12 mdsm:col-span-12 lg:col-span-6">
          <div className=" grid lg:grid-cols-3 md:col-span-2 mdsm:col-span-2  gap-6">
            <div className="sm:hidden md:hidden mdsm:hidden lg:block relative h-full">
              <div className=" lg:absolute md:relative lg:visible  bottom-0">
                <img src={HallTwo} />
              </div>
            </div>
            <div className=" sm:col-span-12  lg:col-span-2 relative">
              <div className="  text-primary text-center sm:ml-0 sm:px-4 ml-[-30px] sm:text-[36px] text-[44px] pb-4 font-semibold">
                Stage Decoration
              </div>
              <img src={HallOne}  className="mx-auto sm:w-full sm:px-4"/>
            </div>
          </div>
        </div>
      </div>
    </div> */}
        </>
    );
}
