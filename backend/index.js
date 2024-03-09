require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const teamRoutes = require('./routes/teamRoutes');

mongoose.connect('mongodb://localhost:27017/test1', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());
app.use('/api', teamRoutes);

// Define a route to handle the leaderboard request
app.get('/api/leaderboard', async (req, res) => {
  try {
    console.log('Received request for leaderboard data');

    // Log the collection name
    console.log('Collection Name:', mongoose.connection.db.collection('test').collectionName);

    // Fetch leaderboard data directly without the Mongoose model/schema
    const leaderboardData = await mongoose.connection.db.collection('test').find({}, { _id: 0, email: 0}).project({ team: 1, total: 1, wave1: 1, wave2: 1 }).sort({ total: -1 }).toArray();

    console.log('Fetched leaderboard data:', leaderboardData);
    res.json(leaderboardData);
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
