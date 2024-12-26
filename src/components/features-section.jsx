import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

const FeaturesSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="features-section">
            <Container className="py-5">
                <Row>
                    <Col>
                        <h1
                            className="quinary-color p-0 mb-4"
                            style={{ fontSize: isMobile ? '1.5rem' : '2.5rem' }}
                        >
                            So einfach geht's mit La Vida Consulting GmbH
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <BiSolidOffer size="2.5em" color="white" />
                        <h4
                            className="quinary-color py-1"
                            style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}
                        >
                            Top Beratung und Dienstleistungen
                        </h4>
                        <p
                            className="quinary-color m-0 pb-2"
                            style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
                        >
                            Wir bieten maßgeschneiderte Lösungen für Ihre geschäftlichen Herausforderungen.
                        </p>
                    </Col>
                    <Col xs={4}>
                        <AiOutlineCalendar size="2.5em" color="white" />
                        <h4
                            className="quinary-color py-1"
                            style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}
                        >
                            Flexible Zeitplanung
                        </h4>
                        <p
                            className="quinary-color m-0 pb-2"
                            style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
                        >
                            Vereinbaren Sie individuelle Beratungstermine ganz nach Ihrem Zeitplan.
                        </p>
                    </Col>
                    <Col xs={4}>
                        <FaTruck size="2.5em" color="white" />
                        <h4
                            className="quinary-color py-1"
                            style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}
                        >
                            Dienstleistungen vor Ort
                        </h4>
                        <p
                            className="quinary-color m-0 pb-2"
                            style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
                        >
                            Wir kommen zu Ihnen oder bieten unsere Leistungen digital europaweit an.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FeaturesSection;
