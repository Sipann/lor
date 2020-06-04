import React, { useState } from 'react';

import Error from './components/Error/Error';
import PlayGround from './components/PlayGround/PlayGround';
import Result from './components/Result/Result';

import apiClientService from './services/api-client-services';

import './App.css';

function App () {

  const [error, setError] = useState('');
  const [result, setResult] = useState('playing...');

  const sendPlayerInput = async (e, playerInput) => {
    e.preventDefault();
    setError('');
    try {
      const result = await apiClientService.play(playerInput);
      setResult(result.payload);
    } catch (error) {
      setError('Oops... It seems we have a little problem.');
    }
  };

  return (
    <div className="App">
      <Result result={result} />
      <PlayGround
        resetResult={() => setResult('playing...')}
        sendPlayerInput={(e, playerInput) => sendPlayerInput(e, playerInput)} />
      <Error message={error} />
    </div>
  );
}

export default App;