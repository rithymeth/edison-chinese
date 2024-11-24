import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="https://t.me/icggame" className="telegram-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i>
          Join us on Telegram
        </a>
        <div className="qr-code">
          <img src="./images/icg-edison.png" alt="Telegram QR Code" loading="lazy" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
