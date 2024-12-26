import ErrorHandler from "../../middleware/errorHandler.js";
import workExperience from "../../models/workExperience.js";

const getAllWorkExperience = async (req, res, next) => {
  try {
    let pipeline = [
      {
        $project: {
          _id: 0,
          companyName: 1,
          jobType: 1,
          position: 1,
          description: 1,
          startDate: 1,
          endDate: 1,
          companyImage: 1,
        },
      },
    ];
    const allWorkExperiences = await workExperience.aggregate(pipeline);
    return res.status(200).json({
      status: true,
      code: 200,
      message: "All work experiences fetched successfully",
      data: allWorkExperiences,
    });
    
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default getAllWorkExperience;
