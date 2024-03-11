import React, { useState, useEffect } from 'react';
import './index.css';

const Question = ({ color, title, points, attempts, solved, index, questype, totalPoints, setTotalPoints }) => {
    const [expanded, setExpanded] = useState(false);
    const [chances, setChances] = useState(attempts);
    const [ifSolved, setIfSolved] = useState(0);
    const [msg, setMsg] = useState("");
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        const temp_value = parseInt(solved, 10);
        setIfSolved(temp_value);
    }, [solved]);

    const folderList = [
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2FPoppins.zip?alt=media&token=6459c608-01ea-4ef6-878e-62c70a5b161c",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2Fcosmic-vibrant-font.zip?alt=media&token=cb7ec6de-0bc7-4307-8db4-859cb8dd1074",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2Fedge-of-the-galaxy-font.zip?alt=media&token=b6a8206a-87a3-46f7-96cb-a57d4b4f7db8",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2Fspeedy-font.zip?alt=media&token=fe66d513-79f7-4709-b57a-b6b09fca12f8",
        "https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2FtestBoi.zip?alt=media&token=eea88efa-66d9-4410-b45f-ab65670fc422"
    ];

    const fileName = [
        "Poppins.zip",
        "cosmic-vibrant-font.zip",
        "edge-of-the-galaxy-font.zip",
        "speedy-font.zip",
        "testBoi.zip"
    ];

    const handleDownload = () => {
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
                        <li>Flag format: Kalpana_CTF{' { flag }'}</li>
                        <li>Only {attempts} attempts possible</li>
                        {msg && msg.msg ? <li style={{ color: 'red' }}>{msg.msg}</li> : <div></div>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Question;