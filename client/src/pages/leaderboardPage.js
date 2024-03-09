import Logo from '../components/logo/logo';
import Board from '../components/leaderboard/leaderboard';
import { Link } from 'react-router-dom';
import coin from '../images/coin.png';
 
const LeaderPage = () => {
    return (
        <div>
            <div className="questionPageNav">
                <Logo/>
                <div className="questionPageNavWrapper">
                    <div className="questionPageNavComp">Home</div>
                    <div className="questionPageNavComp">
                        <Link to="/leaderboard">Leaderboard</Link>
                    </div>
                    <div className="questionPageNavComp">
                    <Link to="/timer">Timer</Link>
                        </div> 
                    <div className="questionPageNavComp">Sign Out</div>
                    <div className="questionPageNavPoints">
                        10080
                        <img src={coin} alt="point img"/>
                    </div>
                    <div className="questionPageNavTeam">
                        <div id="teamTeam">Team</div>
                        <div id="teamName">Mavericks</div>
                    </div>
                </div>
            </div>
            <Board/>
        </div>
    );
};

export default LeaderPage;