import { Link } from "react-router-dom";
import Logo from "../components/logo/logo";

const Rules = () => {
    return(
        <div>
            <div className='signUpNavContainer'>
                <Logo/>
                <div className='signUpNav'>
                    <div>
                        <Link to="/home">Home</Link>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    <div>
                        <Link to="/rules">Rules</Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="rulesContainer">
                <h1 className="rulesHeading">Rules and Regulations</h1>
                <div className="ruleswrapper">
                    <ul>
                        <li>In adherence to competition regulations, participants are encouraged to utilize laptops during the CTF event.</li>
                        <li>Participants should not carry out any attacks on the CTF infrastructure.</li>
                        <li>No DoS, DDoS, automated scans, or generating any large amount of traffic by any other means on any challenges and other contest infrastructure. It is not permitted and is never intended in any challenge.</li>
                        <li>Sharing the flags, or providing overly-revealing hints with anyone through any medium during the period of the Contest shall be considered as cheating.</li>
                        <li>The format of the flag is Kalpana{"{flag}"} unless stated otherwise!</li>
                        <li>Teams need to submit the coding question to jawahar.balachandher@gmail.com</li>
                        <li>The decision of organizers will be final. In case of any dispute, the decision of the Organizers will be final and binding</li>
                        <li>By participating in the contest, you agree that you have read the above rules and fully agree to adhere to them. Any </li>
                        <li>If found to be cheating, the Participant shall be disqualified from the Contest, with immediate effect.</li>
                        <li>Answers, solutions, write ups or overly-revealing hints to any challenges should not be publicly posted or otherwise shared with anyone until the Contest is over.</li>
                        <li>Accepting direct assistance, receiving a flag or solution to a challenge from anyone is considered cheating, and is strictly prohibited during the Contest.</li>
                        <li>While using tools, references and snippets publicly available on the Internet is allowed, a participant shall not ask people, forums etc. on the internet for help for solving a challenge.</li>
                    </ul>
                </div>
            </div>
            <div className="ieeeContainer">
                <h1 className="ieeeHeading" >IEEE Code of Ethics</h1>
                <div className="ieeewrapper">
                    <ol>
                        <div>To uphold the highest standards of integrity, responsible behavior, and ethical conduct in professional activities.</div>
                        <li> to hold paramount, the safety, health, and welfare of the public, to strive to comply with ethical design and sustainable development practices, to protect the privacy of others, and to disclose promptly factors that might endanger the public or the environment;</li>
                        <li> to improve the understanding by individuals and society of the capabilities and societal implications of conventional and emerging technologies, including intelligent systems;</li>
                        <li> to avoid real or perceived conflicts of interest whenever possible, and to disclose them to affected parties when they do exist;</li>
                        <li> to avoid unlawful conduct in professional activities, and to reject bribery in all its forms;</li>
                        <li> to seek, accept, and offer honest criticism of technical work, to acknowledge and correct errors, to be honest, and realistic in stating claims or estimates based on available data, and to credit properly the contributions of others;</li>
                        <li> to maintain and improve our technical competence and to undertake technological tasks for others only if qualified by training or experience, or after full disclosure of pertinent limitations;</li>
                        <div>To treat all persons fairly and with respect, to avoid harassment or discrimination, and to avoid injuring others.</div>
                        <li> to treat all persons fairly and with respect, and to not engage in discrimination based on characteristics such as race, religion, gender, disability, age, national origin, sexual orientation, gender identity, or gender expression;</li>
                        <li> to not engage in harassment of any kind, including sexual harassment or bullying behavior;</li>
                        <li> to avoid injuring others, their property, reputation, or employment by false or malicious actions, rumors, or any other verbal or physical abuses;</li>
                        <div>To strive to ensure this code is upheld by colleagues and co-workers.</div>
                        <li> to support colleagues and co-workers in following this code of ethics, to strive to ensure the code is upheld, and to not retaliate against individuals reporting a violation.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Rules;