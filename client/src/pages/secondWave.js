import Question from '../components/question/question';

const SecondWave = ({user,totalPoints,setTotalPoints}) => {
    return(
        <div>
            <div className="questionPageEasy">
                <h1>Easy | Second Wave</h1>
                <div>
                    <div className="easySec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Bombs Landed'} points={'80'} attempts={"3"} solved={user.easy_questions[5]} index={'5'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"} solved={user.easy_questions[6]} index={'6'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"} solved={user.easy_questions[7]} index={'7'} questype={'easy'}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"} solved={user.easy_questions[8]} index={'8'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'DSYM'} points={'80'} attempts={"3"} solved={user.easy_questions[9]} index={'9'} questype={'easy'}/>
                    </div>
                </div>
            </div>
            <div className="questionPageMedium">
                <h1>Medium</h1>
                <div>
                    <div className="mediumSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Bombs Landed'} points={'80'} attempts={"3"}  solved={user.med_questions[5]} index={'5'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"}  solved={user.med_questions[6]} index={'6'} questype={'medium'}/>
                    </div>
                    <div className="mediumSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}  solved={user.med_questions[7]} index={'7'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"}  solved={user.med_questions[8]} index={'8'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'DSYM'} points={'80'} attempts={"3"}  solved={user.med_questions[9]} index={'9'} questype={'medium'}/>
                    </div>
                </div>
            </div>
            <div className="questionPageHard">
                <h1>Hard</h1>
                <div>
                    <div className="hardSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Bombs Landed'} points={'80'} attempts={"3"}  solved={user.hard_questions[5]} index={'5'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"}  solved={user.hard_questions[6]} index={'6'} questype={'hard'}/>
                    </div>
                    <div className="hardSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}  solved={user.hard_questions[7]} index={'7'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"}  solved={user.hard_questions[8]} index={'8'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'DSYM'} points={'80'} attempts={"3"}  solved={user.hard_questions[9]} index={'9'} questype={'hard'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondWave;