require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connection = require('./db');
const cors = require('cors');
const { Team } = require("./models/teamModel");
const teamRoutes = require("./routes/teamRoutes");

// Call the connection function to establish the MongoDB connection
connection();

app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
});
app.use(cors());

// Define your API endpoint to get all teams
app.get('/api/teams', async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use('/api',teamRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Connected and listening on Port ", PORT);
});