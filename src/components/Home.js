import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section 
      id="home" 
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        style={styles.heading}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Muhammad Abdullah Javed
      </motion.h1>
      <motion.h3 
        style={styles.subheading}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        Innovator | Developer | IT Specialist
      </motion.h3>
      <motion.p 
        style={styles.text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        Welcome to my portfolio – a showcase of my skills and projects.
      </motion.p>
      <motion.button 
        style={styles.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Learn More
      </motion.button>
    </motion.section>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '60px 20px',
    backgroundColor: '#121212',  // Dark overall background
    color: '#E0E0E0',            // Light text for readability
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '48px',
    marginBottom: '20px',
    fontWeight: 700,
    color: '#E0E0E0',
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 500,
    color: '#8FA998',  // Use accent for subheading
  },
  text: {
    fontSize: '18px',
    marginBottom: '40px',
    lineHeight: 1.6,
    maxWidth: '800px',
    color: '#CCCCCC',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#8FA998',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Home;
