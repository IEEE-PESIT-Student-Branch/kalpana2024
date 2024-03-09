import React, { useState } from 'react';
import './index.css';

const Question = ({ color, title, points, attempts }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleHeight = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`questionCardContainer ${expanded ? 'expanded' : ''}`} style={{ backgroundColor: `${color}`, width: '100%' }}>
            <div className="questionCardWrapper">
                <div className="questionCardContent">
                    <h1 onClick={toggleHeight}>{title}</h1>
                </div>
                <div className="questionCardPoints"  onClick={toggleHeight}>{points} points</div>
                <div className='questionCardInfo'>
                    <button className='button-54' style={{color:`${color}`}}>Download</button>
                    <div>
                        <input type="text" placeholder='Enter the flag'/>
                        <div>Go !</div>
                    </div>
                    <ul>
                        <li>Flag format: Kalpana_CTF{' { flag }'}</li>
                        <li>Only {attempts} attempts left</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Question;