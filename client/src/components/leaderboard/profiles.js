import React from 'react';

export default function Profiles({ Leaderboard }) {
  return (
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
      {renderProfiles(Leaderboard)}
    </div>
  );
}

function renderProfiles(teamsData) {
  teamsData.sort((a, b) => b.points - a.points);
  return (
    <>
      {teamsData.map((team, index) => (
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
      ))}
    </>
  );
}
