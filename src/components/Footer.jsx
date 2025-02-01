import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2025 LivePlotBench. All rights reserved.</p>
        <div className={styles.links}>
          <a href="https://github.com/liveplotbench" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
