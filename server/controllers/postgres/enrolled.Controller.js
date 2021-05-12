const express = require('express');
const app = express();
const { enrolledPool } = require('../../../db/postgres/postgresDB');


// POST
exports.postEnrolled = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { enrolled } = req.body;

    const newEnrolled = await enrolledPool.query(
      'INSERT INTO enrolled (enrolled) VALUES ($1) RETURNING *', [enrolled]
    );
    let end = new Date().getTime();
    console.log(`POST, ${end - start} milliseconds!`)
    res.json(newEnrolled.rows[0]);

  } catch (err) {
    console.error(err);
    res.end();
  }
}

// GET
exports.getEnrolled = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { id } = req.params;

    const result = await enrolledPool.query('SELECT * FROM enrolled WHERE id = $1', [id]);

    if (!result.rows[0]) {
      console.log(`${enrolled} is not in Database!`);
      res.json({ message: `${enrolled} is not in Database!` });

    } else {
      let end = new Date().getTime();
      console.log(`GET, ${end - start} milliseconds!`)
      res.json(result.rows[0]);
    }

  } catch (err) {
    console.error(err);
    res.end();
  }
};

// PUT
exports.putEnrolled = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { id } = req.params;
    const { enrolled } = req.body;

    const updateTitle = await enrolledPool.query('UPDATE enrolled SET enrolled = $1 WHERE id = $2', [enrolled, id])

    let end = new Date().getTime();
    console.log(`PUT, ${end - start} milliseconds!`)
    res.json({ message: `ID ${id} enrolled number was CHANGED to ${enrolled} in the Database!` });

  } catch (err) {
    console.error(err);
    res.end();
  }
};

// DELETE
exports.deleteEnrolled = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { id } = req.params;

    const deleteTitle = await enrolledPool.query('DELETE FROM enrolled WHERE id = $1', [id]);

    let end = new Date().getTime();
    console.log(`DELETE, ${end - start} milliseconds!`)
    res.json({ message: `${id} was DELETED in the Database!` });

  } catch (err) {
    console.error(err)
    res.end();
  }
};

