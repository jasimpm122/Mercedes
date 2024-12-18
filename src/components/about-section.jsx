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
              Baumaschinen sind unsere Leidenschaft – und das seit über 50 Jahren! Aber SB KONZEPT ist noch viel mehr: Bei uns finden Sie einen zuverlässigen Partner, der Ihnen höchste Qualität und individuelle Lösungen für jeden Bedarf bietet. Ob Miete, Kauf oder Service – unsere Leistungen passen. Wir unterstützen Sie bei allen kleinen und großen Projekten und legen stets Wert auf Zuverlässigkeit, Transparenz und Fairness. Mit über 170 Centern in Deutschland und Österreich sowie weiteren Niederlassungen in Polen sind wir immer bequem in Ihrer Nähe. Sie finden bei uns außerdem spezialisierte Zentren für Raumsysteme, Arbeitsbühnen, Teleskopmaschinen und sogar für Stromversorgung.

Zusätzlich bieten wir einen europaweiten Versandservice an: Wir liefern die Bagger per Spedition an jeden Ort in Europa.
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
            description: "MBA in Marketing, über 10 Jahre in der Automobilbranche",
            image: 'https://www.bmwgroup.com/content/grpw/websites/bmwgroup_com/en/company/leadership-and-governance/_jcr_content/main/layoutcontainer_0_0/peoplegalleryinfo/personinfosubcompone_3.coreimg.82.1280.jpeg/1706199674142/fotos-vorstand-720x480px-nedeljkovic.jpeg'
          }, {
            name: "Michael Brill",
            role: "Senior Sales Executive",
            description: "Bachelor in Betriebswirtschaft, 8 Jahre im Vertrieb",
            image: 'https://www.bmwgroup.com/content/grpw/websites/bmwgroup_com/en/company/leadership-and-governance/_jcr_content/main/layoutcontainer_0_0/peoplegalleryinfo/personinfosubcompone_858352812.coreimg.82.1280.jpeg/1706199628566/720x480-hr-zipse-3495-feb-2021.jpeg'
          }, {
            name: "Sebastian Mitusch",
            role: "Sales Consultant",
            description: "Diplom in Automobilverkauf, 5 Jahre in der Kundenbetreuung",
            image: 'https://www.bmwgroup.com/content/grpw/websites/bmwgroup_com/en/company/leadership-and-governance/_jcr_content/main/layoutcontainer_0_0/peoplegalleryinfo/personinfosubcompone_2.coreimg.82.1280.jpeg/1706199666623/bmw-group-portrait-walter-mertl-1440x960px.jpeg'
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
          <p><a href="mailto:info@konzept-sb.de" style={{ color: '#007BFF', textDecoration: 'underline' }}> info@konzept-sb.de</a></p>
          <p><Link to="/details" style={{ color: '#007BFF', textDecoration: 'underline' }}>
          Impressum
        </Link></p>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
