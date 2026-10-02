import mongoose from "mongoose"
import { db } from "../utils/db.js"
const EducationModel = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    educationType: {
        type: String,
        default: ""
    },
    board:{
        type: String,
        default: ""
    },
    image:{
        type: String,
        default: ""
    },
    percentage:{
        type: Number,
        default: 0
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
const Education = db.model("Education", EducationModel)
export default Education 
