import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with EmailJS Template ID
        formData,
        'YOUR_PUBLIC_KEY' // Replace with EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" style={styles.container}>
      <h2 style={styles.heading}>Contact Me</h2>
      {isSubmitted ? (
        <p style={styles.successMessage}>Thank you! Your message has been sent.</p>
      ) : (
        <>
          <p style={styles.description}>
            Feel free to reach out via the form below or directly at{' '}
            <a href="mailto:muhammad.javed@coyotes.usd.edu" style={styles.link}>
              muhammad.javed@coyotes.usd.edu
            </a>.
          </p>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            ></textarea>
            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </>
      )}
    </section>
  );
}

const styles = {
  container: {
    padding: '80px 20px',
    backgroundColor: '#84495F', // Dark Pink-Purple
    textAlign: 'center',
    color: '#fff', // White text
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: '600',
    color: '#FEA837', // Bright Yellow-Orange
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#DE741C', // Orange
    maxWidth: '600px',
    margin: '0 auto 40px',
  },
  successMessage: {
    fontSize: '18px',
    color: '#FEA837', // Bright Yellow-Orange
  },
  link: {
    color: '#FEA837', // Bright Yellow-Orange
    textDecoration: 'none',
    fontWeight: '500',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #593E67', // Dark Purple border
    borderRadius: '4px',
    backgroundColor: '#fff', // White background
  },
  textarea: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #593E67',
    borderRadius: '4px',
    backgroundColor: '#fff',
    height: '120px',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#DE741C', // Orange button
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#B85856', // Muted Red on hover
  },
};

export default Contact;
