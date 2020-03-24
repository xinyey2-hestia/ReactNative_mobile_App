import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import { AsyncStorage } from 'react-native';
import ProfileScreen from '../Home';
import RepoScreen from '../Repo';
import FollowerScreen from '../components/Follower';
import FollowingScreen from '../components/Following';

// Test case will run a new empty AsyncStorage, thus can prove that
// every first time, the app communicates with API.
test('My profile storage is working', async () => {
  const data = await AsyncStorage.getItem('cs242HW');
  expect(data).toBe(null);
});

test('My repo storage is working', async () => {
  const data = await AsyncStorage.getItem('cs242HWRepos');
  expect(data).toBe(null);
});

test('My follower storage is working', async () => {
  const data = await AsyncStorage.getItem('cs242HWFollowers');
  expect(data).toBe(null);
});

test('My following storage is working', async () => {
  const data = await AsyncStorage.getItem('cs242HWFollowing');
  expect(data).toBe(null);
});

test('Profile renders correctly', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Get number of repo correctly', async () => {
    let profile = renderer.create(<ProfileScreen />).getInstance();
    profile._retrieveData('cs242HW');
    expect(profile.state.data.repo).not.toBe(null);
});

test('Get number of followers correctly', async () => {
    let profile = renderer.create(<ProfileScreen />).getInstance();
    profile._retrieveData('cs242HW');
    expect(profile.state.data.followers).not.toBe(null);
});

test('Get number of following correctly', async () => {
    let profile = renderer.create(<ProfileScreen />).getInstance();
    profile._retrieveData('cs242HW');
    expect(profile.state.data.following).not.toBe(null);
});

test('Profile refresh works correctly', async () => {
    let profile = renderer.create(<ProfileScreen />).getInstance();
    profile._handleRefresh();
    expect(profile.state.data).not.toBe(null);
});

// test('Repo renders correctly', () => {
//   const tree = renderer.create(<RepoScreen />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

test('Follower renders correctly', () => {
  const tree = renderer.create(<FollowerScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Followers refresh works correctly', async () => {
    let followers = renderer.create(<FollowerScreen />).getInstance();
    followers._handlePress();
    expect(followers.state.data).not.toBe(null);
});

test('Following renders correctly', () => {
  const tree = renderer.create(<FollowingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Following refresh works correctly', async () => {
    let following = renderer.create(<FollowingScreen />).getInstance();
    following._handlePress();
    expect(following.state.data).not.toBe(null);
});
