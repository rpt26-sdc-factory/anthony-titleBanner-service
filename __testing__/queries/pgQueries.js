const { pool } = require('../../db/postgres/postgresDB');


// POSTGRES QUERIES TEST
const pgQueriesTest = async () => {
  // Connection
  await pool.connect((err, client, release) => {
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

  // TESTS!!!!!!
  console.log('POSTGRES Queries Test!\n');

  // POST
  let result;
  let id;
  console.time('POST Test Result');
  let title = 'FAKE EDUCATION';
  let enrolled = 5000;
  result = await pool.query(
    'INSERT INTO titles (title, enrolled) VALUES ($1, $2) RETURNING *', [title, enrolled]
  );
  console.log(result.rows[0])
  console.timeEnd('POST Test Result');
  console.log('\n');

  // GET
  console.time('GET Test Result');
  id = result.rows[0].id;
  result = await pool.query('SELECT * FROM titles WHERE id = $1', [id]);
  console.log(result.rows[0])
  console.timeEnd('GET Test Result');
  console.log('\n');

  // PUT
  console.time('PUT Test Result');
  let newTitle = 'REAL EDUCATION'
  result = await pool.query('UPDATE titles SET title = $1 WHERE id = $2 RETURNING *', [newTitle, id])
  console.log(result.rows[0])
  console.timeEnd('PUT Test Result');
  console.log('\n');

  // DELETE
  console.time('DELETE Test Result');
  result = await pool.query('DELETE FROM titles WHERE id = $1 RETURNING *', [id]);
  console.timeEnd('DELETE Test Result');
  console.log('\n');

  pool.end();
};

pgQueriesTest();