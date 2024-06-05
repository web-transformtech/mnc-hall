// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import DinnerHall from '../../assets/Home/hall/Dinner Hall.jpg';
import GuestRoom from '../../assets/Home/hall/Guest Room.jpg';
import CarPark from '../../assets/Home/hall/car-park.jpg';
import HallBackground from '../../assets/Home/about/hall-background.jpg';
import Building from './../../assets/Home/mnc/building.png';
import Table from './../../assets/Home/mnc/table.png';
import Location from './../../assets/Home/mnc/location.png';
import Parking from './../../assets/Home/mnc/parking.png';
import BanquetHall from '../../assets/Home/hall/Banquet Halls.jpg';
export default function Gallery() {
    return (
        <>
            <div className=" relative sm:h-[100vh] sm:overflow-hidden" id="infrawehave">
                <img src={HallBackground} className=" h-[500px] sm:h-[100vh] sm:object-cover w-full object-cover" />
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
                                    <img src={BanquetHall} className=" sm:h-[40vh] h-[400px] object-cover sm:object-cover w-full rounded-md" />
                                    <div className="p-4 sm:bg-white relative rounded-b-lg">
                                        <div className=" absolute top-[-34px] right-[20px] bg-[#b2444d] rounded-md p-1.5">
                                            <img src={Building} className="h-[50px]" />
                                        </div>
                                        <h4 className="text-h4 pt-3 text-black font-semibold text-left">Banquet Hall</h4>
                                        <p className="pt-3 text-base">
                                            Our Spacious Banquet Hall accommodates up to 800 guests comfortably, ideal for large gatherings and events
                                            requiring ample seating.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={DinnerHall} className=" sm:h-[40vh] h-[400px] object-cover sm:object-cover w-full rounded-md" />
                                    <div className="p-4 sm:bg-white relative rounded-b-lg">
                                        <div className=" absolute top-[-34px] right-[20px] bg-[#fba732] rounded-md p-1.5">
                                            <img src={Table} className="h-[50px]" />
                                        </div>
                                        <h4 className="text-h4 pt-3 text-black font-semibold text-left">Dining Hall</h4>
                                        <p className="pt-3 text-base">
                                            Enter our dining facility, where over 500 seats await, promising ample space for gatherings of any size to
                                            dine and enjoy.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={GuestRoom} className=" sm:h-[40vh] h-[400px] object-cover sm:object-cover w-full rounded-md" />
                                    <div className="p-4 sm:bg-white relative rounded-b-lg">
                                        <div className=" absolute top-[-34px] right-[20px] bg-[#4ea2b3] rounded-md p-1.5">
                                            <img src={Location} className="h-[50px]" />
                                        </div>
                                        <h4 className="text-h4 pt-3 text-black font-semibold text-left">Guest Rooms</h4>
                                        <p className="pt-3 text-base">
                                            We provide 8 comfortable guest rooms to ensure seamless accommodation, catering to every attendee&#39;s
                                            needs with enough space and convenience.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={CarPark} className=" sm:h-[40vh] h-[400px] object-cover sm:object-cover w-full rounded-md" />
                                    <div className="p-4 sm:bg-white relative rounded-b-lg">
                                        <div className=" absolute top-[-34px] right-[20px] bg-[#353978] rounded-md p-1.5">
                                            <img src={Parking} className="h-[50px]" />
                                        </div>
                                        <h4 className="text-h4 pt-3 text-black font-semibold text-left">Larger Car Parking</h4>
                                        <p className="pt-3 text-base">
                                            Facilitating convenience, we offer parking with 75+ spaces for larger vehicles, ensuring hassle-free
                                            arrivals for all guests.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className=" lg:py-[170px] md:py-[170px] mdsm:py-[120px] sm:py-0 sm:pb-16"></div>
        </>
    );
}
