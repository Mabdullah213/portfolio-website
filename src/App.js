import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <section id="home" style={styles.section}>
          <Home />
        </section>
        
        <section id="portfolio" style={styles.section}>
          <Portfolio />
        </section>
        <section id="about" style={{ ...styles.section}}>
          <About />
        </section>
        <section id="contact" style={{ ...styles.section}}>
          <Contact />
        </section>
      </main>
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    width: '100%',
    maxWidth: '1200px',
    padding: '60px 20px',
    marginBottom: '40px',
    textAlign: 'center',
  },
};

export default App;
