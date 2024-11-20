import React from 'react';

function About() {
  return (
    <section id="about" style={styles.container}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        Hi! I'm Muhammad Abdullah Javed, a Computer Science and Mathematics student at the University of South Dakota.
        Passionate about web development, machine learning, and solving real-world problems through innovative projects.
      </p>
      <div style={styles.skillsContainer}>
        <div style={styles.skillsRow}>
          <div style={styles.skill}>
            <span style={styles.skillLabel}>Python</span>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: '90%' }}>
                <span style={styles.progressLabel}>9/10</span>
              </div>
            </div>
          </div>
          <div style={styles.skill}>
            <span style={styles.skillLabel}>SQL</span>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: '85%' }}>
                <span style={styles.progressLabel}>8.5/10</span>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.skillsRow}>
          <div style={styles.skill}>
            <span style={styles.skillLabel}>Machine Learning</span>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: '80%' }}>
                <span style={styles.progressLabel}>8/10</span>
              </div>
            </div>
          </div>
          <div style={styles.skill}>
            <span style={styles.skillLabel}>Java</span>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: '85%' }}>
                <span style={styles.progressLabel}>8.5/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '80px 20px',
    backgroundColor: '#593E67', // Dark Purple
    textAlign: 'center',
    color: '#FEA837', // Bright Yellow-Orange
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: '600',
    color: '#FEA837',
  },
  text: {
    fontSize: '18px',
    marginBottom: '40px',
    color: '#FEA837',
  },
  skillsContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  skillsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  skill: {
    flex: '1',
  },
  skillLabel: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    fontSize: '16px',
    color: '#FEA837',
  },
  progressBar: {
    backgroundColor: '#84495F',
    borderRadius: '6px',
    overflow: 'hidden',
    height: '25px',
  },
  progress: {
    backgroundColor: '#FEA837', // Bright Yellow-Orange
    height: '100%',
    transition: 'width 0.5s',
  },
  progressLabel: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    fontWeight: '600',
    color: '#593E67',
  },
};

export default About;
