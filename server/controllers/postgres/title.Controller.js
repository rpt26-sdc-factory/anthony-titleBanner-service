const express = require('express');
const app = express();
const { titlesPool } = require('../../../db/postgres/postgresDB');


// POST
exports.postTitle = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { title } = req.body;

    const newTitle = await titlesPool.query(
      'INSERT INTO titles (title) VALUES ($1) RETURNING *', [title]
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
    const { title } = req.params;

    const result = await titlesPool.query('SELECT * FROM titles WHERE title = $1', [title]);

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
    const { title: originalTitle } = req.params;
    const { title: changedTitle } = req.body;

    const updateTitle = await titlesPool.query('UPDATE titles SET title = $1 WHERE title = $2', [changedTitle, originalTitle])

    let end = new Date().getTime();
    console.log(`PUT, ${end - start} milliseconds!`)
    res.json({ message: `${originalTitle} was CHANGED to ${changedTitle} in the Database!` });

  } catch (err) {
    console.error(err);
    res.end();
  }
};

// DELETE
exports.deleteTitle = async (req, res) => {
  try {
    let start = new Date().getTime();
    const { title } = req.params;

    const deleteTitle = await titlesPool.query('DELETE FROM titles WHERE title = $1', [title]);

    let end = new Date().getTime();
    console.log(`DELETE, ${end - start} milliseconds!`)
    res.json({ message: `${title} was DELETED in the Database!` });

  } catch (err) {
    console.error(err)
    res.end();
  }
};
