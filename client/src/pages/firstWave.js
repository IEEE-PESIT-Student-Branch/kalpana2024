import Question from '../components/question/question';

const FirstWave = ({user,totalPoints,setTotalPoints}) => {
    return(
        <div>
            <div className="questionPageEasy">
                <h1>Easy | First Wave</h1>
                <div>
                    <div className="easySec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Formula'} points={'10'} attempts={"3"} solved={user.easy_questions[0]} index={'0'} questype={'easy'} author={"Jawahar Balachandher"} flagFormat={"Flag format: Kalpana{XYZ}"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'MixMe'} points={'10'} attempts={"3"} solved={user.easy_questions[1]} index={'1'} questype={'easy'} author={"Jawahar Balachandher"}/>
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
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Selfie'} points={'80'} attempts={"3"}  solved={user.med_questions[0]} index={'0'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Source'} points={'80'} attempts={"3"}  solved={user.med_questions[1]} index={'1'} questype={'medium'}/>
                    </div>
                    <div className="mediumSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find The Secret Flag'} points={'80'} attempts={"3"}  solved={user.med_questions[2]} index={'2'} questype={'medium'}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Impossible Password'} points={'80'} attempts={"3"}  solved={user.med_questions[3]} index={'3'} questype={'medium'}/>
                    </div>
                </div>
            </div>
            <div className="questionPageHard">
                <h1>Hard</h1>
                <div>
                    <div className="hardSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'CNC-machine'} points={'80'} attempts={"3"}  solved={user.hard_questions[0]} index={'0'} questype={'hard'} author={"Jawahar Balachandher"} flagFormat={"Can you see the text in this form {Name YEAR}Flag format: Kalpana{Name_YEAR}"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstWave;