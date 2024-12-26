import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { loadingContent } from "../../components/general/general-components";
import data from "../../DATA/data.json";
import Swal from "sweetalert2";

const JobOffers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobPosting, setJobPosting] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const jobData = data.jobPosting;
    setJobPosting(jobData);
    setIsLoading(false);
  }, []);

  const handleApplyNowClick = (job) => {
    Swal.fire({
      title: `Apply for ${job.jobRole}`,
      html: `
        <input type="text" id="name" class="swal2-input" placeholder="Name">
        <input type="email" id="emailId" class="swal2-input" placeholder="Email Address">
        <input type="text" id="phoneNumber" class="swal2-input" placeholder="Phone Number">
        <input type="text" id="price" class="swal2-input" placeholder="Expected Salary">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value;
        const emailId = Swal.getPopup().querySelector("#emailId").value;
        const phoneNumber = Swal.getPopup().querySelector("#phoneNumber").value;
        const price = Swal.getPopup().querySelector("#price").value;
  
        if (!name || !emailId || !phoneNumber) {
          Swal.showValidationMessage("Bitte füllen Sie alle erforderlichen Felder aus.");
          return null;
        }
  
        return { name, emailId, phoneNumber, price };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const payload = {
          name: result.value.name,
          emailId: result.value.emailId,
          phoneNumber: result.value.phoneNumber,
          salary: result.value.price,
          post: job.jobRole,
        };
  
        // Make API call
        fetch("https://cardealers-latest-1.onrender.com/client/enquiry4", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then(async (response) => {
            const data = await response.json();
        
            // Check both response.ok and the API's success message
            if (response.ok || data.message === "Inquiry sent! You’ll hear from us soon!") {
              Swal.fire("Erfolg!", "Ihre Bewerbung wurde eingereicht.", "success");
            } else {
              throw new Error(data.message || "Failed to submit application");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Erfolg!", "Ihre Bewerbung wurde eingereicht.", "success");
          });
      }
    });
  };
  

  return (
    <div id="job-offers" style={{ clear: "both" }}>
      <Container className="py-4">
        <Row className="mb-5">
          <Col>
            <h1 className="fs-1 text-center text-uppercase">
              Kubota Job Opportunities
            </h1>
          </Col>
        </Row>

        <Row>
          {!isLoading && jobPosting.length > 0
            ? jobPosting.map((job, index) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  className="py-2"
                  key={`offer_${job.jobRole}_${index}`}
                >
                  <div
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "100%",
                      transition: "transform 0.2s ease-in-out",
                      minHeight: "450px",
                    }}
                  >
                    <div className="text-center" style={{ flexGrow: 1 }}>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          color: "#333",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {job.jobRole}
                      </h3>
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#555",
                          marginBottom: "1rem",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                        {job.jobDescription}
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#555",
                          marginBottom: "1rem",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                        {job.location}
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#555",
                          marginBottom: "1rem",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          Employment Type:
                        </span>{" "}
                        {job.employmentType}
                      </p>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#555",
                          marginBottom: "1rem",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          Required Skills:
                        </span>
                        <ul
                          style={{
                            margin: "0", // Remove default margin
                            paddingLeft: "20px", // Indentation for bullet points
                          }}
                        >
                          {job.requiredSkills.length > 0 ? (
                            job.requiredSkills.map((skill, skillIndex) => (
                              <li
                                key={skillIndex}
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: "400",
                                  color: "#555",
                                  listStyleType: "square",
                                  textAlign: "left",
                                }}
                              >
                                {skill}
                              </li>
                            ))
                          ) : (
                            <li>No skills listed</li>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="d-grid w-100">
                      <Button
                        onClick={() => handleApplyNowClick(job)}
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          fontSize: "1rem",
                          border: "none",
                          borderRadius: "4px",
                          padding: "10px 0",
                          width: "100%",
                          fontWeight: "bold",
                        }}
                      >
                        Bewerben Sie sich jetzt
                      </Button>
                    </div>
                  </div>
                </Col>
              ))
            : loadingContent}
        </Row>
      </Container>
    </div>
  );
};

export default JobOffers;
