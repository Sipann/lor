'use strict';

const errorMessages = {
  frodoDidNotMove: {
    status: 'catch',
    payload: 'How do you expect to find Mount Doom by standing still?',
  },
  frodoIsNotOnMap: {
    status: 'catch',
    payload: 'Frodo is nowhere to be seen. He must be wearing the ring.',
  },
  invalidInput: {
    status: 'catch',
    payload: 'Somehow you managed to enter an invalid direction.',
  },
  somethingWrongHappened: {
    status: 'catch',
    payload: 'Sorry, something wrong happened.',
  },
};

const moves = {
  east: 'e',
  west: 'w',
  north: 'n',
  south: 's',
};

const results = {
  back: {
    status: 'back',
    payload: 'Well, Frodo is back to where he started',
  },
  eaten: {
    status: 'eaten',
    payload: 'Oh no! Frodo has been eaten by an orc!',
  },
  fallen: {
    status: 'fallen',
    payload: 'Oh no! Frodo fell out of the map!',
  },
  nothing: {
    status: 'nothing',
    payload: 'Oh oh... There is nothing out there.',
  },
  win: {
    status: 'win',
    payload: 'Yeah! Frodo got to the Mount Doom!',
  },
};

const values = {
  doom: 'D',
  empty: '-',
  frodo: 'F',
  orc: 'O',
};

module.exports = {
  errorMessages,
  moves,
  results,
  values,
};