import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '60px 20px',
    backgroundColor:'#000000', // Deep Black background
    color: '#FFFFFF', // Bright White for text
    textAlign: 'center',
    backdropFilter: 'blur(8px)', // Adds frosted glass effect (ensure browser support)
    borderRadius: '8px', // Adds rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.0)', // Subtle shadow for depth
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#FFFFFF', // Bright White for heading
  },
  text: {
    fontSize: '16px',
    marginBottom: '40px',
    lineHeight: '1.6',
    color: '#E0E0E0', // Lunar Gray for text
  },
  skillsContainer: {
    marginTop: '20px',
  },
  subheading: {
    fontSize: '20px',
    marginBottom: '15px',
    color: '#FFFFFF', // Bright White for subheadings
  },
  skillsList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  skillItem: {
    backgroundColor: '#6A5ACD', // Muted Purple for skill items
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '14px',
    color: '#FFFFFF', // Bright White for text
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive grid
    gap: '20px', // Space between grid items
    marginTop: '20px',
    width: '100%',
    maxWidth: '1200px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
  },
};

function About() {
  const imageUrls = [
    '/PXL_20240311_212452436.NIGHT.RAW-02.ORIGINAL (1).jpg',
    '/PXL_20240902_164011539.RAW-02.ORIGINAL.jpg',
    '/PXL_20240915_050038762.NIGHT.RAW-02.ORIGINAL.jpg',
    '/PXL_20240424_195232748.RAW-02.ORIGINAL.jpg',
    '/PXL_20241130_182501060.RAW-02.ORIGINAL (1).jpg',
  ];
  
  return (
    <section id="about" style={styles.container}>
      <h2 style={styles.heading}>Get To Know Me</h2>
      <p style={styles.text}>
        I am passionate about web development, machine learning, and solving real-world
        problems through technology. I am a Computer Science student who loves building
        projects that make an impact.
      </p>
      <p style={styles.text}>
       Outside of Professional life, I love to read, workout, and take some beautiful stills.
      </p>
      <div style={styles.skillsContainer}>
        <h3 style={styles.subheading}>Some of my absolute favourite photos!</h3>
      </div>
      <div style={styles.imageGrid}>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} style={styles.image} />
        ))}
      </div>

    </section>
  );
}

export default About;
