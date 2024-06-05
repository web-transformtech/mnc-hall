export default function HighLight() {
    return (
        <section className="py-10 pb-32">
            <div className="relative h-ful">
                <div className="absolute h-full bg-[#3f3f3f8c] w-full top-0 py-32">
                    <div className="container mx-auto h-ful">
                        <h1 className="lg:text-[64px] lge:text-[64px] md:text-[40px] mdsm:text-[40px] sm:text-[40px] Macondo pb-6 text-center sm:px-2  text-secondary font-semibold">
                            Celebration Hub
                        </h1>
                        <h2 className="lg:text-[50px] lge:text-[50px] md:text-h1 mdsm:text-h1 sm:text-h3 Macondo w-[70%] mx-auto text-white font-semibold text-center">
                            &#34;Experience timeless elegance at our versatile event venue, perfect for weddings, receptions, and all your special
                            occasions. Book now and create unforgettable memories in a setting tailored to your dreams.&#34;
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
