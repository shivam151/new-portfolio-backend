// Creates or updates the single admin login record in MongoDB.
// Usage: node scripts/seedAdmin.js <email> <password>
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import "../utils/db.js";
import Admin from "../models/admin.js";

dotenv.config();

const [, , email, password] = process.argv;

if (!email || !password) {
  console.error("Usage: node scripts/seedAdmin.js <email> <password>");
  process.exit(1);
}

const run = async () => {
  const passwordHash = await bcrypt.hash(password, 10);
  const normalizedEmail = email.trim().toLowerCase();

  const admin = await Admin.findOneAndUpdate(
    { email: normalizedEmail },
    { email: normalizedEmail, password: passwordHash },
    { upsert: true, new: true }
  );

  console.log(`Admin credentials saved for ${admin.email}`);
  process.exit(0);
};

run().catch((error) => {
  console.error("Failed to seed admin:", error);
  process.exit(1);
});
