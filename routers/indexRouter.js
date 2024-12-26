import express from 'express';
import contactUs from '../routers/contactUs.js'
import project from '../routers/project.js';
import workExperience from '../routers/workExperience.js'
const app = express.Router();




app.use('/api/contact',contactUs)
app.use('/api/project',project)
app.use('/api/work',workExperience)

export default app;