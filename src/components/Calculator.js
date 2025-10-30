import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Calculator() {
  const [callsPerMonth, setCallsPerMonth] = useState(500);
  const [minutesPerCall, setMinutesPerCall] = useState(10);
  const [costPerHour, setCostPerHour] = useState(25);
  
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);

  useEffect(() => {
    // Calculate total hours spent on calls
    const totalMinutes = callsPerMonth * minutesPerCall;
    const totalHours = totalMinutes / 60;
    
    // Calculate cost (assuming 70% time savings with AI)
    const savingsPercentage = 0.7;
    const hoursSavedMonth = totalHours * savingsPercentage;
    const monthlyCost = hoursSavedMonth * costPerHour;
    const annualCost = monthlyCost * 12;

    setHoursSaved(Math.round(hoursSavedMonth));
    setMonthlySavings(Math.round(monthlyCost));
    setAnnualSavings(Math.round(annualCost));
  }, [callsPerMonth, minutesPerCall, costPerHour]);

  return (
    <section className="calculator" id="calculator">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          💡 Calculate Your Savings with AI Voice Automation
        </motion.h2>

        <div className="calculator-container">
          <motion.div 
            className="calculator-inputs"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="input-group">
              <label>Monthly Calls</label>
              <input 
                type="range" 
                min="0" 
                max="5000" 
                value={callsPerMonth}
                onChange={(e) => setCallsPerMonth(Number(e.target.value))}
              />
              <span className="input-value">{callsPerMonth}</span>
            </div>

            <div className="input-group">
              <label>Minutes per Call</label>
              <input 
                type="range" 
                min="1" 
                max="60" 
                value={minutesPerCall}
                onChange={(e) => setMinutesPerCall(Number(e.target.value))}
              />
              <span className="input-value">{minutesPerCall} min</span>
            </div>

            <div className="input-group">
              <label>Staff Cost per Hour ($)</label>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={costPerHour}
                onChange={(e) => setCostPerHour(Number(e.target.value))}
              />
              <span className="input-value">${costPerHour}</span>
            </div>
          </motion.div>

          <motion.div 
            className="calculator-results"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="result-card">
              <div className="result-icon">💰</div>
              <div className="result-label">Monthly Savings</div>
              <div className="result-value">${monthlySavings.toLocaleString()}</div>
            </div>

            <div className="result-card">
              <div className="result-icon">📈</div>
              <div className="result-label">Annual Savings</div>
              <div className="result-value">${annualSavings.toLocaleString()}</div>
            </div>

            <div className="result-card">
              <div className="result-icon">⏰</div>
              <div className="result-label">Hours Saved/Month</div>
              <div className="result-value">{hoursSaved}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
