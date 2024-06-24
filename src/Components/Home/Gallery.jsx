import { useState } from 'react';
import '../../App.css';
import Popup from './Popup';
import Room from '../../assets/Home/GalleryImg/Guest Room1.webp';
import two from '../../assets/Home/GalleryImg/2.webp';
import three from '../../assets/Home/GalleryImg/3.webp';
import park from '../../assets/Home/GalleryImg/hall.png';
import hall2 from '../../assets/Home/GalleryImg/hall2.png';
import six from '../../assets/Home/GalleryImg/6.webp';
import { MdOutlineClose } from 'react-icons/md';
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Gallery() {
    const [popupState, setPopupState] = useState(false);
    popupState ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    const data = [
        {
            _id: 0,
            img: Room,
            alt: 'alt',
        },
        {
            _id: 1,
            img: two,
            alt: 'alt',
        },
        {
            _id: 2,
            img: three,
            alt: 'alt',
        },
        {
            _id: 3,
            img: park,
            alt: 'alt',
        },
        {
            _id: 4,
            img: hall2,
            alt: 'alt',
        },
        {
            _id: 5,
            img: six,
            alt: 'alt',
        },
    ];
    const [imageData, setImageData] = useState();
    const handleImage = (v, i) => {
        var dataImage = [];
        data?.forEach((el) => {
            if (el?._id === v?._id) {
                dataImage.push(el);
            }
        });
        setPopupState(!popupState);
        setImageData(dataImage);
    };
    const handlePopup = () => {
        setPopupState(!popupState);
    };
    return (
        <div className="pb-32" >
            <div className=" container mx-auto">
                <div className="text-[36px] pt-6 pb-10 text-center sm:px-2  text-primary font-semibold">Gallery</div>

                <Popup>
                    {popupState ? (
                        <div className="model-popup ">
                            <div className="w-[50%]  sm:px-4 sm:w-[100%]">
                                {imageData?.map((v, i) => {
                                    return (
                                        <div className=" relative">
                                            <div className="w-full p-2 flex justify-end  top-0">
                                                <button onClick={() => handlePopup()}>
                                                    <MdOutlineClose className=" text-[20px] text-[#333] hover:text-[#cf021a]" />
                                                </button>
                                            </div>

                                            <img src={v?.img} alt={v?.alt} className="h-[80vh]  w-full object-cover" />
                                            {v?._id}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : null}
                </Popup>
                <div className="gallery  px-4 ">
                    {data?.map((v, i) => {
                        console.log(i % 3 == 0);
                        return (
                            <>
                                <div onClick={() => handleImage(v, i)} className="group  cursor-pointer gallery-item mb-4 relative ">
                                    <div className="group-hover:bg-primary h-full ">
                                        <img src={v?.img} className="  w-full " />
                                        <div className="absolute top-0 h-full group-hover:bg-[#ffffff7a] w-full p-3  duration-300">
                                            <div className="group-hover:border-2 group-hover:h-full group-hover:w-full border-[#333] group-hover:border-white duration-300"></div>
                                        </div>
                                        <div className=" group-hover:block hidden">
                                            <div className=" absolute top-0 h-full flex justify-center items-center w-full   ">
                                                <BsBoxArrowUpRight className=' font-semibold text-[30px]  text-peacockGreen'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
