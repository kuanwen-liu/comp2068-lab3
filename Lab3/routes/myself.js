'use strict';
var express = require('express');
var router = express.Router();

/* GET myself page. */
router.get('/', function (req, res) {
    res.render('myself', { myName: 'KUAN-WEN LIU' });
});

module.exports = router;


