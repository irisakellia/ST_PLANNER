const express = require('express');

const signupcontroller = require('../controllers/signup')

const router = express.Router();

router.post('/register', signupcontroller.makeUser);

module.exports = router ;
