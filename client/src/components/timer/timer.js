import React, { useState, useEffect } from 'react';
import './index.css'
const Timer = () => {
  const [currentTime, setCurrentTime] = useState('24:00:00');
  const targetDate = new Date('March 15, 2024 17:00:00'); // 5 PM on March 15th

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      if (now >= targetDate) {
        const diff = targetDate.getTime() + (24 * 60 * 60 * 1000) - now.getTime();

        // Ensure diff is non-negative (handles case where target date has passed)
        const remainingTime = Math.max(diff, 0);

        // Calculate remaining time in milliseconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setCurrentTime(`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }
    };

    // Initial update and cleanup function
    updateTimer();
    const intervalId = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="timer-container">
      <h1 className="timer-heading">Countdown Timer</h1>
      <div className="timer-text">{currentTime}</div>
    </div>
  );
};

export default Timer;
