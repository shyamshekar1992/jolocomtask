import React from 'react';
import renderer from 'react-test-renderer';
import 'react-native';
import FormData from "../Components/FormData";

it('renders correctly', () => {
  const tree = renderer.create(<FormData />).toJSON();
  expect(tree).toMatchSnapshot();
});