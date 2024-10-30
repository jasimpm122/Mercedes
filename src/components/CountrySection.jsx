import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const CountrySection = () => {
    return (
        <div id="country-section" style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
            <Container>
                <Row className="justify-content-center">
                    {/* Text Section */}
                    <Col xs={12} md={8}>
                        <div className="text-center mt-2 mb-5">
                            <p style={{ fontSize: '1.2rem', color: '#333' }}>Mercedes in Ihrem Land</p>
                            <h2 className="fs-1 fw-bold" style={{ color: '#111', fontWeight: 'bold' }}>
                                ALLE BENZ MODELLE
                            </h2>
                            <p className="fs-5 m-0">
                                <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#007bff' }}>
                                    Finden Sie Ihren Benz
                                </span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CountrySection;
