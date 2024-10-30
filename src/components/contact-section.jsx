import React from 'react';
import '../components/Contact.css';
import contactIllustration from '../assets/images/vehicles/contact.png';

function Contact() {
    const isMobileOrTablet = window.innerWidth <= 768;

    return (
        <div style={{
            padding: isMobileOrTablet ? '20px' : '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: isMobileOrTablet ? '60px' : '80px', // Adjusted padding to reduce space under the navbar
            fontFamily: 'Arial, sans-serif',
            color: '#333',
        }}>
            <h2 style={{
                fontSize: isMobileOrTablet ? '24px' : '32px',
                fontWeight: 'bold',
                textAlign: 'center', // Center-aligned for consistency
                marginBottom: '20px',
                color: '#333',
            }}>
                KRG - Kontakt
            </h2>
            <div className="contact-content" style={{
                display: 'flex',
                flexDirection: isMobileOrTablet ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: isMobileOrTablet ? 'center' : 'left',
                gap: '20px',
            }}>
                <div className="contact-info" style={{
                    maxWidth: isMobileOrTablet ? '100%' : '600px',
                    marginBottom: isMobileOrTablet ? '20px' : '0',
                    textAlign: isMobileOrTablet ? 'center' : 'left', // Center text on smaller screens
                }}>
                    <h3 className="contact-section-title">Kontakt Informationen</h3>
                    <p><strong>Adresse:</strong> Triftweg 10, 67098 Bad Dürkheim, Deutschland</p>
                    <p><strong>Telefon:</strong> +49 6322 9425-0</p>
                    <p><strong>Fax:</strong> +49 6322 9425-15</p>
                    <p>
                        <strong>Email:</strong> 
                        <a href="mailto:kundendienst@mercedes-krg.com" className="contact-link">kundendienst@mercedes-krg.com</a>
                    </p>
                    
                    <h3 className="contact-section-title">Öffnungszeiten</h3>
                    <p>Wir sind verfügbar von Montag bis Samstag, 8:00 - 18:00 Uhr.</p>
                    
                    <h3 className="contact-section-title">Social Media</h3>
                    <p>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="contact-link">Facebook</a> 
                        <span> | </span>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
                    </p>
                    
                    <h3 className="contact-section-title">Weitere Informationen</h3>
                    <p><strong>Versicherer:</strong> Zurich Insurance plc</p>
                    <p><strong>Sitz des Versicherers:</strong> 53287 Bonn, Deutschland</p>
                </div>
                
                <img 
                    src={contactIllustration} 
                    alt="Contact Illustration" 
                    className="contact-image" 
                    style={{
                        width: isMobileOrTablet ? '100%' : '500px',
                        height: 'auto',
                        borderRadius: '8px',
                        margin: isMobileOrTablet ? '0 auto' : '0', // Center the image on smaller screens
                    }} 
                />
            </div>
        </div>
    );
}

export default Contact;
