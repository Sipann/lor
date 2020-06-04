'use strict';

const { values } = require('./constants');

const findFrodo = map => {
  for (let latitude = 0; latitude < map.length; latitude++) {
    for (let longitude = 0; longitude < map[0].length; longitude++) {
      if (map[latitude][longitude] === values.frodo) {
        return { latitude, longitude };
      }
    }
  }
  return { latitude: null, longitude: null };
};

module.exports = findFrodo;