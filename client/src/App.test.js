import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


it('renders without crashing', () => {
  render(<App />);
});

it('renders PlayGround component', () => {
  const { getByTestId } = render(<App />);
  const playGround = getByTestId('playground-container');
  const result = getByTestId('result-container');
  const errorComp = getByTestId('error-container');
  expect(playGround).toBeInTheDocument();
  expect(result).toBeInTheDocument();
  expect(errorComp).toBeInTheDocument();
});
