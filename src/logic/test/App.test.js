import React from "react";
import App from "../../components/App";
import renderer from "react-test-renderer";

it("If it renders correctly", () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
