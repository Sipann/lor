import React from 'react';

function Result ({ result }) {

  return (
    <div
      data-testid="result-container">
      {result}
    </div>
  )
}

export default Result;