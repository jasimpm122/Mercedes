import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import carImage from './car.JPG';
import Header from './components/Header';
import CarItem from './components/CarItem';
import { cars } from './components/MockData';
import Service from './components/BMWService';
import About from './components/About'; 
import Imprint from './components/Imprint'; 
import Details from './components/Details'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from './components/Contact'; // Import the Contact component

function App() {
  const handleFormSubmit = (formData) => {
    fetch('https://cardealers-latest-1.onrender.com/client/enquiry2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="image-container">
                  <img src={carImage} alt="Car" className="fix-image" />
                  <div className="overlay-text">
                    {/* <p>BMW M. KRAFT TRIFFT DYNAMIK.</p>
                    <a>GEBOREN AUF DER RENNSTRECKE, AUF ALLEN STRASSEN ZU HAUSE.</a> */}
                  </div>
                </div>

                {/* New Section for "BMW in your country" */}
                <div 
  className="country-section" 
  style={{ 
    textAlign: 'center', 
    margin: '40px 0',
    opacity: 0,
    animation: 'slideIn 1s ease-in-out forwards',
    animationDelay: '0.3s'
  }}
>
  <p style={{ fontSize: '1.2rem', color: '#333' }}>Mercedes in Ihrem Land</p>
  <h2 style={{ fontSize: '3rem', margin: '10px 0', color: '#111', fontWeight: 'bold' }}>ALLE BENZ MODELLE</h2>
  <p style={{ fontSize: '1rem', color: '#333' }}>
    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Finden Sie Ihren Benz</span>
  </p>
</div>

{/* Introductory Text */}
<div 
  className="intro-text" 
  style={{ 
    textAlign: 'center', 
    fontSize: '0.8rem', 
    color: '#333', 
    margin: '20px',
    opacity: 0,
    animation: 'slideIn 1s ease-in-out forwards',
    animationDelay: '0.5s'
  }}
>
Mercedes-Benz – ein Symbol für Luxus und zeitlose Eleganz. Die aktuellen Mercedes-AMG Modelle setzen diese Tradition fort, indem sie die perfekte Balance zwischen Komfort und Performance bieten. Inspiriert von der Rennstrecke, erfüllen sie höchste Anforderungen an Dynamik und Agilität und machen jede Fahrt zu einem Erlebnis.
</div>

                <div className="car-items">
                  {cars.map((car, index) => (
                    <CarItem
                      key={index}
                      images={car.images}
                      title={car.title}
                      description={car.description}
                      onSubmitForm={handleFormSubmit}
                      price={car.price} 
                    />
                  ))}
                </div>
              </>
            }
          />
          
          <Route path="/about" element={<About />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/service" element={<Service />} /> 
          <Route path="/details" element={<Details />} />

// Inside the Router component in your Routes section:
<Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
