import React from 'react';
import './Content.css';

const Content: React.FC = () => { 
  return (
    <div className="content">
      <div className="content-container">
        <div className="content-left">
          <h2>Welcome to ICG GAMING</h2>
          <p>ICG GAMING是一站式综合包网，东南亚包网建设平台。我们不仅仅是一个系统供应商，我们还拥有领先博彩网站的系统与技术，跟上新时代脚步，永不停止的创造与创新。</p>
          <button className="cta-button">Get Started</button>
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
