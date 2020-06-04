'use strict';

const findFrodo = require('../../game/findFrodo');
const mapTestIn1 = require('./maps/mapTestIn1');
const mapTestIn2 = require('./maps/mapTestIn2');
const mapTestOut = require('./maps/mapTestOut');

describe('findFrodo', () => {

  describe(`findFrodo should return Frodo's coordinates when he's on the map`, () => {

    it('should return { latitude: 5, longitude: 0} for mapTestIn1', () => {
      const actual = findFrodo(mapTestIn1);
      expect(actual).toMatchObject({ latitude: 5, longitude: 0 });
    });

    it('should return { latitude: 1, longitude: 1} for mapTestIn2', () => {
      const actual = findFrodo(mapTestIn2);
      expect(actual).toMatchObject({ latitude: 1, longitude: 1 });
    });

  });

  describe('findFrodo should return null latitude and longitude when Frodo is not on the map', () => {

    it('should return { latitude: null, longitude: null} for mapTestOut', () => {
      const actual = findFrodo(mapTestOut);
      expect(actual).toMatchObject({ latitude: null, longitude: null });
    });
  });

});