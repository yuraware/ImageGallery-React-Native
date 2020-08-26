/**
 * @format
 */

import 'react-native';
import React from 'react';
import PhotoList from '../src/components/PhotoList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-navigation/native', () => { createStackNavigator: {} });
jest.mock('@react-navigation/stack', () => { BaseButton: {} });

test('PhotoList renders correctly', () => {
  const list = renderer.create(<PhotoList photos={[]} navigation={{navigate:{}}} />).toJSON();
  expect(list).toMatchSnapshot();
});