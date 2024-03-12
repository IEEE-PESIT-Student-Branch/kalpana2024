import Question from '../components/question/question';

const ThirdWave = ({user,totalPoints,setTotalPoints}) => {

    return(
        <div>
            <div className="questionPageEasy">
                <h1>Easy | Third Wave</h1>
                <div>
                    <div className="easySec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Bombs Landed'} points={'80'} attempts={"3"} solved={user.easy_questions[10]} index={'10'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"} solved={user.easy_questions[11]} index={'11'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"} solved={user.easy_questions[12]} index={'12'} questype={'easy'}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"} solved={user.easy_questions[13]} index={'13'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'DSYM'} points={'80'} attempts={"3"} solved={user.easy_questions[14]} index={'14'} questype={'easy'}/>
                    </div>
                </div>
            </div>
            <div className="questionPageMedium">
                <h1>Medium</h1>
                <div>
                    <div className="mediumSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Bombs Landed'} points={'80'} attempts={"3"}  solved={user.med_questions[10]} index={'10'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"}  solved={user.med_questions[11]} index={'11'} questype={'medium'}/>
                    </div>
                    <div className="mediumSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}  solved={user.med_questions[12]} index={'12'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"}  solved={user.med_questions[13]} index={'13'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'DSYM'} points={'80'} attempts={"3"}  solved={user.med_questions[14]} index={'14'} questype={'medium'}/>
                    </div>
                </div>
            </div>
            <div className="questionPageHard">
                <h1>Hard</h1>
                <div>
                    <div className="hardSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Bombs Landed'} points={'80'} attempts={"3"}  solved={user.hard_questions[10]} index={'10'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"}  solved={user.hard_questions[11]} index={'11'} questype={'hard'}/>
                    </div>
                    <div className="hardSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}  solved={user.hard_questions[12]} index={'12'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"}  solved={user.hard_questions[13]} index={'13'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'DSYM'} points={'80'} attempts={"3"}  solved={user.hard_questions[14]} index={'14'} questype={'hard'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdWave;