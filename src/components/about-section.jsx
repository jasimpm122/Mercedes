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
              Die La Vida Consulting GmbH wurde am 21. Dezember 2024 gegründet und ist unter der Handelsregisternummer HRB 270651 beim Amtsgericht Berlin (Charlottenburg) eingetragen. Mit einem Stammkapital von 25.000 EUR hat das Unternehmen seinen Sitz in der Vincent-van-Gogh-Straße 29, 13057 Berlin. Unter der Leitung von Leonie König, die seit der Gründung als Geschäftsführerin tätig ist, bietet die La Vida Consulting GmbH maßgeschneiderte Beratungsdienstleistungen an, die auf die individuellen Bedürfnisse ihrer Kunden abgestimmt sind. Alle offiziellen Bekanntmachungen und Dokumente des Unternehmens sind im Handelsregister einsehbar.
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
