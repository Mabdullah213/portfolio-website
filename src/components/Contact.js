import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update state as user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to send email using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    emailjs
      .send(
        'service_euue0nd', // Replace with your EmailJS Service ID
        'template_66pfdai', // Replace with your EmailJS Template ID
        formData,
        'M7jQLU8Q8qafjUxvS' // Replace with your EmailJS Public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Oops! There was an error sending your message.');
        }
      );
  };

  return (
    <section id="contact" style={styles.container}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.text}>Feel free to reach out via the form below.</p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            style={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>Send</button>
        {status && <p style={{ marginTop: '15px', color: '#8FA998' }}>{status}</p>}
      </form>
    </section>
  );
}

const styles = {
  container: {
    padding: '60px 20px',
    backgroundColor: '#121212',
    color: '#E0E0E0',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(43,58,39,0.3)',
    fontFamily: 'Roboto, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: 700,
    color: '#E0E0E0',
  },
  text: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#E0E0E0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
  },
  formGroup: {
    width: '100%',
    maxWidth: '400px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#8FA998',
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #8FA998',
    width: '100%',
    backgroundColor: '#1E1E1E',
    color: '#E0E0E0',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #8FA998',
    width: '100%',
    height: '120px',
    backgroundColor: '#1E1E1E',
    color: '#E0E0E0',
    boxSizing: 'border-box',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    color: '#FFFFFF',
    backgroundColor: '#8FA998',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
    maxWidth: '400px',
  },
};

export default Contact;
