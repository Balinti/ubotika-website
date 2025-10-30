import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      icon: '📞',
      title: 'AI Phone Agents',
      description: 'Autonomous agents that handle customer calls with human-like conversation and intelligence.'
    },
    {
      icon: '✉️',
      title: 'Email Automation',
      description: 'Smart email processing and response systems that understand context and intent.'
    },
    {
      icon: '💬',
      title: 'SMS Integration',
      description: 'Text message automation that engages customers at the right moment with personalized communication.'
    },
    {
      icon: '🗄️',
      title: 'Database Management',
      description: 'Intelligent data processing and organization powered by AI-driven workflows.'
    },
    {
      icon: '🔄',
      title: 'Workflow Automation',
      description: 'End-to-end automation solutions using N8N, Make.com, and custom integrations.'
    },
    {
      icon: '🎯',
      title: 'AI Analytics',
      description: 'Advanced analytics and insights powered by machine learning and real-time data processing.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Capabilities
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
