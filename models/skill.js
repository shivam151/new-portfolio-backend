import mongoose from "mongoose"
import { db } from "../utils/db.js"
const skillModel = new mongoose.Schema({
    skillId: {
        type: String,
        default: ""
    },
    SkillName: {
        type: String,
        default: ""
    }
}, {
    versionKey: false,
    timestamps: true
})
const skill = db.model("skill", skillModel)
export default skill 
