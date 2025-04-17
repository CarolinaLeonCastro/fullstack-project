const dotenv = require('dotenv');
const express = require('express');

const app = express();

// Charge les variables du fichier .env
dotenv.config();

// On exporte un objet contenant la config
module.exports = {
    config: {
        port: process.env.PORT || 8000,
    },
};

