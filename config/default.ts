import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  saltWorkFactor: 10,
  database: {
    db_url: process.env.DB_URL,
  },
};

