/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HallOne from "../../assets/Home/hall/living-hall-one.png";
import HallTwo from "../../assets/Home/hall/living-hall-two.png";
import axios from "axios";

export default function LeadSection() {
  const [vaild, setValid] = useState(true);
  const [vaildStatus, setVaildStatus] = useState(false);
  const [submitDisable, setSubmitDisable] = useState(false)
  const [thankyou,setThankyou]=useState("")
  const [data, setData] = useState({
    name: "",
    Phonenumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    Phonenumber: "",
    email: "",
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

    if (data.name === "") {
      errors.name = "required";
    } else if (data.name === undefined) {
      errors.name = "required";
    } else {
      errors.name = true;
    }

    if (data.Phonenumber === "") {
      errors.Phonenumber = "required";
    } else if (data.Phonenumber === undefined) {
      errors.Phonenumber = "required";
    } else if (data.Phonenumber.length < 10 || data.Phonenumber.length > 20) {
      errors.Phonenumber = "vaild required";
    } else {
      errors.Phonenumber = true;
    }

    if (data.email === "") {
      errors.email = "required";
    } else if (data.email === undefined) {
      errors.email = "required";
    } else if (!regex.test(data.email)) {
      errors.email = "vaild email required";
    } else {
      errors.email = true;
    }

    if (data.Inst_CompanyName === "") {
      errors.Inst_CompanyName = "required";
    } else if (data.Inst_CompanyName === undefined) {
      errors.Inst_CompanyName = "required";
    } else {
      errors.Inst_CompanyName = true;
    }
  }

  const handleSubmit = (e) => {
    // const error = handleError(data)
    setVaildStatus(true);

    if (
      errors.name === true &&
      errors.Phonenumber === true &&
      errors.email === true
    ) {
          setSubmitDisable(true);
  
      axios
        .post("https://rvscas.com/api/createciiform", data)
        .then((res) => {
          setSubmitDisable(false);
          console.log("Success");
          console.log(err);
          setData({
            name: "",
            Phonenumber: "",
            email: "",
          })
          setErrors({
            name: "",
            Phonenumber: "",
            email: "",
          })
        
        })
        .catch((err) => {
          setSubmitDisable(false);
          alert("Error");
          setThankyou("Thank you we will Contact Soon..")
          setTimeout(()=>{
            setThankyou("")
          },3000)
       
        });
    }
    e.preventDefault();
    // setSubmitDisable(true);
  };

  console.log(submitDisable)
  return (
    <>
      <div className=" container mx-auto pb-16" id="team">
        <div className="text-[36px] pb-6 text-center sm:px-2  text-primary font-semibold">
          Eventful Experiences Shared by Our Guests
        </div>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10">
          <div className=" p-3">
            <img
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className=" h-[200px] w-[200px] rounded-full object-cover mx-auto"
            />
            <h2 className=" text-center text-h2 text-black font-semibold pt-2 ">
              Sathish SKN
            </h2>
            <div className=" text-center pt-2">
              Had my brother’s marriage reception at this auditorium, and it was
              fantastic! The space was bright and airy, and the staff went above
              and beyond to make sure everything was set up perfectly. It was a
              hassle-free experience from start to finish.
            </div>
          </div>

          <div className=" p-3">
            <img
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className=" h-[200px] w-[200px] rounded-full object-cover mx-auto"
            />
            <h2 className=" text-center text-h2 text-black font-semibold pt-2 ">
              Sathish SKN
            </h2>
            <div className="text-center pt-2">
              Had my brother’s marriage reception at this auditorium, and it was
              fantastic! The space was bright and airy, and the staff went above
              and beyond to make sure everything was set up perfectly. It was a
              hassle-free experience from start to finish.
            </div>
          </div>

          <div className=" p-3">
            <img
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className=" h-[200px] w-[200px] rounded-full object-cover mx-auto"
            />
            <h2 className=" text-center text-h2 text-black font-semibold pt-2 ">
              Sathish SKN
            </h2>
            <div className="text-center pt-2">
              Had my brother’s marriage reception at this auditorium, and it was
              fantastic! The space was bright and airy, and the staff went above
              and beyond to make sure everything was set up perfectly. It was a
              hassle-free experience from start to finish.
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

      <div className="  py-10  lg:h-[400px] md:h-auto sm:h-auto " id="contact">
        <div className=" grid sm:px-4  relative lg:grid-cols-3 md:grid-cols-1 md:px-4 sm:grid-cols-1">
          <div className="relative lg:w-full md:w-[50%] sm:w-[90%] mx-auto">
            <div className=" bg-primary my-6 sm:my-4 lg:absolute  sm:relative md:relative sm:right-0 lg:right-[-40px] md:right-0 w-full  z-[-2] rounded-md p-10">
              <div className=" text-white font-semibold text-center tracking-wide text-[24px]">
                Contact <span className=" font-semibold">Details </span>
              </div>

              <div className=" grid grid-cols-3 text-white">
                <div className="pb-4 pt-4">Call us:</div>
                <div className="text-left col-span-2 mt-[1px] pt-4">
                  +91 97505 77456
                </div>

                <div className=" pb-4">Address :</div>
                <div className=" col-span-2 pb-4 mt-[1px]">
                  123, Any where <br />
                  Any Street, <br />
                  Any State - 00000
                </div>

                <div className="pb-2">Call us:</div>
                <div className=" col-span-2 mt-[1px] pb-2">+91 97505 77456</div>
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
                {vaildStatus ? (
                  <div className=" text-sm  text-left text-[red]">
                    {errors.name}
                  </div>
                ) : null}
              </div>

              <div>
                <input
                  type="email"
                  onChange={(e) => handleChange(e)}
                  name="email"
                  placeholder="email"
                  className=" py-2 px-3 w-full mt-4"
                />
                {vaildStatus ? (
                  <div className=" text-sm  text-left text-[red]">
                    {errors.email}
                  </div>
                ) : null}
              </div>

              <div>
                <input
                  type="number"
                  onChange={(e) => handleChange(e)}
                  name="Phonenumber"
                  placeholder="Number"
                  className=" py-2 px-3 w-full mt-4"
                />

                {vaildStatus ? (
                  <div className=" text-sm  text-left text-[red]">
                    {errors.Phonenumber}
                  </div>
                ) : null}
              </div>

              <div className=" pt-4">
                <button
                  onClick={(e) => handleSubmit(e)}
                  className=" bg-peacockGreen w-full py-3 text-white"
                >
                  {submitDisable ? "Submiting....":"Submit" }
                  
                </button>
               {thankyou.length>=0 ? <>
                <p className=" text-white mt-2">
                {thankyou}
                </p>
               </>:null}
               
          
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
                // eslint-disable-next-line react/no-unknown-property
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
