import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8080/back", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setResponseMessage("Thank you! We will contact you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Page Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.subtitle}>
          Have questions? Our team is here to assist you. Reach out now!
        </p>
      </div>

      {/* Contact Form & Info Section */}
      <div style={styles.content}>
        {/* Contact Form */}
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Send Us a Message</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              style={styles.textarea}
            ></textarea>
            <button type="submit" style={styles.button} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
          {responseMessage && <p style={styles.response}>{responseMessage}</p>}
        </div>

        {/* Contact Info */}
        <div style={styles.infoContainer}>
          <h2 style={styles.infoTitle}>Contact Info</h2>
          <p style={styles.infoText}>
            📍 <span>Location: G9 Markaz, Islamabad, Pakistan</span>
          </p>
          <p style={styles.infoText}>
            📧{" "}
            <span>
              <a
                target="_blank"
                href="mailto:contact.hammadtravel@gmail.com"
                className="d-block"
              >
                contact.hammadtravel@gmail.com
              </a>{" "}
            </span>
          </p>
          <p style={styles.infoText}>
            📞
            <span>
              <a target="_blank" href="tel:+923341111427" className="d-block">
                923341111427
              </a>
            </span>
          </p>
          <iframe
            src="https://maps.google.com/maps?q=Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={styles.map}
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1677180202551-e45eb8a8431c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0ZnlmdWxsJTIwcGxhY2VzfGVufDB8MHwwfHx8MA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "50px 20px",
    textAlign: "center",
    color: "#fff",
  },

  header: {
    marginTop: 50,
    marginBottom: "30px",
  },
  title: {
    marginTop: "10px",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: "18px",
    color: "#f0f0f0",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    maxWidth: "1200px",
    margin: "auto",
  },

  // Contact Form Styles
  formContainer: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "40%",
    minWidth: "300px",
  },
  formTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "100%",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "100%",
    height: "120px",
    outline: "none",
  },
  button: {
    background: "#ff6f61",
    color: "#fff",
    padding: "12px",
    fontSize: "18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
  response: {
    marginTop: "10px",
    fontSize: "14px",
    color: "green",
  },

  // Contact Info Styles
  infoContainer: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "40%",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Aligns text properly
    textAlign: "left",
  },
  infoTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  infoText: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#555",
    display: "flex",
    alignItems: "center",
    gap: "8px", // Space between icon and text
  },
  map: {
    width: "100%",
    height: "200px",
    borderRadius: "8px",
    marginTop: "15px",
    border: "none",
  },
    '@media screen and (max-width: 768px)': {
    formContainer: {
      width: "100%",
      backgroundColor: "aqua",
    },
  },
};

export default Contact;
