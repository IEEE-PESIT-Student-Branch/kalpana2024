import Question from '../components/question/question';

const SecondWave = ({user,totalPoints,setTotalPoints}) => {
    return(
        <div>
            <div className="questionPageEasy">
                <h1>Easy | Second Wave</h1>
                <div>
                    <div className="easySec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Mr.Emoji'} points={'50'} attempts={"3"} solved={user.easy_questions[3]} index={'3'} questype={'easy'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Apt 3'} points={'30'} attempts={"1"} solved={user.easy_questions[12]} index={'12'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Fish'} points={'50'} attempts={"3"} solved={user.easy_questions[4]} index={'4'} questype={'easy'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Apt 4'} points={'30'} attempts={"1"} solved={user.easy_questions[13]} index={'13'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'brown'} title={'Apt 5'} points={'30'} attempts={"1"} solved={user.easy_questions[14]} index={'14'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                    </div>
                </div>
            </div>
            <div className="questionPageMedium">
                <h1>Medium</h1>
                <div>
                    <div className="mediumSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Lil Secret'} points={'100'} attempts={"3"}  solved={user.med_questions[2]} index={'2'} questype={'medium'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Pokemon'} points={'100'} attempts={"3"}  solved={user.med_questions[3]} index={'3'} questype={'medium'} author={"K R Druva"} flagFormat={"Flag format:flag1"}/>
                    </div>
                    <div className="mediumSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Dont Cheat'} points={'100'} attempts={"3"}  solved={user.med_questions[4]} index={'4'} questype={'medium'} author={"Jawahar Balachandher"} flagFormat={"Refer to the file"}/>
                    </div>
                </div>
            </div>
            <div className="questionPageHard">
                <h1>Hard</h1>
                <div>
                    <div className="hardSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Memes'} points={'200'} attempts={"3"}  solved={user.hard_questions[1]} index={'1'} questype={'hard'} author={"Jawahar Balachandher"} flagFormat={"Refer to the file"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'MATRYOSHKA_DOLL'} points={'200'} attempts={"3"}  solved={user.hard_questions[4]} index={'4'} questype={'hard'} author={"K R Druva"} flagFormat={"Flag format:KEYWORD1_KEYWORD2"}/>
                    </div>
                    <div className="hardSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Legend of Zelda'} points={'200'} attempts={"3"}  solved={user.hard_questions[3]} index={'3'} questype={'hard'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondWave;