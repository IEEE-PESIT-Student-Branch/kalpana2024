import { UseUserContext } from '../hooks/useUserContext';

import React, { useState, useEffect } from 'react';
import FirstWave from './firstWave';
import SecondWave from './secondWave';
import ThirdWave from './thirdWave';
import FreeTime from './free';


const QuestionPage = ({totalPoints,setTotalPoints}) => {
    const {user} = UseUserContext();


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
      targetFirstStart.setHours(9,51, 0, 0);
      const targetFirstEnd = new Date(currentTime);
      targetFirstEnd.setHours(9, 52, 0, 0);
  
      const targetSecondStart = new Date(currentTime);
      targetSecondStart.setHours(9, 53, 0, 0);
      const targetSecondEnd = new Date(currentTime);
      targetSecondEnd.setHours(9, 54, 0, 0);
  
      const targetThirdStart = new Date(currentTime);
      targetThirdStart.setHours(9, 55, 0, 0);
      const targetThirdEnd = new Date(currentTime);
      targetThirdEnd.setHours(9, 56, 0, 0);
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
      } else if (month === 3 && day === 15 && (currentTime >= targetThirdEnd) ) {
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
        case 'FreeTime':
          return <FreeTime />;
        case 'Ended':
          return <div>Ended</div>;
        case 'Waiting':
            return <div>Waiting....</div>;
        default:
          return <div>NOT THE DAY BOI...</div>;
      }
    };
    return <div>{renderComponent()}</div>;
}

export default QuestionPage;