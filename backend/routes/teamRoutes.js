const express = require('express');

const {
    registerTeam,
    loginTeam,
    checkAnswer
} =  require("../controllers/teamController")

const router = express.Router()

router.post("/register", registerTeam);

router.post("/login", loginTeam);

router.post("/check", checkAnswer);

module.exports = router;