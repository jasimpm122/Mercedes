import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AboutImage from '../assets/images/wfe.png';
import { Link } from 'react-router-dom';

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
                Wir sind stolz darauf, Ihnen eine große Auswahl an hochwertigen gebrauchten Mercedes-Fahrzeugen anzubieten, die alle sorgfältig geprüft wurden, um höchste Qualitätsstandards zu gewährleisten. Unsere Mercedes-Modelle stehen für Eleganz, Leistung und Zuverlässigkeit, und wir sind überzeugt, dass Sie bei uns das perfekte Fahrzeug für Ihre Bedürfnisse finden werden. Ob sportliche Limousine, luxuriöser SUV oder stilvolles Cabriolet – unsere Fahrzeuge bieten Ihnen das unvergleichliche Fahrerlebnis, das Sie von Mercedes erwarten.
                Unser Angebot richtet sich an Kunden weltweit, und dank unseres professionellen Lieferservices müssen Sie sich keine Gedanken über die Entfernung machen. Ganz egal, wo Sie sich befinden – wir liefern Ihnen Ihr Traumfahrzeug sicher und zuverlässig bis vor die Haustür. Mit unserem erstklassigen Service sorgen wir dafür, dass der Kauf eines gebrauchten Mercedes für Sie so einfach und angenehm wie möglich wird. Jeder unserer Mercedes ist nicht nur ein Fahrzeug, sondern ein Versprechen von Qualität und Fahrspaß.
                Erleben Sie den Komfort und die Luxusklasse von Mercedes ohne Grenzen. Lassen Sie sich überzeugen und entdecken Sie, wie wir Ihre automobile Leidenschaft wahr werden lassen können.
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
            name: "Marius Leutner",
            role: "Sales Manager",
            description: "MBA in Marketing, 10+ years in the automotive industry",
            image: "https://media.licdn.com/dms/image/v2/D4E03AQFZ0h4UpJywdQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668170929978?e=2147483647&v=beta&t=9XzJt_1OL7B0LhUJOiaCbiLBupwvNZcJkux1sfopMck"
          }, {
            name: "Marvin Appel",
            role: "Senior Sales Executive",
            description: "Bachelor's in Business Administration, 8 years in sales",
            image: "https://media.licdn.com/dms/image/v2/C4D22AQEFVyV8Lx1emQ/feedshare-shrink_800/feedshare-shrink_800/0/1625149806291?e=2147483647&v=beta&t=frWYr0rjHuNy-doAru0XtJAL70rNU9JABzTH2-hlSy4"
          }, {
            name: "Pablo Jemenez",
            role: "Sales Consultant",
            description: "Diploma in Automotive Sales, 5 years in customer relations",
            image: "https://media.licdn.com/dms/image/v2/C4E10AQGAFniR7xYOGg/image-shrink_800/image-shrink_800/0/1677574812229?e=2147483647&v=beta&t=qvK_0MruY75tH98oHEYAyjM7b_DGu1UjTR8uX5ET_So"
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
          <p><a href="mailto:kundendienst@mercedes-krg.de" style={{ color: '#007BFF', textDecoration: 'underline' }}>kundendienst@mercedes-krg.de</a></p>
          <p><Link to="/details" style={{ color: '#007BFF', textDecoration: 'underline' }}>
          Impressum
        </Link></p>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
