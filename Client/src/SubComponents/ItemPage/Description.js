import React from "react";

const Description = ({ data }) => {
  return (
    <div className="leading-7 tracking-wider py-6 px-3 md:p-10 w-full border border-gray-500 min-h-[30vh] whitespace-pre-line">
      <p>{data?.description}</p>
      {data?.design && (
        <p className="my-5">
          <span className="font-bold">Design:</span> {data?.design}
        </p>
      )}
      {data?.versatility && (
        <p className="my-5">
          <span className="font-bold">Versatility:</span> {data?.versatility}
        </p>
      )}
      {data?.functionality && (
        <p className="my-5">
          <span className="font-bold">Functionality:</span>{" "}
          {data?.functionality}
        </p>
      )}
      {data?.features && (
        <p className="flex flex-col my-5">
          <span className="font-bold">Features:</span>
          <span>{data?.features.replace(/\\n/g, "\n")}</span>
        </p>
      )}
      {data?.dimensions && (
        <p className="my-5">
          <span className="font-bold">Dimensions:</span>{" "}
          {data?.dimensions.replace(/\\n/g, "\n")}
        </p>
      )}
    </div>
  );
};

export default Description;
