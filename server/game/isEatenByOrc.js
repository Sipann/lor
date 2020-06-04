'use strict';

const { values } = require('./constants');

const isEathenByOrc = (coords, map) => {
  if (map[coords.latitude][coords.longitude] === values.orc) return true;
  return false;
};

module.exports = isEathenByOrc;