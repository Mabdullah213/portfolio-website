import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ['home', 'portfolio', 'contact'];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={isScrolled ? styles.navbarScrolled : styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>MJ</div>
        {/* Removed the dark mode toggle button */}
        <button
          aria-label="Toggle Menu"
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul style={{ ...styles.navList, ...(menuOpen ? styles.navListMobileActive : {}) }}>
          {sections.map((id) => (
            <li key={id} style={styles.navItem}>
              <button style={styles.navLink} onClick={() => handleScrollToSection(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'transparent',
    padding: '15px 30px',
    zIndex: 1000,
    transition: 'background-color 0.3s, box-shadow 0.3s',
    fontFamily: 'Roboto, sans-serif',
  },
  navbarScrolled: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#8FA998', // Accent background when scrolled
    padding: '15px 30px',
    zIndex: 1000,
    boxShadow: '0 4px 10px rgba(143, 169, 152, 0.5)',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    fontFamily: 'Roboto, sans-serif',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  hamburger: {
    fontSize: '24px',
    background: 'none',
    border: 'none',
    color: '#E0E0E0',
    display: 'none', // Use media queries to enable on mobile devices
    cursor: 'pointer',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '20px',
  },
  navListMobileActive: {
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    left: 0,
    right: 0,
    backgroundColor: '#8FA998',
    padding: '20px',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    fontSize: '18px',
    fontWeight: 500,
    color: '#2B3A27', // Dark green text on accent background
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
};

export default Navbar;
