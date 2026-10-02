import cloudinary from "cloudinary";
import dotenv from "dotenv";
import ErrorHandler from "../../middleware/errorHandler.js";
import Certification from "../../models/certification.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addCertification = async (req, res, next) => {
  try {
    const {
      title,
      issuingOrganization,
      credentialId,
      link,
      body,
      issueDate,
      expiryDate,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        status: false,
        code: 400,
        message: "Title is a required field",
      });
    }

    let imageUrl = "";
    if (req.file) {
      imageUrl = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { folder: "certification" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        uploadStream.end(req.file.buffer);
      });
    }

    const newCertification = await Certification.create({
      title,
      issuingOrganization,
      credentialId,
      link,
      image: imageUrl,
      body,
      issueDate,
      expiryDate,
    });

    return res.status(201).json({
      status: true,
      code: 201,
      message: "Certification saved successfully",
      data: newCertification,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default addCertification;
