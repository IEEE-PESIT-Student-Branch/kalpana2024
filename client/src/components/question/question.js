import './index.css';

const Question = ({color,title,points}) => {
    return(
        <div className="questionCardContainer" style={{backgroundColor:`${color}`,width:`100%`}}>
            <div className="questionCardWrapper">
                <div className="questionCardContent">
                    <h1>{title}</h1>
                </div>
                <div className="questionCardPoints">{points} points</div>
            </div>
        </div>
    )
}

export default Question;