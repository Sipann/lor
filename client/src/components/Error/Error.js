import React from 'react';

function Error ({ message }) {

  return (
    <div
      data-testid="error-container">
      {message}
    </div>
  )
}

export default Error;