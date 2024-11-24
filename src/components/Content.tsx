import React, { useEffect } from 'react';
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
        <div className="content-left">
          <h2 className="animated-title">Welcome to ICG GAMING</h2>
          <p>ICG GAMING是一站式综合包网，东南亚包网建设平台。我们不仅仅是一个系统供应商，我们还拥有领先博彩网站的系统与技术，跟上新时代脚步，永不停止的创造与创新。</p>
          <a href="https://t.me/c/2126586273/88" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">Get Started</button>
          </a>
        </div>
        <div className="content-right">
          <div className="image-container">
            <img src="./images/Edison-chinese.png" alt="ICG Gaming Platform Preview" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
