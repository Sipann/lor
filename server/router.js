'use strict';

const router = require('express').Router();

const { playCtrl } = require('./controllers/play');

router.post('/play', playCtrl);

module.exports = router;