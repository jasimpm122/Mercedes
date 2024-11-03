import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";

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
                    So einfach geht die HKL Miete
                  </h1>
                </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <MdLocationOn size="2.5em" color="white"/>
                <h4 
                  className="quinary-color py-1" 
                  style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}
                >
                  Einsatzort festlegen
                </h4>
                <p 
                  className="quinary-color m-0 pb-2" 
                  style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
                >
                  Einfach Postleitzahl eingeben und das nächstgelegene HKL Center finden.
                </p>
              </Col>
              <Col xs={4}>
                <AiOutlineCalendar size="2.5em" color="white"/>
                <h4 
                  className="quinary-color py-1" 
                  style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}
                >
                  Mietzeitraum festlegen
                </h4>
                <p 
                  className="quinary-color m-0 pb-2" 
                  style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
                >
                  Wählen Sie aus, wie lang Sie die Produkte mieten möchten.
                </p>
              </Col>
              <Col xs={4}>
                <FaTruck size="2.5em" color="white"/>
                <h4 
                  className="quinary-color py-1" 
                  style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}
                >
                  Transportoption wählen
                </h4>
                <p 
                  className="quinary-color m-0 pb-2" 
                  style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
                >
                  Abholung oder Lieferung mit unserem Hol- und Bringservice: Beides ist kein Problem.
                 Europaweiter Versand: Wir liefern die Bagger per Spedition an jeden Ort in Europa.
                </p>
              </Col>
            </Row>
        </Container>
    </div> 
    );
};

export default FeaturesSection;
