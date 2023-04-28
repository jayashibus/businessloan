import React from "react";

const Loading = () => {
  return (
    <div className="mt-5 bg-white shadow cursor-pointer rounded-xl">
      <div className="flex">
        <div className="flex-1 py-5 pl-5 overflow-hidden">
          <div className="flex-1 py-5 pl-5 overflow-hidden">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span
                data-testid="custom-id"
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >
                Loading...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
