import React from "react";
import Navbar from "../../pages/navbar";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const navbar = renderer.create(<Navbar />).toJSON();
  expect(navbar).toMatchSnapshot();
});
