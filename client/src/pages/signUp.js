import { useState } from 'react'

import FormOne from '../components/formOne';
import FormTwo from '../components/formTwo';

const SignUp = () => {
    const [formSection,setFormSection] = useState(0);

    const [teamName,setTeamName] = useState('');
    const [domain,setDomain] = useState('');
    const [problem,setProblem] = useState('');
    const [solution,setSolution] = useState('');

    // const [mem1Name,setMem1Name] = setState('');
    // const [mem1Gender,setMem1Gender] = setState('');
    // const [mem1Pes,setMem1Pes] = setState('');
    // const [mem1OtherUni,setMem1OtherUni] = setState('');
    // const [mem1Sem,setMem1Sem] = setState('');
    // const [mem1Branch,setMem1Branch] = setState('');
    // const [mem1Phone,setMem1Phone] = setState('');
    // const [mem1Github,setMem1Github] = setState('');
    // const [mem1GaurdName,setMem1GaurdName] = setState('');
    // const [mem1GaurdPh,setMem1GaurdPh] = setState('');

    // const [mem2Name,setMem2Name] = setState('');
    // const [mem2Gender,setMem2Gender] = setState('');
    // const [mem2Pes,setMem2Pes] = setState('');
    // const [mem2OtherUni,setMem2OtherUni] = setState('');
    // const [mem2Sem,setMem2Sem] = setState('');
    // const [mem2Branch,setMem2Branch] = setState('');
    // const [mem2Phone,setMem2Phone] = setState('');
    // const [mem2Github,setMem2Github] = setState('');
    // const [mem2GaurdName,setMem2GaurdName] = setState('');
    // const [mem2GaurdPh,setMem2GaurdPh] = setState('');

    // const [mem3Name,setMem3Name] = setState('');
    // const [mem3Gender,setMem3Gender] = setState('');
    // const [mem3Pes,setMem3Pes] = setState('');
    // const [mem3OtherUni,setMem3OtherUni] = setState('');
    // const [mem3Sem,setMem3Sem] = setState('');
    // const [mem3Branch,setMem3Branch] = setState('');
    // const [mem3Phone,setMem3Phone] = setState('');
    // const [mem3Github,setMem3Github] = setState('');
    // const [mem3GaurdName,setMem3GaurdName] = setState('');
    // const [mem3GaurdPh,setMem3GaurdPh] = setState('');

    // const [mem4Name,setMem4Name] = setState('');
    // const [mem4Gender,setMem4Gender] = setState('');
    // const [mem4Pes,setMem4Pes] = setState('');
    // const [mem4OtherUni,setMem4OtherUni] = setState('');
    // const [mem4Sem,setMem4Sem] = setState('');
    // const [mem4Branch,setMem4Branch] = setState('');
    // const [mem4Phone,setMem4Phone] = setState('');
    // const [mem4Github,setMem4Github] = setState('');
    // const [mem4GaurdName,setMem4GaurdName] = setState('');
    // const [mem4GaurdPh,setMem4GaurdPh] = setState('');

    const formList = [
        <FormOne
            formSection={formSection}
            setFormSection={setFormSection}
            teamName={teamName}
            setTeamName={setTeamName}
            domain={domain}
            setDomain={setDomain}
            problem={problem}
            setProblem={setProblem}
            solution={solution}
            setSolution={setSolution}
        />,
        <FormTwo
        />
    ]

    return (
        <div>
        {formList[formSection]}
        </div>
    )
}

export default SignUp;