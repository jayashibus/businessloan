import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import LoanForm from "./LoanForm";

describe("LoanForm", () => {
  it("should render the loan form with input fields", () => {
    const { getByPlaceholderText } = render(<LoanForm />);
    expect(getByPlaceholderText("Business Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Loan Amount")).toBeInTheDocument();
  });
});
