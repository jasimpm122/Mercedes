import React from 'react';

function Details() {
    const isMobileOrTablet = window.innerWidth <= 768;

    return (
        <div style={{
            padding: isMobileOrTablet ? '20px' : '40px',
            maxWidth: '800px',
            margin: '0 auto',
            paddingTop: isMobileOrTablet ? '40px' : '60px', // Reduced top padding
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            textAlign: 'left'
        }}>
            <h1 style={{
                fontSize: isMobileOrTablet ? '24px' : '32px',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#333'
            }}>
                IMPRESSUM.
            </h1>
            <p style={{
                fontSize: isMobileOrTablet ? '14px' : '16px',
                marginBottom: '30px',
                color: '#666'
            }}>
                ANGABEN ZUM BETREIBER DER WEBSITE.
            </p>

            <h2 style={{
                fontSize: isMobileOrTablet ? '18px' : '22px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '15px'
            }}>
                KRG
            </h2>
            <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.8' }}>
                Die Webseite www.mercedes-rkg.de fasst die Darstellung mehrerer Unternehmen zusammen, die jedes für sich wirtschaftlich eigenständig und rechtlich selbständig ihre Leistungen anbieten. Die zusammenfassende Darstellung bedeutet nicht, dass jedes Unternehmen diese Leistungen anbietet, sondern dass einzelne Unternehmen diese Leistungen ganz oder teilweise, auf jeden Fall aber unabhängig von den anderen Unternehmen anbieten.
            </p>

            <h3 style={{
                fontSize: isMobileOrTablet ? '16px' : '18px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px'
            }}>
                Versicherungsvermittlerregister
            </h3>
            <p style={{ marginBottom: '20px', fontSize: '16px' }}>
                <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>www.vermittlerregister.info</a><br />
                Register-Nr. D-JRJ4-OPY9P-11<br />
                Erlaubnis nach § 34d ABS. 1 GewO, erteilt durch die IHK Bonn/Rhein-Sieg, Bonner Talweg 17, 53113 Bonn<br />
                Fax: +49 6322 9425-15<br />
                E-Mail: <a href="mailto:kundendienst@mercedes-krg.com" style={{ color: '#007BFF', textDecoration: 'none' }}>kundendienst@mercedes-krg.com</a>
            </p>

            <h3 style={{
                fontSize: isMobileOrTablet ? '16px' : '18px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px'
            }}>
                Berufsbezeichnung und berufsrechtliche Regelungen
            </h3>
            <p style={{ marginBottom: '20px', fontSize: '16px' }}>
                Berufsrechtliche Regelungen: Gesetz zur Ordnung des Handwerks (Handwerksordnung). Die berufsrechtlichen Regelungen können über die vom Bundesministerium der Justiz und von der juris GmbH betriebene Homepage <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>www.gesetze-im-internet.de</a> eingesehen und abgerufen werden.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '16px' }}>
                Die Angaben in diesem Impressum gelten auch für die folgenden Online-Auftritte der KRG:
            </p>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '20px' }}>
                <li style={{ marginBottom: '5px' }}><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Instagram</a></li>
            </ul>

            <h3 style={{
                fontSize: isMobileOrTablet ? '16px' : '18px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px'
            }}>
                Angaben zur Betriebshaftpflichtversicherung
            </h3>
            <p style={{ marginBottom: '20px', fontSize: '16px' }}>
                Name und Sitz des Versicherers:<br />
                Zurich Insurance plc<br />
                53287 Bonn<br />
                Geltungsraum der Versicherung: Deutschland
            </p>

            <h3 style={{
                fontSize: isMobileOrTablet ? '16px' : '18px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px'
            }}>
                Streitschlichtung
            </h3>
            <p style={{ marginBottom: '20px', fontSize: '16px' }}>
                Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform“) geschaffen. Sie können die OS-Plattform unter folgendem Link erreichen: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>https://ec.europa.eu/consumers/odr</a>.
            </p>
            <p style={{ fontSize: '16px' }}>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div>
    );
}

export default Details;
