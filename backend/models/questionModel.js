const mongoose = require('mongoose');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const Schema = mongoose.Schema

const questionSchema = new Schema({
    ques_name: {
        type: String,
        required: true,
    },
    ques_type: {
        type: String,
        required: true
    },
    ques_points: {
        type: String,
        required: true
    },
    ques_attempts: {
        type: String,
        required: true
    },
    ques_ulr: {
        type: String,
        required: true
    },
});

const validate = (ques) => {
    console.log("validate question");
    const schema = joi.object({
        ques_name: joi.string().min(1).max(20).required(),
        ques_type: joi.string().required(),
        ques_points: joi.string().required(),
        ques_attempts: joi.string().required(),
        ques_ulr: joi.string().required(),
    })
    return schema.validate(ques);
};

const Question = mongoose.model('questionDetails',questionSchema);

module.exports = {Question,validate};