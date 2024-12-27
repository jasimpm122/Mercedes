import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineMonitor } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
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
                    {/* Flexibilität */}
                    <Col md={4} className="mb-4">
                        <FeatureBox
                            Icon={MdOutlineMonitor}
                            title="Flexibilität"
                            list={[
                                "Individuelle Arbeitszeiten: Möglichkeit, Arbeitszeiten festzulegen, die den persönlichen und familiären Bedürfnissen entsprechen.",
                                "Bessere Work-Life-Balance: Mehr Kontrolle über Beruf und Privatleben, weniger Stress und Burnout."
                            ]}
                            variants={slideInVariants}
                        />
                    </Col>
                    {/* Höhere Produktivität */}
                    <Col md={4} className="mb-4">
                        <FeatureBox
                            Icon={AiOutlineClockCircle}
                            title="Höhere Produktivität"
                            list={[
                                "Weniger Ablenkungen: Weniger Bürolärm und Unterbrechungen können zu mehr Konzentration und Effizienz führen.",
                                "Angenehme Umgebung: Das Arbeiten in einem personalisierten Raum kann die Konzentration und Leistung verbessern."
                            ]}
                            variants={slideInVariants}
                        />
                    </Col>
                    {/* Kosteneinsparungen */}
                    <Col md={4} className="mb-4">
                        <FeatureBox
                            Icon={BiMoney}
                            title="Kosteneinsparungen"
                            list={[
                                "Keine Pendelkosten: Sparen Sie Geld für Transport, Benzin und Parken.",
                                "Reduzierte tägliche Ausgaben: Weniger Ausgaben für Arbeitskleidung, Mittagessen und andere Bürokosten."
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
