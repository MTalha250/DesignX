import React from "react";

const Description = ({ data }) => {
  return (
    <div className="mb-10 w-full flex justify-center items-center">
      <div className="py-6 px-3 sm:p-10 w-[95%] sm:w-[90%] border border-gray-500 min-h-[30vh]">
        {data?.description}
      </div>
    </div>
  );
};

export default Description;
