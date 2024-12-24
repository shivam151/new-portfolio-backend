import ErrorHandler from "../middleware/errorHandler.js";
import contactUs from "../models/contactUs.js";

const contact = async (req, res, next) => {
  try {
    const { firstName, lastName, email, PhoneNumber, message } = req.body;
    if (!firstName || !email || !PhoneNumber || !message) {
      return res.status(404).json({
        status: true,
        code: 404,
        message: "All feild is required",
      });
    }

    const newContact = await contactUs.create({
      firstName,
      lastName,
      email,
      PhoneNumber,
      message,
    });

    return res.status(201).json({
      status: true,
      code: 201,
      message: "Contact Detail saved successfully",
      data: newContact,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default contact;
