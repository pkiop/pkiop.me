var express = require('express');
var router = express.Router();

const aboutme = require('./apiRouter/aboutme');

router.use('/aboutme', aboutme);

module.exports = router;