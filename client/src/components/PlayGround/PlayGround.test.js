import React from 'react';
import { render, fireEvent, act, wait } from '@testing-library/react'
import '@testing-library/jest-dom';

import PlayGround from './PlayGround';

const mockedSendPlayerInput = jest.fn(() => { });
const mockedResetResult = jest.fn(() => { });


it('renders without crashing', () => {
  render(<PlayGround sendPlayerInput={mockedSendPlayerInput} />);
});


it('calls sendPlayerInput when player submits form', async () => {
  const { container } = render(<PlayGround sendPlayerInput={mockedSendPlayerInput} />);
  fireEvent.submit(container.querySelector('form'));
  expect(mockedSendPlayerInput).toHaveBeenCalled();
});


it('fill player input when player clicks on directions', () => {
  const { container, getByTestId } = render(<PlayGround sendPlayerInput={mockedSendPlayerInput} />);
  fireEvent.click(getByTestId('e'));
  expect(getByTestId('player-directions')).toHaveTextContent('Going: East =>');
  fireEvent.click(getByTestId('w'));
  expect(getByTestId('player-directions')).toHaveTextContent('Going: East => West =>');
  fireEvent.click(getByTestId('n'));
  expect(getByTestId('player-directions')).toHaveTextContent('Going: East => West => North =>');
  fireEvent.click(getByTestId('s'));
  expect(getByTestId('player-directions')).toHaveTextContent('Going: East => West => North => South =>');
});


it('empties player inputs when player clicks on "Start Over"', async () => {
  const { container, getByTestId } = render(
    <PlayGround
      resetResult={mockedResetResult}
      sendPlayerInput={mockedSendPlayerInput} />
  );
  expect(getByTestId('player-directions')).toHaveTextContent('Going:');
  fireEvent.click(getByTestId('e'));
  fireEvent.click(getByTestId('w'));
  fireEvent.click(container.querySelector('button[type="button"]'));
  expect(getByTestId('player-directions')).toHaveTextContent('Going:');
});