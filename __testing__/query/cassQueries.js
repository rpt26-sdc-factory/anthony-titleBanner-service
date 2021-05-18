const cassandra = require('cassandra-driver');


// CASS QUERIES TEST
(async () => {
  // Connection
  const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'sdc_database',
  });

  await client.connect();

  // TESTS!!!!!!
  console.log('CASSANDRA Queries Test!\n');

  // POST
  console.time('POST Test Result');
  let id = 10000002;
  let enrolled = 5000;
  let reviewCounts = 24;
  let stars = '4.2';
  let title = 'FAKE EDUCATION';
  let result;

  await client.execute('INSERT INTO titles (id, enrolled, reviewcounts, stars, title) VALUES (?, ?, ?, ?, ?)', [id, enrolled, reviewCounts, stars, title], { prepare: true }, (err, result) => {
    if (err) {
      console.error(err);
    }
  });
  console.timeEnd('POST Test Result');
  console.log('\n');

  // GET
  console.time('GET Test Result');
  result = await client.execute(`SELECT * FROM titles WHERE id=${id}`);
  console.log(result.rows[0]);
  console.timeEnd('GET Test Result');
  console.log('\n');

  // PUT
  console.time('PUT Test Result');
  let newTitle = 'REAL EDUCATION';
  await client.execute('UPDATE titles SET title=? WHERE id=?', [newTitle, `${id}`], { prepare: true }, (err, result) => {
    if (err) {
      console.error(err);
    }
  });
  console.timeEnd('PUT Test Result');
  console.log('\n');

  // DELETE
  console.time('DELETE Test Result');
  await client.execute(`DELETE FROM titles WHERE id=${id} IF EXISTS`, err => {
    if (err) {
      console.error(err);
    }
  });
  console.timeEnd('DELETE Test Result');
  console.log('\n');

  setTimeout(() => {
    client.shutdown();
  }, 2000);
})();

