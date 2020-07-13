import React from "react";
import { render } from "@testing-library/react";
import LooList from "./LooList";
import { MemoryRouter } from "react-router-dom";

test("renders a list of loo links", () => {
  const loos = [
    {
      id: "test",
      name: "Test",
    },
  ];
  const { container } = render(<LooList loos={loos} />, {
    wrapper: MemoryRouter,
  });
  expect(container.firstChild).toMatchSnapshot();
  expect((() => ({ test: "me" }))()).toMatchInlineSnapshot(`
    Object {
      "test": "me",
    }
  `);
});
