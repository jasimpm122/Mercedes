import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AboutImage from '../assets/images/wfe.png';
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
              Wir sind ein führendes Autohaus mit einer Leidenschaft für die Bereitstellung der besten Fahrzeuge und des besten Kundendienstes.
                    Unsere Mission ist es, Kunden dabei zu helfen, das perfekte Auto zu finden, das ihren Bedürfnissen und ihrem Budget entspricht.
                    Mit jahrelanger Erfahrung und einer großen Auswahl an Premiumfahrzeugen gewährleisten wir erstklassige Qualität bei Produkten und
                    Dienstleistungen. Unser Expertenteam begleitet Sie durch jeden Schritt des Prozesses, von der Auswahl des richtigen Modells bis zum
                    Abschluss des Kaufs. Zusätzlich versenden wir Autos weltweit und arbeiten mit mehreren Transportunternehmen zusammen, um eine sichere
                    und effiziente Lieferung zu gewährleisten.
              </p>
            </div>
          </Col>
        </Row>

        {/* Team Section */}
        <h2 className="text-center fw-bold mt-5 mb-4" style={{ fontSize: '28px' }}>
          Lernen Sie unser Verkaufsteam kennen
        </h2>
        <Row className="text-center">
          {[{
            name: "Olaf Hemmer",
            role: "Sales Manager",
            description: "MBA in Marketing, 10+ years in the automotive industry",
            image: member1
          }, {
            name: "Michael Brill",
            role: "Senior Sales Executive",
            description: "Bachelor's in Business Administration, 8 years in sales",
            image: member2
          }, {
            name: "Sebastian Mitusch",
            role: "Sales Consultant",
            description: "Diploma in Automotive Sales, 5 years in customer relations",
            image: member3
          }].map((member, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-4">
              <Card className="h-100" style={{ border: 'none', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <Card.Img variant="top" src={member.image} alt={`${member.name}`} style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
                <Card.Body>
                  <Card.Title className="fw-bold" style={{ fontSize: '18px', color: '#333' }}>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '16px' }}>{member.role}</Card.Subtitle>
                  <Card.Text style={{ fontSize: '14px', color: '#555' }}>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Hours and Contact */}
        <div className="text-center mt-4">
          <h5 className="fw-bold">Montag bis Samstag 8-18 Uhr</h5>
          <p><a href="mailto:kundendienst@bmw-scheller.com" style={{ color: '#007BFF', textDecoration: 'underline' }}>kundendienst@bmw-scheller.com</a></p>
          <p><Link to="/details" style={{ color: '#007BFF', textDecoration: 'underline' }}>
          Impressum
        </Link></p>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
