import jwt from "jsonwebtoken";
import ErrorHandler from "./errorHandler.js";

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

    if (!token) {
      return next(new ErrorHandler("Authentication token missing", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
};

export default verifyToken;
