'use strict';

const fallsOutOfMap = require('../../game/fallsOutOfMap');
const mapTestIn1 = require('./maps/mapTestIn1');
const mapTestSmall = require('./maps/mapTestSmall');

describe('fallsOutOfMap', () => {

  describe('fallsOutOfMap should return true if coords are out of the map', () => {

    it(`should return true for { latitude: -1, longitude: 5 } on mapTestIn1`, () => {
      const coords = { latitude: -1, longitude: 5 };
      const actual = fallsOutOfMap(coords, mapTestIn1);
      expect(actual).toBeTruthy();
    });

    it(`should return true for { latitude: -2, longitude: 5 } on mapTestIn1`, () => {
      const coords = { latitude: -2, longitude: 5 };
      const actual = fallsOutOfMap(coords, mapTestIn1);
      expect(actual).toBeTruthy();
    });

    it(`should return true for { latitude: 2, longitude: 10 } on mapTestIn1`, () => {
      const coords = { latitude: 2, longitude: 10 };
      const actual = fallsOutOfMap(coords, mapTestIn1);
      expect(actual).toBeTruthy();
    });

    it(`should return true for { latitude: -1, longitude: 10 } on mapTestIn1`, () => {
      const coords = { latitude: -1, longitude: 10 };
      const actual = fallsOutOfMap(coords, mapTestIn1);
      expect(actual).toBeTruthy();
    });

    it(`should return true for { latitude: 6, longitude: 2 } on mapTestSmall`, () => {
      const coords = { latitude: 6, longitude: 2 };
      const actual = fallsOutOfMap(coords, mapTestSmall);
      expect(actual).toBeTruthy();
    })

  });

  describe('fallsOutOfMap should return false if coords are within map boundaries', () => {

    it(`should return false for { latitude: 0, longitude: 0} on mapTestIn1`, () => {
      const coords = { latitude: 0, longitude: 0 };
      const actual = fallsOutOfMap(coords, mapTestIn1);
      expect(actual).toBeFalsy();
    });

    it(`should return false for { latitude: 9, longitude: 9} on mapTestIn1`, () => {
      const coords = { latitude: 9, longitude: 9 };
      const actual = fallsOutOfMap(coords, mapTestIn1);
      expect(actual).toBeFalsy();
    });

    it(`should return false for { latitude: 4, longitude: 5} on mapTestIn1`, () => {
      const coords = { latitude: 4, longitude: 5 };
      const actual = fallsOutOfMap(coords, mapTestIn1);
      expect(actual).toBeFalsy();
    });

    it(`should return false for { latitude: 2, longitude: 2} on mapTestSmall`, () => {
      const coords = { latitude: 2, longitude: 2 };
      const actual = fallsOutOfMap(coords, mapTestSmall);
      expect(actual).toBeFalsy();
    });

  });

});