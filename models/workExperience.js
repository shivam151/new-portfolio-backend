import mongoose from "mongoose"
import { db } from "../utils/db.js"
const workModel = new mongoose.Schema({
    companyName: {
        type: String,
        default: ""
    },
    jobType: {
        type: String,
        default: ""
    },
    position:{
        type: String,
        default: ""
    },
    companyImage:{
        type: String,
        default: ""
    },
    description:{
        type: String,
        default: ""
    },
    startDate:{
        type: String,
        default: ""
    },
    endDate:{
        type: String,
        default: ""
    }
}, {
    versionKey: false,
    timestamps: true
})
const workExperience = db.model("workExperience", workModel)
export default workExperience 
