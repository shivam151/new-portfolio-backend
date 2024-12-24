import ErrorHandler from "../../middleware/errorHandler.js";
import skill from "../../models/skill.js";

const getAllSkill = async (req, res, next) => {
  try {
    let pipeline=[
        {
            $project:{
                _id:0,
                SkillName:1
            }
        }
    ]
    const AllSkillDetail= await skill.aggregate(pipeline);

    const finalresult = AllSkillDetail.map((item) => item?.SkillName);

    return res.status(201).json({
      status: true,
      code: 201,
      message: "skill Detail saved successfully",
      data: finalresult,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default getAllSkill;
