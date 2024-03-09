import React, { useState, useEffect } from 'react';
import './index.css';

const Timer = () => {
  const startDate = new Date(2024, 2, 15, 17, 0, 0); // March is 2 because months are zero-indexed
  const endTime = startDate.getTime() + 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const [time, setTime] = useState(Math.floor((endTime - Date.now()) / 1000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;

    return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(
      secondsRemaining
    ).padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <h1 className="timer-heading">Countdown Timer</h1>
      <p className="timer-text">{formatTime(time)}</p>
    </div>
  );
};

export default Timer;
