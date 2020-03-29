import React from 'react';
import FollowerScreen from '../components/Follower';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
 const rendered = renderer.create(<FollowerScreen />).toJSON();
  expect(rendered.length).tobe(1);
});
