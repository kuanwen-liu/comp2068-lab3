'use strict';
var express = require('express');
var router = express.Router();

/* GET father page. */
router.get('/', function (req, res) {
    res.render('father', { fatherName: 'JI-XING LIU' });
});

module.exports = router;


