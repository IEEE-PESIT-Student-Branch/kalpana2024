import React, { useState } from 'react';
import './index.css';

const Member = ({ memno }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [guardianPh, setGuardianPh] = useState('');
    const [guardianEmail, setGuardianEmail] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlephoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleemailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleguardianPhChange = (event) => {
        setGuardianPh(event.target.value);
    };

    const handleguardianEmailChange = (event) => {
        setGuardianEmail(event.target.value);
    };

    return (
        <div className="menberFormDet">
            <h1 className='memberHeading'>Member 1</h1>
            <hr className='memberHeaderLine'/>
            <div className='nameFields'>
                <div className={`input-field ${name ? 'active' : ''}`}>
                    <input 
                        type='text' 
                        name="" 
                        placeholder="" 
                        required=""
                        value={name}
                        onChange={handleNameChange}
                    />
                    <label>Full Name*</label>
                    <span></span>
                </div>
            </div>
            <div className='phoneEmailFields'>
                <div className={`input-field ${phoneNumber ? 'active' : ''}`}>
                    <input 
                        type='text' 
                        name="" 
                        placeholder="" 
                        required=""
                        value={phoneNumber}
                        onChange={handlephoneNumberChange}
                    />
                    <label>Phone Number*</label>
                    <span></span>
                </div>
                <div className={`input-field ${email ? 'active' : ''}`}>
                    <input 
                        type='text' 
                        name="" 
                        placeholder="" 
                        required=""
                        value={email}
                        onChange={handleemailChange}
                    />
                    <label>Email*</label>
                    <span></span>
                </div>
            </div>
            <div className='guardianFields'>
                <div className={`input-field ${guardianEmail ? 'active' : ''}`}>
                    <input 
                        type='text' 
                        name="" 
                        placeholder="" 
                        required=""
                        value={guardianEmail}
                        onChange={handleguardianEmailChange}
                    />
                    <label>Guardian's Phone Number*</label>
                    <span></span>
                </div>
                <div className={`input-field ${guardianPh ? 'active' : ''}`}>
                    <input 
                        type='text' 
                        name="" 
                        placeholder="" 
                        required=""
                        value={guardianPh}
                        onChange={handleguardianPhChange}
                    />
                    <label>Guardian's Email Address*</label>
                    <span></span>
                </div>
            </div>
            <div className='semBranch'>
                <div className='sem'>
                    <label>Semester</label>
                    <select name='semester' id='sem'>
                        <option>Sem 2</option>
                        <option>Sem 4</option>
                        <option>Sem 6</option>
                    </select>
                </div>
                <div className='branch'>
                    <label>Branch</label>
                    <select name='branch' id='branch'>
                        <option>CSE</option>
                        <option>ECE</option>
                        <option>MECH</option>
                    </select>
                </div>
            </div>
            <div className='gender'>
                <div className='gender'>
                    <label>Gender</label>
                    <select name='gender' id='gender'>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non - binary</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Member;
