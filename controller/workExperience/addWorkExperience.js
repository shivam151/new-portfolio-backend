import cloudinary from "cloudinary";
import dotenv from "dotenv";
import ErrorHandler from "../../middleware/errorHandler.js";
import workExperience from "../../models/workExperience.js";

dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addWorkExperience = async (req, res, next) => {
  try {
    const {
      companyName,
      jobType,
      position,
      description,
      startDate,
      endDate,
    } = req.body;

    if (!companyName || !position ) {
      return res.status(400).json({
        status: false,
        code: 400,
        message: "CompanyName And  Position are required fields",
      });
    }

    let imageUrl = "";
    if (req.file) {
      const uploadResponse = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { folder: "workExperience" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        uploadStream.end(req.file.buffer);
      });
      imageUrl = uploadResponse;
    }

    const newWorkExperience = await workExperience.create({
      companyName,
      jobType,
      position,
      description,
      startDate,
      endDate,
      companyImage: imageUrl, 
    });

    return res.status(201).json({
      status: true,
      code: 201,
      message: "Work experience saved successfully",
      data: newWorkExperience,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default addWorkExperience;
