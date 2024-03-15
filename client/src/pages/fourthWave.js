import Question from '../components/question/question';

const FourthWave = ({user,totalPoints,setTotalPoints}) => {
    return(
        <div>
            <div className="questionPageEasy">
                <h1>Easy | Fourth Wave</h1>
                <div>
                    <div className="easySec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Bow'} points={'50'} attempts={"3"} solved={user.easy_questions[6]} index={'6'} questype={'easy'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Go comment'} points={'50'} attempts={"3"} solved={user.easy_questions[7]} index={'7'} questype={'easy'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Tangled'} points={'50'} attempts={"3"} solved={user.easy_questions[8]} index={'8'} questype={'easy'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'yellowgreen'} title={'Can you THM.. ?'} points={'50'} attempts={"3"} solved={user.easy_questions[9]} index={'9'} questype={'easy'} author={"K R Druva"} flagFormat={"flag format:Kalpana{XYZ....}"}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Apt 9'} points={'30'} attempts={"1"} solved={user.easy_questions[18]} index={'18'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'red'} title={'Apt 10'} points={'30'} attempts={"1"} solved={user.easy_questions[19]} index={'19'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                    </div>
                </div>
            </div>
            <div className="questionPageMedium">
                <h1>Medium</h1>
                <div>
                    <div className="mediumSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Illusionists'} points={'100'} attempts={"3"}  solved={user.med_questions[8]} index={'8'} questype={'medium'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                    </div>
                    <div className="mediumSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Underscore'} points={'100'} attempts={"3"}  solved={user.med_questions[9]} index={'9'} questype={'medium'} author={"K R Druva"} flagFormat={"Refer to the file"}/>
                    </div>
                </div>
            </div>
            <div className="questionPageHard">
                <h1>Hard</h1>
                <div>
                    <div className="hardSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Genshin Impact'} points={'200'} attempts={"3"}  solved={user.hard_questions[6]} index={'6'} questype={'hard'} author={"K R Druva"} flagFormat={"XYZ..."}/>
                    </div>
                    <div className="hardSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Startrek'} points={'200'} attempts={"3"}  solved={user.hard_questions[7]} index={'7'} questype={'hard'} author={"K R Druva"} flagFormat={"Refer to the file"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthWave;