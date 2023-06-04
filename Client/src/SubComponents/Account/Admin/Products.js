import React, { useContext, useState } from "react";
import { DataContext } from "../../../Context/DataContext";
import AItem from "./AItem";

const Products = () => {
  const [data, setData] = useContext(DataContext);
  const [input, setInput] = useState("");
  return (
    <div className="py-5 px-5 md:px-10 w-full">
      <h1 className="text-center text-2xl md:text-3xl mb-3 font-bold">
        All Products
      </h1>
      <input
        type="text"
        className="w-full bg-gray-100 text-md lg:text-lg p-3 my-5 outline-none"
        placeholder="Search by Name or Id"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-5 lg:gap-10 px-5 sm:px-8">
        {data
          .filter((d) => {
            if (!input) {
              return d;
            } else {
              if (
                d.name.toLowerCase().includes(input.toLowerCase()) ||
                d._id.toLowerCase().includes(input.toLowerCase())
              ) {
                return d;
              }
            }
          })
          .map((d) => (
            <AItem
              id={d._id}
              img={process.env.REACT_APP_PATH + d.imgs[0]}
              name={d.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
