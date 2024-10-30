import React from 'react';
import BannerBg from '../assets/images/banner-bg.jpg';

const Slider = () => {
    return (
        <div
            id="slider"
            style={{
                backgroundImage: `url(${BannerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh' // Full viewport height
            }}
        >
        </div>
    );
};

export default Slider;
