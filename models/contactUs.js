import mongoose from "mongoose"
import { db } from "../utils/db.js"
const contact = new mongoose.Schema({
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    PhoneNumber: {
        type: String,
        default: ""
    },
    message: {
        type: String,
        default: ""
    },
}, {
    versionKey: false,
    timestamps: true
})
const contactUs = db.model("contact", contact)
export default contactUs 
