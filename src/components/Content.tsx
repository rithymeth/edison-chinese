import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { loadSlim } from "tsparticles-slim";
import { tsParticles } from "tsparticles-engine";
import { particlesConfig } from './particlesConfig';
import './Content.css';

const Content: React.FC = () => {
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

  return (
    <div className="content">
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
            Welcome to ICG GAMING
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ICG GAMING是一站式综合包网，东南亚包网建设平台。我们不仅仅是一个系统供应商，我们还拥有领先博彩网站的系统与技术，跟上新时代脚步，永不停止的创造与创新。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://t.me/c/2126586273/88" target="_blank" rel="noopener noreferrer">
              <button className="cta-button">Get Started</button>
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
            <img src="./images/Edison-chinese.png" alt="ICG Gaming Platform Preview" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Content;
