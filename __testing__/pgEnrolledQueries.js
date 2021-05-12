const axios = require('axios');
const { enrolledPool } = require('../db/postgres/postgresDB');

// ENROLLED
(async () => {
  // Enrolled DB Connection
  await enrolledPool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
      release();
      if (err) {
        return console.error('Error executing query', err.stack);
      }
      console.log('POSTGRES DB enrolled connected:', result.rows);
      console.log('\n');
    });
  });

  console.log('POSTGRES ENROLLED Queries Test!\n');

  // POST
  let result;
  let id;
  console.time('POST Test Result');
  let enrolled = 5001;
  result = await enrolledPool.query(
    'INSERT INTO enrolled (enrolled) VALUES ($1) RETURNING *', [enrolled]
  );
  console.log(result.rows[0])
  console.timeEnd('POST Test Result');
  console.log('\n');

  // GET
  console.time('GET Test Result');
  id = result.rows[0].id;
  result = await enrolledPool.query('SELECT * FROM enrolled WHERE id = $1', [id]);
  console.log(result.rows[0])
  console.timeEnd('GET Test Result');
  console.log('\n');

  // PUT
  console.time('PUT Test Result');
  enrolled = 5002;
  result = await enrolledPool.query('UPDATE enrolled SET enrolled = $1 WHERE id = $2 RETURNING *', [enrolled, id])
  console.log(result.rows[0])
  console.timeEnd('PUT Test Result');
  console.log('\n');

  // DELETE
  console.time('DELETE Test Result');
  id = result.rows[0].id;
  result = await enrolledPool.query('DELETE FROM enrolled WHERE id = $1 RETURNING *', [id]);
  console.timeEnd('DELETE Test Result');
  console.log('\n');

  enrolledPool.end();
})();