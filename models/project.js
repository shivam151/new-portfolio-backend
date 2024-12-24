import mongoose from "mongoose"
import { db } from "../utils/db.js"
const projectModel = new mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    subtitle: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    keyPoints:[{
        type: String,
        default: ""
    }],
    images: [{
        type: String,
        default: ""
    }],
    link: {
        type: String,
        default: ""
    },
    gitHubLink: {
        type: String,
        default: ""
    },
    personalProject:{
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
})
const project = db.model("project", projectModel)
export default project 
