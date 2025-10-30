import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Starting date: October 29, 2025
const START_DATE = new Date('2025-10-29');
const DAILY_CALLS = 1200; // 1.2K per day
const DAILY_MESSAGES = 50000; // 50K per day

function TwentyFourSevenCounter({ label }) {
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const hoursIncrement = 24 / (duration / 16);
      const daysIncrement = 7 / (duration / 16);
      let currentHours = 0;
      let currentDays = 0;

      const timer = setInterval(() => {
        currentHours += hoursIncrement;
        currentDays += daysIncrement;

        if (currentHours >= 24) {
          setHours(24);
          setDays(7);
          clearInterval(timer);
        } else {
          setHours(Math.floor(currentHours));
          setDays(Math.floor(currentDays));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-number">{hours}/{days}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function LiveCounter({ baseValue, dailyIncrease, suffix, label }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Calculate current total based on days since start
  const calculateCurrentTotal = () => {
    const now = new Date();
    const daysPassed = Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24));
    return baseValue + (daysPassed * dailyIncrease);
  };

  useEffect(() => {
    if (isInView) {
      const targetValue = calculateCurrentTotal();
      let start = 0;
      const duration = 2000;
      const increment = targetValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setDisplayValue(formatNumber(targetValue, suffix));
          clearInterval(timer);
        } else {
          setDisplayValue(formatNumber(Math.floor(start), suffix));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const formatNumber = (num, suffix) => {
    if (suffix === 'M') {
      return `${(num / 1000000).toFixed(1)}M+`;
    } else if (suffix === 'K') {
      return `${Math.floor(num / 1000)}K+`;
    } else if (suffix === '%') {
      return `${num.toFixed(1)}%`;
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-number">{displayValue}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Powered by Intelligence
        </motion.h2>
        <div className="stats-grid">
          <LiveCounter 
            baseValue={1000000} 
            dailyIncrease={DAILY_MESSAGES} 
            suffix="M" 
            label="Messages Processed" 
          />
          <LiveCounter 
            baseValue={50000} 
            dailyIncrease={DAILY_CALLS} 
            suffix="K" 
            label="Calls Handled" 
          />
          <LiveCounter 
            baseValue={99.9} 
            dailyIncrease={0} 
            suffix="%" 
            label="Uptime" 
          />
          <TwentyFourSevenCounter label="AI Availability" />
        </div>
      </div>
    </section>
  );
}

export default Stats;
