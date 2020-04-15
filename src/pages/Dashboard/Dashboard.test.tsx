import React from "react";
import Dashboard from "./Dashboard";
import { renderWithProviders } from "../../../__tests__/helpers/renderWithProviders";
import { fireEvent } from "@testing-library/react";

test("renders toggle theme button", () => {
  const { getByText } = renderWithProviders(<Dashboard />);
  const buttonElement = getByText(/Toggle data/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
