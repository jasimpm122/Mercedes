import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BsPeople, BsGraphUp, BsGear, BsBriefcase } from "react-icons/bs";// Icon for Consulting
import { MdOutlineCampaign } from "react-icons/md"; // Icon for Marketing
import { AiFillPieChart } from "react-icons/ai"; // Icon for Advertising
import { useInView } from 'react-intersection-observer'; // For viewport detection
import { motion } from 'framer-motion'; // For animation

const FeaturesSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slideInVariants = {
        hidden: { opacity: 0, x: -50 }, // Start off-screen
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Slide in
    };

    return (
        <div id="features-section" style={{ backgroundColor: "#ffffff", padding: "50px 0" }}>
            <Container>
                <Row className="text-center">
                    {/* Management Consulting */}
                    <Col md={4} className="mb-4">
                        <FeatureBox
                            Icon={BsBriefcase}
                            title="Managementberatung"
                            list={[
                                "Strategische Planung: Unterstützung bei der Optimierung von Abläufen und der Verbesserung der organisatorischen Leistung.",
                                "Prozessoptimierung: Identifikation und Beseitigung von Ineffizienzen zur Steigerung der Produktivität."
                            ]}
                            variants={slideInVariants}
                        />
                    </Col>
                    {/* Marketing Services */}
                    <Col md={4} className="mb-4">
                        <FeatureBox
                            Icon={MdOutlineCampaign}
                            title="Marketing-Dienstleistungen"
                            list={[
                                "Markenstrategie: Entwicklung wirkungsvoller Kampagnen zur Steigerung der Markenbekanntheit.",
                                "Zielgerichtetes Marketing: Erreichen der richtigen Zielgruppe mit maßgeschneiderten Strategien."
                            ]}
                            variants={slideInVariants}
                        />
                    </Col>
                    {/* Advertising Services */}
                    <Col md={4} className="mb-4">
                        <FeatureBox
                            Icon={AiFillPieChart}
                            title="Werbedienstleistungen"
                            list={[
                                "Kreative Kampagnen: Gestaltung und Umsetzung einprägsamer und visuell ansprechender Anzeigen.",
                                "Mediaplanung: Sicherung der besten Werbeplätze für maximale Reichweite und Rendite."
                            ]}
                            variants={slideInVariants}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const FeatureBox = ({ Icon, title, list, variants }) => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true }); // Trigger animation when 20% visible

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <Icon size="3rem" color="#2c3e50" />
            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', margin: '10px 0' }}>
                {title}
            </h4>
            <ul style={{ fontSize: '1rem', color: '#7f8c8d', textAlign: 'left', padding: '0 15px' }}>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default FeaturesSection;
