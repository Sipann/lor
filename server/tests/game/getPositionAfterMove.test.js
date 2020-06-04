'use strict';

const getPositionAfterMove = require('../../game/getPositionAfterMove');


describe('getPositionAfterMove', () => {

  describe('should return proper position after move input', () => {

    it('should return { latitude: 1, longitude: 3} when moving east from { latitude: 1, longitude: 2 }', () => {
      const currentPosition = { latitude: 1, longitude: 2 };
      const actual = getPositionAfterMove(currentPosition, 'e');
      expect(actual).toMatchObject(
        {
          ok: true,
          coords: { latitude: 1, longitude: 3 }
        });
    });

    it('should return { latitude: 1, longitude: 1} when moving west from { latitude: 1, longitude: 2 }', () => {
      const currentPosition = { latitude: 1, longitude: 2 };
      const actual = getPositionAfterMove(currentPosition, 'w');
      expect(actual).toMatchObject(
        {
          ok: true,
          coords: { latitude: 1, longitude: 1 }
        });
    });

    it('should return { latitude: 0, longitude: 1} when moving north from { latitude: 1, longitude: 2 }', () => {
      const currentPosition = { latitude: 1, longitude: 1 };
      const actual = getPositionAfterMove(currentPosition, 'n');
      expect(actual).toMatchObject(
        {
          ok: true,
          coords: { latitude: 0, longitude: 1 }
        });
    });

    it('should return { latitude: 2, longitude: 1} when moving south from { latitude: 1, longitude: 2 }', () => {
      const currentPosition = { latitude: 1, longitude: 1 };
      const actual = getPositionAfterMove(currentPosition, 's');
      expect(actual).toMatchObject(
        {
          ok: true,
          coords: { latitude: 2, longitude: 1 }
        });
    });


  });

});
