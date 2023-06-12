import React from "react";
import { Link } from "react-router-dom";
const Showcase = ({ data }) => {
  return (
    <div className="my-5 px-10">
      <h1 className="text-4xl text-center font-bold">Showcase</h1>
      <div className="grid grid-cols-2 gap-10">
        {data?.map((d) => (
          <Link to={`/showcase/${d._id}`} className="p-10">
            <img src={process.env.REACT_APP_PATH + d.imgs[0]} alt="" />
            <p className="text-3xl font-bold text-center">{d.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
