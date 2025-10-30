import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Redefining Automation</h2>
            <p>
              Ubotika is at the forefront of AI-powered automation, developing intelligent 
              agents that seamlessly integrate into your business operations. Our technology 
              combines advanced natural language processing, real-time communication, and 
              autonomous decision-making.
            </p>
            <p>
              From customer engagement to data management, our AI agents work tirelessly 
              to optimize your workflows and drive unprecedented efficiency. We don't just 
              automate tasks—we create intelligent systems that learn, adapt, and evolve.
            </p>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🤖
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
