const express = require('express');

const {
    registerTeam
} =  require("../controllers/teamController")

const router = express.Router()

router.post("/register", registerTeam);

module.exports = router;