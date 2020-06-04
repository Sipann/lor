import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';

import Result from './Result';


it('renders without crashing', () => {
  render(<Result result={'playing'} />)
});

it('renders content of result prop', () => {
  const { getByTestId } = render(<Result result={'playing'} />);
  expect(getByTestId('result-container')).toHaveTextContent('playing');
});