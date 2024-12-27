import React from 'react';

import Slider from '../components/slider'
import AboutSection from "../components/about-section";
import CarSearch from "../components/car-search"
import FeaturesSection from '../components/features-section';
import CustomerReview from '../components/customer-reviews';
import ContactSection from '../components/contact-section';
import CountrySection from '../pages/careers/careers';
const Home = () => {

    return (
        <div id="homepage">
            <Slider/>

          
            <FeaturesSection/>
            <CountrySection />
            {/* <CustomerReview/>
            <ContactSection/> */}
        </div>
    );
};
export default Home;