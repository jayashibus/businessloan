import React, { useState } from "react";

const LoanFormYellow = () => {
  const [response, setResponse] = useState(null);
  const [finalresponse, setFinalresponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    businessName: "",
    provider: "",
    loanAmount: "",
    yearEstablished: "",
  });

  // const [reviewData, setReviewData] = useState({
  //   balanceSheet: [],
  //   businessName: "",
  //   yearEstablished: "",
  //   loanAmount: "",
  // });

  const currentYear = new Date().getFullYear();
  const yearRange = 10; // Change this to adjust the range of years

  const yearOptions = [];
  for (let i = currentYear; i >= currentYear - yearRange; i--) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function formResetHandler(event) {
    event.preventDefault();
    setFormData({
      businessName: "",
      provider: "",
      loanAmount: "",
      yearEstablished: "",
    });

    setResponse(null);
    setFinalresponse(null);
    setErrors({});
  }

  const validateForm = (formData) => {
    const { businessName, yearEstablished, loanAmount, provider } = formData;
    let errorMessage = {};

    if (!provider) {
      errorMessage.provider = "Provider is required.";
    }
    if (!businessName) {
      errorMessage.businessName = "Business Name is required.";
    }
    if (!yearEstablished) {
      errorMessage.yearEstablished = "Year field required.";
    }
    if (!loanAmount) {
      errorMessage.loanAmount = "Loan Amount is required.";
    }

    return errorMessage;
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const errorMessage = validateForm(formData);

    if (Object.keys(errorMessage).length === 0) {
      setErrors({});
      // Handle form submission
      setIsLoading(true);

      try {
        const response = await fetch(
          "http://localhost:5032/api/balance-sheet",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();
        setResponse(data);

        // const { balanceSheet, businessName, yearEstablished, loanAmount } = data;
        // setReviewData({
        //   balanceSheet,
        //   businessName,
        //   yearEstablished,
        //   loanAmount,
        // });

        const response1 = await fetch(
          "http://localhost:5032/api/loan-application",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const data1 = await response1.json();
        setFinalresponse(data1);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(errorMessage);
    }
  };
  return (
    <div>
      <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
        <div className="flex h-screen bg-yellow-400">
          <div className="m-auto">
            <div>
              <div className="mt-5 bg-white rounded-lg shadow">
                <div className="flex">
                  <div className="flex-1 py-5 pl-5 overflow-hidden">
                    <h1 className="inline text-2xl font-semibold leading-none">
                      Loan Request Form
                    </h1>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <input
                    placeholder="Business Name"
                    name="businessName"
                    onChange={handleInputChange}
                    disabled={response ? "disabled" : ""}
                    value={formData.businessName}
                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 "
                  />
                  {errors.businessName && (
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors.businessName}
                    </span>
                  )}

                  <input
                    type="number"
                    name="loanAmount"
                    placeholder="Loan Amount"
                    disabled={response ? "disabled" : ""}
                    onChange={handleInputChange}
                    value={formData.loanAmount}
                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                  {errors.loanAmount && (
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors.loanAmount}
                    </span>
                  )}

                  <div className="flex">
                    <div className="flex-grow w-1/4 pr-2">
                      <select
                        name="yearEstablished"
                        onChange={handleInputChange}
                        id="yearEstablished"
                        value={formData.yearEstablished}
                        defaultValue={response ? formData.yearEstablished : ""}
                        disabled={response ? "disabled" : ""}
                        className=" text-black placeholder-gray-600 w-full px-4 py-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      >
                        <option value="">Year Started </option>
                        {yearOptions}
                      </select>
                      {errors.yearEstablished && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          {errors.yearEstablished}
                        </span>
                      )}
                    </div>
                    <div className="flex-grow w-1/4 pr-2">
                      <select
                        name="provider"
                        onChange={handleInputChange}
                        id="loanprovider"
                        value={formData.provider}
                        defaultValue={response ? formData.provider : ""}
                        disabled={response ? "disabled" : ""}
                        className=" text-black placeholder-gray-600 w-full px-4 py-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      >
                        <option value="">Choose a Provider</option>
                        <option value="Xero">Xero</option>
                        <option value="MYOB">MYOB</option>
                      </select>
                      {errors.provider && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          {errors.provider}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row-reverse p-3">
                  <div className="flex-initial pl-3">
                    <button
                      type="button"
                      className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                          opacity=".3"
                        ></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                      </svg>
                      {!response && (
                        <span className="pl-2 mx-1" onClick={formSubmitHandler}>
                          Submit Application
                        </span>
                      )}
                      {response && (
                        <span className="pl-2 mx-1" onClick={formResetHandler}>
                          Reset
                        </span>
                      )}
                      {/* {!response && (
                        <span className="pl-2 mx-1" onClick={formSubmitHandler}>
                          Request Balance Sheet
                        </span>
                      )}
                      {response && (
                        <span className="pl-2 mx-1" onClick={formReviewHandler}>
                          Review
                        </span>
                      )} */}
                    </button>
                  </div>
                </div>
              </div>

              {isLoading && (
                <div className="mt-5 bg-white shadow cursor-pointer rounded-xl">
                  <div className="flex">
                    <div className="flex-1 py-5 pl-5 overflow-hidden">
                      <div className="flex-1 py-5 pl-5 overflow-hidden">
                        <div
                          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
                          role="status"
                        >
                          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {finalresponse && (
                <div className="mt-5 bg-white shadow cursor-pointer rounded-xl">
                  <div className="flex">
                    <div className="flex-1 py-5 pl-5 overflow-hidden">
                      <div className="flex-1 py-5 pl-5 overflow-hidden">
                        <h1 className="inline text-2xl font-semibold leading-none">
                          Outcome
                        </h1>
                      </div>
                      <ul>
                        <li className="text-xs text-gray-600 uppercase "></li>
                        <li>
                          Business Name : {finalresponse.decision.businessName}
                        </li>
                        <li>
                          Year Established :
                          {finalresponse.decision.yearEstablished}
                        </li>
                        <li>
                          Summary of Profit/Loss :
                          {finalresponse.decision.profitOrLossSum}
                        </li>
                        <li>
                          Pre Approval : {finalresponse.decision.preAssessment}%
                        </li>
                      </ul>
                    </div>

                    <div className="flex-none pt-2.5 pr-2.5 pl-1">
                      <button
                        type="button"
                        className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M5 18.08V19h.92l9.06-9.06-.92-.92z"
                            opacity=".3"
                          ></path>
                          <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanFormYellow;
