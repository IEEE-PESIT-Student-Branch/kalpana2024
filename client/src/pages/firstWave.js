import Question from '../components/question/question';

const FirstWave = ({user,totalPoints,setTotalPoints}) => {
    return(
        <div>
            <div className="questionPageEasy">
                <h1>Easy | First Wave</h1>
                <div>
                    <div className="easySec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Rule follower'} points={'50'} attempts={"3"} solved={user.easy_questions[20]} index={'20'} questype={'easy'} author={"Adithi H"} flagFormat={"Read the rules."}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'MixMe'} points={'50'} attempts={"3"} solved={user.easy_questions[1]} index={'1'} questype={'easy'} author={"Jawahar Balachandher"} flagFormat={"XYZ is in capitals. Flag format: Kalpana{XYZ} "}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'grey'} title={'Excavate'} points={'50'} attempts={"3"} solved={user.easy_questions[2]} index={'2'} questype={'easy'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Apt 1'} points={'30'} attempts={"1"} solved={user.easy_questions[10]} index={'10'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Apt 2'} points={'30'} attempts={"1"} solved={user.easy_questions[11]} index={'11'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                    </div>
                </div>
            </div>
            <div className="questionPageMedium">
                <h1>Medium</h1>
                <div>
                    <div className="mediumSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Selfie'} points={'100'} attempts={"3"}  solved={user.med_questions[0]} index={'0'} questype={'medium'} author={"Jawahar Balachandher"} flagFormat={"Refer to the file"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Halves'} points={'100'} attempts={"3"}  solved={user.med_questions[1]} index={'1'} questype={'medium'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                    </div>
                </div>
            </div>
            <div className="questionPageHard">
                <h1>Hard</h1>
                <div>
                    <div className="hardSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'CNC-machine'} points={'200'} attempts={"3"}  solved={user.hard_questions[0]} index={'0'} questype={'hard'} author={"Jawahar Balachandher"} flagFormat={"Can you see the text in this form {Name YEAR}Flag format: Kalpana{Name_YEAR}.Flags in caps mention in description as flag format: Kalpana{NAME_YYYY}"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Dungeons & Dragons'} points={'200'} attempts={"3"}  solved={user.hard_questions[2]} index={'2'} questype={'hard'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstWave;