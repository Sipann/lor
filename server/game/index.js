'use strict';

const fallsOutOfMap = require('./fallsOutOfMap');
const findFrodo = require('./findFrodo');
const getPositionAfterMove = require('./getPositionAfterMove');
const isEatenByOrc = require('./isEatenByOrc');
const mountDoom = require('./mountDoom');

const { errorMessages, results, values } = require('./constants');


const playGame = (input, map) => {
  try {

    if (!input.length) {
      throw new Error(errorMessages.frodoDidNotMove.payload);
    }

    let position = findFrodo(map);
    if (position.latitude === null || position.longitude === null) {
      throw new Error(errorMessages.frodoIsNotOnMap.payload);
    }


    for (let move of input) {
      const action = getPositionAfterMove(position, move);
      if (!action.ok) throw new Error(errorMessages.invalidInput.payload);
      position = action.coords;

      if (fallsOutOfMap(position, map)) {
        return results.fallen;
      }
      else if (isEatenByOrc(position, map)) {
        return results.eaten;
      }
      else if (mountDoom(position, map)) {
        return results.win;
      }
    }

    if (map[position.latitude][position.longitude] === values.frodo) {
      return results.back;
    }

    return results.nothing;

  } catch (error) {

    if (error.message === errorMessages.frodoIsNotOnMap.payload) {
      return errorMessages.frodoIsNotOnMap;
    }
    else if (error.message === errorMessages.invalidInput.payload) {
      return errorMessages.invalidInput;
    }
    else if (error.message === errorMessages.frodoDidNotMove.payload) {
      return errorMessages.frodoDidNotMove;
    }
    else {
      return errorMessages.somethingWrongHappened;
    }
  }

};

module.exports = playGame;
