import ErrorHandler from "../../middleware/errorHandler.js";
import Certification from "../../models/certification.js";

const getAllCertification = async (req, res, next) => {
  try {
    const certifications = await Certification.find();
    return res.status(200).json({
      status: true,
      code: 200,
      message: "Certifications fetched successfully",
      data: certifications,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default getAllCertification;
