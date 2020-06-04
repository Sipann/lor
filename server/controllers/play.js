'use strict';

const { errorMessages } = require('../game/constants');
const mapLoR = require('../game/map');
const playGame = require('../game');

const playCtrl = async (req, res) => {
  try {
    const input = req.body;
    const result = playGame(input, mapLoR);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.json(errorMessages.somethingWrongHappened)
  }
};

module.exports = {
  playCtrl,
};