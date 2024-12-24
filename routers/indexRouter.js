import express from 'express';
import contactUs from '../routers/contactUs.js'
import project from '../routers/project.js';
const app = express.Router();




app.use('/api/contact',contactUs)
app.use('/api/project',project)

export default app;