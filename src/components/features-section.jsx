import React from 'react';

import {Container, Row, Col} from "react-bootstrap";

import {AiOutlineSafety} from "react-icons/ai";
import {HiOutlineStatusOnline} from "react-icons/hi";
import {BiSolidOffer} from "react-icons/bi";


const FeaturesSection = () => {
    return (
    <div id="features-section">
        <Container className="py-5">
            <Row>
                <Col>
                  <h1 className="quinary-color fs-1 p-0 mb-4">WARUM UNS WÄHLEN</h1>
                </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <AiOutlineSafety size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Sicherheit &amp; Schutz</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Es gibt viele Versionen von Lorem Ipsum, aber die meisten haben</p>
              </Col>
              <Col xs={4}>
                <HiOutlineStatusOnline size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Online-Buchung</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Es gibt viele Versionen von Lorem Ipsum, aber die meisten haben</p>
              </Col>
              <Col xs={4}>
                <BiSolidOffer size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Beste Angebote</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Es gibt viele Versionen von Lorem Ipsum, aber die meisten haben</p>
              </Col>
            </Row>
        </Container>
    </div> 
    );
};

export default FeaturesSection;
