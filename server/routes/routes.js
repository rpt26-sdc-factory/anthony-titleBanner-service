const express = require('express');
const router = express.Router();

// mongo controllers
const { postTitle, getTitle, putTitle, deleteTitle } = require('../controllers/mongo/title.Controller');
const { postEnrolled, getEnrolled, putEnrolled, deleteEnrolled } = require('../controllers/mongo/enrolled.Controller');

// postgres controllers
// const { postTitle, getTitle, putTitle, deleteTitle } = require('../controllers/postgres/title.Controller');
// const { postEnrolled, getEnrolled, putEnrolled, deleteEnrolled } = require('../controllers/postgres/enrolled.Controller');

// cassandra controllers
// const { postTitle, getTitle, putTitle, deleteTitle } = require('../controllers/cass/title.Controller');
// const { postEnrolled, getEnrolled, putEnrolled, deleteEnrolled } = require('../controllers/cass/enrolled.Controller');

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