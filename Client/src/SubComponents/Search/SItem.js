import React from "react";

const SItem = (props) => {
  return (
    <div className="p-2 w-full flex border-b">
      <div className="w-1/4 sm:w-[15%] md:w-1/6">
        <img src={props.img} alt="" className="w-full h-full" />
      </div>
      <p className="mx-3 text-sm sm:text-base">{props.name}</p>
    </div>
  );
};

export default SItem;
