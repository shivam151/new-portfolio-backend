import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = mongoose.createConnection(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000,
});
try {
  if (db) {
    console.log("portfolio backend Database connected successfully ");
  } else {
    console.log("Error in Database Connection");
  }
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

export { db };