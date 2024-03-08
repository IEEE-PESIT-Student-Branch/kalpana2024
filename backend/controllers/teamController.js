const { Team,validate } = require("../models/teamModel");

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
        return res.status(200).json({"team_name":_team_name,"team_email":_team_email,"mem_email":_mem_email});

    } catch (error) {
        console.error("Error logging in team:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    registerTeam,
    loginTeam
}