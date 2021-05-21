const express = require('express');
const router = express.Router();
const { getTitle, postTitle, putTitle, deleteTitle } = require('../controllers/controllers');


// Titles
router.post('/postTitle', postTitle);
router.get('/getTitle/:id', getTitle);
router.put('/updateTitle/:id', putTitle);
router.delete('/deleteTitle/:id', deleteTitle);

module.exports = router;