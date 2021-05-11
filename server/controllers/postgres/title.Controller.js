const express = require('express');
const app = express();
const { titlesPool } = require('../../../db/postgres/postgresDB');


exports.getTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const result = await titlesPool.query('SELECT * FROM titles WHERE title = $1', [title]);
    console.log(result.rows[0]);
    res.end();

  } catch (err) {
    console.error(err);
    res.end();
  }
};
