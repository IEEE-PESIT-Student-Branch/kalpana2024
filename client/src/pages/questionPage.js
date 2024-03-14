import { UseUserContext } from '../hooks/useUserContext';

import React, { useState, useEffect } from 'react';
import FirstWave from './firstWave';
import SecondWave from './secondWave';
import ThirdWave from './thirdWave';
import FourthWave from './fourthWave';


const QuestionPage = ({totalPoints,setTotalPoints}) => {
    const {user} = UseUserContext();

    const compStyle = {
      color:'whitesmoke',
      fontFamily:'SDRobot',
      fontSize:'7rem',
      justifyContent:'center',
      display:'flex',
      alignItems:'center',
      marginTop:'10rem'
    }

    const [currentComponent, setCurrentComponent] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    useEffect(() => {
        const targetFirstStart = new Date(currentTime);
        const month = 3//targetFirstStart.getMonth() + 1;
        const day = 15//targetFirstStart.getDate();
        targetFirstStart.setHours(11,13, 0, 0);
        const targetFirstEnd = new Date(currentTime);
        targetFirstEnd.setHours(11, 50, 0, 0);
    
        const targetSecondStart = new Date(currentTime);
        targetSecondStart.setHours(11, 16, 0, 0);
        const targetSecondEnd = new Date(currentTime);
        targetSecondEnd.setHours(11, 18, 0, 0);
    
        const targetThirdStart = new Date(currentTime);
        targetThirdStart.setHours(11, 19, 0, 0);
        const targetThirdEnd = new Date(currentTime);
        targetThirdEnd.setHours(11, 21, 0, 0);

        const targetFourthStart = new Date(currentTime);
        targetFourthStart.setHours(11, 22, 0, 0);
        const targetFourthEnd = new Date(currentTime);
        targetFourthEnd.setHours(11, 24, 0, 0);
        if (month === 3 && day === 15 && currentTime < targetFirstStart) {
            setCurrentComponent('Waiting')
        }
        else if (month === 3 && day === 15 && (currentTime >= targetFirstStart && currentTime < targetFirstEnd)) {
            setCurrentComponent('First');
        } else if (month === 3 && day === 15 && (currentTime >= targetFirstEnd && currentTime < targetSecondStart)) {
            setCurrentComponent('FreeTime');
        } else if (month === 3 && day === 15 && (currentTime >= targetSecondStart && currentTime < targetSecondEnd)) {
            setCurrentComponent('Second');
        } else if (month === 3 && day === 15 && (currentTime >= targetSecondEnd && currentTime < targetThirdStart)) {
            setCurrentComponent('FreeTime');
        } else if (month === 3 && day === 15 && (currentTime >= targetThirdStart && currentTime < targetThirdEnd)) {
            setCurrentComponent('Third');
        } else if (month === 3 && day === 15 && (currentTime >= targetThirdEnd && currentTime < targetFourthStart)) {
            setCurrentComponent('FreeTime');
        } else if (month === 3 && day === 15 && (currentTime >= targetFourthStart && currentTime < targetFourthEnd)) {
            setCurrentComponent('Fourth');
        } else if (month === 3 && day === 15 && (currentTime >= targetFourthEnd) ) {
            setCurrentComponent('Ended');
        }
        else {
            setCurrentComponent('NOT THE DAY');
        }
    }, [currentTime]);
  
    // Render the current component or "Waiting" or "Ended"
    const renderComponent = () => {
      switch (currentComponent) {
        case 'First':
          return <FirstWave user={user} totalPoints={totalPoints} setTotalPoints={setTotalPoints}/>;
        case 'Second':
          return <SecondWave user={user} totalPoints={totalPoints} setTotalPoints={setTotalPoints} />;
        case 'Third':
          return <ThirdWave user={user} totalPoints={totalPoints} setTotalPoints={setTotalPoints} />;
        case 'Fourth':
            return <FourthWave user={user} totalPoints={totalPoints} setTotalPoints={setTotalPoints} />;
        case 'FreeTime':
          return <div style={compStyle}>Break</div>;
        case 'Ended':
          return <div style={compStyle}>Ended</div>;
        case 'Waiting':
            return <div style={compStyle}>WILL BEGIN SHORTLY</div>;
        default:
          return <div style={compStyle}>NOT THE DAY BOI...</div>;
      }
    };
    return <div>{renderComponent()}</div>;
}

export default QuestionPage;