import Logo from '../components/logo/logo';
import Question from '../components/question/question';
import coin from '../images/coin.png';

const QuestionPage = () => {
    return(
        <div>
            <div className="questionPageNav">
                <Logo/>
                <div className="questionPageNavWrapper">
                    <div className="questionPageNavComp">Home</div>
                    <div className="questionPageNavComp">Leaderboard</div>
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
            <hr/>
            <div className="questionPageEasy">
                <h1>Easy</h1>
                <div>
                    <div className="easySec1">
                        <Question color={'red'} title={'Bombs Landed'} points={'80'}/>
                        <Question color={'green'} title={'Find The Easy Pass'} points={'80'}/>
                        <Question color={'grey'} title={'Impossible Password'} points={'80'}/>
                    </div>
                    <div className="easySec2">
                        <Question color={'darkslategray'} title={'Find The Secret Flag'} points={'80'}/>
                        <Question color={'orange'} title={'DSYM'} points={'80'}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default QuestionPage;