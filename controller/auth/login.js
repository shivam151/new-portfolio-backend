import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import ErrorHandler from "../../middleware/errorHandler.js";
import Admin from "../../models/admin.js";

dotenv.config();

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: false,
        code: 400,
        message: "Email and password are required",
      });
    }

    const admin = await Admin.findOne({ email: email.trim().toLowerCase() });
    const isPasswordValid = admin ? await bcrypt.compare(password, admin.password) : false;

    if (!admin || !isPasswordValid) {
      return res.status(401).json({
        status: false,
        code: 401,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ email: admin.email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      status: true,
      code: 200,
      message: "Login successful",
      data: { token },
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export default login;
