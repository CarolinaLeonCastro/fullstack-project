import express from 'express';
// APRÈS
import { register, login } from './auth.controller.js';


const router = express.Router();

router.post('/register',register);
router.post('/login',login);

export default router;