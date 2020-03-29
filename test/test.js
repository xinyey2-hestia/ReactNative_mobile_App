import React from 'react';
import FollowingScreen from '../components/Following';

const fetch = require('node-fetch');
import renderer from 'react-test-renderer';

import FollowerScreen from '../components/Follower';
import RepoScreen from '../Repo';
import App from '../App';
import ProfileScreen from '../Repo';
import {api} from './api';

describe('testing api', () => {
 beforeEach(() => {
    fetch.resetMocks()
  })




it('renders correctly', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toBeTruthy();
})

it('renders correctly', () => {
  const tree = renderer.create(<RepoScreen />).toJSON();
  expect(tree).toBeTruthy();
})

it(' Repo renders correctly', () => {
  const tree = renderer.create(<RepoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
})

it(' Home renders correctly', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
})

it(' APP renders correctly', () => {
  const tree = renderer.create(<aPP />).toJSON();
  expect(tree).toBeTruthy();
})

it(' APP renders correctly', () => {
  const tree = renderer.create(<aPP />).toJSON();
  expect(tree).toMatchSnapshot();
})


it('renders correctly', () => {
  const tree = renderer.create(<FollowingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders correctly', () => {
  const tree = renderer.create(<FollowerScreen />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders without crashing', () => {
 const rendered = renderer.create(<FollowingScreen />).toJSON();
  expect(rendered).toBeTruthy();
})

it('renders without crashing', () => {
 const rendered = renderer.create(<FollowerScreen />).toJSON();
  expect(rendered).toBeTruthy();
})

});
