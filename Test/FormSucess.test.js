import React from "react";
import renderer from "react-test-renderer";
import "react-native";
import FormSuccess from "../Components/FormSuccess";

it("renders correctly", () => {
  const tree = renderer.create(<FormSuccess />).toJSON();
  expect(tree).toMatchSnapshot();
});
