const express = require('express');

const {
    registerTeam,
    loginTeam,
    checkAnswer,
    getPoints,
    getAllTeams,
    getQuestionsSolved,
    getAllTeamsSortedByPoints,
    addPoints
} =  require("../controllers/teamController")

const router = express.Router()

router.post("/register", registerTeam);

router.post("/login", loginTeam);

router.post("/check", checkAnswer);

router.post("/addpointsboi", addPoints);

router.post("/getPoints", getPoints);

router.post("/getQuestionsSolved", getQuestionsSolved);

router.get("/getTeamsForLeaderboard",getAllTeamsSortedByPoints);

router.get("/getAllTeams",getAllTeams)

module.exports = router;