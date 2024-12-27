import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/newcar.PNG"; 

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        padding: "30px 0",
        borderTop: "1px solid #eaeaea",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* <img
                logo
                alt="La vida Logo"
                style={{ height: "40px", marginRight: "10px" }}
              /> */}
              <h2 style={{ fontSize: "1.5rem", color: "#2c3e50", fontWeight: "bold" }}>La Vida</h2>
            </div>
          </Col>

          {/* Navigation Section */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5 style={{ fontSize: "1rem", fontWeight: "bold", color: "#2c3e50" }}>FIRMA</h5>
            <ul style={{ listStyleType: "none", padding: 0, margin: "10px 0" }}>
              <li>
                <a
                  href="/about"
                  style={{
                    color: "#7f8c8d",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  Über uns
                </a>
              </li>
              {/* <li>
                <a
                  href="/benefits"
                  style={{
                    color: "#7f8c8d",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  Nutzen
                </a>
              </li> */}
              <li>
                <a
                  href="/careers"
                  style={{
                    color: "#7f8c8d",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  Arbeitsplätze
                </a>
              </li>
              <li>
                <a
                  href="/details"
                  style={{
                    color: "#7f8c8d",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  Impressum
                </a>
              </li>
              {/* <li>
                <a
                  href="/privacy-policy"
                  style={{
                    color: "#7f8c8d",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  Datenschutzrichtlinie
                </a>
              </li> */}
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="text-center text-md-right">
            <h5 style={{ fontSize: "1rem", fontWeight: "bold", color: "#2c3e50" }}>KONTAKT</h5>
            <a
              href="mailto:office@lavida-consulting.de"
              style={{
                color: "#7f8c8d",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              office@lavida-consulting.de
            </a>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-3">
          <Col className="text-center">
            <p style={{ fontSize: "0.8rem", color: "#7f8c8d", margin: 0 }}>
              © 2024 · La vida · Alle Rechte vorbehalten
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
