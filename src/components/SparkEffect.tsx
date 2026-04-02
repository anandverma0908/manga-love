import React, { useEffect } from 'react';

const WORDS = ['POW!', 'BAM!', 'ZAP!', '★', '♥', 'WOW!', 'BOOM!', '✦'];
const COLORS = ['#e8192c', '#ffe01a', '#1a3cff', '#00d4f5', '#ff6b8a'];

const SparkEffect: React.FC = () => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('input, textarea, button, audio')) return;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const s = document.createElement('div');
          s.className = 'spark';
          const angle = Math.random() * Math.PI * 2;
          const dist = 40 + Math.random() * 80;
          s.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
          s.style.setProperty('--dy', `${Math.sin(angle) * dist - 30}px`);
          s.style.left = `${e.clientX}px`;
          s.style.top = `${e.clientY}px`;
          s.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
          s.style.webkitTextStroke = '1.5px #0a0806';
          s.style.transform = `rotate(${(Math.random() - 0.5) * 40}deg)`;
          s.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];
          document.body.appendChild(s);
          setTimeout(() => s.remove(), 860);
        }, i * 60);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
};

export default SparkEffect;
