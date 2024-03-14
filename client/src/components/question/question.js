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
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Feasy%2FMixMe.png?alt=media&token=a79c63aa-76bb-4ade-8873-f26796e6b34c"
    ];

    const fileNameEasy = [
        "Formula.png",
        "MixMe.png"
    ];

    const folderListMedium = [
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F1st%20wave%2Fmedium%2Fselfie.jpg?alt=media&token=15ecf9d7-7676-45ea-a3f3-17c8576e6c38",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Fmedium%2Fsource.puml?alt=media&token=bf27a951-c633-485b-9eb7-05587b8e46de"
    ];

    const fileNameMedium = [
        "selfie.jpg",
        "source.puml"
    ];

    const folderListHard = [
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F2nd%20wave%2Fhard%2FCNC-machine.txt?alt=media&token=67f0a315-0e92-48d1-b49e-92fae131e250",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2F3rd%20wave%2Fhard%2FMemes.zip?alt=media&token=09e31e1d-fec4-416c-9e88-f793b7ef91b6"
    ];

    const fileNameHard = [
        "CNC-machine.txt",
        "Memes.zip" //
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
        if (chances) {
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