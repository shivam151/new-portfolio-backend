import ErrorHandler from "../../middleware/errorHandler.js";
import skill from "../../models/skill.js";
import randomstring from "randomstring";


const addSkill = async (req, res, next) => {
  try {
    const { SkillName } = req.body;
    if (!SkillName ) {
      return res.status(404).json({
        status: true,
        code: 404,
        message: "SkillName is Required",
      });
    }
    const skillId = randomstring.generate(6);

    const newSkill = await skill.create({
        SkillName,
        skillId,
    });

    return res.status(201).json({
      status: true,
      code: 201,
      message: "skill Detail saved successfully",
      data: newSkill,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default addSkill;
