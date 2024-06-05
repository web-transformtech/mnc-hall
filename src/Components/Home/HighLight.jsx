import Celebration from '../../assets/Home/hall/celebration.webp';
export default function HighLight() {
    return (
        <section className="pb-32">
            <div className="relative h-ful">
                <div className="absolute h-full bg-[#3f3f3f81] w-full top-0 ">
                    <div className="container mx-auto h-full flex items-center justify-center">
                        <div>
                            <h1 className="text-secondary font-semibold lg:text-[56px] lge:text-[56px] md:text-[40px] mdsm:text-[40px] sm:text-[40px] pb-6 text-center sm:px-2 ">
                                Celebration Hub
                            </h1>
                            <h2 className="lg:text-[48px] lge:text-[48px] md:text-h1 mdsm:text-h1 sm:text-h4 w-[70%] mx-auto text-white text-center">
                                Experience timeless elegance at our versatile event venue, perfect for weddings, receptions, and all your special
                                occasions. Book now and create unforgettable memories in a setting tailored to your dreams.
                            </h2>
                        </div>
                    </div>
                </div>
                {/* <img
                    src={`https://images.pexels.com/photos/7591515/pexels-photo-7591515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    className="h-[100vh] object-cover w-full"
                    alt="celebrate"
                /> */}
                <img src={Celebration} className="h-[100vh] object-cover w-full" alt="celebrate" />
            </div>
        </section>
    );
}
