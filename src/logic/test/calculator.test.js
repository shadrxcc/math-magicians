import React from "react";
import Calculator from "../../pages/calculator";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const calculator = renderer.create(<Calculator />).toJSON();
  expect(calculator).toMatchSnapshot();
});
