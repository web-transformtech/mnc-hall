/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Components/Home/Navbar";
import About from "../Components/Home/About";
import Hero from "../Components/Home/Hero"
import AboutUs from "../Components/Home/AboutUs";
import SatisfiedClients from "../Components/Home/SatisfiedClients";
import LeadSection from "../Components/Home/LeadSection";
import ContactDetails from "../Components/Home/ContactDetails";
import Footer from "../Components/Home/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
       <Hero/>
      {/* <About/> */}
      <AboutUs/>
      {/* <Services /> */}
      {/* <Gallery /> */}
      {/* <SatisfiedClients /> */}
      {/* <LeadSection/> */}

      {/* <ContactDetails/> */}
      {/* <Location /> */}
      {/* <Footer/> */}
    </div>
  );
}
