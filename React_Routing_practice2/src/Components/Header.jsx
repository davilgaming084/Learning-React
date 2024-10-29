import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const styles = {
    headerContainer: {
      backgroundColor: '#2c3e50', // Dark blue
      color: '#ecf0f1', // Light gray
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerTitle: {
      margin: 0,
    },
    navbar: {
      position: 'relative',
    },
    navLinks: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      flexDirection: 'row', // Default to row for larger screens
    },
    navLink: {
      margin: '0 15px',
      padding: '10px 15px', // Added padding for button-like appearance
      borderRadius: '5px', // Rounded corners
      backgroundColor: '#2980b9', // Button background color
      color: '#ecf0f1', // Text color
      textDecoration: 'none', // Remove underline from links
      transition: 'background-color 0.3s', // Smooth transition for hover effect
    },
    hamburger: {
      display: 'none', // Hidden by default
      background: 'none',
      border: 'none',
      color: '#ecf0f1',
      fontSize: '24px',
      cursor: 'pointer',
    },
    navLinksHidden: {
      display: isOpen ? 'flex' : 'none', // Show links when open
      flexDirection: 'column', // Stack links vertically when open
      position: 'absolute',
      top: '50px', // Adjust based on header height
      left: 0,
      backgroundColor: '#34495e', // Slightly lighter blue when open
      width: '100%', // Full width when open
    },
    // Media query styles
    '@media (max-width: 768px)': {
      navLinks: {
        display: isOpen ? 'flex' : 'none', // Show links when open on small screens
      },
      hamburger: {
        display: 'block', // Show hamburger icon on small screens
      },
    },
  };

  return (
    <div style={styles.headerContainer}>
      <h1 style={styles.headerTitle}>My Website</h1>
      <div style={styles.navbar}>
        <button style={styles.hamburger} onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
        <ul style={isOpen ? { ...styles.navLinks, ...styles.navLinksHidden } : styles.navLinks}>
          <li style={styles.navLink}><Link to="/" style={{ textDecoration: 'none', color: '#ecf0f1' }}>Home</Link></li>
          <li style={styles.navLink}><Link to="/about" style={{ textDecoration: 'none', color: '#ecf0f1' }}>About</Link></li>
          <li style={styles.navLink}><Link to="/github" style={{ textDecoration: 'none', color: '#ecf0f1' }}>github</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
