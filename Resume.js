import React from 'react';

function Resume() {
  return (
    <section id="resume" style={styles.container}>
      <h2 style={styles.heading}>Resume</h2>
      <p style={styles.description}>
        Below is a summary of my professional journey. You can also{' '}
        <a
          href="/Resume-Muhammad Abdullah Javed.docx (4).pdf"
          style={styles.link}
          download="Muhammad_Abdullah_Javed_Resume.pdf"
        >
          download my resume
        </a>
        .
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: '80px 20px',
    backgroundColor: '#B85856', // Muted Red
    textAlign: 'center',
    color: '#fff',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: '600',
    color: '#FEA837', // Bright Yellow-Orange
  },
  card: {
    backgroundColor: '#593E67', // Dark Purple
    padding: '20px',
    borderRadius: '8px',
    color: '#fff',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#FEA837',
  },
};


export default Resume;
