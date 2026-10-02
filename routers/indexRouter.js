import express from 'express';
import contactUs from '../routers/contactUs.js'
import project from '../routers/project.js';
import workExperience from '../routers/workExperience.js'
import education from '../routers/Education.js'
import certification from '../routers/certification.js'
import auth from '../routers/auth.js'
const app = express.Router();




app.use('/api/auth',auth)
app.use('/api/contact',contactUs)
app.use('/api/project',project)
app.use('/api/work',workExperience)
app.use('/api/education',education)
app.use('/api/certification',certification)

export default app;