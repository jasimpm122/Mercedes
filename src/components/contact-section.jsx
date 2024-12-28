import React, { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsonPayload = {
      name: formData.name,
      phoneNumber: formData.phone,
      emailId: formData.email,
      reason: formData.reason,
      description: formData.description,
    };

    try {
      const response = await fetch("https://cardealers-latest-1.onrender.com/client/enquiry5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonPayload),
      });

      if (response.ok) {
        alert("Vielen Dank für Ihre Nachricht!"); // Success message in German
      } else {
        alert("Es gab ein Problem beim Senden Ihrer Nachricht."); // Error message in German
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."); // Error alert in German
    }
  };

  return (
    <div className="contact-us-container">
      <h1>Kontaktieren Sie uns</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="tel"
            name="phone"
            placeholder="Telefonnummer*"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="E-Mail*"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          >
            <option value="">Grund für Kontakt*</option>
            <option value="Service">Service</option>
            <option value="Andere">Andere</option>
          </select>
        </div>
        <textarea
          name="description"
          placeholder="Beschreibung*"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Senden</button>
      </form>
    </div>
  );
};

export default ContactUs;
