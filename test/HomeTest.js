import React from 'react';
import ProfileScreen from '../Home';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ProfileScreen/>).toJSON();
  expect(tree.length).not.toBe(2);
});