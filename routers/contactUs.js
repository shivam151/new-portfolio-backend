import express from 'express';
import contact from '../controller/contactUs.js';
import addSkill from '../controller/skill/addSkill.js';
import getAllSkill from '../controller/skill/getAllSkill.js';
const router = express.Router();


router.post('/contact', contact);
router.post('/addSkill',addSkill );
router.get('/getAllSkill',getAllSkill)




export default router;