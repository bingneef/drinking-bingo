import React from "react";
import BingoCard from "./BingoCard";
import { renderWithProviders } from "../../../__tests__/helpers/renderWithProviders";
import { fireEvent } from "@testing-library/react";

test("renders toggle theme button", () => {
  const { getByText } = renderWithProviders(<BingoCard />);
  const buttonElement = getByText(/Toggle data/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
