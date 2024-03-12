import Question from '../components/question/question';

const FourthWave = ({user,totalPoints,setTotalPoints}) => {
    return(
        <div>
            <div className="questionPageEasy">
                <h1>Easy | Fourth Wave</h1>
                <div>
                    <div className="easySec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Bombs Landed'} points={'80'} attempts={"3"} solved={user.easy_questions[15]} index={'15'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"} solved={user.easy_questions[16]} index={'16'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"} solved={user.easy_questions[17]} index={'17'} questype={'easy'}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"} solved={user.easy_questions[18]} index={'18'} questype={'easy'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'DSYM'} points={'80'} attempts={"3"} solved={user.easy_questions[19]} index={'19'} questype={'easy'}/>
                    </div>
                </div>
            </div>
            <div className="questionPageMedium">
                <h1>Medium</h1>
                <div>
                    <div className="mediumSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Bombs Landed'} points={'80'} attempts={"3"}  solved={user.med_questions[15]} index={'15'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"}  solved={user.med_questions[16]} index={'16'} questype={'medium'}/>
                    </div>
                    <div className="mediumSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}  solved={user.med_questions[17]} index={'17'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"}  solved={user.med_questions[18]} index={'18'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'DSYM'} points={'80'} attempts={"3"}  solved={user.med_questions[19]} index={'19'} questype={'medium'}/>
                    </div>
                </div>
            </div>
            <div className="questionPageHard">
                <h1>Hard</h1>
                <div>
                    <div className="hardSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Bombs Landed'} points={'80'} attempts={"3"}  solved={user.hard_questions[15]} index={'15'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Find The Easy Pass'} points={'80'} attempts={"3"}  solved={user.hard_questions[16]} index={'16'} questype={'hard'}/>
                    </div>
                    <div className="hardSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}  solved={user.hard_questions[17]} index={'17'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"}  solved={user.hard_questions[18]} index={'18'} questype={'hard'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'DSYM'} points={'80'} attempts={"3"}  solved={user.hard_questions[19]} index={'19'} questype={'hard'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthWave;