import React from 'react';
import { motion } from 'framer-motion';
import { content } from './languageContent';
import './Footer.css';

interface FooterProps {
  language: 'en' | 'zh';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <motion.a 
          href="https://t.me/icggaming_edison" 
          className="telegram-link" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-telegram"></i>
          {content[language].footerText}
        </motion.a>
        <motion.div 
          className="qr-code"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src="./images/icg-edison.png" alt="Telegram QR Code" loading="lazy" />
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
