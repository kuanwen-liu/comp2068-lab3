'use strict';
var express = require('express');
var router = express.Router();

/* GET sister page. */
router.get('/', function (req, res) {
    res.render('sister', { sisterName: 'JIA-QIAN LIU' });
});

module.exports = router;