import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

import authRouter from '../api/auth/auth.route.js'; 
import { contactRouter } from '../resources/contact/contact.routes.js';
import { logger } from '../api/logger.middleware.js';




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.use ('/api/auth', authRouter); // Authentication routes



app.use('/api/contacts', contactRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});



export const config = {
    port: process.env.PORT || 8000,
};

export default app;

