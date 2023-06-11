import React from "react";
import { Link, useParams } from "react-router-dom";

const SItem = (props) => {
  const params = useParams();

  return (
    <Link
      to={`/product/${props.id}`}
      className="p-2 w-full flex border-b"
      onClick={() => props.getInput("")}
    >
      <div className="shrink-0 w-1/4 sm:w-[15%] md:w-1/6">
        <img src={props.img} alt="" className="w-full h-full" />
      </div>
      <p className="mx-3 text-lg">{props.name}</p>
    </Link>
  );
};

export default SItem;
