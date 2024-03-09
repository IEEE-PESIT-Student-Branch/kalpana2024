import React, { useState } from 'react';
import './index.css';

const Question = ({ color, title, points }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleHeight = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`questionCardContainer ${expanded ? 'expanded' : ''}`} style={{ backgroundColor: `${color}`, width: '100%' }} onClick={toggleHeight}>
            <div className="questionCardWrapper">
                <div className="questionCardContent">
                    <h1>{title}</h1>
                </div>
                <div className="questionCardPoints">{points} points</div>
                <div>
                    <button class="button-54">Button 54</button>
                </div>
            </div>
        </div>
    );
};

export default Question;