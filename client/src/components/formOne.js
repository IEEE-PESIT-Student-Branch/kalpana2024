import Logo from '../components/logo/logo';
import leftPanelImg from '../images/Astro.jpg';
import planet from '../images/planet.png'
import rocket from '../images/rocket.png';
import leftArrow from '../images/left_arrow.png';
import rightArrow from '../images/right_arrow.png';

const FormOne = ({formSection,setFormSection,teamName,setTeamName,domain,setDomain,problem,setProblem,solution,setSolution}) => {
    const leftStyle = {
        backgroundImage: `url('${leftPanelImg}')`,
    }

    return (
        <div>
            <Logo />
            <div className="signuncontainer">
                <div className="signupheader">KALPANA REGISTRATION</div>
                <div className='signuppanel'>
                    <div className="signupleft" style={leftStyle}>
                        <div className="leftPanelText">
                            To infinity and beyond
                        </div>
                    </div>
                    <div className="signupright">
                        <div className="signupinput">
                            <label>Team Name</label><br/>
                            <input type="text"/>
                            <img src={planet} className="inputTagPics1" alt="planet"/>
                        </div> 
                        <div className="signupinput">
                            <label>Domain</label><br/>
                            <input type="text"/>
                        </div> 
                        <div className="signupinput">
                            <label>Problem</label><br/>
                            <input type="text"/>
                        </div> 
                        <div className="signupinput" id="solutionInput">
                            <label>Solution</label><br/>
                            <textarea></textarea>
                            <img src={rocket} className="inputTagPics2" alt="rocket"/>
                        </div>
                        <div className="nextPrevButton">
                            <div>
                                <img src={leftArrow} alt="previous" onClick={() => {setFormSection(formSection-1)}}/>
                            </div>
                            <div>
                                <img src={rightArrow} alt="next" onClick={() => {setFormSection(formSection+1)}}/>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default FormOne;