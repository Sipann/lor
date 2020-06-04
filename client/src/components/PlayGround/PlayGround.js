import React, { useState } from 'react';
import classes from './PlayGround.module.css';

function PlayGround ({ resetResult, sendPlayerInput }) {

  const [playerInput, setPlayerInput] = useState([]);
  const [playerDirections, setPlayerDirections] = useState('');

  const addMove = move => {
    setPlayerInput(prevState => [...prevState, move.value]);
    setPlayerDirections(prevState => prevState + move.label + ' => ');
  };

  const resetPlayground = () => {
    resetResult();
    setPlayerInput([]);
    setPlayerDirections('');
  }

  const possibleMoves = [
    { value: 'n', label: 'North' },
    { value: 'e', label: 'East' },
    { value: 'w', label: 'West' },
    { value: 's', label: 'South' },
  ]

  const btnMoves = possibleMoves.map(move => (
    <div
      key={move.value}
      data-testid={move.value}
      onClick={() => addMove(move)}>{move.label}</div>
  ));



  return (
    <form onSubmit={(e) => sendPlayerInput(e, playerInput)}>
      <div
        data-testid="playground-container"
        className={classes.container}>
        <div className={classes.directionsContainer}>
          {btnMoves}
        </div>
        <pre data-testid="player-directions">Going: {playerDirections}</pre>
        <button
          className={classes.btnSubmit}
          disabled={!playerInput.length}
          type="submit">Play</button>
        <button
          className={classes.btnReset}
          type="button"
          onClick={resetPlayground}>Start Over</button>
      </div>
    </form>
  );
}

export default PlayGround;