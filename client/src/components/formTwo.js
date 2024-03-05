import { useState } from "react";

import Logo from "./logo/logo";
import Member from "./member/member";

const FormTwo = () => {
    const [memberNo,setMemberNo] = useState(0)

    const [memeber1,setMember1] = useState('empty');
    const [memeber2,setMember2] = useState('empty');
    const [memeber3,setMember3] = useState('empty');
    const [memeber4,setMember4] = useState('empty');

    const memberList = [
        <div className="formTwoNotSelected">Member not selected</div>,
        <Member key={1} setMemberNo={setMemberNo} setMember={setMember1}/>,
        <Member key={2} setMemberNo={setMemberNo} setMember={setMember2}/>,
        <Member key={3} setMemberNo={setMemberNo} setMember={setMember3}/>,
        <Member key={4} setMemberNo={setMemberNo} setMember={setMember4}/>
    ]

    return(
        <div>
            <Logo />
            <div className="formTwoMemberWrapper">
                <div className="formTwoMemberContainer">
                    <div className="formTwoMemberBox">
                        Member 1<br/>
                        {memeber1}
                    </div>
                    <div className="formTwoMemberBox">
                        Member 2<br/>
                        {memeber2}
                    </div>
                    <div className="formTwoMemberBox">
                        Member 3<br/>
                        {memeber3}
                    </div>
                    <div className="formTwoMemberBox">
                        Member 4<br/>
                        {memeber4}
                    </div>
                </div>
            </div>
            <Member memno={1}/>
            <div className="FormTwoSubmit">Submit</div>
        </div>
    )
}

export default FormTwo;