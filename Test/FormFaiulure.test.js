import React from 'react';
import renderer from 'react-test-renderer';
import 'react-native';
import FormFailure from "../Components/FormFailure";

it('renders correctly', () => {
  const tree = renderer.create(<FormFailure />).toJSON();
  expect(tree).toMatchSnapshot();
});