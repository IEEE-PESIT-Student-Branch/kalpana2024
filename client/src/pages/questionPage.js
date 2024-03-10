import Logo from '../components/logo/logo';
import Question from '../components/question/question';
import coin from '../images/coin.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { UseLogout } from '../hooks/useLogout';
import { UseUserContext } from '../hooks/useUserContext';


const QuestionPage = () => {
    const { logout } =  UseLogout();
    const handleLogout = async (e) => {
        await logout();
        <Link to='/login'/>
    }
    const {user} = UseUserContext();

    const [totalPoints,setTotalPoints] = useState(user.points);
    return(
        <div>
            <div className="questionPageNav">
                <Logo/>
                <div className="questionPageNavWrapper">
                    <div className="questionPageNavComp">
                        <Link to="/challenges">Challenges</Link>
                    </div>
                    <div className="questionPageNavComp">
                        <Link to="/leaderboard">Leaderboard</Link>
                    </div>
                    <div className="questionPageNavComp">
                        <Link to="/timer">Timer</Link>
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
            <div className="questionPageEasy">
                <h1>Easy</h1>
                <div>
                    <div className="easySec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Bombs Landed'} points={'80'} attempts={"3"} solved={user.easy_questions[0]} index={'0'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"} solved={user.easy_questions[1]} index={'1'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"} solved={user.easy_questions[2]} index={'2'} questype={'easy'}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"} solved={user.easy_questions[3]} index={'3'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'DSYM'} points={'80'} attempts={"3"} solved={user.easy_questions[4]} index={'4'} questype={'easy'}/>
                    </div>
                </div>
            </div>
            <div className="questionPageMedium">
                <h1>Medium</h1>
                <div>
                    <div className="mediumSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Bombs Landed'} points={'80'} attempts={"3"}  solved={user.med_questions[0]} index={'0'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"}  solved={user.med_questions[1]} index={'1'} questype={'medium'}/>
                    </div>
                    <div className="mediumSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}  solved={user.med_questions[2]} index={'2'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"}  solved={user.med_questions[3]} index={'3'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'DSYM'} points={'80'} attempts={"3"}  solved={user.med_questions[4]} index={'4'} questype={'medium'}/>
                    </div>
                    <div className="mediumSec3"> 
                        <Question color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}/>
                    </div>
                </div>
            </div>
            <div className="questionPageHard">
                <h1>Hard</h1>
                <div>
                    <div className="hardSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Bombs Landed'} points={'80'} attempts={"3"}  solved={user.hard_questions[0]} index={'0'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"}  solved={user.hard_questions[1]} index={'1'} questype={'hard'}/>
                    </div>
                    <div className="hardSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}  solved={user.hard_questions[2]} index={'2'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"}  solved={user.hard_questions[3]} index={'3'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'DSYM'} points={'80'} attempts={"3"}  solved={user.hard_questions[4]} index={'4'} questype={'hard'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionPage;