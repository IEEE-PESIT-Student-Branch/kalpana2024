const { Team,validate } = require("../models/teamModel");
const { easy_ans, med_ans, hard_ans } = require('../answers');
const { string } = require("joi");

const registerTeam = async (req,res) => {
    const {error} = validate(req.body);
    if (error) {
        return res.status(400).send({error: error.details[0].message});
    }
    const team_check = await Team.findOne({team_name: req.body.team_name,mem1_email: req.body.mem1_email});
    
    if (team_check) {
        return res.status(403).send({error: "Team with given team name already exists!"});
    }
    if (!(req.body.mem1_email != req.body.mem2_email && req.body.mem1_email != req.body.mem3_email && req.body.mem1_email != req.body.mem4_email)) {
        return res.status(403).send({error: "Each team mwmber should have a different email id"});
    }
    let newTeam = await new Team({
        ...req.body,
    }).save();
    const team_name = newTeam.team_name;
    const team_mem1 = newTeam.mem1_email;
    const team_mem2 = newTeam.mem2_email;
    const team_mem3 = newTeam.mem3_email;
    const team_mem4 = newTeam.mem4_email;
    res.status(200).send({"team":team_name,"team members":{team_mem1,team_mem2,team_mem3,team_mem4}});
}

const loginTeam = async (req, res) => {
    try {
        const { team_name, mem_email } = req.body;

        const team = await Team.findOne({ team_name:team_name});

        if (!team) {
            return res.status(404).json({ error: "Team not found or member email does not match." });
        }

        if ((team.mem1_email!=mem_email) && (team.mem2_email!=mem_email) && (team.mem3_email!=mem_email) && (team.mem4_email!=mem_email)) {
            return res.status(404).json({ error: "Team not found or member email does not match." });
        }
        const _team_name = team.team_name;
        const _team_email = team.mem1_email;
        const _mem_email = mem_email;
        const _team_points = team.points;
        const _easy_ques = team.easyques;
        const _med_ques = team.medques; 
        const _hard_ques = team.hardques;
        const _easy_attempts = team.easyAttempt;
        const _med_attempts = team.medAttempt; 
        const _hard_attempts = team.hardAttempt;
        return res.status(200).json({"team_name":_team_name,"team_email":_team_email,"mem_email":_mem_email,"points":_team_points,"easy_questions":_easy_ques,"med_questions":_med_ques,"hard_questions":_hard_ques,"easy_attempts":_easy_attempts,"med_attempts":_med_attempts,"hard_attempts":_hard_attempts});

    } catch (error) {
        console.error("Error logging in team:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const checkAnswer = async (req,res) => {
    // team_name:Byte Me type:easy points:80 answer:diamond index:3
    const team = await Team.findOne({team_name: req.body.team_name});
    if(!team) {
        return res.status(403).send({"msg":"Your are not logged in"});
    }
    const points = parseInt(req.body.points, 10);
    const ans = req.body.answer;
    const type = req.body.type;
    const index = parseInt(req.body.index, 10);
    console.log(team);
    console.log(points,typeof(points));
    console.log(ans,typeof(ans));
    console.log(type,typeof(type));
    console.log(index,typeof(index));
    if (type=='easy') {
        console.log("easy");
        const _attempts = team.easyAttempt[index];
        const attempts = parseInt(_attempts,10);
        console.log(attempts,typeof(attempts));
        if (attempts < 3) {
            let msg = "wrong answer";
            let return_points = 0;
            console.log()
            const actual_ans = easy_ans[index];
            console.log("actual "+actual_ans);
            if(actual_ans == ans){
                if(team.easyques[index] == '0'){
                    let old_points = parseInt(team.points,10);
                    let new_points = old_points+points;
                    new_points = new_points.toString();
                    team.points = new_points;
                    return_points = points;
                }
                team.easyques[index] = points.toString();
                msg = "correct answer";
            }
            const new_attempt = attempts+1;
            team.easyAttempt[index] = new_attempt.toString();
            await team.save();
            return res.status(200).send({"msg":msg,"points":return_points});
        }
        else {
            return res.status(200).send({"msg":"No more attempts allowed"});
        }
    }
    else if (type=='medium') {
        const _attempts = team.medAttempt[index];
        const attempts = parseInt(_attempts,10);
        if (attempts < 3) {
            let msg = "wrong answer";
            let return_points = 0;
            console.log()
            const actual_ans = med_ans[index];
            console.log("actual "+actual_ans);
            if(actual_ans == ans){
                console.log("hi");
                if(team.medques[index] == '0'){
                    console.log("hello");
                    let old_points = parseInt(team.points,10);
                    let new_points = old_points+points;
                    new_points = new_points.toString();
                    team.points = new_points;
                    return_points = points;
                }
                team.medques[index] = points.toString();
                msg = "correct answer";
            }
            const new_attempt = attempts+1;
            team.medAttempt[index] = new_attempt.toString();
            await team.save();
            return res.status(200).send({"msg":msg,"points":return_points});
        }
        else {
            return res.status(200).send({"msg":"No more attempts allowed"});
        }
    }
    else if (type=='hard') {
        const _attempts = team.hardAttempt[index];
        const attempts = parseInt(_attempts,10);
        if (attempts < 3) {
            let msg = "wrong answer";
            let return_points = 0;
            const actual_ans = hard_ans[index];
            console.log("actual "+actual_ans);
            if(actual_ans == ans){
                if(team.hardques[index] == '0'){
                    let old_points = parseInt(team.points,10);
                    let new_points = old_points+points;
                    new_points = new_points.toString();
                    team.points = new_points;
                    return_points = points;
                }
                team.hardques[index] = points.toString();
                msg = "correct answer";
            }
            const new_attempt = attempts+1;
            team.hardAttempt[index] = new_attempt.toString();
            await team.save();
            return res.status(200).send({"msg":msg,"points":return_points});
        }
        else {
            return res.status(200).send({"msg":"No more attempts allowed"});
        }
    }

    else {
        return res.status(403).send({"msg":"Internal server error"})
    }
}

const getPoints = async (req,res) => {
    const team = await Team.findOne({team_name: req.body.team_name});
    if(!team) {
        return res.status(403).send({"msg":"Your are not logged in"});
    }
    return res.status(200).send({"team_points":team.points});
}

const getQuestionsSolved = async (req, res) => {
    const team = await Team.findOne({ team_name: req.body.team_name });
  
    if (!team) {
      return res.status(403).send({ "msg": "You are not logged in" });
    }
  
    const countEasy = team.easyques.filter(element => element !== 0).length;
    const countMedium = team.mediumques.filter(element => element !== 0).length;
    const countHard = team.hardques.filter(element => element !== 0).length;
  
    const questionsSolved = {
      easy: countEasy,
      medium: countMedium,
      hard: countHard,
    };
  
    return res.status(200).json(questionsSolved);
  };
  

const getAllTeamsSortedByPoints = async (req, res) => {
    try {
        // Fetch all teams
        let teams = await Team.find();

        // Convert points from strings to numbers
        teams = teams.map(team => {
            return {
                ...team.toObject(),
                points: parseInt(team.points, 10)
            };
        });

        // Sort teams by points in descending order
        teams.sort((a, b) => b.points - a.points);

        // Return the sorted teams
        res.status(200).json({ teams });
    } catch (error) {
        console.error("Error fetching teams:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const getAllTeams = async(req,res) =>{
    try {
        const teams = await Team.find();
        res.json(teams);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const addPoints = async (req,res) => {
    let points_to_add = parseInt(req.body.points,10);
    const team = await Team.findOne({team_name: req.body.team_name});
    if(!team) {
        return res.status(403).send({"msg":"No team found"});
    }
    if(req.body.passphrase === "BUNSAMOSA"){
        let old_points = parseInt(team.points,10);
        let new_points = points_to_add+old_points;
        team.points = new_points.toString();
        await team.save();
        return res.status(200).send({"updated_team":team});
    }
    else {
        return res.status(403).send({"msg":"You are not authorized"});
    }
}

module.exports = {
    registerTeam,
    loginTeam,
    checkAnswer,
    getPoints,
    getAllTeams,
    getQuestionsSolved,
    getAllTeamsSortedByPoints,
    addPoints
}