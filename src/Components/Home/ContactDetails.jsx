import { useState } from 'react';
// import HallOne from '../../assets/Home/hall/living-hall-one.png';
// import HallTwo from '../../assets/Home/hall/living-hall-two.png';
import axios from 'axios';
export default function ContactDetails() {
    const [vaild, setValid] = useState(true);
    const [vaildStatus, setVaildStatus] = useState(false);
    const [submitDisable, setSubmitDisable] = useState(false);
    const [thankyou, setThankyou] = useState('');
    const [data, setData] = useState({
        name: '',
        Phonenumber: '',
        email: '',
        eventname: '',
        eventdate: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        Phonenumber: '',
        email: '',
        eventname: '',
        eventdate: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    if (vaild === true) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        let Number = /^[6-9]\d{9}$/;
        if (data.name === '') {
            errors.name = 'required';
        } else if (data.name === undefined) {
            errors.name = 'required';
        } else {
            errors.name = true;
        }
        if (data.Phonenumber === '') {
            errors.Phonenumber = 'required';
        } else if (data.Phonenumber === undefined) {
            errors.Phonenumber = 'required';
        } else if (!Number.test(data.Phonenumber)) {
            errors.Phonenumber = 'Enter Correct Number';
        } else if (data.Phonenumber.length < 10 || data.Phonenumber.length > 20) {
            errors.Phonenumber = 'vaild required';
        } else {
            errors.Phonenumber = true;
        }
        if (data.email === '') {
            errors.email = 'required';
        } else if (data.email === undefined) {
            errors.email = 'required';
        } else if (!regex.test(data.email)) {
            errors.email = 'vaild email required';
        } else {
            errors.email = true;
        }
        if (data.eventname === '') {
            errors.eventname = 'Event Name is Required';
        } else if (data.eventname === undefined) {
            errors.eventname = 'Event Name is Required';
        } else {
            errors.eventname = true;
        }
        if (data.eventdate === '') {
            errors.eventdate = 'Event Date is Required';
        } else if (data.eventdate === undefined) {
            errors.eventdate = 'Event Date is Required';
        } else {
            errors.eventdate = true;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setVaildStatus(true);
        if (errors.name === true && errors.Phonenumber === true && errors.email === true && errors.eventname === true && errors.eventdate === true) {
            setSubmitDisable(true);
            const myjson = {
                name: data.name,
                email: data.email,
                phone: data.Phonenumber,
                eventname: data.eventname,
                eventdate: data.eventdate,
            };
            // const URL = `https://mncvel.com/api/mncvel`;
            const URL = `http://172.16.22.6:8000/api/mncvel`;
            axios
                .post(URL, myjson)
                .then((res) => {
                    setData({
                        name: '',
                        Phonenumber: '',
                        email: '',
                        eventname: '',
                        eventdate: '',
                    });
                    setErrors({
                        name: '',
                        Phonenumber: '',
                        email: '',
                        eventname: '',
                        eventdate: '',
                    });
                    setVaildStatus(false);
                    setSubmitDisable(false);
                    console.log('Success');
                    console.log(res);
                    setThankyou('Thank you we will Contact Soon..');
                    setTimeout(() => {
                        setThankyou('');
                    }, 5000);
                })
                .catch((err) => {
                    console.log(err);
                    setSubmitDisable(false);
                    alert('Error');
                });
        }
    };
    return (
        <>
            {/* <div className="py-10 lg:h-[400px] md:h-auto sm:h-auto" id="contact">
                <div className=" grid sm:px-4  relative lg:grid-cols-3 md:grid-cols-1 md:px-4 sm:grid-cols-1">
                    <div className="relative lg:w-full md:w-[50%] sm:w-[90%] mx-auto">
                        <div className=" bg-primary my-6 sm:my-4 lg:absolute  sm:relative md:relative sm:right-0 lg:right-[-40px] md:right-0 w-full  z-[-2] rounded-md p-10">
                            <div className=" text-white font-semibold text-center tracking-wide text-[24px]">
                                Contact <span className=" font-semibold">Details </span>
                            </div>
                            <div className=" grid grid-cols-1 text-white">
                                <div className="flex">
                                    <div className="pb-4 pt-4">Call us:</div>
                                    <a href="tel:+919047016032" className="text-left col-span-2 mt-[1px] pt-4 ml-2 hover:text-black">
                                        +91 90470 16032
                                    </a>
                                </div>
                                <div className=" flex">
                                    <div className=" pb-4 mr-2">Address:</div>
                                    <div className=" col-span-2 pb-4 mt-[1px] ">
                                        247A/4B, Railway feeder Rd, <br />
                                        Muthugoundenpudur, Sulur, <br /> Tamil Nadu - 641406
                                    </div>
                                </div>
                                <div className=" flex">
                                    <div className="pb-2">Email id:</div>
                                    <a href="mailto:mncvelkalyanamandapam@gmail.com">
                                        <div className=" col-span-2 mt-[1px] pb-2 ml-2">mncvelkalyanamandapam@gmail.com</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:w-full md:w-[50%] sm:w-[90%] mx-auto  ">
                        <div className=" bg-secondary lg:absolute  sm:relative md:relative  w-full  z-[4] rounded-md p-10">
                            <div className=" text-white font-semibold mb-1 text-center tracking-wide text-[24px]">
                                Contact <span className=" font-semibold">us </span>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Name"
                                    className=" py-2 px-3 w-full mt-4"
                                />
                                {vaildStatus ? <div className=" text-sm  text-left text-[red]">{errors.name}</div> : null}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    onChange={(e) => handleChange(e)}
                                    name="email"
                                    placeholder="email"
                                    className=" py-2 px-3 w-full mt-4"
                                />
                                {vaildStatus ? <div className=" text-sm  text-left text-[red]">{errors.email}</div> : null}
                            </div>
                            <div>
                                <input
                                    type="number"
                                    onChange={(e) => handleChange(e)}
                                    name="Phonenumber"
                                    placeholder="Number"
                                    className=" py-2 px-3 w-full mt-4"
                                />

                                {vaildStatus ? <div className=" text-sm  text-left text-[red]">{errors.Phonenumber}</div> : null}
                            </div>
                            <div className=" pt-4">
                                <button onClick={(e) => handleSubmit(e)} className=" bg-peacockGreen w-full py-3 text-white">
                                    {submitDisable ? 'Submiting....' : 'Submit'}
                                </button>
                                {thankyou.length >= 0 ? (
                                    <>
                                        <p className=" text-white mt-2">{thankyou}</p>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:w-full md:w-[50%] sm:w-[90%] mx-auto ">
                        <div className=" bg-peacockGreen  lg:absolute  sm:relative md:relative my-4 sm:left-0 lg:left-[-40px] md:left-0 w-full  z-[-2] rounded-md p-10">
                            <div className=" text-white font-semibold mb-4 text-center tracking-wide text-[24px]">
                                Our <span className=" font-semibold">Location </span>
                            </div>
                            <iframe
                                className=" ml-4 sm:ml-0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8358923974824!2d77.11449447402092!3d11.050927754072571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fcf00a61dd%3A0xe2d29608397c7faa!2sMNC%20Vel%20Kalyanamandapam!5e0!3m2!1sen!2sin!4v1710917236505!5m2!1sen!2sin"
                                width="100%"
                                height="180"
                                style={{}}
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id="contact">
                <div className="2xl:flex xl:flex lg:flex lge:flex mdlg:block md:block mdsm:block sm:block w-full container mx-auto 2xl:px-0 xl:px-0 lg:px-0 lge:px-0 mdlg:px-20 md:px-20 mdsm:px-10 sm:px-10">
                    <div className="bg-primary w-full lg:rounded-l-md sm:rounded-md h-[300px] mdsm:h-full sm:h-full mdlg:mb-6 md:mb-6 mdsm:mb-6 sm:mb-5">
                        <div className="2xl:p-10 xl:p-10 lg:p-10 lge:p-10 lgmd:p-10 md:p-10 mdsm:p-5 sm:p-5">
                            <h2 className="text-center text-white font-semibold pb-3 text-h3 sm:text-h5">Contact Details</h2>
                            <div>
                                <p className="text-white font-semibold text-h6 sm:text-base pb-3">
                                    Call us : <a href="tel:+919047016032">+91 90470 16032</a>
                                </p>
                                <p className="text-white font-semibold text-h6 sm:text-base pb-3">
                                    Address : <span className="">247A/4B, Railway feeder Rd, Muthugoundenpudur, Sulur, Tamil Nadu - 641406</span>
                                </p>
                                <p className="text-white font-semibold text-h6 sm:text-base pb-3 break-words">
                                    Email ID :{' '}
                                    <a href="mailto:mncvelkalyanamandapam@gmail.com" className="text-base">
                                        mncvelkalyanamandapam@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary relative 2xl:-top-20 xl:-top-20 lg:-top-20 lge:-top-20 mdlg:-top-0 md:top-0 mdsm:top-0 sm:top-0 w-full rounded-md mdlg:mb-6 md:mb-6 mdsm:mb-6 sm:mb-5">
                        <div className="2xl:p-10 xl:p-10 lg:p-10 lge:p-10 lgmd:p-10 md:p-10 mdsm:p-5 sm:p-5">
                            <div className=" text-white font-semibold mb-1 text-center tracking-wide text-h3 sm:text-h5">
                                Contact <span className=" font-semibold">us </span>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Name"
                                    className=" py-2 px-3 w-full mt-4"
                                />
                                {vaildStatus ? <div className=" text-sm  text-left text-[red]">{errors.name}</div> : null}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => handleChange(e)}
                                    name="email"
                                    placeholder="email"
                                    className=" py-2 px-3 w-full mt-4"
                                />
                                {vaildStatus ? <div className=" text-sm  text-left text-[red]">{errors.email}</div> : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={data.Phonenumber}
                                    onChange={(e) => handleChange(e)}
                                    name="Phonenumber"
                                    placeholder="Number"
                                    className=" py-2 px-3 w-full mt-4"
                                    onKeyPress={(e) => {
                                        if (!/^[0-9]/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    maxLength={10}
                                    minLength={10}
                                />

                                {vaildStatus ? <div className=" text-sm  text-left text-[red]">{errors.Phonenumber}</div> : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={data.eventname}
                                    onChange={(e) => handleChange(e)}
                                    name="eventname"
                                    placeholder="Event Name"
                                    className=" py-2 px-3 w-full mt-4"
                                />
                                {vaildStatus ? <div className=" text-sm  text-left text-[red]">{errors.eventname}</div> : null}
                            </div>
                            <div>
                                <input
                                    type="date"
                                    value={data.eventdate}
                                    onChange={(e) => handleChange(e)}
                                    name="eventdate"
                                    placeholder="Select Event Date"
                                    className=" py-2 px-3 w-full mt-4"
                                />
                                {vaildStatus ? <div className=" text-sm  text-left text-[red]">{errors.eventdate}</div> : null}
                            </div>
                            <div className=" pt-4">
                                <button onClick={(e) => handleSubmit(e)} className=" bg-peacockGreen w-full py-3 text-white">
                                    {submitDisable ? 'Submiting....' : 'Submit'}
                                </button>
                                {thankyou.length >= 0 ? (
                                    <>
                                        <p className=" text-white mt-2">{thankyou}</p>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="bg-peacockGreen w-full h-[300px] mdsm:h-full sm:h-full lg:rounded-r-md sm:rounded-md">
                        <div className="2xl:p-10 xl:p-10 lg:p-10 lge:p-10 lgmd:p-10 md:p-10 mdsm:p-5 sm:p-5">
                            <div className="text-white font-semibold mb-4 text-center tracking-wide text-h3 sm:text-h5">
                                Our <span className=" font-semibold">Location </span>
                            </div>
                            <iframe
                                className=""
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8358923974824!2d77.11449447402092!3d11.050927754072571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fcf00a61dd%3A0xe2d29608397c7faa!2sMNC%20Vel%20Kalyanamandapam!5e0!3m2!1sen!2sin!4v1710917236505!5m2!1sen!2sin"
                                width="100%"
                                height="180"
                                style={{}}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
