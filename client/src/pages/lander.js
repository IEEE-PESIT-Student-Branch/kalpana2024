import Logo from "../components/logo/logo";
import SignUp from "./signUp";
import Rules from "./rules";

import { useState } from "react";
import Home from "./home";

const Lander = () => {
    const [landerComp,setLanderComp] = useState(2);
    const landerCompList = [<Home/>,<SignUp/>,<Rules/>]
    return(
        <div>
            <div className='signUpNavContainer'>
                <Logo/>
                <div className='signUpNav'>
                    <div onClick={() => setLanderComp(0)}>Home</div>
                    <div onClick={() => setLanderComp(1)}>Login</div>
                    <div onClick={() => setLanderComp(2)}>Rules</div>
                </div>
            </div>
            <hr/>
            {landerCompList[landerComp]}
        </div>
    )
}

export default Lander;