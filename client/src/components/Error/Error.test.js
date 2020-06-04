import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';

import Error from './Error';

it('renders without crashing', () => {
  render(<Error message={''} />)
});

it('renders content of message prop', () => {
  const { getByTestId } = render(<Error message={'oops'} />);
  expect(getByTestId('error-container')).toHaveTextContent('oops');
});