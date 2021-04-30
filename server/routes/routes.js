const express = require('express');
const router = express.Router();
const { postTitle, getTitle, putTitle, deleteTitle } = require('../controllers/title.Controller');
const { postEnrolled, getEnrolled, putEnrolled, deleteEnrolled } = require('../controllers/enrolled.Controller');

// Titles
router.post('/post/', postTitle);
router.get('/get/:title', getTitle);
router.put('/update/:title', putTitle);
router.delete('/delete/:title', deleteTitle);

// Enrolled
router.post('/post/:enrolled', postEnrolled);
router.get('/get/:enrolled', getEnrolled);
router.put('/update/:enrolled', putEnrolled);
router.delete('/delete/:enrolled', deleteEnrolled);

module.exports = router;