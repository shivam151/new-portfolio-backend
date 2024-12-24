// app.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import indexRoutes from "./routers/indexRouter.js";
import "./utils/db.js"; 

dotenv.config();
const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({limit: '500mb'}));
  app.use(express.urlencoded({limit: "500mb", extended: true, parameterLimit:50000}));
  app.use(express.json());
app.use(express.json());

app.use(indexRoutes); 

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Portfilo Backend");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 App listening on port ${PORT}`);
});

export default app;
