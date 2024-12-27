import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BannerBg from '../assets/images/banner-bg.jpg';
import '..//components/general/slider.css'; // Import the CSS for animation styles

const Slider = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleButtonClick = () => {
        navigate('/careers'); // Navigate to the careers page
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
                Homeoffice leicht gemacht!
            </h1>
            <p className="slide-in" style={{
                fontSize: '1.2rem',
                marginBottom: '2rem',
            }}>
                Auf der Suche nach einer neuen Stelle?<br />
                Wir stellen jetzt ein!<br />
                Verwaltungsmitarbeiter, Kundendienstmitarbeiter
            </p>
            <div>
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#fff',
                        backgroundColor: '#0066ff', // Blue color for button
                        border: 'none',
                        borderRadius: '5px',
                        marginRight: '10px',
                        cursor: 'pointer',
                    }}
                    onClick={handleButtonClick} // Handle click event
                >
                    Entdecke mehr
                </button>
            </div>
        </div>
    );
};

export default Slider;
