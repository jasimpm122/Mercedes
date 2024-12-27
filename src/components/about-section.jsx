import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AboutImage from '../assets/images/Wavy_Bus-08_Single-02 [Converted].png';
import { Link } from 'react-router-dom';
import member1 from '../assets/images/Art.jpg';
import member2 from '../assets/images/Art1.jpeg';
import member3 from '../assets/images/Art2.jpg';

const AboutSection = () => {
  return (
    <div id="about-section" style={{ backgroundColor: '#fafafa', padding: '60px 0' }}>
      <Container>
        {/* Main About Section */}
        <Row className="mt-1 mb-2">
          <Col xs={{ span: 12, order: "last" }} md={{ span: 6, order: "first" }}>
            <div className="image_iman">
              <img src={AboutImage} className="about_img" alt="About Us" style={{ width: '100%' }} />
            </div>
          </Col>
          <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "last" }}>
            <div className="mt-2 mb-5">
              <h1 className="text-uppercase fs-1 fw-600">
                Über uns
              </h1>
              <p className="about-text fs-5 m-0">
              Die La Vida Consulting GmbH ist ein professionelles Beratungsunternehmen, das sich darauf spezialisiert hat, Unternehmen dabei zu unterstützen, in einem wettbewerbsintensiven Umfeld erfolgreich zu sein. Gegründet am 21. Dezember 2024 und mit Sitz in der Vincent-van-Gogh-Str. 29, 13057 Berlin, bieten wir eine breite Palette an Beratungsdienstleistungen an, mit einem besonderen Fokus auf Marketing, Werbung und strategische Wachstumslösungen.

Unsere Dienstleistungen sind darauf ausgerichtet, Unternehmen durch maßgeschneiderte Strategien zu stärken, die die Markenbekanntheit steigern, Betriebsabläufe optimieren und die Leistung verbessern. Ob es um die Entwicklung innovativer Marketingkampagnen, die Gestaltung wirkungsvoller Werbestrategien oder die Begleitung von Unternehmen bei komplexen Herausforderungen geht – wir arbeiten eng mit unseren Kunden zusammen, um ihr volles Potenzial auszuschöpfen.

Unter der Leitung von Leonie König kombiniert unser engagiertes und erfahrenes Team tiefgehendes Branchenwissen mit kreativen Ansätzen, um messbare Ergebnisse zu erzielen. Bei der La Vida Consulting GmbH verstehen wir, dass jedes Unternehmen einzigartig ist, und sind stolz darauf, flexible und personalisierte Lösungen anzubieten, die sich an den spezifischen Bedürfnissen und Zielen unserer Kunden orientieren.

Mit einer soliden Basis und einem klaren Engagement für Exzellenz ist die La Vida Consulting GmbH Ihr vertrauenswürdiger Partner, um die Herausforderungen des modernen Geschäftslebens zu meistern, Wachstum voranzutreiben und nachhaltigen Erfolg zu erzielen. Lassen Sie uns gemeinsam Herausforderungen in Chancen und Ideen in Realität verwandeln.
              </p>
            </div>
          </Col>
        </Row>
        {/* Hours and Contact */}
        {/* <div className="text-center mt-4">
          <h5 className="fw-bold">Montag bis Samstag 8-18 Uhr</h5>
          <p><a href="mailto:info@konzept-sb.de" style={{ color: '#007BFF', textDecoration: 'underline' }}>office@lavida-consulting.de</a></p>
          <p><Link to="/details" style={{ color: '#007BFF', textDecoration: 'underline' }}>
          Impressum
        </Link></p>
        </div> */}
      </Container>
    </div>
  );
};

export default AboutSection;
