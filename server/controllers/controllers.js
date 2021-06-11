const express = require('express');
const app = express();
const { pool } = require('../../db/db');


// POST
exports.postTitle = async (req, res) => {
  try {
    const { title, enrolled, reviewcounts, stars, offeredby } = req.body;
    const newTitle = await pool.query(
      'INSERT INTO titles (title, enrolled, reviewcounts, stars, offeredby) VALUES ($1, $2, $3, $4, $5) RETURNING *', [title, enrolled, reviewcounts, stars, offeredby]
    );
    res.json(newTitle.rows[0]);

  } catch (err) {
    console.error(err);
    res.end();
  }
}

// GET
exports.getTitle = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM titles WHERE id = $1', [id]);

    // add redirect?!
    if (!result.rows[0]) {
      res.json({ message: `${title} is not in Database!` });

    } else {
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
    const { id } = req.params;
    const { title } = req.body;
    const updateTitle = await pool.query('UPDATE titles SET title = $1 WHERE id = $2', [title, id])
    res.json({ message: `ID ${id} was CHANGED to ${title} in the Database!` });

  } catch (err) {
    console.error(err);
    res.end();
  }
};

// DELETE
exports.deleteTitle = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTitle = await pool.query('DELETE FROM titles WHERE id = $1', [id]);
    res.json({ message: `ID ${id} was DELETED in the Database!` });

  } catch (err) {
    console.error(err)
    res.end();
  }
};

