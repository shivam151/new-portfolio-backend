import ErrorHandler from "../../middleware/errorHandler.js";
import Certification from "../../models/certification.js";

const getAllCertification = async (req, res, next) => {
  try {
    const certifications = await Certification.find().lean();
    // issueDate is stored as free-form text, so parse it and sort newest first
    const time = (c) => Date.parse(c.issueDate) || 0;
    certifications.sort((a, b) => time(b) - time(a));
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
