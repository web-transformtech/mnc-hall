import { useState } from 'react';
import Building from './../../assets/Home/mnc/building.png';
import Table from './../../assets/Home/mnc/table.png';
import Location from './../../assets/Home/mnc/location.png';
import Parking from './../../assets/Home/mnc/parking.png';
// import HeroImage from '../../assets/Home/mnc/hero.png';
import Logo from '../../assets/Home/logo2.png';
import SMLogo from '../../assets/Home/logo.png';
// import { Link } from 'react-router-dom';
import { RiAlignLeft } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
// import Hall from "../../assets/Home/about/hall.png";
import Hall from '../../assets/Home/hall/mnc_hall.png';
export default function Hero() {
    const [navbarState, setNavBar] = useState(false);
    const handleNav = () => {
        setNavBar(!navbarState);
    };
    return (
        <>
            {navbarState ? (
                <>
                    <div className=" bg-[#082149e8] sm:block  z-10  fixed top-0 h-full w-full ">
                        <div className="  flex justify-end p-4 ">
                            <MdCancel onClick={() => handleNav()} className="text-white hover:text-secondary cursor-pointer" />
                        </div>
                        <div className="text-white py-0">
                            <img src={SMLogo} />
                        </div>
                        <div></div>
                        <div className="=  p-4">
                            <a href="#home">
                                <div onClick={() => handleNav()} className="px-2 py-2 text-white hover:text-primary cursor-pointer">
                                    Home
                                </div>
                            </a>
                            <a href="#aboutus">
                                <div onClick={() => handleNav()} className="px-2 py-2 text-white hover:text-primary cursor-pointer">
                                    About us
                                </div>
                            </a>
                            <a href="#infrawehave">
                                <div onClick={() => handleNav()} className="px-2 py-2 text-white hover:text-primary cursor-pointer">
                                    Infra we have
                                </div>
                            </a>
                            <a href="#team">
                                <div className="px-2 py-2 text-white hover:text-primary cursor-pointer">Teams</div>
                            </a>
                            <a href="#contact">
                                <div className="px-2 py-2 text-white hover:text-primary cursor-pointer">Contact</div>
                            </a>
                        </div>
                    </div>{' '}
                </>
            ) : (
                <div></div>
            )}
            <div className="" id="home">
                <div className="h-[100vh] mdlg:h-[100vh] relative">
                    <div className="mdlg:h-[100vh] overflow-hidden ">
                        <div className="h-[100vh] overflow-hidden ">
                            <img src={Hall} className="kenburns-right h-[100vh] overflow-hidden object-cover w-full" />
                        </div>
                        <div className="absolute top-0 bg-[#00000061] w-full h-full">
                            <div className="lg:block lge:block md:hidden  mdsm:hidden sm:hidden absolute top-0 w-full px-8">
                                {/* Desktop View */}
                                <div className="container mx-auto">
                                    <div className="grid grid-cols-1 gap-4 h-full">
                                        <div className="h-full ">
                                            <div className="flex justify-center space-x-16 py-10">
                                                <a href={`#home`}>
                                                    <div className=" text-white hover:text-secondary cursor-pointer ">Home </div>
                                                </a>
                                                <a href={`#aboutus`}>
                                                    <div className=" text-white hover:text-secondary cursor-pointer">About </div>
                                                </a>
                                                <a href={`#infrawehave`}>
                                                    <div className=" text-white hover:text-secondary cursor-pointer">Infra we have </div>
                                                </a>
                                                <a href={`#team`}>
                                                    <div className=" text-white hover:text-secondary cursor-pointer">Teams</div>
                                                </a>
                                                <a href={`#contact`}>
                                                    <div className=" text-white hover:text-secondary cursor-pointer">Contact</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile View  */}
                            <div className="lg:hidden p-5 lge:hidden md:block mdsm:block sm:block">
                                {navbarState ? null : <RiAlignLeft onClick={() => handleNav()} className="text-white cursor-pointer text-h1" />}
                            </div>
                            <div className="container mx-auto h-full">
                                <div className="grid grid-cols-1 gap-4 h-full">
                                    <div className="h-full sm:absolute sm:top-0">
                                        <div className="h-full flex justify-center items-center">
                                            <div className="block">
                                                <div className="flex justify-center">
                                                    <a href="">
                                                        <img
                                                            src={Logo}
                                                            alt="MNC Vel Logo"
                                                            className="2xl:block xl:block lg:block lge:block mdlg:block md:block mdsm:hidden sm:hidden"
                                                        />
                                                    </a>
                                                    <a href="">
                                                        <img
                                                            src={SMLogo}
                                                            alt="MNC Vel Logo"
                                                            className="2xl:hidden xl:hidden lg:hidden lge:hidden mdlg:hidden md:hidden mdsm:block sm:block"
                                                        />
                                                    </a>
                                                </div>
                                                <h1 className="text-secondary text-center 2xl:text-6xl xl:text-6xl lg:text-6xl lge:text-6xl md:text-5xl mdsm:text-4xl sm:text-xl font-semibold">
                                                    MNC Vel Kalyana Mandapam
                                                </h1>
                                                <div className="w-[80%] mx-auto text-center text-white w-80% 2xl:text-h4 xl:text-h4 lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h6 sm:text-h6">
                                                    &#34;Cherish your moment in our enchanting marriage hall where dreams become unforgettable
                                                    realities.&#34;
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="">
                        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2">
                            <div className="bg-primary flex justify-center text-center">
                                <img src={Building} alt="Building" className="h-[100px]" />
                            </div>
                            <div className="bg-secondary flex justify-center text-center">
                                <img src={Table} alt="Table" className="h-[100px] " />
                            </div>
                            <div className="bg-peacockGreen flex justify-center text-center">
                                <img src={Location} alt="Location" className="h-[100px]" />
                            </div>
                            <div className="bg-[#353978] flex justify-center text-center">
                                <img src={Parking} alt="Parking" className="h-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
