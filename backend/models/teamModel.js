const mongoose = require('mongoose');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const Schema = mongoose.Schema

const teamSchema = new Schema({
    team_name: {
        type: String,
        required: true,
        unique: true
    },
    mem1_email: {
        type: String,
        required: true
    },
    mem2_email: {
        type: String,
        required: true
    },
    mem3_email: {
        type: String,
        required: true
    },
    mem4_email: {
        type: String,
        required: true
    }, 
    points: {
        type: String,
        default: "0"
    },
    easyques: {
        type: [String],
        default: ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
    },
    medques: {
        type: [String],
        default: ["0","0","0","0","0","0","0","0","0","0"]
    },
    hardques: {
        type: [String],
        default: ["0","0","0","0","0","0","0","0"]
    },
    easyAttempt: {
        type: [String],
        default: ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
    },
    medAttempt: {
        type: [String],
        default: ["0","0","0","0","0","0","0","0","0","0"]
    },
    hardAttempt: {
        type: [String],
        default: ["0","0","0","0","0","0","0","0"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
});

const validate = (team) => {
    console.log("validate team")
    const schema = joi.object({
        team_name: joi.string().min(3).max(20).required(),
        mem1_email: joi.string().email().required(),
        mem2_email: joi.string().email().required(),
        mem3_email: joi.string().email().required(),
        mem4_email: joi.string().email().required(),
        points: joi.string(),
        easyques: joi.array().items(joi.string()),
        medques: joi.array().items(joi.string()),
        hardques: joi.array().items(joi.string()),
    })
    return schema.validate(team);
};

const Team = mongoose.model('teamDetails',teamSchema);

module.exports = {Team,validate};