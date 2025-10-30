import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Build the Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to transform your business with AI-powered automation? 
          Get in touch and discover what's possible.
        </motion.p>
        <motion.a
          href="mailto:hello@ubotika.com"
          className="contact-button"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;
