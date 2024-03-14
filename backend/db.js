const mongoose = require('mongoose');

const connection = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(process.env.MONGODB_URI,connectionParams);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Not Connected to Database",error);
    }
}
module.exports = connection;