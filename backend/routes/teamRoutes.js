const express = require('express');

const {
    registerTeam,
    loginTeam,
    checkAnswer,
    getPoints
} =  require("../controllers/teamController")

const router = express.Router()

router.post("/register", registerTeam);

router.post("/login", loginTeam);

router.post("/check", checkAnswer);

router.post("/getPoints", getPoints);

module.exports = router;