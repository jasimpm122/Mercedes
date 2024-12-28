import React from 'react';

import Slider from '../components/slider'
import AboutSection from "../components/about-section";
import CarSearch from "../components/car-search"
import FeaturesSection from '../components/features-section';
import MarketingSection from '../components/CountrySection';
import ManagmentSection from '../components/MarketingPage';
import CareerSection from '../components/general/Jobslider';
import CountrySection from '../pages/careers/careers';

const Home = () => {

    return (
        <div id="homepage">
            <Slider/>
           
          
            <FeaturesSection/>
            <ManagmentSection />
            {/* <MarketingSection/> */}
            <CareerSection/>
        
            {/* <CountrySection /> */}
          
        </div>
    );
};
export default Home;