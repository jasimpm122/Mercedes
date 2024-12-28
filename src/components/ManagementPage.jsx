import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsPeople, BsGraphUp, BsGear, BsBriefcase } from "react-icons/bs";
import backgroundImage from "../assets/images/699.jpg"; // Adjust the path if needed

const ManagementPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#003366",
        padding: "50px 0",
      }}
    >
      <Container>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "2.5rem",
                color: "#003366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <BsBriefcase size="2.5rem" style={{ color: "#0056b3" }} />
              Managementberatung
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#555",
                marginTop: "10px",
              }}
            >
              Strategische Planung und operative Unterstützung für nachhaltigen Erfolg.
            </p>
          </Col>
        </Row>

        {/* Feature Boxes */}
        <Row className="text-center">
          {/* Strategy Development */}
          <Col md={4} className="mb-4">
            <FeatureBox
              Icon={BsGraphUp}
              title="Strategieentwicklung"
              description="Wir unterstützen Unternehmen bei der Entwicklung maßgeschneiderter Strategien für nachhaltiges Wachstum und Erfolg."
            />
          </Col>
          {/* Process Optimization */}
          <Col md={4} className="mb-4">
            <FeatureBox
              Icon={BsGear}
              title="Prozessoptimierung"
              description="Optimieren Sie Geschäftsprozesse, steigern Sie Effizienz und reduzieren Sie Kosten."
              isWhiteFont
            />
          </Col>
          {/* Leadership Development */}
          <Col md={4} className="mb-4">
            <FeatureBox
              Icon={BsPeople}
              title="Führung und Entwicklung"
              description="Entwicklung von Führungsqualitäten und Aufbau einer positiven Unternehmenskultur."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const FeatureBox = ({ Icon, title, description, isWhiteFont }) => {
  return (
    <div
      style={{
        backgroundColor: "#003366",
        color: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        height: "100%",
      }}
    >
      <Icon size="3rem" style={{ marginBottom: "10px", color: "#1abc9c" }} />
      <h4
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "1rem",
          color: '#fff',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ManagementPage;
