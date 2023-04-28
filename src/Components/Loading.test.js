import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  test("renders without crashing", () => {
    const { container } = render(<Loading />);
    expect(container).toBeInTheDocument();
  });

  test("renders the correct elements", () => {
    const { getByRole } = render(<Loading />);
    const loadingElement = getByRole("status");
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass("inline-block");
    // Add more assertions for child elements and their attributes
  });

  test('displays the "Loading..." text', () => {
    const { getByText } = render(<Loading />);
    const loadingText = getByText(/Loading\.\.\./i);
    expect(loadingText).toBeInTheDocument();

    // Add more assertions for the text styles and attributes
  });

  test("uses the correct CSS classes and animations", () => {
    const { getByRole } = render(<Loading />);
    const spinnerElement = getByRole("status");
    expect(spinnerElement).toHaveClass("animate-spin");
    expect(spinnerElement).toHaveClass(
      "motion-reduce:animate-[spin_1.5s_linear_infinite]"
    );
    // Add more assertions for the spinner styles and attributes
  });
});
