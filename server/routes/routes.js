const express = require('express');
const router = express.Router();
const { postTitle, getTitle, putTitle, deleteTitle } = require('../controllers/title.Controller');
const { postEnrolled, getEnrolled, putEnrolled, deleteEnrolled } = require('../controllers/enrolled.Controller');

// Titles
router.post('/postTitle', postTitle);
router.get('/getTitle/:title', getTitle);
router.put('/updateTitle/:title', putTitle);
router.delete('/deleteTitle/:title', deleteTitle);

// Enrolled
router.post('/postEnrolled', postEnrolled);
router.get('/getEnrolled/:enrolled', getEnrolled);
router.put('/updateEnrolled/:enrolled', putEnrolled);
router.delete('/deleteEnrolled/:enrolled', deleteEnrolled);

module.exports = router;