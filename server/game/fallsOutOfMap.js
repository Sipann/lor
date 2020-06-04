'use strict';

const fallsOutOfMap = (coords, map) => {
  if (coords.latitude < 0 ||
    coords.latitude >= map.length ||
    coords.longitude < 0 ||
    coords.longitude >= map[0].length
  ) { return true; }
  return false;
};

module.exports = fallsOutOfMap;