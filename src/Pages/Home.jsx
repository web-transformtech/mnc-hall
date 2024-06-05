/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../Components/Home/Hero';
import AboutUs from '../Components/Home/AboutUs';
import LeadSection from '../Components/Home/LeadSection';
import ContactDetails from '../Components/Home/ContactDetails';
import Footer from '../Components/Home/Footer';
import Gallery from '../Components/Home/Gallery';

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutUs />
            <Gallery />
            <LeadSection />
            <ContactDetails />
            <Footer />
        </div>
    );
}
