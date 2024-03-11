import QuestionPage from "./questionPage";
import Timer from "../components/timer/timer";
import Board from "../components/leaderboard/leaderboard";

import Logo from '../components/logo/logo';
import coin from '../images/coin.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { UseLogout } from '../hooks/useLogout';
import { UseUserContext } from '../hooks/useUserContext';

const MainPage = () => {
    const { logout } =  UseLogout();
    const handleLogout = async (e) => {
        await logout();
        <Link to='/login'/>
    }
    const {user} = UseUserContext();

    const [totalPoints,setTotalPoints] = useState(user.points);
    const [compIndex,setCompIndex] = useState(0);

    const compList = [<QuestionPage totalPoints={totalPoints} setTotalPoints={setTotalPoints} user={user}/>,<Board/>,<Timer/>]
    return(
        <div>
            <div className="questionPageNav">
                <Logo/>
                <div className="questionPageNavWrapper">
                    <div className="questionPageNavComp">
                        <div to="/challenges" onClick={() => setCompIndex(0)}>Challenges</div>
                    </div>
                    <div className="questionPageNavComp">
                        <div to="/leaderboard" onClick={() => setCompIndex(1)}>Leaderboard</div>
                    </div>
                    <div className="questionPageNavComp">
                        <div to="/timer" onClick={() => setCompIndex(2)}>Timer</div>
                    </div>    
                    <div className="questionPageNavComp" onClick={() => handleLogout()}>Sign Out</div>
                    <div className="questionPageNavPoints">
                        {totalPoints}
                        <img src={coin} alt="point img"/>
                    </div>
                    <div className="questionPageNavTeam">
                        <div id="teamTeam">Team</div>
                        <div id="teamName">{user.team_name}</div>
                    </div>
                </div>
            </div>
            <hr/>
            {compList[compIndex]}
        </div>
    )
}

export default MainPage;