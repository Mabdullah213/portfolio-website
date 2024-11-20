import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" style={styles.container}>
      <div style={styles.nameContainer}>
        <motion.h1
          style={styles.firstName}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Muhammad
        </motion.h1>
        <motion.h1
          style={styles.lastName}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Javed
        </motion.h1>
      </div>
      <motion.p
        style={styles.description}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        Computer Science Student | Web Developer | Machine Learning Enthusiast
      </motion.p>
      <motion.a
        href="#projects"
        style={styles.button}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 1.2,
          delay: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        View My Work
      </motion.a>
    </section>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #FEA837, #DE741C, #B85856, #84495F, #593E67)', // Sunset gradient
    textAlign: 'center',
  },
  nameContainer: {
    display: 'flex',
    gap: '20px', // Space between first and last name
  },
  firstName: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#FEA837', // Bright Yellow-Orange for the first name
  },
  lastName: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#FEA837', // Orange for the last name
  },
  description: {
    fontSize: '20px',
    marginTop: '20px',
    color: '#FEA837', // Muted Red for the tagline
  },
  button: {
    marginTop: '30px',
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#84495F', // Dark Pink-Purple for the button
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#593E67', // Dark Purple on hover
  },
};

export default Home;
