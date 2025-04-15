import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>
        © {new Date().getFullYear()} Muhammad Abdullah Javed. All Rights Reserved.
      </p>
      <div style={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/mjaved213/" style={styles.link}>LinkedIn</a>
        <span style={styles.separator}>|</span>
        <a href="https://github.com/Mabdullah213" style={styles.link}>Github</a>
        <span style={styles.separator}>|</span>
        <a href="mailto:muhammad.javed@coyotes.usd.edu" style={styles.link}>Email</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2B3A27',  // Deep forest green
    padding: '20px',
    textAlign: 'center',
    color: '#CED2C1',
    fontFamily: 'Roboto, sans-serif',
  },
  footerText: {
    margin: '0 0 10px 0',
    fontSize: '14px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '14px',
  },
  link: {
    color: '#CED2C1',
    textDecoration: 'none',
  },
  separator: {
    margin: '0 5px',
  },
};

export default Footer;
