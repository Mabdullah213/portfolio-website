import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Since dark mode is always on, we simply enforce it.
  React.useEffect(() => {
    // Set the overall document styles for dark theme.
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#E0E0E0';
  }, []);

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
        <section id="contact" style={styles.section}>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#121212',
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
