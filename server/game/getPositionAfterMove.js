'use strict';

const { moves } = require('./constants');

const getPositionAfterMove = (currentPosition, movement) => {
  switch (movement.trim()) {
    case moves.east:
      return {
        ok: true,
        coords: { latitude: currentPosition.latitude, longitude: currentPosition.longitude + 1 },
      };
    case moves.west:
      return {
        ok: true,
        coords: { latitude: currentPosition.latitude, longitude: currentPosition.longitude - 1 },
      };
    case moves.north:
      return {
        ok: true,
        coords: { latitude: currentPosition.latitude - 1, longitude: currentPosition.longitude },
      };
    case moves.south:
      return {
        ok: true,
        coords: { latitude: currentPosition.latitude + 1, longitude: currentPosition.longitude },
      };
    default:
      return {
        ok: false,
        coords: {},
      };
  }
};


module.exports = getPositionAfterMove;