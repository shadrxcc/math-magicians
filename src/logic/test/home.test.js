import React from "react";
import Home from "../../pages/home";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
