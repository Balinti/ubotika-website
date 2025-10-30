import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Background images - replace these URLs with your own images
  const images = [
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>
      <div className="container hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          UBOTIKA
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI & Robotics Intelligence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building autonomous AI agents that make phone calls, send emails and texts, 
          and manage databases. The future of intelligent automation is here.
        </motion.p>
        <motion.a
          href="#contact"
          className="cta-button"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
