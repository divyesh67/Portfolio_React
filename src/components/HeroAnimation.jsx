import { motion } from 'framer-motion';
import React from 'react';

export default function HeroAnimation(){
  const N = 28;
  const nodes = Array.from({length: N}, (_, i) => ({
    x: (i % 14) * 28 + 18,
    y: Math.floor(i / 14) * 60 + 24
  }));

  return (
    <svg viewBox="0 0 420 140" width="100%" height="140" style={{overflow:'visible'}}>
      {nodes.map((n, i) => (
        <motion.circle key={i}
          cx={n.x} cy={n.y} r="3" fill="currentColor"
          initial={{ opacity: 0.25 }}
          animate={{ opacity: [0.25, 0.9, 0.25], r: [2.5, 3.5, 2.5] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.06, ease: 'easeInOut' }}
        />
      ))}
      <motion.path d="M18 24 L 402 84" stroke="currentColor" strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }} />
    </svg>
  );
}
