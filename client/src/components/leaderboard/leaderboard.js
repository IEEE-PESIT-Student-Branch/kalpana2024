import React, { useState, useEffect } from 'react';
import Profiles from './profiles';
import './index.css';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return null; // Return null if an error occurs
  }
};

export default function Board() {
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const data = await fetchData('http://localhost:8080/api/teams');

        console.log('Fetched teams data:', data); // Log teams data

        // Update state with fetched data
        setTeamsData(data || []);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchTeamsData();
    const intervalId = setInterval(fetchTeamsData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="board">
      <h1 className='leaderboard'>Leaderboard</h1>
      {/* Pass teamsData to the Profiles component */}
      <Profiles Leaderboard={teamsData}></Profiles>
    </div>
  );
}