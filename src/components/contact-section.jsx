import React from 'react';
import contactIllustration from '../assets/images/vehicles/contact.png';

function Contact() {
    const isMobileOrTablet = window.innerWidth <= 768;

    return (
        <div style={{
            padding: isMobileOrTablet ? '20px' : '40px',
            maxWidth: '800px',
            margin: '0 auto', // Adjusted for space below navbar
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            textAlign: isMobileOrTablet ? 'center' : 'left',
        }}>
            <h1 style={{
                fontSize: isMobileOrTablet ? '24px' : '32px',
                fontWeight: 'bold',
                marginBottom: '5px',
                color: '#333',
            }}>
                HKL-BAUMASCHINEN - KONTAKT
            </h1>
            <p style={{
                fontSize: isMobileOrTablet ? '12px' : '14px',
                marginBottom: '40px',
                color: '#666',
            }}>
                Wir sind verfügbar von Montag bis Samstag, 8:00 - 18:00 Uhr.
            </p>

            <h3 style={{
                fontSize: isMobileOrTablet ? '14px' : '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px',
            }}>
                Kontakt Informationen
            </h3>

            

            <p style={{ marginBottom: '20px' }}>
            22339 Hamburg-Hummelsbüttel<br />
                Tel.: +49 6322 9425-0<br />
                Fax: +49 6322 9425-15<br />
                E-Mail: <a href="mailto:olaf.hemmer@baumaschinen-hkl.com" style={{ color: '#007BFF', textDecoration: 'none' }}>olaf.hemmer@baumaschinen-hkl.com</a>
            </p>

            <h2 style={{
                fontSize: isMobileOrTablet ? '18px' : '20px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px',
            }}>
               Social Media
            </h2>
            <p style={{ marginBottom: '20px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="contact-link">Facebook</a> 
                        <span> | </span>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>

            </p>

           
        </div>
    );
}
export default Contact;
