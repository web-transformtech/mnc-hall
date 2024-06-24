import Hero from '../Components/Home/Hero';
import AboutUs from '../Components/Home/AboutUs';
import LeadSection from '../Components/Home/LeadSection';
import ContactDetails from '../Components/Home/ContactDetails';
import Footer from '../Components/Home/Footer';
import HighLight from '../Components/Home/HighLight';
import Info from '../Components/Home/Info';
import Team from '../Components/Home/Team';
import { useEffect, useState } from 'react';
import Gallery from '../Components/Home/Gallery';
export default function Home() {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, []);
    return (
        <div>
            {loader ? (
                <>
                    <div className={`model-popup`}>
                        <div className="block"></div>
                        <span className="loader"></span>
                    </div>
                </>
            ) : (
                <>
                   <Hero />
                    <AboutUs />
                    <Info />
                    <Gallery />
                    <Team />
                    <HighLight />
                    <ContactDetails />
                    <Footer />
                </>
            )}



        </div>
    );
}
