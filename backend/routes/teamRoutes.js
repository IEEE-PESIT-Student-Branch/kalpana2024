const express = require('express');

const {
    registerTeam,
    loginTeam
} =  require("../controllers/teamController")

const router = express.Router()

router.post("/register", registerTeam);

router.post("/login", loginTeam);

module.exports = router;