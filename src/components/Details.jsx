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
                SB KONZEPT
            </h2>
            <p style={{ marginBottom: '20px' }}>
SB Konzept & Vending GmbH mit der  ist seit dem 27.11.2024 aktiv.<br />
 Das Gründungskapital des Unternehmens ist 25.000,00 EUR.<br />
Die offizielle Adresse des Unternehmens ist seit der Gründung Jüterboger Straße 31a, 14943, Luckenwalde.<br />
An dieser Adresse sind 2 zusätzliche Firmen, darunter Eistechnikcenter GmbH und BB Eismanufaktur GmbH. <br />
Seit der Gründung des Unternehmens ist Samir Assaf Geschäftsführer.<br />
 Die letzte bekannte Änderung im Handelsregister war am 27.11.2024.<br />
  Unter der Rubrik Bekanntmachungen können alle Handelsregistereinträge abgerufen werden.<br />
Handelsregisternummer HRB 40063 (Amtsgericht Potsdam)
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
            22339 Hamburg-Hummelsbüttel<br />
                Tel.: +49 231 2929489404<br />
                E-Mail: <a href="mailto:info@konzept-sb.de" style={{ color: '#007BFF', textDecoration: 'none' }}>info@konzept-sb.de</a>
            </p>
        </div>
    );
}

export default Details;
