
const express = require('express');
const router = express.Router();
const { createAdminUser } = require('../controllers/adminController');
// const { auth, isAdmin } = require('../middlewares/auth');

router.post('/create-admin',  createAdminUser);

module.exports = router;
