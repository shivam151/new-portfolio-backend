import cloudinary from "cloudinary";
import dotenv from "dotenv";
import ErrorHandler from "../../middleware/errorHandler.js";
import Education from "../../models/education.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addEducation = async (req, res, next) => {
  try {
    const {
      name,
      educationType,
      board,
      percentage,
      description,
      startDate,
      endDate,
    } = req.body;

    if (!name || !educationType) {
      return res.status(400).json({
        status: false,
        code: 400,
        message: "Name and EducationType are required fields",
      });
    }

    let imageUrl = "";
    if (req.file) {
      const uploadResponse = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { folder: "education" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        uploadStream.end(req.file.buffer);
      });
      imageUrl = uploadResponse;
    }

    const newEducation = await Education.create({
      name,
      educationType,
      board,
      image: imageUrl,
      percentage,
      description,
      startDate,
      endDate,
    });

    return res.status(201).json({
      status: true,
      code: 201,
      message: "Education record saved successfully",
      data: newEducation,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default addEducation;
