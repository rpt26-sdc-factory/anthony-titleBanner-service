const { Pool } = require('pg');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../config/config.env' });


const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.TITLES_DATABASE,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
});


module.exports = { pool };


// Connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('POSTGRES connected:', result.rows);
    console.log('\n');
  });
});
