const express = require('express');
const router = express.Router();
const path = require('path');
const { getTitle, postTitle, putTitle, deleteTitle, loaderIO } = require('../controllers/controllers');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });

// Titles
router.post('/postTitle', postTitle);
router.get('/getTitle/:id', getTitle);
router.put('/updateTitle/:id', putTitle);
router.delete('/deleteTitle/:id', deleteTitle);

// Loader IO
router.get(`/${process.env.LOADERIO}`, (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, '../../loader-io.txt'));
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;