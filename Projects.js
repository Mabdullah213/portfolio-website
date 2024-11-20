import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'AI Chatbot Algorithm',
      description: 'Developed an automated customer response tool using NLP.',
      link: '#', // Replace with GitHub or demo link
    },
    {
      title: 'Data Visualization and Analysis',
      description: 'Created visualizations for regressive ML models to explore patterns.',
      link: '#', // Replace with GitHub or demo link
    },
    {
      title: 'Smart Surveillance System',
      description: 'Object detection for enhanced security monitoring using YOLO.',
      link: '#', // Replace with GitHub or demo link
    },
  ];
  

  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.cardContainer}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDescription}>{project.description}</p>
            {project.link && (
              <a href={project.link} style={styles.cardLink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
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


export default Projects;
