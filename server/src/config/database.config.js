import mongoose from 'mongoose';

import { config, environments } from './env.config.js';





/**
* Connect to MongoDb server
*
* @returns {Object} Mongoose connection


*/
const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@fullstack-project.sjclu3b.mongodb.net/?retryWrites=true&w=majority&appName=fullstack-project`;
export const connect = () => {
    mongoose.connection.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
        process.exit(-1);
      });

  return mongoose.connection;
};
