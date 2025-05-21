import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.message) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("https://mellifera-hash-blocks.onrender.com/send-message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        } else {
          alert(result.error);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to send message.");
      }
    }
  };
  

  return (
    <div className="contact-form-container">
      <h2 className="contact-title">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..."></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;