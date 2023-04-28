import { render } from "@testing-library/react";
import Result from "./Result";

describe("Result component", () => {
  it("should display the correct outcome details", () => {
    const finalresponse = {
      businessName: "Test Business",
      yearEstablished: 2021,
      profitOrLossSum: "$1000",
      preAssessment: 90,
    };

    const { getByText } = render(<Result finalresponse={finalresponse} />);

    expect(getByText("Outcome")).toBeInTheDocument();
    expect(getByText("Business Name : Test Business")).toBeInTheDocument();
    expect(getByText("Year Established :2021")).toBeInTheDocument();
    expect(getByText("Summary of Profit/Loss :$1000")).toBeInTheDocument();
    expect(getByText("Pre Approval : 90%")).toBeInTheDocument();
  });
});
