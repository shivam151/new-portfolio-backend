import express from 'express';

import multer from 'multer';
import addEducation from '../controller/education/addEducation.js';
import getAllEducation from '../controller/education/getAllEducation.js';
import verifyToken from '../middleware/auth.js';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();


router.post('/addEducation', verifyToken, upload.single('Image'), addEducation);
router.get('/getAllEducation',getAllEducation)

export default router;