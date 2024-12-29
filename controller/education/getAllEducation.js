import ErrorHandler from "../../middleware/errorHandler.js";
import Education from "../../models/education.js";

const getAllEducation = async (req, res, next) => {
  try {
    const newEducation = await Education.find();
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

export default getAllEducation;
