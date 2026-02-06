import React, { useState } from "react";
import "../styles/BookTutor.css";

const BookTutor = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", date: "", time: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="book-tutor-container">
      {submitted && <div className="success-message">✅ Your appointment request has been sent! We'll contact you soon.</div>}
      
      <h1>Book a Session with a Tutor</h1>
      <p>Schedule a personalized tutoring session to enhance your learning.</p>
      
      <form onSubmit={handleSubmit} className="book-tutor-form">
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input id="name" name="name" placeholder="Enter your full name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input id="email" name="email" placeholder="Enter your email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date *</label>
          <input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="time">Preferred Time *</label>
          <input id="time" name="time" type="time" value={form.time} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message (Optional)</label>
          <textarea id="message" name="message" placeholder="Any specific topics or questions?" value={form.message} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookTutor;
