import React from "react";

const Result = ({ finalresponse }) => {
  return (
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
            <li>Business Name : {finalresponse.businessName}</li>
            <li>Year Established :{finalresponse.yearEstablished}</li>
            <li>Summary of Profit/Loss :{finalresponse.profitOrLossSum}</li>
            <li>Pre Approval : {finalresponse.preAssessment}%</li>
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
              <path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3"></path>
              <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
