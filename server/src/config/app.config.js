import dotenv from 'dotenv';
import express from 'express';

const app = express();

// Charge les variables du fichier .env
dotenv.config();

// On exporte un objet contenant la config
export const config = {
    port: process.env.PORT || 8000,
};

