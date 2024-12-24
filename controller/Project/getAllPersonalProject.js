import ErrorHandler from "../../middleware/errorHandler.js";
import project from "../../models/project.js";

const getAllPersonalProject = async (req, res, next) => {
  try {
    let pipeline=[
        {
            $match:{
                personalProject:true
            }
        },
        {
            $project:{
                _id:0,
                title:1,
                subtitle:1,
                description:1,
                keyPoints:1,
                images:1,
                link:1,
                gitHubLink:1
            }
        }
    ]
    const AllPersonalProject= await project.aggregate(pipeline);


    return res.status(201).json({
      status: true,
      code: 201,
      message: "get All Personal successfully",
      data: AllPersonalProject,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default getAllPersonalProject;
