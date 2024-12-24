import cloudinary from "cloudinary";
import project from "../../models/project.js";
import dotenv from "dotenv";
import ErrorHandler from "../../middleware/errorHandler.js";
dotenv.config();


// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addProject = async (req, res, next) => {
    try {
      const {
        title,
        subtitle,
        description,
        keyPoints,
        link,
        gitHubLink,
        personalProject,
      } = req.body;
  
  
      // Validate required fields
      if (!title || !description) {
        return res.status(400).json({
          status: false,
          code: 400,
          message: "Title and Description are required fields",
        });
      }
  
      let imageUrls = [];
      if (req.files && req.files.length > 0) {
        for (const file of req.files) {
          const uploadResponse = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.v2.uploader.upload_stream(
              { folder: "projects" },
              (error, result) => {
                if (error) reject(error);
                else resolve(result.secure_url);
              }
            );
            uploadStream.end(file.buffer);
          });
          imageUrls.push(uploadResponse);
        }
      }
  
      // Create a new project
      const newProject = await project.create({
        title,
        subtitle,
        description,
        keyPoints,
        images: imageUrls, // Save the image URLs in the 'images' field
        link,
        gitHubLink,
        personalProject,
      });
  
      return res.status(201).json({
        status: true,
        code: 201,
        message: "Project saved successfully",
        data: newProject,
      });
    } catch (error) {
      console.error(error);
      return next(new ErrorHandler(error.message, 500));
    }
  };
  
export default addProject;
