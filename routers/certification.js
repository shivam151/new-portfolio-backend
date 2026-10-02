import express from 'express';

import multer from 'multer';
import addCertification from '../controller/certification/addCertification.js';
import getAllCertification from '../controller/certification/getAllCertification.js';
import verifyToken from '../middleware/auth.js';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/addCertification', verifyToken, upload.single('Image'), addCertification);
router.get('/getAllCertification', getAllCertification)

export default router;
