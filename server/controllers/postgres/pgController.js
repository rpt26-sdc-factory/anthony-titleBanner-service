const express = require('express');
const app = express();
const { pool } = require('../../../db/postgres/postgresDB');


// POST
exports.postTitle = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { title, enrolled } = req.body;
    console.log(enrolled)
    const newTitle = await pool.query(
      'INSERT INTO titles (title, enrolled) VALUES ($1, $2) RETURNING *', [title, enrolled]
    );
    let end = new Date().getTime();
    console.log(`POST, ${end - start} milliseconds!`)
    res.json(newTitle.rows[0]);

  } catch (err) {
    console.error(err);
    res.end();
  }
}

// GET
exports.getTitle = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { id } = req.params;

    const result = await pool.query('SELECT * FROM titles WHERE id = $1', [id]);

    if (!result.rows[0]) {
      console.log(`${title} is not in Database!`);
      res.json({ message: `${title} is not in Database!` });

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
exports.putTitle = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { id } = req.params;
    const { title } = req.body;

    const updateTitle = await pool.query('UPDATE titles SET title = $1 WHERE id = $2', [title, id])

    let end = new Date().getTime();
    console.log(`PUT, ${end - start} milliseconds!`)
    res.json({ message: `ID ${id} was CHANGED to ${title} in the Database!` });

  } catch (err) {
    console.error(err);
    res.end();
  }
};

// DELETE
exports.deleteTitle = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { id } = req.params;

    const deleteTitle = await pool.query('DELETE FROM titles WHERE id = $1', [id]);

    let end = new Date().getTime();
    console.log(`DELETE, ${end - start} milliseconds!`)
    res.json({ message: `ID ${id} was DELETED in the Database!` });

  } catch (err) {
    console.error(err)
    res.end();
  }
};
