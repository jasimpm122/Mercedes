import React from 'react';

function Details() {
    const isMobileOrTablet = window.innerWidth <= 768;

    return (
        <div style={{
            padding: isMobileOrTablet ? '20px' : '40px',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.4',
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
                IMPRESSUM
            </h1>
            <p style={{
                fontSize: isMobileOrTablet ? '12px' : '14px',
                marginBottom: '20px',
                color: '#666',
            }}>
                ANGABEN ZUM BETREIBER DER WEBSITE
            </p>

            <h2 style={{
                fontSize: isMobileOrTablet ? '18px' : '20px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px',
            }}>
                HKL-BAUMASCHINEN
            </h2>
            <p style={{ marginBottom: '15px', lineHeight: '1.2' }}>
                Authorized representatives: Kay Städing, Arndt Rodewald, Dirk Bahrenthien, Frank Seidler<br />
                HKL BAUMASCHINEN GmbH is registered in the commercial register of the Hamburg Registry Court under the number: HR B 13573<br />
                VAT ID No.: DE 118 663 931<br />
                Tax No.: 50/731/00293
            </p>

            <h3 style={{
                fontSize: isMobileOrTablet ? '14px' : '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px',
            }}>
                Kontakt
            </h3>

            <p style={{ marginBottom: '15px', lineHeight: '1' }}>
                22339 Hamburg-Hummelsbüttel
                Tel.: +49 6322 9425-0
                Fax: +49 6322 9425-15
                E-Mail: <a href="mailto:kundendienst@baumaschinen-hkl.de" style={{ color: '#007BFF', textDecoration: 'none' }}>kundendienst@baumaschinen-hkl.de</a>
            </p>
        </div>
    );
}

export default Details;
