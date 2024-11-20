import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'resume', 'contact'];
    const scrollPosition = window.scrollY + 100; // Offset for better accuracy

    // Highlight the active section
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (
        sectionElement &&
        scrollPosition >= sectionElement.offsetTop &&
        scrollPosition < sectionElement.offsetTop + sectionElement.offsetHeight
      ) {
        setActiveSection(section);
      }
    });

    // Add background color on scroll
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ ...styles.navbar, ...(isScrolled ? styles.navbarScrolled : {}) }}>
      <ul style={styles.navList}>
        {['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
          <li key={section} style={styles.navItem}>
            <a
              href={`#${section}`}
              style={{
                ...styles.navLink,
                ...(activeSection === section ? styles.navLinkActive : {}),
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
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
    width: '100%',
    backgroundColor: 'transparent', // Default transparent
    padding: '10px 0',
    transition: 'background-color 0.3s',
    zIndex: 1000,
  },
  navbarScrolled: {
    backgroundColor: '#593E67', // Dark Purple on scroll
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    color: '#FEA837', // Bright Yellow-Orange for links
    transition: 'color 0.3s',
  },
  navLinkActive: {
    color: '#DE741C', // Orange for active link
  },
};

export default Navbar;
