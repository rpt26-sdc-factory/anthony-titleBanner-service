const express = require('express');
const router = express.Router();
const { getTitle, postTitle, putTitle, deleteTitle, loaderIO } = require('../controllers/controllers');


// Titles
router.post('/postTitle', postTitle);
router.get('/getTitle/:id', getTitle);
router.put('/updateTitle/:id', putTitle);
router.delete('/deleteTitle/:id', deleteTitle);

// Loader IO
router.get('', (req, res) => {
  try {
    res.send('');
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;