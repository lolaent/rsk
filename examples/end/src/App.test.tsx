import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders correct title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Norwich Loos/i);
  expect(linkElement).toBeInTheDocument();
});
