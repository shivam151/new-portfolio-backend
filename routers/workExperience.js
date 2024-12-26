import express from 'express';

import multer from 'multer';
import addWorkExperience from '../controller/workExperience/addWorkExperience.js';
import getAllWorkExperience from '../controller/workExperience/getAllWorkExperience.js';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();


router.post('/addWorkExperience', upload.single('companyImage'), addWorkExperience);
router.get('/getAllWorkExperience',getAllWorkExperience)

export default router;