import First from './firstWave';
import Second from './secondWave';
import Third from './thirdWave';
//import FreeTime from './free';

import React, { useState, useEffect } from 'react';

const MainPage = () => {
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
      targetFirstStart.setHours(22, 54, 0, 0);
      const targetFirstEnd = new Date(currentTime);
      targetFirstEnd.setHours(22, 56, 0, 0);
  
      const targetSecondStart = new Date(currentTime);
      targetSecondStart.setHours(22, 57, 0, 0);
      const targetSecondEnd = new Date(currentTime);
      targetSecondEnd.setHours(22, 59, 0, 0);
  
      const targetThirdStart = new Date(currentTime);
      targetThirdStart.setHours(23, 1, 0, 0);
      const targetThirdEnd = new Date(currentTime);
      targetThirdEnd.setHours(23, 3, 0, 0);
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
          return <First />;
        case 'Second':
          return <Second />;
        case 'Third':
          return <Third />;
        case 'FreeTime':
          return <div>Break...</div>;
        case 'Ended':
          return <div>Ended</div>;
        case 'Waiting':
            return <div>Waiting....</div>;
        default:
          return <div>NOT THE DAY BOI...</div>;
      }
    };
  
    return <div>{renderComponent()}</div>;
  };
  
  export default MainPage;