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
            <li>
              Average Asset Value :
              {Math.round(finalresponse.averageAssetsValue)}
            </li>
            <li>Pre Approval : {finalresponse.preAssessment}%</li>
          </ul>
        </div>

        <div className="flex-none pt-2.5 pr-2.5 pl-1">
          <button
            type="button"
            className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Result;
