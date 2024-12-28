import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/699.jpg"; 

const CountrySection = () => {
    return (
        <div 
            id="country-section" 
            style={{
                backgroundColor: '#f8f9fa', 
                padding: '40px 0',
                backgroundImage: `url(${backgroundImage})`,// Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    {/* Text Section */}
                    <Col xs={12} md={8}>
                        <div className="text-center mt-2 mb-5">
                            <p style={{ fontSize: '1.2rem', color: '#333' }}>Services direkt zur Hand.</p>
                            <h2 className="fs-1 fw-bold" style={{ color: '#111', fontWeight: 'bold' }}>
                                KONTAKTIEREN SIE UNS
                            </h2>
                            <Link to="/contact">
                                <Button variant="primary" size="sm" style={{ marginTop: '20px', width: 'auto' }}>
                                    Kontaktieren Sie uns
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CountrySection;
