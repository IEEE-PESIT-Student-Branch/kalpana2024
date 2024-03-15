import React, { useState, useEffect } from 'react';
import './index.css';

const Board = () => {
  const [teamData,setTeamData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch('/api/getTeamsForLeaderboard', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            console.log("Unable to load teams");
            return;
        }

        const data = await response.json();
        setTeamData(data);
        console.log("Loaded team data");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    };

    fetchData();
  }, []);
  return(
    <div className="board">
      <h1 className='leaderboard'>Leaderboard</h1>
      <div id="profile">
      <div className="flex header">
        <div className="item">
          <h2>Team</h2>
        </div>
        <div className="item">
          <h2>Easy</h2>
        </div>
        <div className="item">
          <h2>Medium</h2>
        </div>
        <div className="item">
          <h2>Hard</h2>
        </div>
        <div className="item">
          <h2>Points</h2>
        </div>
      </div>
      {teamData ? teamData.teams.map((team,index) => (
        <div className="flex" key={index}>
        <div className="item">
          <div className="info">
            <h3 className='name text-dark'>{team.team_name}</h3> {/* Assuming team name is stored in 'name' property */}
          </div>
        </div>
        <div className="item">
          {/* Display number of easy questions */}
          <h3 className='name text-dark'>{team.easyques.filter(value => parseInt(value, 10) > 0).length}</h3>
        </div>
        <div className="item">
          {/* Display number of medium questions */}
          <h3 className='name text-dark'>{team.medques.filter(value => parseInt(value, 10) > 0).length}</h3>
        </div>
        <div className="item">
          {/* Display number of hard questions */}
          <h3 className='name text-dark'>{team.hardques.filter(value => parseInt(value, 10) > 0).length}</h3>
        </div>

        <div className="item">
        <h3 className='name text-dark'>{team.points}</h3> {/* Assuming team name is stored in 'name' property */}
        </div>
      </div>
      )) : (
        <p style={{color:'white'}}>Loading....</p>
      )}
    </div>
    </div>
  )
}

export default Board;