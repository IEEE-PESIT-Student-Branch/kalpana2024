import './index.css';
import React, { useState, useEffect } from 'react';
import Profiles from './profiles';


export default function Board() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/leaderboard');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched leaderboard data:', data);
        setLeaderboardData(data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error.message);
      }
    };
  
    fetchLeaderboardData();
    const intervalId = setInterval(fetchLeaderboardData, 60000);
  
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="board">
      <h1 className='leaderboard'>Leaderboard</h1>
      <Profiles Leaderboard={leaderboardData}></Profiles>
    </div>
  );
}
