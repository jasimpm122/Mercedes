import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineMonitor } from "react-icons/md"; // Monitor icon for Flexibilität
import { AiOutlineClockCircle } from "react-icons/ai"; // Clock icon for Höhere Produktivität
import { BiMoney } from "react-icons/bi";
import '..//components/general/slider.css'; // Money icon for Kosteneinsparungen

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
        <div id="features-section" style={{ backgroundColor: "#ffffff", padding: "50px 0" }}>
            <Container>
                <Row className="text-center">
                    {/* Flexibilität */}
                    <Col md={4} className="mb-4">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <MdOutlineMonitor size="3rem" color="#2c3e50" />
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', margin: '10px 0' }}>
                                Flexibilität
                            </h4>
                            <ul style={{ fontSize: '1rem', color: '#7f8c8d', textAlign: 'left', padding: '0 15px' }}>
                                <li>Individuelle Arbeitszeiten: Möglichkeit, Arbeitszeiten festzulegen, die den persönlichen und familiären Bedürfnissen entsprechen.</li>
                                <li>Bessere Work-Life-Balance: Mehr Kontrolle über Beruf und Privatleben, weniger Stress und Burnout.</li>
                            </ul>
                        </div>
                    </Col>
                    {/* Höhere Produktivität */}
                    <Col md={4} className="mb-4">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <AiOutlineClockCircle size="3rem" color="#2c3e50" />
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', margin: '10px 0' }}>
                                Höhere Produktivität
                            </h4>
                            <ul style={{ fontSize: '1rem', color: '#7f8c8d', textAlign: 'left', padding: '0 15px' }}>
                                <li>Weniger Ablenkungen: Weniger Bürolärm und Unterbrechungen können zu mehr Konzentration und Effizienz führen.</li>
                                <li>Angenehme Umgebung: Das Arbeiten in einem personalisierten Raum kann die Konzentration und Leistung verbessern.</li>
                            </ul>
                        </div>
                    </Col>
                    {/* Kosteneinsparungen */}
                    <Col md={4} className="mb-4">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <BiMoney size="3rem" color="#2c3e50" />
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', margin: '10px 0' }}>
                                Kosteneinsparungen
                            </h4>
                            <ul style={{ fontSize: '1rem', color: '#7f8c8d', textAlign: 'left', padding: '0 15px' }}>
                                <li>Keine Pendelkosten: Sparen Sie Geld für Transport, Benzin und Parken.</li>
                                <li>Reduzierte tägliche Ausgaben: Weniger Ausgaben für Arbeitskleidung, Mittagessen und andere Bürokosten.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FeaturesSection;
