import React from 'react';
import { motion, useInView } from 'framer-motion';

function Resume() {
  const sections = [
    {
      title: 'Education',
      description: `Bachelor of Science in Computer Science \nUniversity of South Dakota, Vermillion, SD\n\n Relevant Coursework: Data Structures, Algorithms, Pattern Recognition and Machine Learning`,
    },
    {
      title: 'Job Experience',
      description: `IT Support Intern | USD ITS\n Assisted with technical support, resolving issues for staff and students efficiently.\n\nResident Assistant | USD Housing \n Managed and supported 40+ residents, fostering community and providing guidance.\n`,
    },
    {
      title: 'Skills',
      description: `Web Development, Data handling, Manipulation, and Visualization with the following technologies:\nJava, Python, C++, Office 365 , SQL, HTMl/CSS, JavaScript, Github, Git, React, Express, GCP, Kubernetes, Jira, Google Pub/Sub`,
    },
    {
      title: 'Awards and Recognition',
      description: `Coyote Commitment Scholarship\nGlobal Community Scholarship\n Ambassador Scholar Award`,
    },
    {
      title: 'Realtime Surveillance System',
      description: `detail will be added later `,
    },
    {
      title: 'Healthcare Diagnostic Assistant',
      description: `details will be added later`,
    },
  ];

  const containerRef = React.useRef(null);
  const inView = useInView(containerRef, { threshold: 0.1 });

  return (
    <motion.section
      id="resume"
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
      <motion.div
        style={styles.sectionsContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            style={styles.sectionCard}
            variants={itemVariants}
          >
            <h3 style={styles.cardTitle}>{section.title}</h3>
            <p style={styles.cardDescription}>{section.description}</p>
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
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const styles = {
  container: {
    padding: '60px 20px',
    backgroundColor: '#000000', // Deep Black background
    color: '#FFFFFF', // Bright White for text
    textAlign: 'center',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#FFFFFF', // Bright White for heading
  },
  sectionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  },
  sectionCard: {
    backgroundColor: '#6A5ACD', // Muted Purple for card background
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#FFFFFF',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  sectionCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#FFFFFF', // Bright White for card title
  },
  cardDescription: {
    fontSize: '16px',
    marginBottom: '15px',
    whiteSpace: 'pre-line', // Preserves line breaks
    color: '#E0E0E0', // Lunar Gray for description
  },
};

export default Resume;
