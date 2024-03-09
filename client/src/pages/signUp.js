import Logo from'../components/logo/logo';
import abs_bg from '../images/abs6.jpg';

import wie from '../images/wie.png';
import ieee_sight from '../images/ieee_sight.png';
import south_camp from '../images/south_camp.png';
import pes from '../images/pes.png';
import pesuecc from '../images/pesuecc.png';

const SignUp = () => {

    return (
        <div>
            <div className='signUpNavContainer'>
                <Logo/>
                <div className='signUpNav'>
                    <div>Home</div>
                    <div>Login</div>
                    <div>About us</div>
                </div>
            </div>
            <hr/>
            <div className='signUpLoginContainer' style={{backgroundImage:`url(${abs_bg})`}}>
                <div className='signUpLoginWrapper'>
                    <h1>KALPANA LOGIN</h1>
                    <div>
                        <input placeholder='Enter Team Name'/>
                    </div>
                    <div>
                        <input placeholder='Enter Member Email ID'/>
                    </div>
                    <button className='button-54' style={{width:'13rem',margin:'0',padding:'0',marginBottom:'5rem',fontSize:'1rem',color:'rgb(38, 34, 34)'}}>Submit</button>
                </div>
            </div>
            <div className='sponserContainer'>
                <div style={{backgroundImage:`url(${pes})`}}>h</div>
                <div style={{backgroundImage:`url(${pesuecc})`}}>i</div>
                <div style={{backgroundImage:`url(${south_camp})`}}>i</div>
                <div style={{backgroundImage:`url(${ieee_sight})`}}>i</div>
                <div style={{backgroundImage:`url(${wie})`}}>i</div>
            </div>
        </div>
    )
}

export default SignUp;