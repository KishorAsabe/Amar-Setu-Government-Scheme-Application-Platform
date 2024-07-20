const express = require('express');
const router = express.Router();


// import controller
const { uploadDocument } = require('../controllers/documentController');

router.post('/upload', uploadDocument);





module.exports = router;