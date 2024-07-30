const express = require('express');

const {makeUser} = require('../controllers/signup')

const router = express.Router();

router.post('/register', makeUser);

module.exports = router ;
