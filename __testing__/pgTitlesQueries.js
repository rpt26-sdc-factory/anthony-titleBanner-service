const axios = require('axios');
const { titlesPool } = require('../db/postgres/postgresDB');

// TITLES
(async () => {
  // Titles DB Connection
  await titlesPool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
      release();
      if (err) {
        return console.error('Error executing query', err.stack);
      }
      console.log('POSTGRES DB titles connected:', result.rows);
      console.log('\n');
    });
  });

  console.log('POSTGRES TITLES Queries Test!\n');

  // POST
  let result;
  console.time('POST Test Result');
  let title = 'FAKE EDUCATION';
  result = await titlesPool.query(
    'INSERT INTO titles (title) VALUES ($1) RETURNING *', [title]
  );
  console.log(result.rows[0])
  console.timeEnd('POST Test Result');
  console.log('\n');

  // GET
  console.time('GET Test Result');
  result = await titlesPool.query('SELECT * FROM titles WHERE title = $1', [title]);
  console.log(result.rows[0])
  console.timeEnd('GET Test Result');
  console.log('\n');

  // PUT
  console.time('PUT Test Result');
  let newTitle = 'REAL EDUCATION'
  result = await titlesPool.query('UPDATE titles SET title = $1 WHERE title = $2 RETURNING *', [newTitle, title])
  console.log(result.rows[0])
  console.timeEnd('PUT Test Result');
  console.log('\n');

  // DELETE
  console.time('DELETE Test Result');
  result = await titlesPool.query('DELETE FROM titles WHERE title = $1 RETURNING *', [title]);
  console.timeEnd('DELETE Test Result');
  console.log('\n');

  titlesPool.end();
})();

