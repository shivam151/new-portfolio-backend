import mongoose from "mongoose"
import { db } from "../utils/db.js"
const CertificationModel = new mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    issuingOrganization: {
        type: String,
        default: ""
    },
    credentialId: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    body: {
        type: String,
        default: ""
    },
    issueDate: {
        type: String,
        default: ""
    },
    expiryDate: {
        type: String,
        default: ""
    }
}, {
    versionKey: false,
    timestamps: true
})
const Certification = db.model("Certification", CertificationModel)
export default Certification
