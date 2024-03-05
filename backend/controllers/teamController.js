const { Team,validate } = require("../models/teamModel");

const registerTeam = async (req,res) => {
    const {error} = validate(req.body);
    if (error) {
        return res.status(400).send({error: error.details[0].message});
    }
    const team_check = await Team.findOne({team_name: req.body.team_name,team_email:req.body.team_email});
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
    const team_mem1 = newTeam.mem1_name;
    const team_mem2 = newTeam.mem2_name;
    const team_mem3 = newTeam.mem3_name;
    const team_mem4 = newTeam.mem4_name;
    res.status(200).send({"team":team_name,"team members":{team_mem1,team_mem2,team_mem3,team_mem4}});
}

module.exports = {
    registerTeam
}