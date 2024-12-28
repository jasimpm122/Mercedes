import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdOutlineCampaign } from "react-icons/md";
import backgroundImage from '../assets/images/698.jpg'; // Update the path as per your project structure

const MarketingPage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                color: "#00274d", // Deep blue for text
                padding: "50px 0",
            }}
        >
            <div style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", minHeight: "100vh", padding: "50px 0" }}>
                <Container>
                    {/* Header Section */}
                    <Row className="text-center mb-5">
                        <Col>
                            <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#0056b3" }}>
                                <MdOutlineCampaign size="3rem" style={{ marginRight: "10px", color: "#0056b3" }} />
                                Marketing-Dienstleistungen
                            </h1>
                            <p style={{ fontSize: "1.5rem", color: "#00274d" }}>
                                Steigern Sie Ihre Markenbekanntheit mit zielgerichteten Marketinglösungen.
                            </p>
                        </Col>
                    </Row>

                    {/* Why Marketing Section */}
                    <Row className="mb-5">
                        <Col md={6}>
                            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#0056b3" }}>
                                Warum Marketing?
                            </h2>
                            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#00274d" }}>
                                Effektives Marketing ist der Schlüssel, um die richtige Zielgruppe zu erreichen, den
                                Umsatz zu steigern und eine langfristige Kundenbindung aufzubauen. Mit maßgeschneiderten
                                Strategien und innovativen Ansätzen können Unternehmen ihren Erfolg nachhaltig steigern.
                            </p>
                        </Col>
                        {/* <Col md={6}>
                            <img
                                src="https://via.placeholder.com/600x400" // Replace with your marketing image path
                                alt="Marketing"
                                style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                            />
                        </Col> */}
                    </Row>

                    {/* Services Section */}
                    <Row className="mb-5">
                        <Col>
                            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#0056b3" }}>
                                Unsere Leistungen
                            </h2>
                            <ul
                                style={{
                                    fontSize: "1.2rem",
                                    lineHeight: "1.8",
                                    listStyleType: "disc",
                                    marginLeft: "20px",
                                    color: "#00274d",
                                }}
                            >
                                <li>Markenstrategie: Entwicklung einer einzigartigen Markenidentität.</li>
                                <li>Digitales Marketing: Suchmaschinenoptimierung (SEO), Social Media und PPC-Kampagnen.</li>
                                <li>Content-Strategie: Erstellung von ansprechendem und relevantem Content.</li>
                                <li>Marktforschung: Verständnis der Zielgruppe und Marktanalyse.</li>
                                <li>Kampagnenmanagement: Planung und Durchführung von erfolgreichen Kampagnen.</li>
                            </ul>
                        </Col>
                    </Row>

                    {/* Call to Action Section */}
                    {/* <Row className="text-center">
                        <Col>
                            <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "#00274d" }}>
                                Bereit, Ihr Marketing auf die nächste Stufe zu heben?
                            </h3>
                            <Button
                                href="#kontakt"
                                style={{
                                    backgroundColor: "#0056b3",
                                    border: "none",
                                    color: "#ffffff",
                                    fontSize: "1.2rem",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    marginTop: "20px",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                                }}
                            >
                                Kontaktieren Sie uns
                            </Button>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        </div>
    );
};

export default MarketingPage;
