import React from 'react';
import { motion } from 'framer-motion';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Full viewport height
    padding: '60px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // Deep Black
    color: '#FFFFFF', // Bright White
    textAlign: 'center',
    overflow: 'hidden', // Ensure smooth animations
  },
  heading: {
    fontSize: '48px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#FFFFFF', // Bright White
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: '500',
    color: '#E0E0E0', // Lunar Gray for subtle contrasts
  },
  text: {
    fontSize: '16px',
    marginBottom: '40px',
    lineHeight: '1.6',
    color: '#E0E0E0', // Lunar Gray
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#4A90E2', // Vibrant Blue
    color: '#FFFFFF', // Bright White
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#6A5ACD', // Muted Purple on hover
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
  },
};

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
        Welcome to My Portfolio
      </motion.h3>

      <motion.p 
        style={styles.text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        Scroll down to see more!
      </motion.p>
    </motion.section>
  );
}

export default Home;
