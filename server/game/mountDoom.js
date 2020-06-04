'use strict';

const { values } = require('./constants');

const mountDoom = (coords, map) => {
  if (map[coords.latitude][coords.longitude] === values.doom) return true;
  return false;
};

module.exports = mountDoom;