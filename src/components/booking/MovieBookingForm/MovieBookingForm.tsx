import React, { useState } from "react";
import Card from "../../common/Card/Card"; // Import the BookingCard component
import "./MovieBookingForm.css";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agree: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agree) {
      setIsSubmitted(true); // Set the form submission to true
    } else {
      alert("Please provide consent to store your information.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Movie Booking Flow</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree" style={{ marginLeft: "5px" }}>
              I provide my consent to store my information
            </label>
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        // Display Booking Card Component after form submission
        <Card name={formData.name} email={formData.email} />
      )}
    </div>
  );
}
