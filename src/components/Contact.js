import React from 'react';

function Contact() {
  return (
    <section id="contact" style={styles.container}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.text}>Feel free to reach out to me through the form below:</p>
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </section>
  );
}

const styles = {
  container: {
    padding: '60px 20px',
    backgroundColor: '#000000', // Deep Black for background
    color: '#FFFFFF', // Bright White for text
    textAlign: 'center',
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#FFFFFF', // Bright White for heading
  },
  text: {
    fontSize: '16px',
    marginBottom: '20px',
    color: 'white', // Lunar Gray for text
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #4A90E2', // Vibrant Blue for border
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#6A5ACD', // Muted Purple for input background
    color: '#FFFFFF', // Bright White for input text
  },
  textarea: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #4A90E2', // Vibrant Blue for border
    width: '100%',
    height: '120px',
    boxSizing: 'border-box',
    backgroundColor: '#6A5ACD', // Muted Purple for textarea background
    color: '#FFFFFF', // Bright White for textarea text
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    color: '#FFFFFF', // Bright White for button text
    backgroundColor: '#4A90E2', // Vibrant Blue for button background
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#6A5ACD', // Muted Purple on hover
  },
};

export default Contact;
