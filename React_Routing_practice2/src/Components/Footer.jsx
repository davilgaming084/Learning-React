import React from 'react';

const Footer = () => {
  const styles = {
    footerContainer: {
      backgroundColor: '#2c3e50', // Dark blue background
      color: '#ecf0f1', // Light gray text
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    footerLinks: {
      listStyleType: 'none',
      padding: 0,
      margin: '10px 0',
      display: 'flex',
      justifyContent: 'center',
    },
    footerLink: {
      margin: '0 15px',
      textDecoration: 'none',
      color: '#ecf0f1',
      transition: 'color 0.3s',
    },
    footerLinkHover: {
      color: '#3498db', // Light blue on hover
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 0',
    },
    socialIcon: {
      margin: '0 10px',
      color: '#ecf0f1',
      fontSize: '24px',
      transition: 'color 0.3s',
    },
    description: {
      margin: '10px 0',
      fontSize: '0.9rem',
    },
  };

  return (
    <footer style={styles.footerContainer}>
      <p style={styles.description}>
        © 2023 My Website. All rights reserved.
      </p>
      <ul style={styles.footerLinks}>
        <li><a href="/" style={styles.footerLink}>Home</a></li>
        <li><a href="/about" style={styles.footerLink}>About</a></li>
        <li><a href="/contact" style={styles.footerLink}>Contact</a></li>
      </ul>
      <div style={styles.socialIcons}>
        <a href="https://facebook.com" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">&#xf09a;</a> {/* Font Awesome Facebook icon */}
        <a href="https://twitter.com" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">&#xf099;</a> {/* Font Awesome Twitter icon */}
        <a href="https://instagram.com" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">&#xf16d;</a> {/* Font Awesome Instagram icon */}
      </div>
    </footer>
  );
}

export default Footer;
