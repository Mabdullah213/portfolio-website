import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Portfolio() {
  const allCards = [
    {
      title: 'IT Support Specialist, USD',
      subtitle: 'Jan 2023 – Present',
      category: 'Experience',
      description: `• Optimized incident management with TeamDynamix – resolved 50+ issues/week.
• Collaborated for rapid technical solutions.`,
    },
    {
      title: 'Resident Assistant, USD',
      subtitle: 'Jan 2024 – Present',
      category: 'Experience',
      description: `• Enhanced community support and resident engagement.
• Maintained safe environments.`,
    },
    {
      title: 'FitNex – Fitness Plan Generator',
      category: 'Project',
      description: `• Developed full-stack app with React, TypeScript & Tailwind.
• Integrated Supabase Auth and JWT-secured FastAPI.
• Engineered a Python algorithm for personalized plans.`,
    },
    {
      title: 'ML Algorithms Comparison – Healthcare Data Classification',
      category: 'Project',
      description: `• Evaluated Random Forest, SVM, & Logistic Regression on NIH Chest X-ray data.
• Optimized performance with preprocessing & tuning.`,
    },
    {
      title: 'Personal Portfolio Website',
      category: 'Project',
      description: `• Built a responsive React site using React Router & CSS Modules.
• Emphasized accessibility, performance & modern design.`,
    },
    {
      title: 'Technologies',
      category: 'Tech',
      description:
        `• Java • Python • C++ • Office 365 • SQL  
• HTML/CSS • JavaScript • Bazel • Github • Git  
• Kotlin • XML • React (Material UI, Router) • FastAPI • Supabase`,
    },
  ];

  const [filter, setFilter] = useState('All');
  const filteredCards = filter === 'All' ? allCards : allCards.filter(card => card.category === filter);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { threshold: 0.1 });

  return (
    <motion.section
      id="portfolio"
      style={styles.container}
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        style={styles.heading}
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        My Resume
      </motion.h2>
      <div style={styles.filterContainer}>
        <button style={styles.filterButton} onClick={() => setFilter('All')}>All</button>
        <button style={styles.filterButton} onClick={() => setFilter('Experience')}>Experience</button>
        <button style={styles.filterButton} onClick={() => setFilter('Project')}>Projects</button>
        <button style={styles.filterButton} onClick={() => setFilter('Tech')}>Technologies</button>
      </div>
      <motion.div
        style={styles.cardsContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {filteredCards.map((card, index) => (
          <motion.div key={index} style={styles.card} variants={itemVariants}>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            {card.subtitle && <h4 style={styles.cardSubtitle}>{card.subtitle}</h4>}
            <p style={styles.cardDescription}>{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const styles = {
  container: {
    padding: '60px 20px',
    backgroundColor: '#121212', // Dark overall
    color: '#E0E0E0',           // Light text
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#E0E0E0',
    fontWeight: 700,
  },
  filterContainer: {
    marginBottom: '20px',
  },
  filterButton: {
    fontSize: '16px',
    margin: '0 10px',
    padding: '8px 16px',
    borderRadius: '4px',
    border: '1px solid #8FA998',
    background: 'none',
    color: '#E0E0E0',
    cursor: 'pointer',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1E2320', // Dark greenish card background
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
    textAlign: 'left',
    whiteSpace: 'pre-line',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#8FA998', // Accent for titles
  },
  cardSubtitle: {
    fontSize: '16px',
    fontWeight: 500,
    marginBottom: '10px',
    color: '#6E7F68',
  },
  cardDescription: {
    fontSize: '16px',
    color: '#CCCCCC',
  },
};

export default Portfolio;
