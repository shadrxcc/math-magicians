import React from "react";
import Button from "../../components/button";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const btn = renderer.create(<Button />).toJSON();
  expect(btn).toMatchSnapshot();
});
