import React from 'react'
import { Link } from 'react-router-dom'

import { UseLogin } from '../hooks/useLogin'
import { useState } from 'react'

import abs_bg from '../images/abs6.jpg';

import wie from '../images/wie.png';
import ieee_sight from '../images/ieee_sight.png';
import south_camp from '../images/south_camp.png';
import pes from '../images/pes.png';
import pesuecc from '../images/pesuecc.png';
import Logo from '../components/logo/logo';

const SignUp = () => {

    const [teamName,setTeamName] =  useState('')
    const [memEmail,setMemEmail] = useState('')
    const {login,isLoading,error} = UseLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit : "+teamName+"   "+memEmail);
        await login(teamName,memEmail);
    }

    const handleClick = () => {
        <Link to='/challenges'/>
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <div className='signUpLoginContainer' style={{backgroundImage:`url(${abs_bg})`}}>
                <div className='signUpLoginWrapper'>
                    <h1 style={{color:'black'}}>KALPANA LOGIN</h1>
                    <div>
                        <input
                            placeholder='Enter Team Name'
                            type='text'
                            onChange={(e) => {setTeamName(e.target.value)}}
                            value={teamName}
                        />
                    </div>
                    <div>
                        <input
                            type='email'
                            placeholder='Enter Member Email ID'
                            onChange={(e) => {setMemEmail(e.target.value)}}
                            value={memEmail}
                        />
                    </div>
                    <button className='button-54' style={{width:'13rem',margin:'0',padding:'0',marginBottom:'5rem',fontSize:'1rem',color:'rgb(38, 34, 34)'}} onClick={handleClick} disabled={isLoading}>Submit</button>
                    {error && <div className="error" style={{marginTop:'60px'}}>{error}</div>}
                </div>
            </div>
            <div className='sponserContainer'>
                <div style={{backgroundImage:`url(${pes})`}}>h</div>
                <div style={{backgroundImage:`url(${pesuecc})`}}>i</div>
                <div style={{backgroundImage:`url(${south_camp})`}}>i</div>
                <div style={{backgroundImage:`url(${ieee_sight})`}}>i</div>
                <div style={{backgroundImage:`url(${wie})`}}>i</div>
            </div>
        </form>
    )
}

export default SignUp;