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
    team_email: {
        type: String,
        required: true,
        unique: true
    },
    domain: {
        type: String,
        required: true
    },
    soluion: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mem1_name: {
        type: String,
        required: true
    },
    mem1_email: {
        type: String,
        required: true,
        unique: true
    },
    mem1_gender: {
        type: String,
        required: true
    },
    mem1_pes: {
        type: String,
        required: true
    },
    mem1_other_uni: {
        type: String,
        default: ""
    },
    mem1_sem: {
        type: String,
        required: true
    },
    mem1_branch: {
        type: String,
        required: true
    },
    mem1_phone: {
        type: String,
        required: true
    },
    mem1_github: {
        type: String,
        required: true
    },
    mem1_guardian_name: {
        type: String,
        required: true
    },
    mem1_guardian_phone: {
        type: String,
        required: true
    },
    mem2_name: {
        type: String,
        required: true
    },
    mem2_email: {
        type: String,
        required: true,
        unique: true
    },
    mem2_gender: {
        type: String,
        required: true
    },
    mem2_pes: {
        type: String,
        required: true
    },
    mem2_other_uni: {
        type: String,
        default: ""
    },
    mem2_sem: {
        type: String,
        required: true
    },
    mem2_branch: {
        type: String,
        required: true
    },
    mem2_phone: {
        type: String,
        required: true
    },
    mem2_github: {
        type: String,
        required: true
    },
    mem2_guardian_name: {
        type: String,
        required: true
    },
    mem2_guardian_phone: {
        type: String,
        required: true
    },
    mem3_name: {
        type: String,
        required: true        
    },
    mem3_email: {
        type: String,
        required: true,
        unique: true
    },
    mem3_gender: {
        type: String,
        required: true
    },
    mem3_pes: {
        type: String,
        required: true
    },
    mem3_other_uni: {
        type: String,
        default: ""
    },
    mem3_sem: {
        type: String,
        required: true
    },
    mem3_branch: {
        type: String,
        required: true
    },
    mem3_phone: {
        type: String,
        required: true
    },
    mem3_github: {
        type: String,
        required: true
    },
    mem3_guardian_name: {
        type: String,
        required: true
    },
    mem3_guardian_phone: {
        type: String,
        required: true
    },
    mem4_name: {
        type: String,
        required: true
    },
    mem4_email: {
        type: String,
        required: true,
        unique: true
    },
    mem4_gender: {
        type: String,
        required: true
    },
    mem4_pes: {
        type: String,
        required: true
    },
    mem4_other_uni: {
        type: String,
        default: ""
    },
    mem4_sem: {
        type: String,
        required: true
    },
    mem4_branch: {
        type: String,
        required: true
    },
    mem4_phone: {
        type: String,
        required: true
    },
    mem4_github: {
        type: String,
        required: true
    },
    mem4_guardian_name: {
        type: String,
        required: true
    },
    mem4_guardian_phone: {
        type: String,
        required: true
    },  
});

const validate = (team) => {
    console.log("validate team")
    const schema = joi.object({
        team_name: joi.string().min(3).max(20).required(),
        team_email: joi.string().email().required(),
        domain: joi.string().valid("dom 1","dom 2","dom 3").required(),
        soluion: joi.string().min(10).max(150).required(),
        password: passwordComplexity().required(),

        mem1_name: joi.string().min(3).max(20).required(),
        mem1_email: joi.string().email().required(),
        mem1_gender: joi.string().valid("Male","Female","Non-binary").required(),
        mem1_pes:  joi.string().valid("Yes","No").required(),
        mem1_other_uni: joi.string().min(0).max(25),
        mem1_sem: joi.string().valid("1","2","3","4","5","6","7","8").required(),
        mem1_branch: joi.string().valid("CSE","ECE","MECH").required(),
        mem1_phone: joi.number().integer().min(4000000000).max(10000000000).required(),
        mem1_github: joi.string().required(),
        mem1_guardian_name: joi.string().min(3).max(20).required(),
        mem1_guardian_phone: joi.number().integer().min(4000000000).max(10000000000).required(),
        
        mem2_name: joi.string().min(3).max(20).required(),
        mem2_email: joi.string().email().required(),
        mem2_gender: joi.string().valid("Male","Female","Non-binary").required(),
        mem2_pes:  joi.string().valid("Yes","No").required(),
        mem2_other_uni: joi.string().min(0).max(25),
        mem2_sem: joi.string().valid("1","2","3","4","5","6","7","8").required(),
        mem2_branch: joi.string().valid("CSE","ECE","MECH").required(),
        mem2_phone: joi.number().integer().min(4000000000).max(10000000000).required(),
        mem2_github: joi.string().required(),
        mem2_guardian_name: joi.string().min(3).max(20).required(),
        mem2_guardian_phone: joi.number().integer().min(4000000000).max(10000000000).required(),

        mem3_name: joi.string().min(3).max(20).required(),
        mem3_email: joi.string().email().required(),
        mem3_gender: joi.string().valid("Male","Female","Non-binary").required(),
        mem3_pes:  joi.string().valid("Yes","No").required(),
        mem3_other_uni: joi.string().min(0).max(25),
        mem3_sem: joi.string().valid("1","2","3","4","5","6","7","8").required(),
        mem3_branch: joi.string().valid("CSE","ECE","MECH").required(),
        mem3_phone: joi.number().integer().min(4000000000).max(10000000000).required(),
        mem3_github: joi.string().required(),
        mem3_guardian_name: joi.string().min(3).max(20).required(),
        mem3_guardian_phone: joi.number().integer().min(4000000000).max(10000000000).required(),

        mem4_name: joi.string().min(3).max(20).required(),
        mem4_email: joi.string().email().required(),
        mem4_gender: joi.string().valid("Male","Female","Non-binary").required(),
        mem4_pes:  joi.string().valid("Yes","No").required(),
        mem4_other_uni: joi.string().min(0).max(25),
        mem4_sem: joi.string().valid("1","2","3","4","5","6","7","8").required(),
        mem4_branch: joi.string().valid("CSE","ECE","MECH").required(),
        mem4_phone: joi.number().integer().min(4000000000).max(10000000000).required(),
        mem4_github: joi.string().required(),
        mem4_guardian_name: joi.string().min(3).max(20).required(),
        mem4_guardian_phone: joi.number().integer().min(4000000000).max(10000000000).required(),
    })
    return schema.validate(team);
};

const Team = mongoose.model('team',teamSchema);

module.exports = {Team,validate};