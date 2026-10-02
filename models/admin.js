import mongoose from "mongoose"
import { db } from "../utils/db.js"
const AdminModel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true
})
const Admin = db.model("Admin", AdminModel)
export default Admin
