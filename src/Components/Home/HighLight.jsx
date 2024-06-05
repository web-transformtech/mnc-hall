import React from 'react';

export default function HighLight() {
    return (
        <section className="  ">
            <div className=" relative h-ful">
                <div className=" absolute h-full bg-[#000000c4] w-full flex justify-center items-center top-0 py-32">
                    <div className=" container mx-auto h-ful">
                        <h1 className=' text-[50px] Macondo pb-6 text-center sm:px-2  text-secondary font-semibold'>Celebration Hub</h1>
                        <h2 className=" text-[40px] Macondo w-[70%] sm:w-[90%] mx-auto text-white font-semibold sm:text-[30px] text-center">
                            "Experience timeless elegance at our versatile event venue, perfect for weddings, receptions, and all your special
                            occasions. Book now and create unforgettable memories in a setting tailored to your dreams."
                        </h2>
                    </div>
                </div>
                <img
                    src={`https://images.pexels.com/photos/7591515/pexels-photo-7591515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    className="h-[100vh] object-cover w-full"
                    alt="celebrate"
                />
            </div>
        </section>
    );
}
