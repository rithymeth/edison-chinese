import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { loadSlim } from "tsparticles-slim";
import { tsParticles } from "tsparticles-engine";
import { particlesConfig } from './particlesConfig';
import { content } from './languageContent';
import Footer from './Footer';
import './Content.css';

const Content: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  useEffect(() => {
    const loadParticles = async () => {
      try {
        await loadSlim(tsParticles);
        await tsParticles.load("tsparticles", particlesConfig);
      } catch (error) {
        console.error("Error loading particles:", error);
      }
    };
    loadParticles();
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <>
      <div className="content">
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'en' ? '中文' : 'English'}
        </button>
        <div id="tsparticles" className="particles-background" />
        <div className="content-container">
          <motion.div 
            className="content-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="animated-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content[language].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {content[language].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="https://t.me/icggaming_edison" target="_blank" rel="noopener noreferrer">
                <button className="cta-button">{content[language].buttonText}</button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="content-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="image-container">
              <img src="./images/ICG - EDISON 06_B.png" alt="ICG Gaming Platform Preview" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default Content;
