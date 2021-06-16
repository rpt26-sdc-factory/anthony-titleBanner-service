const express = require('express');
const router = express.Router();
const { getTitle, postTitle, putTitle, deleteTitle, loaderIO } = require('../controllers/controllers');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });

// Titles
router
  .post('/postTitle', postTitle)
  .get('/getTitle/:id', getTitle)
  .put('/updateTitle/:id', putTitle)
  .delete('/deleteTitle/:id', deleteTitle);

// Loader IO
router.get(`/${process.env.LOADERIO}`, (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, '../../loader-io.txt'));
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;