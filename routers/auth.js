import express from 'express';

import login from '../controller/auth/login.js';
import verify from '../controller/auth/verify.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.post('/login', login);
router.get('/verify', verifyToken, verify);

export default router;
