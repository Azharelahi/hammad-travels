import React, { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Admin Email
    const adminEmail = "contact.hammadtravel@gmail.com";

    // Subject
    const subject = `New Contact Form Submission - ${formData.name}`;

    // Email Body
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
  `;

    // Create mailto link
    const mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    setResponseMessage(
      "Email is ready. Please send it from your preferred email app."
    );
    setIsSubmitting(false);
  };

  return (
    <div className="conta-container">
      <div className="header">
        <h1 className="title">Get in Touch</h1>
        <p className="subtitle">
          Have questions? Our team is here to assist you. Reach out now!
        </p>
      </div>

      <div className="content">
        <div className="formContainer">
          <h2 className="formTitle">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`input ${errors.name ? "error" : ""}`}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`input ${errors.email ? "error" : ""}`}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className={`textarea ${errors.message ? "error" : ""}`}
            />
            {errors.message && <p className="error-text">{errors.message}</p>}

            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
          {responseMessage && <p className="response">{responseMessage}</p>}
        </div>

        <div className="infoContainer">
          <h2 className="infoTitle">Contact Info</h2>
          <p className="infoText">
            📍 Location: G9 Markaz, Islamabad, Pakistan
          </p>
          <p className="infoText">
            📧{" "}
            <a href="mailto:contact.hammadtravel@gmail.com">
              contact.hammadtravel@gmail.com
            </a>
          </p>
          <p className="infoText">
            📞 <a href="tel:+923341111427">+92 334 111 1427</a>
          </p>
          <iframe
            src="https://maps.google.com/maps?q=Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="map"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
