

import About from '../../assets/Home/hall/About.jpg';

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
                            <div className="text-[36px] pb-2 text-primary font-semibold">About MNC</div>
                            <p>
                                MNC Vel Kalyana Mandapam in Coimbatore welcomes you to its vibrant ambiance, nestled near the Muthugoundan Pudur
                                Railway Bridge. With subtle ceiling lights and upscale decor, it&#39;s perfect for dream weddings and receptions.
                                Indulge in delightful cuisine from in-house caterers and enjoy seamless event planning with their decor services.
                                Experience unmatched quality and warmth at this centrally located venue, ensuring cherished memories for every
                                occasion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         
           
        </div>
    );
}
