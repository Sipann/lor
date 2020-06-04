'use strict';

const mountDoom = require('../../game/mountDoom');
const mapTestIn1 = require('./maps/mapTestIn1');

describe('mountDoom', () => {

  describe('mountDoom should return true when coordinates point to Mount Doom', () => {

    it(`should return true for { latitude: 1, longitude: 7 }`, () => {
      const coords = { latitude: 1, longitude: 7 };
      const actual = mountDoom(coords, mapTestIn1);
      expect(actual).toBeTruthy();
    });


  });

  describe('mountDoom should return false when coords point to something else than Mount Doom', () => {

    it(`should return false for { latitude: 0, longitude: 0}`, () => {
      const coords = { latitude: 0, longitude: 0 };
      const actual = mountDoom(coords, mapTestIn1);
      expect(actual).toBeFalsy();
    });


  });

});