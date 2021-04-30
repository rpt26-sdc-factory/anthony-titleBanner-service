const express = require('express');
const router = express.Router();
const { postTitle, getTitle, putTitle, deleteTitle } = require('../controllers/crudControllers');
// const path = require('path');


router.post('/post/:title', postTitle);
router.get('/get/:title', getTitle);
router.put('/update/:title', putTitle);
router.delete('/delete/:title', deleteTitle);

module.exports = router;