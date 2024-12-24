import express from 'express';

import multer from 'multer';
import getAllPersonalProject from '../controller/Project/getAllPersonalProject.js';
import addProject from '../controller/Project/addProject.js';
import getAllProject from '../controller/Project/getAllProject.js';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();


router.post('/addProject',upload.array('images'), addProject);
router.get('/getAllPersonalProject',getAllPersonalProject)
router.get('/getAllProject',getAllProject)

export default router;