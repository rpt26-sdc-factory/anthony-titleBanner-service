const { Client } = require('pg');

const pgclient = new Client({
  user: 'postgres',
  password: '',
  host: 'localhost',
  database: 'test',
  port: 5432,
});

pgclient.connect();

const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']

pgclient.query(table, (err, res) => {
  if (err) throw err
});

pgclient.query(text, values, (err, res) => {
  if (err) throw err
});

pgclient.query('SELECT * FROM student', (err, res) => {
  if (err) throw err
  console.log(err, res.rows) // Print the data in student table
  pgclient.end()
});
