import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerBg from './Career.jpg';

const Slider = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/careers');
    };

    return (
        <>
            <style>
                {`
                #slider {
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 40vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 10px;
                    overflow: hidden;
                }

                #slider h1 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    color: #1A1A4D;
                    transition: all 0.3s ease-in-out;
                }

                #slider p {
                    font-size: 1rem;
                    margin-bottom: 1rem;
                    color: #1A1A4D;
                    transition: all 0.3s ease-in-out;
                }

                #slider button {
                    padding: 10px 20px;
                    font-size: 1rem;
                    font-weight: bold;
                    color: #fff;
                    background-color: #0066ff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease-in-out;
                }

                #slider button:hover {
                    background-color: #004bbd;
                }

                @media (max-width: 768px) {
                    #slider {
                        height: 50vh;
                    }

                    #slider h1 {
                        font-size: 1.25rem;
                    }

                    #slider p {
                        font-size: 0.9rem;
                    }

                    #slider button {
                        font-size: 0.9rem;
                        padding: 8px 16px;
                    }
                }

                @media (min-width: 1024px) {
                    #slider {
                        flex-direction: row;
                        height: 60vh;
                    }

                    #slider div {
                        flex: 1;
                    }
                }
                `}
            </style>
            <div
                id="slider"
                style={{
                    backgroundImage: `url(${BannerBg})`,
                }}
            >
                <div style={{ flex: 1 }}>
                    <h1>Homeoffice leicht gemacht!</h1>
                    <p>Auf der Suche nach einer neuen Stelle? Wir stellen jetzt ein!</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button onClick={handleButtonClick}>Entdecke mehr</button>
                </div>
            </div>
        </>
    );
};

export default Slider;
