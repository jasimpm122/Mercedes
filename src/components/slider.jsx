import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BannerBg from '../assets/images/banner-bg.jpg';
import '..//components/general/slider.css'; // Import the CSS for animation styles

const Slider = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleButtonClick = () => {
        navigate('/contact'); // Navigate to the careers page
    };

    return (
        <div
            id="slider"
            style={{
                backgroundImage: `url(${BannerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh', // Full viewport height
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                color: '#fff', // White text color
                overflow: 'hidden', // To prevent overflow of sliding elements
            }}
        >
            <h1 className="slide-in" style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#fff',
            }}>
                La Vida Consulting GmbH
            </h1>
            <p className="slide-in" style={{
                fontSize: '1.2rem',
                marginBottom: '2rem',
                color: '#fff',
            }}>
                Ihr vertrauenswürdiger Partner für Managementberatung und exzellente Werbedienstleistungen.
            </p>

            {/* Add button below the text */}
            <button
    onClick={handleButtonClick} // Handle the button click event
    style={{
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#0066ff', // Button color
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px', // Add space above the button
        width: 'auto', // Adjust the width to fit content
        maxWidth: '200px', // Set a maximum width to prevent excessive length
        textAlign: 'center', // Center text in the button
    }}
>
Verbinden
</button>
        </div>
    );
};

export default Slider;
