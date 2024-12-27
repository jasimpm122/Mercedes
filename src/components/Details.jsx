import React from 'react';

function Details() {
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
                IMPRESSUM.
            </h1>
            <p style={{
                fontSize: isMobileOrTablet ? '12px' : '14px',
                marginBottom: '40px',
                color: '#666',
            }}>
                ANGABEN ZUM BETREIBER DER WEBSITE.
            </p>

            <h2 style={{
                fontSize: isMobileOrTablet ? '18px' : '20px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px',
            }}>
                La vida
            </h2>
            <p style={{ marginBottom: '20px' }}>
            Die La Vida Consulting GmbH wurde am 21. Dezember 2024 gegründet und ist unter der Handelsregisternummer HRB 270651 beim Amtsgericht Berlin (Charlottenburg) eingetragen. Mit einem Stammkapital von 25.000 EUR hat das Unternehmen seinen Sitz in der Vincent-van-Gogh-Straße 29, 13057 Berlin. Unter der Leitung von Leonie König, die seit der Gründung als Geschäftsführerin tätig ist, bietet die La Vida Consulting GmbH maßgeschneiderte Beratungsdienstleistungen an, die auf die individuellen Bedürfnisse ihrer Kunden abgestimmt sind. Alle offiziellen Bekanntmachungen und Dokumente des Unternehmens sind im Handelsregister einsehbar.
            </p>

            <h3 style={{
                fontSize: isMobileOrTablet ? '14px' : '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px',
            }}>
                Kontakt
            </h3>

            

            <p style={{ marginBottom: '20px' }}>
            Vincent-van-Gogh-Str. 29, 13057 Berlin<br />
                E-Mail: <a href="mailto:info@konzept-sb.de" style={{ color: '#007BFF', textDecoration: 'none' }}>office@lavida-consulting.de</a>
            </p>
        </div>
    );
}

export default Details;
