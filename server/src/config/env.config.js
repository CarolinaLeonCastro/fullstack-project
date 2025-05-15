import dotenv from 'dotenv';

dotenv.config();

export const environments = { DEVELOPMENT : 'development' , STAGING : 'staging', PRODUCTION : 'production' };

export const config = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  mongo: process.env.MONGO_URI,
  api: process.env.API_VERSION,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'development',
  HTTPLogs: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
};
