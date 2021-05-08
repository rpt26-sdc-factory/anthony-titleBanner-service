const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config({ path: './configs/config.env' });

const titlesPool = new Pool({
  user: process.env.USER,
  password: process.env.POSTGRES_SQL_PASSWORD,
  database: process.env.TITLES_DATABASE,
  host: process.env.HOST,
  port: process.env.PORT,
});

const enrolledPool = new Pool({
  user: process.env.USER,
  password: process.env.POSTGRES_SQL_PASSWORD,
  database: process.env.ENROLLED_DATABASE,
  host: process.env.HOST,
  port: process.env.PORT,
});

module.exports = { titlesPool, enrolledPool };