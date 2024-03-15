import Question from '../components/question/question';

const ThirdWave = ({user,totalPoints,setTotalPoints}) => {

    return(
        <div>
            <div className="questionPageEasy">
                <h1>Easy | Third Wave</h1>
                <div>
                    <div className="easySec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Python'} points={'50'} attempts={"3"} solved={user.easy_questions[5]} index={'5'} questype={'easy'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Apt 6'} points={'30'} attempts={"1"} solved={user.easy_questions[15]} index={'15'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Apt 7'} points={'30'} attempts={"1"} solved={user.easy_questions[16]} index={'16'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                    </div>
                    <div className="easySec2">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'Apt 8'} points={'30'} attempts={"1"} solved={user.easy_questions[17]} index={'17'} questype={'easy'} author={"Musharraf"} flagFormat={"Refer to the file"}/>
                    </div>
                </div>
            </div>
            <div className="questionPageMedium">
                <h1>Medium</h1>
                <div>
                    <div className="mediumSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'orange'} title={'Humanity'} points={'100'} attempts={"3"}  solved={user.med_questions[5]} index={'5'} questype={'medium'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'X'} points={'100'} attempts={"3"}  solved={user.med_questions[6]} index={'6'} questype={'medium'} author={"Adithi H"} flagFormat={"Flag format: Kalpana2024{XYZ}"}/>
                    </div>
                    <div className="mediumSec2"> 
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'darkslategray'} title={'Find me 4'} points={'100'} attempts={"3"}  solved={user.med_questions[7]} index={'7'} questype={'medium'} author={"K R Druva"} flagFormat={"Flag format:flag1_flag2_flag3_flag4"}/>
                    </div>
                </div>
            </div>
            <div className="questionPageHard">
                <h1>Hard</h1>
                <div>
                    <div className="hardSec1">
                        <Question totalPoints={totalPoints} setTotalPoints={setTotalPoints} color={'green'} title={'BATMAN'} points={'200'} attempts={"3"}  solved={user.hard_questions[5]} index={'5'} questype={'hard'} author={"K R Druva"} flagFormat={"Refer to the flag"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdWave;