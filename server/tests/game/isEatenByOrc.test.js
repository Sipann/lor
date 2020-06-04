'use strict';

const isEatenByOrc = require('../../game/isEatenByOrc');
const mapTestIn1 = require('./maps/mapTestIn1');

describe('isEatenByOrc', () => {

  describe('should return true when coordinates point to an Orc', () => {

    it('should return true when { latitude: 0, longitude: 3}', () => {
      const coords = { latitude: 0, longitude: 3 };
      const actual = isEatenByOrc(coords, mapTestIn1);
      expect(actual).toBeTruthy();
    });

    it('should return true when { latitude: 0, longitude: 9}', () => {
      const coords = { latitude: 0, longitude: 9 };
      const actual = isEatenByOrc(coords, mapTestIn1);
      expect(actual).toBeTruthy();
    });

    it('should return true when { latitude: 8, longitude: 1}', () => {
      const coords = { latitude: 8, longitude: 1 };
      const actual = isEatenByOrc(coords, mapTestIn1);
      expect(actual).toBeTruthy();
    });

  });


  describe('should return false when coordinates point to something else than an Orc', () => {

    it('should return false when { latitude: 0, longitude: 0}', () => {
      const coords = { latitude: 0, longitude: 0 };
      const actual = isEatenByOrc(coords, mapTestIn1);
      expect(actual).toBeFalsy();
    });

    it('should return false when { latitude: 5, longitude: 0}', () => {
      const coords = { latitude: 5, longitude: 0 };
      const actual = isEatenByOrc(coords, mapTestIn1);
      expect(actual).toBeFalsy();
    });

    it('should return false when { latitude: 1, longitude: 7}', () => {
      const coords = { latitude: 1, longitude: 7 };
      const actual = isEatenByOrc(coords, mapTestIn1);
      expect(actual).toBeFalsy();
    });

  });

});