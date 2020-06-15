'use strict';
var express = require('express');
var router = express.Router();

/* GET brother page. */
router.get('/', function (req, res) {
    res.render('brother', { brotherName: 'JUN-LIN LIU' });
});

module.exports = router;