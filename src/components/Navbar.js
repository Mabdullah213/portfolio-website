import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Change state when scrolled past 50px
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={isScrolled ? styles.navbarScrolled : styles.navbar}>
      <ul style={styles.navList}>
        {['home', 'resume', 'about', 'contact'].map((id) => (
          <li key={id} style={styles.navItem}>
            <button style={styles.navLink} onClick={() => handleScrollToSection(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#000000', // Deep Black for default
    padding: '15px 30px',
    zIndex: 1000,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)',
    transition: 'background-color 0.3s',
  },
  navbarScrolled: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#333333', // Dark Gray when scrolled
    padding: '15px 30px',
    zIndex: 1000,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 1)',
    transition: 'background-color 0.3s',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '20px',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

export default Navbar;
