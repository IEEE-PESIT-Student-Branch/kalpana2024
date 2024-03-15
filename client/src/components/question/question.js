import React, { useState, useEffect } from 'react';
import './index.css';

const Question = ({ color, title, points, attempts, solved, index, questype, totalPoints, setTotalPoints, author, flagFormat }) => {
    const [expanded, setExpanded] = useState(false);
    const [chances, setChances] = useState(attempts);
    const [ifSolved, setIfSolved] = useState(0);
    const [msg, setMsg] = useState("");
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        const temp_value = parseInt(solved, 10);
        setIfSolved(temp_value);
    }, [solved]);

    let folderList;
    let fileName;

    const folderListEasy = [
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Feasy%2FFormula.png?alt=media&token=af657ae6-d09b-4bf3-b75c-5353c300a98b",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Feasy%2FMixMe.png?alt=media&token=a79c63aa-76bb-4ade-8873-f26796e6b34c",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Feasy%2FExcavate.zip?alt=media&token=72338c95-c728-4d7c-a558-eb57b30ed058",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Feasy%2FMr.Emoji.zip?alt=media&token=a7518f5e-3f58-4e87-86f3-ae533aaaa5dc",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Feasy%2FFish.zip?alt=media&token=fe733660-16ba-489e-9f3e-35f85cc1428d",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Feasy%2FPython.zip?alt=media&token=cd72e928-3fcd-42c8-907b-5fd3a9b49b08",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F4th%20wave%2Feasy%2FBow.zip?alt=media&token=e888ac0a-9c1e-448d-9612-681ecd81fefe",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F4th%20wave%2Feasy%2FGo%20comment.zip?alt=media&token=34eaa105-45b2-49e7-b79e-cc9a64161202",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F4th%20wave%2Feasy%2FTangled.zip?alt=media&token=1797dbcc-0d6c-4f9c-8eae-ca0e5a44ce6e",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Feasy%2FTHM-UPDATED.txt?alt=media&token=bb690b7d-0ed0-449b-9c2a-44f06afab2bd",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Feasy%2Fapt-1.png?alt=media&token=0b49477f-32c8-4f6c-a296-7f3f7868a450",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Feasy%2Fapt-2.png?alt=media&token=d012bc6e-b4a0-4f4a-8e82-22b61beed1af",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Feasy%2Fapt-3.png?alt=media&token=78011b24-4e15-49a6-909d-80bd0a51dd3d",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Feasy%2Fapt-4.png?alt=media&token=70e75c5f-82d5-4f80-a99d-b5cd51e9ebbb",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Feasy%2Fapt-5.png?alt=media&token=83ac02cc-6431-4a02-8558-ef8a1eb9ac5b",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Feasy%2Fapt-6.png?alt=media&token=583f3b1a-0e52-491e-bf03-5f628cdfad46",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Feasy%2Fapt-7.txt?alt=media&token=6b3e67f2-b87e-4431-8e98-506681db2941",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Feasy%2Fapt-8.png?alt=media&token=7103e1bb-3b75-4386-b8ab-59f1157034de",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F4th%20wave%2Feasy%2Fapt-9.png?alt=media&token=ab29fd9f-37fe-4b51-945c-89f3790885ff",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F4th%20wave%2Feasy%2Fapt-10.txt?alt=media&token=f8956e7e-e55c-423a-9f50-b51c106da62b",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Feasy%2Frule%20follower.zip?alt=media&token=870c5a5b-438a-46a6-8e30-fc78299ec5ad"
    ];

    const fileNameEasy = [
        "Formula.png",
        "MixMe.png",
        "Excavate.zip",
        "Mr.Emoji.zip",
        "Fish.zip",
        "Python.zip",
        "Bow.zip",
        "Go comment.zip",
        "Tangled.zip",
        "THM-UPDATED.txt",
        "apt-1.png",
        "apt-2.png",
        "apt-3.png",
        "apt-4.png",
        "apt-5.png",
        "apt-6.png",
        "apt-7.txt",
        "apt-8.png",
        "apt-9.png",
        "apt-10.txt",
        "rule follower.zip"
    ];

    const folderListMedium = [
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Fmedium%2Fselfie.jpg?alt=media&token=2deb1a23-f780-45ed-a587-906a319c1929",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Fmedium%2FHalves.zip?alt=media&token=d2785b1a-49e6-4b65-8829-9084bc0dac1d",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Fmedium%2FLil%20Secret.zip?alt=media&token=bae2e51b-8398-4531-a0ad-9b62eb35b12e",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Fmedium%2FPokemon.zip?alt=media&token=c1eb037b-940c-4bb8-968f-5842651df024",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Fmedium%2Fsource.puml?alt=media&token=bf27a951-c633-485b-9eb7-05587b8e46de",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Fmedium%2FHumanity.zip?alt=media&token=92410f42-f79d-4655-9170-d22e00ceaad1",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Fmedium%2FX.zip?alt=media&token=0c6995d3-86d9-43d0-876b-cf0e250d9c6c",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Fmedium%2Fwebsite1.txt?alt=media&token=1717821a-4f7f-476d-9879-5cd0781fb2a0",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F4th%20wave%2Fmedium%2FIllusionists.zip?alt=media&token=01a1797b-faac-4d2a-af6d-983a93dcfd02",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F4th%20wave%2Fmedium%2Funderscore.txt?alt=media&token=e312804d-bdd2-4e99-8e05-7a2b35ce9399"
    ];

    const fileNameMedium = [
        "selfie.jpg",
        "Halves.zip",
        "Lil Secret.zip",
        "Pokemon.zip",
        "source.puml",
        "Humanity.zip",
        "X.zip",
        "website1.txt",
        "Illusionists.zip",
        "underscore.txt"
    ];

    const folderListHard = [
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Fhard%2FCNC-machine.txt?alt=media&token=67f0a315-0e92-48d1-b49e-92fae131e250",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Fhard%2FMemes.zip?alt=media&token=4642fa01-4d6b-4afb-be46-49018bcc92ea",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Fhard%2FDungeonsDragons.zip?alt=media&token=3266b985-7161-4520-81dd-91d4138b6e9e",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Fhard%2FLegend%20of%20Zelda.zip?alt=media&token=6e3c8c1b-8802-4ee7-8994-c7aef6b6e8e5",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Fhard%2FMatryoshka_DOLL.zip?alt=media&token=4961123f-d4d6-408e-950c-efa6ccb9e039",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F4th%20wave%2Fhard%2FBATMAN.zip?alt=media&token=5abad63c-0ba1-441f-b800-beb34093ebb1",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Fhard%2FGENSHINIMPACTVIDEOGAMES.zip?alt=media&token=f5a3e506-69b6-4a48-bc20-d842f312cf10",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F4th%20wave%2Fhard%2FStartrek.zip?alt=media&token=d32e0d78-1312-4e2a-a292-b4b6aa52e130"
    ];

    const fileNameHard = [
        "CNC-machine.txt",
        "Memes.zip",
        "DungeonsDragons.zip",
        "Legend of Zelda.zip",
        "Matryoshka_DOLL.zip",
        "BATMAN.zip",
        "GENSHINIMPACTVIDEOGAMES.zip",
        "Startrek.zip"
    ];

    const handleDownload = () => {
        if(questype === "easy"){
            folderList = folderListEasy;
            fileName = fileNameEasy; 
        }
        if(questype === "medium"){
            folderList = folderListMedium;
            fileName = fileNameMedium;
        }
        if(questype === "hard"){
            folderList = folderListHard;
            fileName = fileNameHard;
        }

        const folderUrl = folderList[index];
        const downloadLink = document.createElement('a');
        downloadLink.href = folderUrl;
        
        downloadLink.download = `${fileName[index]}`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const toggleHeight = () => {
        setExpanded(!expanded);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const user_data = JSON.parse(localStorage.getItem('user'));
        const team_email = user_data.team_email;
        const mem_email = user_data.mem_email;
        if ((team_email === mem_email) && chances) {
            const user = JSON.parse(localStorage.getItem('user'));
            const team_name = user.team_name;
        
            const response = await fetch('/api/check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "team_name": team_name, "type": questype, "points": points, "answer": answer, "index": index })
            });
            const jsonmsg = await response.json();
            setMsg(jsonmsg);
            console.log(jsonmsg);
            if (!response.ok) {
                console.log("Submission failed");
            }
            if (response.ok) {
                console.log("Submission successful");
                setChances(chances-1);
                if (jsonmsg.msg === "correct answer") { // Update this line
                    setIfSolved(10);
                    const curr_points = parseInt(totalPoints,10);
                    const new_poinst = curr_points + jsonmsg.points;
                    const final_points = new_poinst.toString();
                    setTotalPoints(final_points);
                }
            }
        }
    };

    return (
        <div className={`questionCardContainer ${expanded ? 'expanded' : ''}`} style={{ backgroundColor: `${color}`, width: '100%' }}>
            <div className="questionCardWrapper">
                <div className="questionCardContent">
                    <h1 onClick={toggleHeight}>{title}</h1>
                </div>
                <div className="questionCardPoints" onClick={toggleHeight} style={{ color: `${ifSolved ? "yellow" : (chances ? "#e4e2ff" : "red")}`, borderColor: `${ifSolved ? "yellow" : (chances ? "#e4e2ff" : "red")}` }}>{ifSolved ? "Solved" : (chances ? `${points} points` : "No more attempts")}</div>
                <div className='questionCardInfo'>
                    <button className='button-54' style={{ color: `${color}` }} onClick={handleDownload}>Download</button>
                    <div>
                        <input
                            type="text"
                            placeholder='Enter the flag'
                            onChange={(e) => { setAnswer(e.target.value) }}
                            value={answer}
                        />
                        <div onClick={handleFormSubmit}>Go !</div>
                    </div>
                    <ul>
                        <li>{flagFormat}</li>
                        <li>Only {attempts} attempts possible</li>
                        <li>Author : {author}</li>
                        {msg && msg.msg ? <li style={{ color: 'red' }}>{msg.msg}</li> : <div></div>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Question;