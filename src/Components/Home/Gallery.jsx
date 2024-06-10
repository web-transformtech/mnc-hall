import { useState } from 'react';
import '../../App.css';
import Popup from './Popup';

function Gallery() {
    const [popupState, setPopupState] = useState(false);
    const [data, setData] = useState([
        {
            _id: 0,
            img: 'https://images.pexels.com/photos/17032714/pexels-photo-17032714/free-photo-of-classic-car-on-street.jpeg',
            alt: 'alt',
        },
        {
            _id: 1,
            img: 'https://images.pexels.com/photos/19578198/pexels-photo-19578198/free-photo-of-silhouette-of-bird-sitting-atop-lamppost-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt',
        },
        {
            _id: 2,
            img: 'https://images.pexels.com/photos/17170380/pexels-photo-17170380/free-photo-of-snowed-mountains-over-green-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt',
        },
        {
            _id: 3,
            img: 'https://images.pexels.com/photos/17170380/pexels-photo-17170380/free-photo-of-snowed-mountains-over-green-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt',
        },
        {
            _id: 4,
            img: 'https://images.pexels.com/photos/18045900/pexels-photo-18045900/free-photo-of-silhouetted-mountains-under-a-starry-night-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt',
        },
        {
            _id: 5,
            img: 'https://images.pexels.com/photos/25007817/pexels-photo-25007817/free-photo-of-a-person-holding-a-dandelion-in-front-of-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt',
        },
        {
            _id: 6,
            img: 'https://images.pexels.com/photos/12177393/pexels-photo-12177393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt',
        },
        {
            _id: 7,
            img: 'https://images.pexels.com/photos/19562913/pexels-photo-19562913/free-photo-of-scenic-view-of-a-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt',
        },
    ]);

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
    // console.log(imageData[0]?._id)
    return (
        <div className="pb-20">
            <div className=" container mx-auto">
                <Popup>
                    {popupState ? (
                        <div className="model-popup ">
                            <div className="w-[50%]">
                                {imageData?.map((v, i) => {
                                    console.log('Hello');
                                    return (
                                        <div>
                                            <div className=" flex justify-end">
                                                <button onClick={() => handlePopup()}>Close</button>
                                            </div>

                                            <img src={v?.img} alt={v?.alt} className="h-[80vh] w-full object-cover" />
                                            {v?._id}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : null}
                </Popup>
                <div className="gallery  ">
                    {data?.map((v, i) => {
                        console.log(i % 3 == 0);
                        return (
                            <>
                                <div onClick={() => handleImage(v, i)} className="group gallery-item mb-4 relative ">
                                    <div className="group-hover:bg-primary h-full ">
                                        <img src={v?.img} className="  w-full " />
                                        <div className=" absolute top-0 h-full group-hover:bg-[#ffffff7a] w-full p-3  duration-300">
                                            <div className=" group-hover:border-2 group-hover:h-full group-hover:w-full border-[#333] group-hover:border-white duration-300"></div>
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

export default Gallery;
