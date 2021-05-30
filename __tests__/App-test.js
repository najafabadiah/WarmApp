/**
 * A mock of the firebase node modules is required
 */

import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

jest.mock('../node_modules/firebase')

it('renders correctly', () => {
  renderer.create(<App />);
});
