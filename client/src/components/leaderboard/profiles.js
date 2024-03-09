import React from 'react';

export default function Profiles({ Leaderboard }) {
  return (
    <div id="profile">
      <div className="flex header">
        <div className="item">
          <h2>Team</h2>
        </div>
        <div className="item">
          <h2>Wave 1</h2>
        </div>
        <div className="item">
          <h2>Wave 2</h2>
        </div>
        <div className="item">
          <h2>Total</h2>
        </div>
      </div>
      {renderProfiles(Leaderboard)}
    </div>
  );
}

function renderProfiles(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <div className="info">
              <h3 className='name text-dark'>{value.team}</h3>
            </div>
          </div>
          <div className="item">
          <h3 className='name text-dark'>{value.wave1}</h3>
          </div>
          <div className="item">
          <h3 className='name text-dark'>{value.wave2}</h3>
          </div>
          <div className="item">
            <span>{value.total}</span>
          </div>
        </div>
      ))}
    </>
  );
}
