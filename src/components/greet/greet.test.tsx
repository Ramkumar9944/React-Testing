import React from "react";
import { render, screen } from "@testing-library/react";
import Greet from "./greet";

const name = "Ram";

describe("Testing Greet Component", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("Greet renders with name correctly", () => {
    render(<Greet name={name} />);
    const textElement = screen.getByText(`Hello ${name}`);
    expect(textElement).toBeInTheDocument();
  });
});
