import React, { useState, useEffect } from 'react';
import styles from '../styles/Leaderboard.module.css';

const Leaderboard = () => {
  const [data, setData] = useState({ models: [], performances: [] });
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetch('/data/leaderboard.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const filteredPerformances = selectedDate
    ? data.performances.filter(p => p.date === selectedDate)
    : data.performances;

  const calculateTotal = (performance) => {
    return (
      performance.correctness * 0.5 +  // 50%
      performance.runnability * 0.2 +  // 20%
      performance.aesthetics * 0.2 +   // 20%
      performance.speed * 0.1          // 10%
    );
  };

  return (
    <div className={styles.leaderboard}>
      <div className={styles.dateFilter}>
        <label>Filter by date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Model</th>
            <th>Date</th>
            <th>Correctness (50%)</th>
            <th>Runnable Code (20%)</th>
            <th>Aesthetic Quality (20%)</th>
            <th>Generation Speed (10%)</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredPerformances.map((performance, index) => (
            <tr key={index}>
              <td>{performance.model}</td>
              <td>{performance.date}</td>
              <td>{(performance.correctness * 100).toFixed(2)}%</td>
              <td>{(performance.runnability * 100).toFixed(2)}%</td>
              <td>{(performance.aesthetics * 100).toFixed(2)}%</td>
              <td>{(performance.speed * 100).toFixed(2)}%</td>
              <td>{(calculateTotal(performance) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
