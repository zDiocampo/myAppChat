import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../../pages/homepage";

test("renders homepage successfully", async () => {
  render(<Homepage />, { wrapper: BrowserRouter });

  // verify page content for default route
  expect(
    screen.getByRole("button", {
      name: /ENTER/i,
    })
  ).toBeInTheDocument();
});

test("expect to stay on page when user types empty string or only space", async () => {
  render(<Homepage />, { wrapper: BrowserRouter });

  userEvent.type(screen.getByTestId("home-button"), " ");

  expect(
    screen.getByRole("button", {
      name: /ENTER/i,
    })
  ).toBeInTheDocument();
});
