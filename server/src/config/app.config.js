import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@fullstack-project.sjclu3b.mongodb.net/?retryWrites=true&w=majority&appName=fullstack-project`;

mongoose.connect(URI)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(err => console.log(err));

export const config = {
    port: process.env.PORT || 8000,
};
