import React from "react";
import Quote from "../../pages/quote";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});
